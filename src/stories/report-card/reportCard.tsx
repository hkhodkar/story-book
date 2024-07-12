import React, { FC } from "react";
import classNames from "classnames";

import { Size } from "../../types/size.type";
import { reportCardType } from "./reportCard.type";

const sizeClasses: Record<Size, string> = {
  tiny: "card-xs",
  small: "card-sm",
  normal: "card-md",
  large: "card-lg",
};

const ReportCard: FC<reportCardType> = ({
  icon,
  title,
  value,
  variant,
  iconVariant = "error",
  className,
  componentSize = "large",
}) => {
  const cardClasses = classNames(
    "card",
    className,
    { [`${sizeClasses[componentSize]}`]: componentSize },
    { [`card-${variant}`]: variant }
  );

  const iconClass = classNames("card-icon", {
    [`card-${iconVariant}`]: iconVariant,
  });

  return (
    <div data-testid="report-card" className={cardClasses}>
      <div className="flex flex-col justify-start items-start text-white">
        <h2 className="text-3xl font-bold">{value}</h2>
        <span className="text-md font-medium">{title}</span>
      </div>

      <div className={iconClass}>
        <span className="text-3xl text-white font-bold">{icon}</span>
      </div>
    </div>
  );
};

export default ReportCard;
