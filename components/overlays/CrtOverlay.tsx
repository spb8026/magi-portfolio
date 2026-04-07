export default function CrtOverlay() {
  return (
    <>
      {/* CRT vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--scanline) 2px, var(--scanline) 4px)",
        }}
        aria-hidden="true"
      />
    </>
  )
}
