'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import axios from "axios"

const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email(),
  phone: z.string().min(7, 'Minimul 7 characters Required'),
  message: z.string().min(1, 'Required'),
});

export function BlogForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const id = toast.loading('submitting form...')

        try{
            const res = await axios.post('/api/submit',{
                ...values,
                sourceUrl:window.location.href,
                referrerUrl: document.referrer
            })
            if(res.status==200){
                return toast.success("Form submitted successfully",{id})
            }else{
                return toast.error("Error Submitting Form",{id})
            }
        }catch(e){
            console.log(e)
            return toast.error("Error Submitting Form",{id})
        }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-3 w-full space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Namen eingeben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Geben Sie Ihre E-Mail-Adresse ein" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonnummer</FormLabel>
              <FormControl>
                <Input placeholder="Geben Sie die Telefonnummer ein" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea placeholder="Nachricht eingeben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
