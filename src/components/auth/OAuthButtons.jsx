export default function OAuthButtons ({ loading, onGoogle, onGithub }) {
  return (
    <div className='space-y-3'>
      <button
        type='button'
        onClick={onGoogle}
        disabled={loading}
        className='flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-line bg-panelAlt text-sm font-medium text-ink transition hover:bg-backdrop disabled:cursor-not-allowed disabled:opacity-50'
      >
        <svg className='h-5 w-5' viewBox='0 0 48 48' fill='none'>
          <path
            fill='#FFC107'
            d='M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.239 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.96 3.04l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z'
          />
        </svg>
        Continue with Google
      </button>

      <button
        type='button'
        onClick={onGithub}
        disabled={loading}
        className='flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-line bg-panelAlt text-sm font-medium text-ink transition hover:bg-backdrop disabled:cursor-not-allowed disabled:opacity-50'
      >
        <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
          <path d='M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.2 22.9c.6.1.8-.25.8-.57v-2.1c-3.13.68-3.8-1.33-3.8-1.33-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.7 1.14 1.7 1.14 1 .1.7 2.7 3.34 1.93.1-.73.4-1.23.7-1.52-2.5-.28-5.13-1.26-5.13-5.6 0-1.24.44-2.26 1.15-3.05-.12-.28-.5-1.45.1-3.02 0 0 .95-.3 3.1 1.16a10.8 10.8 0 015.64 0c2.15-1.47 3.1-1.16 3.1-1.16.6 1.57.22 2.74.1 3.02.72.8 1.15 1.8 1.15 3.05 0 4.35-2.64 5.32-5.16 5.6.42.36.77 1.06.77 2.15v3.18c0 .32.2.7.82.57A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z' />
        </svg>
        Continue with GitHub
      </button>
    </div>
  )
}
