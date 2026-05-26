type ControlsProps = {
  isRunning: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

export function Controls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: ControlsProps) {
  return (
    <div className="controls">
      <button
        disabled={isRunning}
        onClick={onStart}
      >
        Iniciar
      </button>

      <button
        disabled={!isRunning}
        onClick={onPause}
      >
        Pausar
      </button>

      <button onClick={onReset}>
        Redefinir
      </button>
    </div>
  )
}