/**
 * Renders a JSON-LD structured-data block. Server component — the script is in
 * the initial HTML, which is what search engines read.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // data is our own trusted object, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
