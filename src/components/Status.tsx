type StatusProps = {
  isRunning: boolean
}

export function Status({ isRunning }: StatusProps) {
  return (
    <p className="status">
      {isRunning
        ? 'Tempo em andamento'
        : 'Aguardando início'}
    </p>
  )
}