import "./Link.css"

export default function Link ( {
  href,
  textContent
} )
{
  return (
    <a
      className="link"
      href={ href }
    >
      { textContent }
    </a>
  )
}
