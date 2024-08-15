"use client"
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SiAirplayvideo } from "react-icons/si";
import { GiSpellBook } from "react-icons/gi";
import { TbUserStar } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";
import { GiTiedScroll } from "react-icons/gi";
import { useState,useEffect } from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: 'https://codequotient.com/blog/wp-content/uploads/2021/07/What-Does-An-Aspiring-Developer-Look-for-in-a-Job-in-2021.jpg' },
    { url: 'https://goodfind.solutions/wp-content/uploads/2018/03/start.jpg' },
    { url: 'https://www.hostingb2b.com/wp-content/uploads/2022/02/iso-certified-2.png' }
  ];

  const prevSlides = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); 

    return () => clearInterval(timer);
  }, []);

  const items = [
    {

      id: 1,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/56271709640690.jpg',
      heading: 'First Item',
      duration: 'Duration : xxx',

    },
    {
      id: 2,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/47951709537396.jpg',
      heading: 'Second Item',
      duration: 'Duration : xxx',
    },
    {
      id: 3,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/16131664434907.png',
      heading: 'Third Item',
      duration: 'Duration : xxx',
    },
    {
      id: 4,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/53441709538857.jpg',
      heading: 'Fourth Item',
      duration: 'Duration : xxx',
    },
    {

      id: 5,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/44391711600460.jpg',
      heading: 'First Item',
      duration: 'Duration : xxx',

    },
    {
      id: 6,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/77961709537283.jpg',
      heading: 'Second Item',
      duration: 'Duration : xxx',
    },
    {
      id: 7,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/36531687759960.jpg',
      heading: 'Third Item',
      duration: 'Duration : xxx',
    },
    {
      id: 8,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/88071709538712.jpg',
      heading: 'Fourth Item',
      duration: 'Duration : xxx',
    },
    {

      id: 9,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/54411709537328.jpg',
      heading: 'First Item',
      duration: 'Duration : xxx',

    },
    {
      id: 10,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/90481709537545.jpg',
      heading: 'Second Item',
      duration: 'Duration : xxx',
    },
    {
      id: 11,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/80351709537636.jpg',
      heading: 'Third Item',
      duration: 'Duration : xxx',
    },
    {
      id: 12,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/80241709537497.jpg',
      heading: 'Fourth Item',
      duration: 'Duration : xxx',
    },
    {

      id: 13,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/56271709640690.jpg',
      heading: 'First Item',
      duration: 'Duration : xxx',

    },
    {
      id: 14,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/47951709537396.jpg',
      heading: 'Second Item',
      duration: 'Duration : xxx',
    },
    {
      id: 15,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/16131664434907.png',
      heading: 'Third Item',
      duration: 'Duration : xxx',
    },
    {
      id: 16,
      imageUrl: 'https://broadwayinfosys.com/uploads/courses/53441709538857.jpg',
      heading: 'Fourth Item',
      duration: 'Duration : xxx',
    },
  ];
  return (
    <>
      <section>
  <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
    <div className="relative h-full group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-cover bg-center h-full w-full duration-300 bg-no-repeat"
      ></div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hidden group-hover:block"
        onClick={prevSlides}
      >
        <MdKeyboardArrowLeft size={40} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hidden group-hover:block"
        onClick={nextSlide}
      >
        <MdKeyboardArrowRight size={40} />
      </button>
    </div>
  </div>
</section>



      <section className="container mx-auto p-5 md:p-8 lg:p-10">
        <h3 className="border-b-2 border-black inline-block p-2 md:p-3 text-lg font-semibold">
          Popular Courses
        </h3>
        <div className="flex flex-wrap py-[20px] justify-between gap-5 md:gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              className="w-full sm:w-[48%] md:w-[42%] lg:w-[250px] group"
              key={item.id}
            >
              <div className="h-[150px] relative overflow-hidden rounded-lg shadow-lg">
                <img
                  className="h-full w-full object-cover"
                  src={item.imageUrl}
                  alt={item.heading}
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-slate-50 transition-colors duration-500 ease-in-out opacity-90"></div>
                <div className="absolute inset-0 flex justify-center items-center space-x-3 transition-all duration-700 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="font-bold">Learn More</h3>
                  <IoIosArrowForward size={20} />
                </div>
              </div>
              <h4 className="font-semibold py-2 text-sm mt-4 text-gray-800">
                {item.heading}
              </h4>
              <p className="text-sm text-gray-600">{item.duration}</p>
            </div>

          ))}
        </div>
      </section>

      <section className="container mx-auto py-10">
        <div className="text-center">
          <Link
            href="#"
            className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 px-6 py-3 inline-flex items-center justify-center font-semibold">
            View All Courses
            <IoIosArrowForward size={25} className="ml-2" />
          </Link>
        </div>

        <div className="text-xl font-bold text-center py-10 tracking-wide">
          <h1>Our Course Status</h1>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Take a glance at the status of our classes. Choose your course, let us know your preferred time, and we'll fit you into the appropriate schedule.
          </p>
        </div>
        <div className="flex justify-center space-x-10">
          <div className="my-[50px] w-[270px] h-[200px] bg-orange-400 text-white font-bold rounded-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <FaGoogleScholar size={40} />
            <h2 className="text-2xl py-[20px]">49</h2>
            <p className="flex items-center gap-1 text-lg">Running classes <FaArrowRight /></p>
          </div>
          <div className="my-[50px] w-[270px] h-[200px] bg-blue-400 text-white font-bold rounded-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <GiSpellBook size={50} />
            <h2 className="text-2xl py-[20px]">56</h2>
            <p className="flex items-center gap-1 text-lg">Upcoming classes <FaArrowRight /></p>
          </div>
          <div className="my-[50px] w-[270px] h-[200px] bg-yellow-300 text-white font-bold rounded-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <SiAirplayvideo size={40} />
            <h2 className="text-2xl py-[20px]">29</h2>
            <p className="flex items-center gap-1 text-lg">Enroll now <FaArrowRight /></p>
          </div>
        </div>

      </section>
      <section className="container mx-auto">
        <div className="text-center tracking-wide max-w-3xl mx-auto">
          <h1 className="font-semibold text-2xl py-10">Our Strength Our Assests</h1>
          <p>We not only offer career-oriented IT training in Nepal as per industry needs but also assist in successful job placements for deserving students and professionals.</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 justify-items-stretch items-stretch py-12 ">
          <div className="bg-blue-400 w-full h-[400px] relative">
            <div className="absolute  text-white bottom-8 px-4">
              <TbUserStar size={60} />
              <h1 className="text-6xl font-semibold py-6">300<sup>+</sup></h1>
              <span className="text-2xl font-semibold block trackin-[2px]">Precious And Happy </span>
              <span className="text-2xl font-semibold block tracking-[2px]">Clients</span>
            </div>
          </div>
          <div className=" w-full h-[400px]">
            <img src="https://st.depositphotos.com/1003098/3301/i/450/depositphotos_33013673-Male-Teacher-Assisting-Students-In-Computer-Class.jpg" className="h-full w-full object-cover" />
          </div>
          <div className="bg-teal-600 w-full h-[400px] relative">
            <div className="absolute  text-white bottom-8 px-4">
              <GiRibbonMedal size={60} />
              <h1 className="text-6xl font-semibold py-6"># 1</h1>
              <span className="text-xl font-semibold tracking-[2px] block">Professional IT Training </span>
              <span className="text-xl font-semibold tracking-[2px] block"> Institute in Nepal</span>
            </div>
          </div>
          <div className=" w-full h-[400px]">
            <img src="https://vuka.co/wp-content/uploads/2023/02/people-business-meeting-high-angle-scaled.jpg" className="h-full w-full object-cover" />
          </div>
          <div className="bg-orange-400 w-full h-[400px] relative">
            <div className="absolute  text-white bottom-8 px-4">
              <GiTiedScroll size={60} />
              <h1 className="text-6xl font-semibold py-6">10K<sup>+</sup></h1>
              <span className="text-xl font-semibold tracking-[2px] block">Student Certified and </span>
              <span className="text-xl font-semibold tracking-[2px] block"> Job Placement</span>
            </div>
          </div>
          <div className=" w-full h-[400px]">
            <img src="https://t3.ftcdn.net/jpg/03/54/24/46/360_F_354244675_qWcPrFAZUfbmyE6BqnJLs1HLdhwVlDES.jpg" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="shadow-lg rounded-lg flex justify-between">
          <div>

          </div>

        </div>
      </section>
      <section className="container mx-auto py-[50px]">
        <div className="shadow-md text-center  bg-gray-100 py-10">
          <h2 className=" text-lg font-medium py-[50px]">Our Precious Clients</h2>
          <p className="text-md pb-[100px]"><span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </span><br/><span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span><br/><span>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</span></p>
          
          <Link href="" className="inline-flex items-center  hover:text-orange-400">
  See more
  <FaCircleArrowRight size={20} className="ml-2" />
</Link>
        </div>
      </section>
    </>
  );
}
