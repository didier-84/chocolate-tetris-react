export default function Score({level, score}) {
  return (
    <div className="score">
      {score}

      <div className="level">
        Level {level}
      </div>
    </div>
  )
}
