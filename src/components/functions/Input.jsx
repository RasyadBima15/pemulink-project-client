export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  helperText,
  disabled,
}) {
  return (
    <label className="form-control w-full max-w-xs">
      {label ? (
        <div className="label">
          <span className="label-text text-black">{label}</span>
        </div>
      ) : null}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="input input-bordered w-full max-w-xs bg-gray-100"
      />
      {error ? (
        <div className="label">
          <span className="label-text-alt text-error">{helperText}</span>
        </div>
      ) : null}
    </label>
  );
}
