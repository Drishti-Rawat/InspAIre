'use client'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"


const AdditionalRequirments = ({additionalRequirmentInput}) => {
  return (
    <div className='mt-3'>
        <label className='text-slate-500'> Enter Additional Requirments(optional)</label>
      <Textarea className="mt-3" onChange = {(e) => additionalRequirmentInput(e.target.value)} />

    </div>
  )
}

export default AdditionalRequirments
