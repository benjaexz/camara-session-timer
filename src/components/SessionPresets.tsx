type SessionPresetsProps = {
  onSelectPreset: (seconds: number) => void
}

const presets = [
  { label: '5 min', seconds: 5 * 60 },
  { label: '10 min', seconds: 10 * 60 },
  { label: '15 min', seconds: 15 * 60 },
  { label: '20 min', seconds: 20 * 60 },
]

export function SessionPresets({ onSelectPreset }: SessionPresetsProps) {
  return (
    <div className="session-presets">
      {presets.map((preset) => (
        <button
          key={preset.seconds}
          type="button"
          className="preset-button"
          onClick={() => onSelectPreset(preset.seconds)}
        >
          {preset.label}
        </button>
      ))}
    </div>
  )
}