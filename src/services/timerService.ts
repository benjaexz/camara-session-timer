import { onValue, ref, set } from 'firebase/database'
import { database } from '../firebase/config'
import type { TimerState } from '../types/timer'

const TIMER_REF = 'timer/current'

export function saveTimerState(timerState: TimerState) {
  return set(ref(database, TIMER_REF), timerState)
}

export function listenTimerState(
  callback: (timerState: TimerState | null) => void
) {
  return onValue(ref(database, TIMER_REF), (snapshot) => {
    callback(snapshot.val())
  })
}