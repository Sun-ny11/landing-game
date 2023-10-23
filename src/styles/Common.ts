import { theme } from "./Theme"

type FontPropsType = {
   weight?: number
   family?: string
   color?:string
   lineHeight?: string
   Fmin?: number
   Fmax?: number
}

export const font = ({weight,family,color,lineHeight, Fmin, Fmax}:FontPropsType) => `
   font-family:${family || 'Josefin Sans'};
   font-weight:${weight || 400};
   color:${color || theme.colors.textColor};
   line-height:${lineHeight || 1.2};
   font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`