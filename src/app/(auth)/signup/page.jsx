'use client'

import AuthCard from '@/src/components/auth/AuthCard'
import AuthFooter from '@/src/components/auth/AuthFooter'
import AuthHeader from '@/src/components/auth/AuthHeader'
import SignupForm from '@/src/components/auth/SignupForm'

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-backdrop p-6">
      <AuthCard>
        <AuthHeader
          title="Create account"
          subtitle="Start chatting with your AI personas."
        />

        <SignupForm />

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          href="/signin"
        />
      </AuthCard>
    </main>
  )
}