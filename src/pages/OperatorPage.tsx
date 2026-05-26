import { useEffect, useState } from 'react'
import { Timer } from '../components/Timer'
import { Controls } from '../components/Controls'
import { formatTime } from '../utils/formatTime'
import { INITIAL_TIMER_SECONDS } from '../constants/timer'
import { Status } from '../components/Status'
import { Header } from '../components/Header'
import { saveTimerState } from '../services/timerService'

export function OperatorPage() {
  const [seconds, setSeconds] = useState(INITIAL_TIMER_SECONDS)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setSeconds((currentSeconds) => {
        if (currentSeconds <= 1) {
          setIsRunning(false)
          return 0
        }

        return currentSeconds - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

useEffect(() => {
  const save = async () => {
    await saveTimerState({
      seconds,
      isRunning,
      updatedAt: Date.now(),
    })
  }

  save()
}, [seconds, isRunning])

  const formattedTime = formatTime(seconds)

  return (
    <main className="app">
      <section className="timer-card operator-mode">
        <Header />

        <p className="session-label">Sessão Plenária</p>

        <Timer
          time={formattedTime}
          seconds={seconds}
        />

        <Status isRunning={isRunning} />

        <Controls
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
          onReset={() => {
            setIsRunning(false)
            setSeconds(INITIAL_TIMER_SECONDS)
          }}
        />
      </section>
    </main>
  )
}