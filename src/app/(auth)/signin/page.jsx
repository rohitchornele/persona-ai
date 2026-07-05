'use client'

import AuthCard from '@/src/components/auth/AuthCard'
import AuthFooter from '@/src/components/auth/AuthFooter'
import AuthHeader from '@/src/components/auth/AuthHeader'
import LoginForm from '@/src/components/auth/LoginForm'

export default function SignInPage () {
 
  return (
    <main className='flex min-h-screen items-center justify-center bg-backdrop p-6'>
      <AuthCard>
        <AuthHeader
          title='Welcome back'
          subtitle='Sign in to continue chatting with your AI personas.'
        />

        <LoginForm />

        <AuthFooter
          text="Don't have an account?"
          linkText='Create one'
          href='/signup'
        />
      </AuthCard>
    </main>
  )
}
