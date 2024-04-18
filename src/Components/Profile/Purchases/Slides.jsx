import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IMG from '../../../assets/E- education logo .png'

function Slides() {

  const cards = [
    {
      image: 'https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408661.jpg',
      title: 'Data Analyst',
      description: 'Collect, organize, and transform data to make informed decisions'
    },
    {
      image: 'https://st2.depositphotos.com/3591429/11322/i/450/depositphotos_113222948-stock-photo-people-discussing-ideas.jpg',
      title: 'Digital Marketer',
      description: 'Define and develop digital strategies to deliver business growth through online channels'
    },
    {
      image: 'https://www.betterteam.com/images/Support-Specialist-Job-Description.jpeg?crop=21:16,smart&width=420&dpr=2&format=pjpg&auto=webp&quality=85',
      title: 'IT Support Specialist',
      description: 'Evaluate and troubleshoot technology issues so equipment runs smoothly'
    },
    {
      image: 'https://epe.brightspotcdn.com/dims4/default/99fe146/2147483647/strip/true/crop/2000x1357+0+60/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F75%2Ffa%2F094c14d1492bba3f3e7171f34bcf%2F12142022-e-rate-cyber-security-firewall-technology-1356945261.jpg',
      title: 'Cybersecurity',
      description: 'Develop strategies to protect organizations from cyber-attacks and disruptions.'
    },
    {
      image: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png',
      title: 'Front-End Developer',
      description: 'Design and develop the look, feel, function, and user experience of a website'
    },
    {
      image: 'https://www.forbes.com/advisor/wp-content/uploads/2022/06/UX_designer.jpeg.jpg',
      title: 'UX Designer',
      description: 'Make digital and physical products easier and more enjoyable to use'
    },
    // Add more cards as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='p-10'>
     <div className="container mx-auto mt-5">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 h-96">
              <img className='' src={card.image} />
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-700 mt-2">{card.description}</p>
              <a
               
                class="text-sky-500  transition-all duration-300 group-hover:text-white cursor-pointer "
              >
                Explore &rarr;
              </a>
            </div>
          </div>
        ))}
      </Slider>

    </div>
    <div>
  <div class="flex h-screen items-center justify-center bg-blue-100 p-5">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
      <div>
        <img src={IMG} />
        <h1 class="mb-2 text-3xl font-bold "><span class="text-green-500">Try out different courses to see which one fits your needs</span> </h1>
        <p class="mb-6 ">Get a 7-day free trial that includes courses, Specializations, Projects, and Professional Certificates.

</p>
        <div class="flex justify-center space-x-5">
          <button class="flex w-full items-center justify-center gap-1 rounded-2xl bg-blue-500 p-5 py-3 font-semibold text-white hover:bg-blue-700">
            Learn More &rarr;
            
          </button>
         
        </div>
      </div>
      <div>
        <img src="https://intellipaat.com/academy/wp-content/uploads/2022/03/home-banner.png" alt="" class="md:size-96 size-72 rounded-full " />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Slides