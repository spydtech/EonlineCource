package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.TicketRequest;
import com.Eonline.Education.exceptions.NotFoundException;
import com.Eonline.Education.exceptions.MandatoryFieldNotFoundException;
import com.Eonline.Education.modals.Payment;
import com.Eonline.Education.modals.Ticket;
import com.Eonline.Education.modals.Employee;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.TicketRepository;
import com.Eonline.Education.repository.EmployeeRepository;
import com.Eonline.Education.repository.PaymentRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.ApiResponse;
import com.Eonline.Education.response.TicketResponse;
import com.Eonline.Education.user.TicketStatus;
import com.Eonline.Education.user.TicketType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    TicketRepository chatSupportRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    OtpService otpService;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    PaymentRepository paymentRepository;
//user
public ApiResponse createChatSupport(TicketRequest chatSupport) {
    if (chatSupport == null) {
        throw new MandatoryFieldNotFoundException("TicketRequest cannot be null");
    }

    if (chatSupport.getUserName() == null || chatSupport.getUserName().trim().isEmpty()) {
        throw new MandatoryFieldNotFoundException("User name is required — must not be null or empty");
    }
    if (chatSupport.getEmailId() == null || chatSupport.getEmailId().trim().isEmpty()) {
        throw new MandatoryFieldNotFoundException("Email ID is required — must not be null or empty");
    }
    if (chatSupport.getContactNumber() == null || chatSupport.getContactNumber().trim().isEmpty()) {
        throw new MandatoryFieldNotFoundException("Contact number is required — must not be null or empty");
    }
    if (chatSupport.getTicketBody() == null || chatSupport.getTicketBody().trim().isEmpty()) {
        throw new MandatoryFieldNotFoundException("Ticket body is required — must not be null or empty");
    }
    if (chatSupport.getRequestTicketType() == null) {
        throw new MandatoryFieldNotFoundException("Request ticket type is required — must not be null or empty");
    }else{
        if (chatSupport.getRequestTicketType() == TicketType.TECHNICAL_ISSUE) {
            throw new MandatoryFieldNotFoundException("TECHNICAL_ISSUE is only available for trainers.");
        }
    }
    Ticket chat = new Ticket();
    chat.setUserName(chatSupport.getUserName());
    User user = userRepository.findByEmail(chatSupport.getEmailId());
    if (user == null) {
        throw new NotFoundException("User not found with email: " + chatSupport.getEmailId());
    }
    chat.setEmailId(chatSupport.getEmailId());
    chat.setContactNumber(chatSupport.getContactNumber());
    chat.setTicketBody(chatSupport.getTicketBody());
    chat.setRequestTicketType(chatSupport.getRequestTicketType());
    String ticketNo = otpService.generateTicketNo();
    chat.setTicketNo(ticketNo);
    chat.setTicketRaisedOn(LocalDate.now());
    if (chatSupport.getCompletionDate() != null) {
        chat.setCompletionDate(chatSupport.getCompletionDate());
    }
    if (chatSupport.getAssignTo() != null) {
        Employee employee = employeeRepository.findByEmail(chatSupport.getAssignTo());
        if (employee != null) {
            chat.setAssignTo(employee);
        }
    }
    if (chatSupport.getStatus() != null) {
        chat.setStatus(chatSupport.getStatus());
    }
    if (chatSupport.getPriority() != null) {
        chat.setPriority(chatSupport.getPriority());
    }
    if (chatSupport.getChannel() != null) {
        chat.setChannel(chatSupport.getChannel());
    }

    chatSupportRepository.save(chat);
    return new ApiResponse("Ticket Created Successfully", true, ticketToResponse(chat));
}


    @Override
    public List<TicketResponse> getAllTicketByUser(String jwt) {
        String userEmail = jwtTokenProvider.getEmailFromJwtToken(jwt);
        System.out.println(userEmail);
        List<Ticket> tickets = chatSupportRepository.findAllByEmailId(userEmail);
        return tickets.stream()
                .map(this::ticketToResponse)
                .toList();
    }

    @Override
    public TicketResponse getByTicket(String ticketNo) {
        Ticket ticket=chatSupportRepository.findByTicketNo(ticketNo);
        return ticketToResponse(ticket);
    }



    //admin
    @Override
    public List<TicketResponse> getAll() {
        List<Ticket> tickets = chatSupportRepository.findAll();
        return tickets.stream()
                .map(this::ticketToResponse)
                .toList();
    }

    @Override
    public TicketResponse ticketUpdate(String ticketNo,TicketRequest chatSupport) {
        Ticket chat = chatSupportRepository.findByTicketNo(ticketNo);
        if (chat==null) {
            throw new NotFoundException("Ticket not found with ticketNo: " + ticketNo);
        }
        if (chatSupport.getUserName() != null) {
            chat.setUserName(chatSupport.getUserName());
        }
        if (chatSupport.getTicketBody() != null) {
            chat.setTicketBody(chatSupport.getTicketBody());
        }
        if (chatSupport.getRequestTicketType() != null) {
            chat.setRequestTicketType(chatSupport.getRequestTicketType());
        }
        if (chatSupport.getPriority() != null) {
            chat.setPriority(chatSupport.getPriority());
        }
        if (chatSupport.getStatus() != null) {
            chat.setStatus(chatSupport.getStatus());
        }
        if (chatSupport.getAssignTo() != null) {
            Employee employee = employeeRepository.findByEmail(chatSupport.getAssignTo());
            if (employee != null) {
                chat.setAssignTo(employee);
            }
        }
        if (chatSupport.getCompletionDate() != null) {
            chat.setCompletionDate(chatSupport.getCompletionDate());
        }
        Ticket updatedTicket = chatSupportRepository.save(chat);
        return ticketToResponse(updatedTicket);
    }


    @Override
    public TicketResponse statusUpdate(String ticketNo, TicketStatus ticketStatus) {
        Ticket ticket=chatSupportRepository.findByTicketNo(ticketNo);
        if(ticketStatus.equals(TicketStatus.CLOSED)) {
            ticket.setStatus(ticketStatus);
            ticket.setCompletionDate(LocalDate.now());
        }else{
            ticket.setStatus(ticketStatus);
        }
        chatSupportRepository.save(ticket);
        return ticketToResponse(ticket);
    }




    private TicketResponse ticketToResponse(Ticket ticket) {
        TicketResponse response = new TicketResponse();
        response.setId(ticket.getId());
        response.setTicketNo(ticket.getTicketNo());
        response.setTicketBody(ticket.getTicketBody());
        response.setContactNumber(ticket.getContactNumber());
        response.setRequestTicketType(ticket.getRequestTicketType());
        response.setTicketRaisedOn(ticket.getTicketRaisedOn());
        if(ticket.getCompletionDate()!=null) {
            response.setCompletionDate(ticket.getCompletionDate());
        }
        if(ticket.getPriority()!=null) {
            response.setPriority(ticket.getPriority());
        }
        if(ticket.getStatus()!=null) {
            response.setStatus(ticket.getStatus());
        }
        if(ticket.getChannel()!=null) {
            response.setChannel(ticket.getChannel());
        }
        if (ticket.getAssignTo() != null) {
            if (ticket.getAssignTo().getLastName() != null) {
                response.setEmployeeName(ticket.getAssignTo().getFirstName() + " " + ticket.getAssignTo().getLastName());
            } else {
                response.setEmployeeName(ticket.getAssignTo().getFirstName());
            }
            response.setEmployeeEmail(ticket.getAssignTo().getEmail());
            response.setEmployeeId(ticket.getAssignTo().getEmployeeId());
        }
        response.setUserName(ticket.getUserName());
        response.setEmailId(ticket.getEmailId());
        List<Payment> payment=paymentRepository.findAllByUserEmail(ticket.getEmailId());
        if(!payment.isEmpty()) {
            response.setUserId(payment.get(0).getUserId());
        }
        return response;
    }

}
