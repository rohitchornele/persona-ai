"use client";

import { useState } from "react";
import Link from "next/link";

export default function PasswordInput({
  label = "Password",
  placeholder = "••••••••",
  register,
  error,
  forgotPasswordHref,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="block text-sm font-medium text-ink">
          {label}
        </label>

        {forgotPasswordHref && (
          <Link
            href={forgotPasswordHref}
            className="text-xs text-jade transition hover:text-jadeDeep"
          >
            Forgot password?
          </Link>
        )}
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className={`h-11 w-full rounded-xl border bg-panelAlt px-4 pr-12 text-sm outline-none transition ${
            error
              ? "border-coral focus:border-coral"
              : "border-line focus:border-jade"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-muted transition hover:text-ink"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-xs text-coral">
          {error.message}
        </p>
      )}
    </div>
  );
}