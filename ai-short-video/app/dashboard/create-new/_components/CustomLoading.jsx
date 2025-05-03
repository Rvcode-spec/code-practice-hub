import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Image from 'next/image'

export default function CustomLoading({ loading }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <AlertDialogTitle>
            <VisuallyHidden>Loading Dialog</VisuallyHidden>
          </AlertDialogTitle>

          <AlertDialogDescription>
            Please wait while we generate your video.
          </AlertDialogDescription>

          <div className='flex flex-col items-center my-10 justify-center'>
            <Image src={'/progress.gif'} width={100} height={100} alt='loading animation' />
            <h2>Generating your video.. Do not refresh</h2>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
