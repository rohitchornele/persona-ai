'use client'

import { LogOut } from 'lucide-react'
import { useLogout } from "@/src/hooks/auth/useLogout.js"

export default function SignOutButton () {
  const { logout } = useLogout()

  return (
    <button
      type='button'
      onClick={() => logout()}
      aria-label='Sign out'
      title='Sign out'
      className='flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-panelAlt hover:text-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-jade'
    >
      <LogOut size={17} />
    </button>
  )
}
