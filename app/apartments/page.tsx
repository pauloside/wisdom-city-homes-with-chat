import type { Metadata } from 'next'
import { PageIntro } from '@/components/site/page-intro'

export const metadata: Metadata = { title: 'Apartments' }

export default function ApartmentsPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Apartments" title="Our apartments" description="Listings coming soon." />
    </main>
  )
}
