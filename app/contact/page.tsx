import type { Metadata } from 'next'
import { PageIntro } from '@/components/site/page-intro'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Contact" title="Request a booking" description="Booking form coming soon." />
    </main>
  )
}
