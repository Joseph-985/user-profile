import Input from "./input";

interface IProps {
  label: string;
  editing: boolean;
  initialValue: string;
  inputType?: "password" | "text";
  disable?: boolean;
}

const EditableInfo = ({
  label,
  editing,
  initialValue,
  inputType = "text",
  disable = false,
}: IProps) => {
  return (
    <div>
      <div className="text-gray-500 text-base font-normal leading-normal mb-2">
        {label}{" "}
      </div>
      {editing ? (
        <div className="flex items-center space-x-2">
          <Input
            type={inputType}
            defaultValue={initialValue}
            className="border border-gray-300 px-2 py-1 rounded-md"
            disabled={disable}
          />
        </div>
      ) : (
        <div className="text-stone-950 text-base font-semibold leading-normal cursor-pointer">
          {initialValue}
        </div>
      )}
    </div>
  );
};

export default EditableInfo;
