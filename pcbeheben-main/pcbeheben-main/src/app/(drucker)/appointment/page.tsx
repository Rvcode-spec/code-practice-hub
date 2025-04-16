"use client"
import React from 'react'
import ProblemsPage from '../../../components/drucker-support/problems';
import PrinterModel from '../../../components/drucker-support/printerModel';
import FormAppointment from '../../../components/drucker-support/formAppointment';
import Appointment from '../../../components/drucker-support/appointment';
import { useAtom } from 'jotai';
import { currentStepAtom, selectedServiceAtom } from '../../../lib/atom/atoms';
import NumberAppointment from '@/components/drucker-support/numberAppointment';
import Thankyou from '@/components/drucker-support/thankyou';

const page = () => {

  const [currentStep] = useAtom(currentStepAtom);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Appointment />
      case 1:
        return <ProblemsPage />;
      case 2:
        return <PrinterModel />;
      case 3:
        return <FormAppointment />;
      case 4:
        return <NumberAppointment />
      case 5:
        return <Thankyou />
      default:
        return <div>Invalid Step</div>;
    }
  };




  return (
    <div>

      <div>
        {renderStep()}
      </div>
    </div>
  )
}

export default page