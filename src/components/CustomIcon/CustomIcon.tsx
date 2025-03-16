import { ComponentProps, FC } from "react";

import Docusaurus from '../../assets/docusaurus-icon.svg';

export const iconTypes = {
    docusaurus: Docusaurus,
} as const;

interface CustomIconProps extends ComponentProps<"svg"> {
    name: keyof typeof iconTypes;
}

export const CustomIcon: FC<CustomIconProps> = ({ name, ...props }) => {
    const Icon = iconTypes[name];
    return <Icon {...props} />;
};
