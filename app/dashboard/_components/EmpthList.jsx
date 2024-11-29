import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EmpthList = () => {
  return (
    <div className='flex items-center justify-center mt-10 flex-col gap-3'>
      <Image
        src="/bedroom_ai.jpg"
        alt="Logo"
        width={300}
        height={300}
        className="rounded-3xl"
      />
      <h2 className='font-medium text-lg text-gray-500'>Create New AI Interior Design Room</h2>
      <Link href="/dashboard/create-new">
      <Button  className=' bg-primary hover:bg-primary/90  rounded-xl text-white'>+ Redesign Room</Button>
      </Link>
    </div>
  )
}

export default EmpthList
