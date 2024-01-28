import { PropsWithChildren } from "react";
import HeroIcon from "./HeroIcon";
import { Button } from "antd";

const ProfileCard = ({
  title,
  onClick,
  onSave,
  children,
  editing,
  showIcon = true,
}: {
  title: string;
  onClick?: () => void;
  onSave?: () => void;
  editing?: boolean;
  showIcon?: boolean;
} & PropsWithChildren) => {
  return (
    <div>
      <div className="w-full p-6 bg-stone-100 inline-flex items-center justify-between rounded-t-lg ">
        <div className="uppercase text-stone-950 text-base font-medium">
          {title}
        </div>
        <div className="gap-x-3 flex justify-center items-center">
          {editing && <Button onClick={onSave}>Save</Button>}
          {showIcon && (
            <HeroIcon
              icon="PencilSquareIcon"
              className="text-orange-500 w-5 h-5 cursor-pointer hover:text-orange-400"
              onClick={onClick}
            />
          )}
        </div>
      </div>
      <div className="w-full min-h-[250px] pt-4 pl-5 pr-5 pb-5 bg-white border border-stone-100">
        <div className="flex flex-col gap-y-4">{children}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
