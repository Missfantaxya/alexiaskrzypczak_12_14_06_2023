import "./GraphicsSquares.css"
import GraphicSquare from "../GraphicSquare/GraphicSquare"

export default function GraphicsSquares({ children }) {
  return (
    <div className="graphics__squares">
      {children}
    </div>
    )
}
