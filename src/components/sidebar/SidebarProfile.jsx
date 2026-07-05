'use client'

import { useState, useRef, useEffect } from 'react'
import { Settings, LogOut, ChevronUp, ChevronDown, User } from 'lucide-react'

import Avatar from './Avatar'
import { useLogout } from '@/src/hooks/auth/useLogout'
import { authClient } from '@/src/lib/auth-client'

export default function SidebarProfile () {
  const [open, setOpen] = useState(false)

  const { logout } = useLogout()

  const { data: session, isPending } = authClient.useSession()

  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (isPending) {
    return <div className='border-t border-panelAlt p-4'>Loading...</div>
  }

  if (!session) return null

  const user = session.user

  return (
    <div
      ref={wrapperRef}
      className='relative border-t border-panelAlt bg-panel p-4'
    >
      {/* Dropdown */}
      {open && (
        <div className='absolute bottom-full left-4 right-4 mb-3 overflow-hidden rounded-2xl border border-panelAlt bg-panel shadow-2xl'>
          <button className='flex w-full items-center gap-3 px-4 py-3 text-sm text-muted transition hover:bg-panelAlt hover:text-ink'>
            <User size={18} />
            Profile
          </button>

          <button className='flex w-full items-center gap-3 px-4 py-3 text-sm text-muted transition hover:bg-panelAlt hover:text-ink'>
            <Settings size={18} />
            Settings
          </button>

          <div className='mx-4 h-px bg-panelAlt' />

          <button
            onClick={() => logout()}
            className='flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10'
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      )}

      {/* Profile */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className='flex w-full items-center gap-3 rounded-2xl border border-panelAlt bg-panel px-4 py-3 transition hover:bg-panelAlt'
      >
        <Avatar name={user.name} image={user.image} online />

        <div className='min-w-0 flex-1 text-left'>
          <h3 className='truncate font-medium text-ink'>{user.name}</h3>

          <p className='truncate text-sm text-muted'>{user.email}</p>
        </div>

        {open ? (
          <ChevronDown size={18} className='text-muted' />
        ) : (
          <ChevronUp size={18} className='text-muted' />
        )}
      </button>
    </div>
  )
}
