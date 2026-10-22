import type { Metadata } from 'next'
import { PageIntro } from '@/components/site/page-intro'

export const metadata: Metadata = { title: 'Power & AC' }

export default function PowerPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Power" title="Power & AC" description="Power details coming soon." />
    </main>
  )
}
