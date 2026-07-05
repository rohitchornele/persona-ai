'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import AuthDivider from './AuthDivider'
import AuthInput from './AuthInput'
import OAuthButtons from './OAuthButtons'
import PasswordInput from './PasswordInput'
import useSignup from '@/src/hooks/auth/useSignup'
import useSocialAuth from '@/src/hooks/auth/useSocialAuth'
import { SignUpSchema } from '@/src/services/auth/validation'

export default function SignupForm() {
  const { loading, onSubmit } = useSignup()

  const { signInGoogle, signInGithub } = useSocialAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(SignUpSchema)
  })

  return (
    <>
      <OAuthButtons
        loading={loading}
        onGoogle={signInGoogle}
        onGithub={signInGithub}
      />

      <AuthDivider />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <AuthInput
          label="Name"
          placeholder="John Doe"
          register={register('name')}
          error={errors.name}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="john@example.com"
          register={register('email')}
          error={errors.email}
        />

        <PasswordInput
          register={register('password')}
          error={errors.password}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 h-11 w-full rounded-xl bg-jade font-medium text-white transition hover:bg-jadeDeep disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create account'}
        </button>
      </form>
    </>
  )
}