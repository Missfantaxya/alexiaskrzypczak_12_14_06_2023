import "./ButtonLink.css"

export default function ButtonLink(props) {
  return (
      <button className="buttonLink">
        <img className="buttonLink__img" src={props.src} alt={props.name} />
      </button>
    )
}
