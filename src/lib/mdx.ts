import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getMDX(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/pillars', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  return { content, data }
}
