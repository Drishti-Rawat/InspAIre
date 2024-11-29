'use client'
import React from 'react'
import Image_selection from './_components/Image_selection'
import Room_type from './_components/Room_type'
import Design_type from './_components/Design_type'
import AdditionalRequirments from './_components/AdditionalRequirments'
import { Button } from '@/components/ui/button'

const CreateNewpage = () => {

  const onHandleInputChange = (value,fieldname) => {}
  return (
    <div className='min-h-screen'>
      <h2 className='text-4xl font-bold text-primary text-center'>Experince The Magic of AI Remodeling</h2>
      <p className='text-center text-gray-500'>Transform any room with a click of a button. Select a space and let our AI remodel it!</p>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10  gap-10'>
        {/* image upload section */}
        <Image_selection selectedImage={(value) => onHandleInputChange(value,'image')} />

        {/* form section */}

        <div className=''>
          {/* room type */}
          <Room_type selectedRoomType={(value) => onHandleInputChange(value,'room_type')} />

          {/* Design Type */}
          <Design_type selectedDesignType={(value) => onHandleInputChange(value,'design_type')} />


          {/* Additional requirment textarea(optional) */}
          <AdditionalRequirments additionalRequirmentInput={(value) => onHandleInputChange(value,'additional_requirment')} />

          {/* button to generate imaeg */}
          <Button className='w-full mt-5 '>Generate Image</Button>
        </div>
      </div>
      
    </div>
  )
}

export default CreateNewpage
