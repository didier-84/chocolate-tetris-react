import Cell from './Grid/Cell'

export default function Grid(props) {
  const { grid, letterForPosition } = props

  function renderRow(row, i) {
    const key       = `row-${i}`
    const className = `row ${key}`

    return (
      <div className={className} key={key}>
        { row.map((cell, j) => renderCell(cell, j, i)) }
      </div>
    )
  }

  function renderCell(cell, j, i) {
    const letter = letterForPosition(i, j)

    return (
      <Cell key={`cell-${i}-${j}`}
            letter={letter} />
    )
  }

  return grid.map(renderRow)
}
