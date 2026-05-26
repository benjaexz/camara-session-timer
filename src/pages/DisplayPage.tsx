import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Timer } from '../components/Timer'
import { formatTime } from '../utils/formatTime'
import { INITIAL_TIMER_SECONDS } from '../constants/timer'
import { listenTimerState } from '../services/timerService'
import { useRef } from 'react'

export function DisplayPage() {
  const [seconds, setSeconds] = useState(INITIAL_TIMER_SECONDS)

  useEffect(() => {
    const unsubscribe = listenTimerState((timerState) => {
      if (!timerState) return

      setSeconds(timerState.seconds)
    })

    return () => unsubscribe()
  }, [])

  const formattedTime = formatTime(seconds)

 return (
  <main className="display-app">
    <section className="timer-card display-mode">
      <Header />

      <p className="session-label">
        Sessão Plenária
      </p>

      <Timer
        time={formattedTime}
        seconds={seconds}
      />
    </section>
  </main>
)
}