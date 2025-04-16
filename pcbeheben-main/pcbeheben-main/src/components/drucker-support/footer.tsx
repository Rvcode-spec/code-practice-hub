import Routes from '@/lib/routes'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
	<>
    <div className='bg-sky-800 w-full h-2/3 py-10 px-5'>
	<h1 className='text-orange-500 text-4xl font-bold text-center'>
	800 1830881
	</h1>
	<h1 className='text-white md:text-3xl lg:text-5xl  font-bold text-center mt-4'>
	Kundendienst Telefonnummer
	</h1>
	
    </div>
    <footer>
	<div className="bg-white text-gray-700 p-4 text-center">
		<p>© 2025 PC-BEHEBEN. Alle Rechte vorbehalten. © Gemäß den Google Ads-Richtlinien hält sich PC Beheben strikt an die Prinzipien von Ehrlichkeit, Transparenz und Benutzersicherheit. Wir verwenden keine irreführenden oder ungenauen Aussagen in unserer Werbung und sorgen dafür, dass unsere Dienstleistungen den in unseren Anzeigen gemachten Versprechungen gerecht werden.</p>
		<p>
			<Link href={Routes.privacyPolicy}>
		Datenschutzrichtlinie </Link> | <Link href={Routes.term}> Terms & Bedingungen </Link>
		
		</p>

	</div>
    </footer>
    </>
  )
}

export default Footer