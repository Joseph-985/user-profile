import { Input as AntInput, InputProps } from "antd";

type TProps = {
  className?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  description?: string;
  label?: string;
  disabled?: boolean;
} & InputProps;

const Input = ({
  className,
  type,
  placeholder,
  description,
  label,
  disabled,
  ...props
}: TProps) => {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
        <div className="self-stretch flex-col justify-start items-start gap-1.5 flex w-full">
          {label && (
            <label className="text-slate-700 text-base font-medium leading-snug">
              {label}
            </label>
          )}
          <div className="relative w-full">
            {type !== "password" ? (
              <AntInput
                disabled={disabled}
                type={type}
                className={`!transition !ease-in-out !duration-300 !px-4 !py-3 !rounded-lg !border !w-full${
                  className ? className : ""
                }`}
                placeholder={placeholder}
                {...props}
              />
            ) : (
              <AntInput.Password
                disabled={disabled}
                type={type}
                className={`!transition !ease-in-out !duration-300 !px-4 !py-3 !rounded-lg !border !w-full${
                  className ? className : ""
                }`}
                placeholder={placeholder}
                {...props}
              />
            )}
          </div>
        </div>
      </div>
      {description && (
        <p className="text-orange-500 text-[14px] leading-[20px] mt-1 whitespace-nowrap">
          {description}
        </p>
      )}
    </div>
  );
};

export default Input;
