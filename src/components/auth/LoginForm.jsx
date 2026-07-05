'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import AuthDivider from './AuthDivider'
import AuthInput from './AuthInput'
import OAuthButtons from './OAuthButtons'
import PasswordInput from './PasswordInput'
import useLogin from '@/src/hooks/auth/useLogin'
import useSocialAuth from '@/src/hooks/auth/useSocialAuth'
import { SignInSchema } from '@/src/services/auth/validation'

export default function LoginForm() {
  const { loading, onSubmit } = useLogin()

  const { signInGoogle, signInGithub } = useSocialAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
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
          label="Email"
          type="email"
          placeholder="john@example.com"
          register={register("email")}
          error={errors.email}
        />

        <PasswordInput
          register={register("password")}
          error={errors.password}
          // forgotPasswordHref="/forgot-password"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 h-11 w-full rounded-xl bg-jade font-medium text-white transition hover:bg-jadeDeep disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </>
  )
}