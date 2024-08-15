"use client";
import Link from "next/link";
import React,{ useState,useRef,useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { TbBooks } from "react-icons/tb";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isCoursesVisible, setIsCoursesVisible] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleNavVisibility = () => setIsNavVisible(!isNavVisible);
  const toggleCoursesVisibility = () => setIsCoursesVisible(!isCoursesVisible);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);}

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsCoursesVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courses = [
    'Web Design / Front End Training',
    'C & C++ Programming Training',
    'Python / AI',
    'Full Stack Web Development',
    'Digital Marketing',
    'CISCO Certification',
    'Java Programming',
    'Mobile Apps',
    'Building Design & Construction',
    'Microsoft Dot Net',
    'PHP / Framework',
    'Graphics and Multimedia',
    'UI UX Designing Training'
  ];

  return (
    <>
      <header className="container mx-auto pt-5 text-md font-medium">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 md:space-x-10 border-b-gray-100 border-b-[3px] pb-[30px]">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="h-[50px] flex-shrink-0">
              <img
                className="h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/2560px-The_Simpsons_yellow_logo.svg.png"
                alt="Logo"
              />
            </div>
            <div className="md:hidden">
              <FiMenu size={25} onClick={toggleNavVisibility} />
            </div>
          </div>

          <div
            className="relative hidden md:flex items-center space-x-3"
            ref={triggerRef}
          >
            <FiMenu
              size={20}
              className="cursor-pointer"
              onClick={toggleCoursesVisibility}
            />
            <p
              className="text-gray-800 font-semibold cursor-pointer"
              onClick={toggleCoursesVisibility}
            >
              All Courses
            </p>
            <div
              ref={dropdownRef}
              className={`absolute z-20 font-light top-10 overflow-auto bg-white w-full sm:w-[400px] md:w-[400px] p-4 h-[500px] shadow-lg rounded-lg border border-gray-200 transition-opacity duration-300 ${isCoursesVisible ? 'block' : 'hidden'}`}
            >
              <ul className="course-list space-y-2">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  >
                    <Link href="" className="text-gray-700 hover:text-gray-500">
                      {course}
                    </Link>
                    <IoIosArrowForward size={20} className="text-gray-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative w-full md:w-[350px]">
      <input
        type="text"
        className="text-sm w-full p-2 pl-5 border border-gray-300 rounded-full focus:border-orange-400 focus:outline-none transition-all duration-300"
        placeholder="Search"
      />
      <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-500">
      <CiSearch size={20} />
      </button>
    </div>


    <div className="text-center md:text-right text-sm hidden md:block">
            <p>Inquire Hotline: xxxxxxxxx</p>
            <p>xxxxxxxxxx / xxxxxxxxxx</p>
          </div>

          <div className="mt-5 md:mt-0 hidden md:block">
            <Link href="feedback">
      <button
        className={`bg-orange-400 py-2 px-4 md:py-3 md:px-6 text-sm rounded-md text-white font-semibold w-full md:w-auto transition-transform duration-300 ease-in-out transform ${isClicked ? 'scale-110 shadow-2xl' : 'scale-100 shadow-md'}`}
        onClick={handleClick}
      >
        Feedback
      </button>
      </Link>
    </div>
  </div>

  <nav
  className={`p-4 border-b-[3px] border-b-gray-100 ${isNavVisible ? 'block' : 'hidden'} md:block`}
>
  <ul className="flex flex-col md:flex-row justify-end gap-5 md:gap-10 text-center">
    {['Home', 'Admissions', 'Online Classes', 'Contact', 'News', 'Blog'].map((item, index) => (
      <li
        key={index}
        className="relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow- hover:z-10"
      >
        <Link
          href=""
          className="block p-2 text-gray-800 hover:text-orange-400 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-400 rounded-md"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
</nav>



</header>

    </>
  );
}

export default Header;
