import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const Room_type = ({selectedRoomType}) => {
  return (
    <div className='space-y-2'>
        <label className='text-slate-500'>Select Room Type *</label>
        <Select onValueChange={(value)=>selectedRoomType(value)}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Room Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Living Room">Living Room</SelectItem>
    <SelectItem value="Bedroom">Bedroom</SelectItem>
    <SelectItem value="Kitchen">Kitchen</SelectItem>
    <SelectItem value="Office">Office</SelectItem>
    <SelectItem value="Bathroom">Bathroom</SelectItem>
  </SelectContent>
</Select>

    </div>

  )
}

export default Room_type
