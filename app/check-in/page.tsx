import type { Metadata } from 'next'
import { PageIntro } from '@/components/site/page-intro'

export const metadata: Metadata = { title: 'Check-in' }

export default function CheckInPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Check-in" title="Check-in" description="Check-in details coming soon." />
    </main>
  )
}
