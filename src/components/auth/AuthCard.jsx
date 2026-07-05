export default function AuthCard ({ children, className = '' }) {
  return (
    <div
      className={`w-full max-w-md rounded-3xl border border-line bg-panel p-8 shadow-app ${className}`}
    >
      {children}
    </div>
  )
}
