import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import knowYourProgress from '../../../assets/Images/Know_your_progress.png'
import compareWithOthers from '../../../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl font-semibold text-center'>
          Your Swiss Knife for
          <HighlightText text={"learning any language"}/>
        </div>

        <div className='text-center mx-auto text-richblack-500 text-base font-medium w-[70%]'>
          Using spin making learning multiple languages easy with 20+ languages realistic voice-over,
          progress tracking,custom schedule and more
        </div>

        <div className='flex flex-row items-center justify-center -mt-8'>
          <img src={knowYourProgress} alt='Know Your Progress' className='object-contain -mr-32'/>
          <img src={compareWithOthers} alt='Compare with others' className='object-contain'/>
          <img src={plan_your_lesson} alt='Plan Your Lesson' className='object-contain -ml-36'/>
        </div>
        <div className='w-fit'>
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection