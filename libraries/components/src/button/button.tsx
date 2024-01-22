


export const Button = ({
  disabled = false,
  label,
  onClicked,
}: {
  disabled?: boolean;
  label: string;
  onClicked: () => void;
}) => {

  return(
    <button 
      type="submit"
      disabled={disabled}
      onClick={onClicked}
      className="flex w-full justify-center px-3 py-1.5 
        text-sm font-semibold leading-6 text-slate-200 shadow-sm rounded-md 
        bg-blue-500 hover:bg-blue-400 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        {label}
    </button>
  );
}
