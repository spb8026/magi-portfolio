interface Props {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: Props) {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text}
    </span>
  )
}
