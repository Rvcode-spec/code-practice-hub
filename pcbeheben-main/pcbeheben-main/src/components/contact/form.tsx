'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  service: z.string({ required_error: 'Please select a service.' }).min(1, {
    message: 'Please select at least 1 service.',
  }),
  phone: z.string().min(7, {
    message: 'Number must be at least 7 characters.',
  }),
  email: z.string({ required_error: 'Please enter an email.' }).email(),
  message: z.string().min(1, { message: "Required" })
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      service: '',
      phone: '',
      email: '',
      message: ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const id = toast.loading('Submitting form...')
    try {
      const res = await axios.post('/api/submit', {
        ...values,
        sourceUrl: window.location.href,
        referrerUrl: document.referrer
      })
      if (res.status == 200) {
        return toast.success("Form submitted successfully", { id })
      } else {
        return toast.error("Error Submitting Form", { id })
      }
    } catch (e) {
      console.log(e)
      return toast.error("Error Submitting Form", { id })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-20 flex justify-center space-y-8 p-4 md:mb-5 lg:flex lg:justify-center"
      >
        <div className="w-full lg:w-2/4">
          <div className="flex flex-col gap-14 lg:flex lg:flex-col lg:gap-14">
            {/* Heading Section */}
            <div className="flex flex-col justify-center gap-6 text-center lg:flex lg:flex-col lg:justify-center lg:gap-6 lg:text-center">
              <h1 className="text-[20px] font-bold lg:text-[45px] lg:font-bold">
                Lass uns in Kontakt bleiben!
              </h1>
              <h2 className="text-[15px] lg:text-[22px]">
                Ihre Informationen sind bei uns sicher. Wir garantieren 100%ige Datensicherheit. Wir
                verwenden E-Mails nicht für Spam.
              </h2>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] font-semibold lg:text-[20px] lg:font-semibold">
                      Welche Dienstleistung suchen Sie?
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie Ihre Dienstleistung aus" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="IT-Dienstleistungen für Zuhause">
                          IT-Dienstleistungen für Zuhause
                        </SelectItem>
                        <SelectItem value="IT-Dienstleistungen für Unternehmen">
                          IT-Dienstleistungen für Unternehmen
                        </SelectItem>
                        <SelectItem value="IT-Dienstleistungen vor Ort">
                          IT-Dienstleistungen vor Ort
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-[12px] font-semibold lg:text-[16px] lg:font-semibold">
                      Wählen Sie ein Thema aus, damit wir Ihre Anfrage an die richtige Stelle
                      weiterleiten können:
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] font-semibold lg:text-[20px] lg:font-semibold">
                      Ihr Name:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr Name*" {...field} />
                    </FormControl>
                    <FormDescription className="text-[12px] font-semibold lg:text-[16px] lg:font-semibold">
                      Bitte geben Sie Ihren echten Namen ein:
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] font-semibold lg:text-[20px] lg:font-semibold">
                      Ihre E-Mail-Adresse:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="E-Mail-Adresse*" {...field} />
                    </FormControl>
                    <FormDescription className="text-[13px] font-semibold lg:text-[15px] lg:font-semibold">
                      Bitte überprüfen Sie sorgfältig Ihre E-Mail-Adresse auf Richtigkeit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] font-semibold lg:text-[20px] lg:font-semibold">
                      Telefonnummer:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Telefonnummer:" {...field} type="number" />
                    </FormControl>
                    <FormDescription className="text-[13px] font-semibold lg:text-[15px] lg:font-semibold">
                      Bitte überprüfen Sie sorgfältig Ihre Telefonnummer auf Richtigkeit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] font-semibold lg:text-[20px] lg:font-semibold">
                      Erklären Sie Ihr Anliegen im Detail:
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ich habe ein Problem mit..."
                        id="message-2"
                        className="h-40"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[13px] font-semibold lg:text-[15px] lg:font-semibold">
                      Ihre Anforderung und welche Art von Service Sie wünschen. Seien Sie SEHR präzise!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="bg-primary">
                Submit
              </Button>
            </div>

            {/* Privacy Policy */}
            <div className="text-[12px] lg:text-[18px]">
              Wir respektieren Ihre Privatsphäre. PC Beheben verwendet die von Ihnen
              bereitgestellten Informationen, um Sie über unsere relevanten Inhalte, Produkte und
              Dienstleistungen zu informieren. Sie können sich jederzeit von diesen Mitteilungen
              abmelden. Weitere Informationen finden Sie in unserer{' '}
              <Link href="" className="text-blue-600">
                Datenschutzrichtlinie.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
