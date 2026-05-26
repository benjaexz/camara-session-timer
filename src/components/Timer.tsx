type TimerProps = {
  time: string
  seconds: number
}

export function Timer({
  time,
  seconds,
}: TimerProps) {
  let color = '#FFFFFF'

  if (seconds <= 60) {
    color = '#EF4444'
  } else if (seconds <= 120) {
    color = '#FACC15'
  }

  return (
    <h1
      className="timer"
      style={{
        color,
      }}
    >
      {time}
    </h1>
  )
}