export default function NextPieces(props) {
  const { pieces } = props

  function renderPieceRow(row, i) {
    const key       = `piece-row-${i}`
    const className = `piece-row ${key}`

    return (
      <div className={className} key={key}>
        { row.map((cell, j) => renderPieceCell(cell, i, j)) }
      </div>
    )
  }

  function renderPieceCell(cell, i, j) {
    const key     = `cell-${i}-${j}`
    let className = `cell ${key}`

    if(cell !== ' ') {
      className = `${className} ${cell}-type solid`
    }

    return (
      <div className={className} key={key}>
        &nbsp;
      </div>
    )
  }

  return pieces.map((piece, i) => {
      return (
        <div className="piece" key={i}>
          { piece.map((row, i) => renderPieceRow(row, i)) }
        </div>
      )
    })
}
