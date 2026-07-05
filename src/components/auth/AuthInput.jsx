export default function AuthInput({
  label,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}

        {required && (
          <span className="ml-1 text-coral">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`h-11 w-full rounded-xl border bg-panelAlt px-4 text-sm outline-none transition ${
          error
            ? "border-coral focus:border-coral"
            : "border-line focus:border-jade"
        }`}
      />

      {error && (
        <p className="mt-1 text-xs text-coral">
          {error.message}
        </p>
      )}
    </div>
  );
}