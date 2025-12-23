import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import FAQSchema from '@/components/FAQSchema'

export default function LocationPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/locations', `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <FAQSchema faq={data.faq || []} />
      <article className="prose">
        <h1>{data.title}</h1>
        <p>{content}</p>
      </article>
    </main>
  )
}
