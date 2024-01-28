import * as HeroIconsOutlined from "@heroicons/react/24/outline";
import * as HeroIconsSolid from "@heroicons/react/20/solid";
import { IconName } from "../types/app";

interface IconProps {
  icon: IconName;
  className?: string;
  onClick?: () => void;
  solid?: boolean;
}

const defaultProps = {
  className: "h-5 w-5",
  onClick: null,
};

function HeroIcon({ icon, className, onClick, solid }: IconProps): JSX.Element {
  const SingleIcon = solid ? HeroIconsSolid[icon] : HeroIconsOutlined[icon];

  return <SingleIcon className={`${className}`} onClick={onClick} />;
}

HeroIcon.defaultProps = defaultProps;

export default HeroIcon;
