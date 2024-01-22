


export const Input = ({
  label,
  id,
  name,
  placeholder = '',
  autocomplete,
  type = 'text',
  required = false,
  value,
  onValueChanged,
}: {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  autocomplete?: "email"  | "name"  | "password"  | "family-name" | "given-name" | "country-name" | "postal-code" | "street-address" | "address-level1" | "address-level2";
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  value: string;
  onValueChanged: (newValue: string) => void;
}) => {

  return(
    <div>
      <label htmlFor={type} className="block text-sm font-medium leading-6 text-white">{label}</label>
      <div className="mt-2">
        <input 
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChanged(e.currentTarget.value)}
          id={id} 
          name={name}
          type={type}
          autoComplete={autocomplete}
          required={required}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-2" 
        />
      </div>
    </div>
  );
}
