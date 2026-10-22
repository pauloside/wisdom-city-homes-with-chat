import type { Metadata } from 'next'
import { PageIntro } from '@/components/site/page-intro'

export const metadata: Metadata = { title: 'Fees & Refunds' }

export default function FeesPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Fees & Refunds" title="Fees & refunds" description="Fee and refund details coming soon." />
    </main>
  )
}
