export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer Circle */}
        <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        {/* Inner Pulse */}
        <div className="absolute inset-0 m-auto h-8 w-8 rounded-full bg-primary/40 animate-pulse"></div>
      </div>
    </div>
  )
}