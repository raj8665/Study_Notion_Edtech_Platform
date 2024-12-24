import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
  
      <div className = "flex flex-col md:flex-row gap-20 items-center">
          
          {/* left part */}
          <div className='w-[50%]'>
              <img src={Instructor}  alt="Instructor" className = "shadow-white shadow-[-1.3rem_-1rem_0_0]" />  
          </div>
          
          {/* right part */}
          <div className = "md:w-[50%] flex gap-10 flex-col">

          <div className='text-4xl font-semobold md:w-[50%]'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>
              <p className = "font-medium text-[16px] w-[80%] text-richblack-300">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love. </p>
              <div className='w-fit mx-auto'>
                  <CTAButton active={true} linkto={"/signup"}>
                      <div className="flex flex-row items-center gap-2">  Start Learning Today <FaArrowRight /> </div>
                  </CTAButton>
              </div>

          </div>

      </div>
   
  )}

export default InstructorSection