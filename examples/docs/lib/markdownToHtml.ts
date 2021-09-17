import remark from 'remark'
import basepath from 'remark-basepath'
// @ts-expect-error
import highlight from 'remark-highlight.js'
import html from 'remark-html'
export async function markdownToHtml(
  markdown: string,
  basePathOption: Parameters<typeof basepath>[0]
) {
  const result = await remark()
    .use(basepath, basePathOption)
    .use(html)
    .use(highlight)
    .process(markdown)
  return result.toString()
}
