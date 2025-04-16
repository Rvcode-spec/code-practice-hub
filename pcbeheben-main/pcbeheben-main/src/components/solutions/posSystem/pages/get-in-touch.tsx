'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const schema = z.object({
  service: z.string().min(1, 'Bitte wählen Sie einen Service aus.'),
  name: z.string().min(1, 'Name ist erforderlich.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z
    .string()
    .min(10, 'Telefonnummer muss mindestens 10 Zeichen lang sein.')
    .regex(/^\d+$/, 'Telefonnummer darf nur Zahlen enthalten.'),
  message: z.string().min(1, 'Nachricht muss mindestens 10 Zeichen lang sein.'),
});

type FormData = z.infer<typeof schema>;

const GetInTouch: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    reset();
    console.log('Valid Form Data:', data);
    alert('Anfrage erfolgreich gesendet!');
  };

  const handleServiceChange = (value: string) => {
    setValue('service', value, { shouldValidate: true });
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-4xl space-y-6 rounded-lg bg-white px-6 py-8">
        <h1 className="mt-8 text-center text-5xl font-semibold text-gray-700">
          Lass uns in Kontakt bleiben!
        </h1>
        <p className="text-center font-medium text-gray-600">
          Ihre Informationen sind bei uns sicher. Wir garantieren 100%ige Datensicherheit. Wir
          verwenden E-Mails nicht für Spam.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="service" className="text-lg font-semibold text-gray-700">
              Welche Dienstleistung suchen Sie?
            </label>
            <select
              id="service"
              {...register('service')}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
              required
            >
              <option value="" disabled>
                Wählen Sie Ihre Dienstleistung aus
              </option>
              <option value="Home IT Services">IT-Dienstleistungen für Zuhause</option>
              <option value="Business IT Services">IT-Dienstleistungen für Unternehmen</option>
              <option value="In-store IT Services">IT-Dienstleistungen vor Ort</option>
              <option value="Other">Andere</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="name" className="text-lg font-semibold text-gray-700">
              Ihr Name:
            </label>
            <input
              id="name"
              {...register('name')}
              type="text"
              placeholder="Ihr Name*"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-lg font-semibold text-gray-700">
              Ihre E-Mail-Adresse:
            </label>
            <input
              id="email"
              {...register('email')}
              type="email"
              placeholder="E-Mail-Adresse*"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="text-lg font-semibold text-gray-700">
              Telefonnummer:
            </label>
            <input
              id="phone"
              {...register('phone')}
              type="text"
              placeholder="Telefonnummer*"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-lg font-semibold text-gray-700">
              Erklären Sie Ihr Anliegen im Detail:
            </label>
            <textarea
              id="message"
              {...register('message')}
              placeholder="Ich habe ein Problem mit..."
              rows={6}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
              required
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="mt-4 w-full text-right">
            <button
              type="submit"
              className="rounded-md bg-[#7b5dd6] px-6 py-2 font-bold text-white hover:bg-[#5623ef]"
            >
              Anfrage absenden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
