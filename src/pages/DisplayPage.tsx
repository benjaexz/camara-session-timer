import { useEffect, useRef, useState } from 'react'
import { Header } from '../components/Header'
import { Timer } from '../components/Timer'
import { formatTime } from '../utils/formatTime'
import { INITIAL_TIMER_SECONDS } from '../constants/timer'
import { listenTimerState } from '../services/timerService'

export function DisplayPage() {
  const [seconds, setSeconds] = useState(
    INITIAL_TIMER_SECONDS,
  )

  const [isFullscreen, setIsFullscreen] =
    useState(false)

  const pageRef =
    useRef<HTMLElement | null>(null)

  useEffect(() => {
    const unsubscribe =
      listenTimerState((timerState) => {
        if (!timerState) return

        setSeconds(
          timerState.seconds,
        )
      })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(
        Boolean(
          document.fullscreenElement,
        ),
      )
    }

    document.addEventListener(
      'fullscreenchange',
      handleFullscreenChange,
    )

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        handleFullscreenChange,
      )
    }
  }, [])

  function enterFullscreen() {
    pageRef.current?.requestFullscreen()
  }

  const formattedTime =
    formatTime(seconds)

  return (
    <main
      ref={pageRef}
      className="display-app"
    >
      <section
        className="
          timer-card
          display-mode
        "
      >
        <Header />

        {!isFullscreen && (
          <button
            className="fullscreen-button"
            onClick={enterFullscreen}
          >
            Entrar em Tela Cheia
          </button>
        )}

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