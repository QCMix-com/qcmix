import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const runtime = 'nodejs'

export default function PillarPage({
  params
}: {
  params: { slug: string }
}) {
  const filePath = path.join(
    process.cwd(),
    'src/content/pillars',
    `${params.slug}.mdx`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`Pillar not found: ${params.slug}`)
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="prose prose-lg">
        <h1>{data.title}</h1>
        <p>{content}</p>
      </article>
    </main>
  )
}
