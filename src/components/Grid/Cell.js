export default function Cell(props) {
  const {letter}  = props
  let   className = 'cell'

  if (letter !== ' ') {
    className += ` ${letter}-type`

    if (letter !== 'g' && letter !== 'x') {
      className += ` solid`
    }
  }

  return (
    <div className={className}>
      &nbsp;
    </div>
  )
}
