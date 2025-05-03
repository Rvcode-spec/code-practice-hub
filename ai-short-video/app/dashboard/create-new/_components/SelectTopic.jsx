"use client"
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function SelectTopic({onUserSelect}) {
    const options = ['Custom Prompt', 'Random AI Story', 'Bed Time Story', 'Motivational', 'Fun Facts', 'Historical Facts', 'Scary Story']
    const [selectedOptions, setSelectedOptions] = useState()
    return (
        <div>
            <h2 className='font-bold text-xl text-primary '>Content</h2>
            <p className='text-gray-500'>What is the topic of your video?</p>
            <Select onValueChange={(value)=>{
                setSelectedOptions(value)
                value!='Custom Prompt'&&onUserSelect('topic',value)

            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item, index) => (
                        <SelectItem key={index} value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedOptions=='Custom Prompt'&& 
                 <Textarea 
                 className="mt-3"
                 onChange={(e) => onUserSelect('topic', e.target.value)}
                 placeholder="Write prompt in which you want to generate video"
             />

            }

        </div>
    )
}

export default SelectTopic
