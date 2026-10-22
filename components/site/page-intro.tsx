import { Reveal } from '@/components/site/motion'
import { Section } from '@/components/site/section'

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <Section tone="dark" aria-labelledby="page-title">
      <Reveal className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-strong">{eyebrow}</p>
        <h1 id="page-title" className="text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">{description}</p>
      </Reveal>
    </Section>
  )
}
