package com.example.RegisterLogin.Service;


import com.example.RegisterLogin.Configuration.JwtTokenProvider;
import com.example.RegisterLogin.exceptions.UserException;
import com.example.RegisterLogin.modals.Account;
import com.example.RegisterLogin.modals.Education;
import com.example.RegisterLogin.modals.User;
import com.example.RegisterLogin.repository.AccountRepository;
import com.example.RegisterLogin.repository.EducationRepository;
import com.example.RegisterLogin.repository.UserRepository;
import com.example.RegisterLogin.response.AccountResponse;
import com.example.RegisterLogin.response.EducationResponse;
import com.example.RegisterLogin.response.MessageResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;


@Service
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private EducationRepository educationRepository;


    public UserServiceImplementation(UserRepository userRepository,JwtTokenProvider jwtTokenProvider) {

        this.userRepository=userRepository;
        this.jwtTokenProvider=jwtTokenProvider;

    }

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user=userRepository.findById(userId);

        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("user not found with id "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        System.out.println("user service");
        String email=jwtTokenProvider.getEmailFromJwtToken(jwt);

        System.out.println("email"+email);

        User user=userRepository.findByEmail(email);

        if(user==null) {
            throw new UserException("user not exist with email "+email);
        }
        System.out.println("email user"+user.getEmail());
        return user;
    }



    @Override
    public List<User> findAllUsers() {
        // TODO Auto-generated method stub
        return userRepository.findAllByOrderByCreatedAtDesc();
    }


    @Override
    public ResponseEntity<?> getAccount_Details(String email) {
        User UserDetails = userRepository.findByEmail(email);
        Account AccountDetails = new Account();
        long userAccID =UserDetails.getId();

        if(!accountRepository.existsByUserId(userAccID)){
            AccountDetails.setUser(UserDetails);
            AccountDetails.setUserEmail(UserDetails.getEmail());
            AccountDetails.setFullName(UserDetails.getFirstName()+UserDetails.getLastName());
            accountRepository.save(AccountDetails);
        }
        Account account =accountRepository.findByUserId(userAccID);
        AccountResponse accountResponse =new AccountResponse();
        accountResponse.setFullName(account.getFullName());
        accountResponse.setUserEmail(account.getUserEmail());
        accountResponse.setLocation(account.getLocation());
        accountResponse.setPhoneNumber(account.getPhoneNumber());
        return ResponseEntity.ok(accountResponse);
    }


    @Override
    public ResponseEntity<?> updateAccount_Details(String email,Account userAccount) {

        User currentUser = userRepository.findByEmail(email);
        long currentUserId = currentUser.getId();

        try {
            if (accountRepository.existsByUserId(currentUserId)) {

                Account currentAccountDetails = accountRepository.findByUserId(currentUserId);

                currentAccountDetails.setFullName(userAccount.getFullName());
                currentAccountDetails.setPhoneNumber(userAccount.getPhoneNumber());
                currentAccountDetails.setLocation(userAccount.getLocation());

                if(!accountRepository.existsByUserEmail(userAccount.getUserEmail())){
                    currentUser.setEmail(userAccount.getUserEmail());
                    currentAccountDetails.setUserEmail(userAccount.getUserEmail());

                }
                accountRepository.save(currentAccountDetails);
                userRepository.save(currentUser);
                return getAccount_Details(userAccount.getUserEmail());
            }
            else{
                return ResponseEntity.ok(new MessageResponse("Email already exists please enter new email ID"));
            }

        } catch (Exception e) {
            return ResponseEntity.ok(e);
        }
    }



    @Override
    public int generateSixDigitNumber() {
        Random random = new Random();
        int randomNumber = random.nextInt(900000) + 100000;
        return randomNumber;
    }

    @Override
    public ResponseEntity<?> updateEduction_Details(String email, Education userEducation) {
        User currentEduUser =userRepository.findByEmail(email);
        long currentEduUserId =currentEduUser.getId();
        try {
            if (educationRepository.existsByUserId(currentEduUserId ))
            {
                Education currentEduDetails = educationRepository.findByUserId(currentEduUserId);
                currentEduDetails.setNameOfInstitution(userEducation.getNameOfInstitution());
                currentEduDetails.setDegree(userEducation.getDegree());
                currentEduDetails.setStartMonth(userEducation.getStartMonth());
                currentEduDetails.setStartYear(userEducation.getStartYear());
                currentEduDetails.setGraduationMonth(userEducation.getGraduationMonth());
                currentEduDetails.setGraduationYear(userEducation.getGraduationYear());
                educationRepository.save(currentEduDetails);

            }else{
                Education currentEduDetailsNew = new Education();
                currentEduDetailsNew.setUser(currentEduUser);
                currentEduDetailsNew.setNameOfInstitution(userEducation.getNameOfInstitution());
                currentEduDetailsNew.setDegree(userEducation.getDegree());
                currentEduDetailsNew.setStartMonth(userEducation.getStartMonth());
                currentEduDetailsNew.setStartYear(userEducation.getStartYear());
                currentEduDetailsNew.setGraduationMonth(userEducation.getGraduationMonth());
                currentEduDetailsNew.setGraduationYear(userEducation.getGraduationYear());
                educationRepository.save(currentEduDetailsNew);


            }
            return getEducation_Details(email);
        }
        catch(Exception e){
            return ResponseEntity.ok(e);
        }


    }

    @Override
    public ResponseEntity<?> getEducation_Details(String email) {
        User UserEducationDetails = userRepository.findByEmail(email);
        long userEducationID =UserEducationDetails.getId();
        Education education = educationRepository.findByUserId(userEducationID);

        if(education != null){
            EducationResponse educationResponse = getEducationResponse(education);
            return ResponseEntity.ok(educationResponse);

        }
        else{
            MessageResponse messageResponse = new MessageResponse("Education Details are not updated ");
            return ResponseEntity.ok(messageResponse);
        }

    }

    private static @NotNull EducationResponse getEducationResponse(Education education) {
        EducationResponse educationResponse = new EducationResponse();
        educationResponse.setNameOfInstitution(education.getNameOfInstitution());
        educationResponse.setDegree(education.getDegree());
        educationResponse.setStartMonth(education.getStartMonth());
        educationResponse.setStartYear(education.getStartYear());
        educationResponse.setGraduationMonth(education.getGraduationMonth());
        educationResponse.setGraduationYear(education.getGraduationYear());
        return educationResponse;
    }

}



