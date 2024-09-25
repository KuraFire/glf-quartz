import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export const Nobr: QuartzComponent = ({ displayClass, children }: QuartzComponentProps) => {
  return children.length > 0 ? (
    <span className={classNames(displayClass, "nobr")}>{children}</span>
  ) : null
}

// Nobr.css = `
// .nobr {
//   color: transparent;
//   background: linear-gradient(to bottom right, #fa1982 0%, #bf0a5e 100%);
//   background-clip: text;
//   white-space: nowrap;
// }
// :root[saved-theme="dark"] .nobr {
//   background-image: linear-gradient(to bottom right, #ff73b2 0%, #fa1982 100%);
// }
// `

export default (() => Nobr) satisfies QuartzComponentConstructor

// import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { classNames } from "../util/lang"

// function Nobr({ displayClass }: QuartzComponentProps) {
//   return <span className={classNames(displayClass, "nobr")}></span>
// }

// export default (() => Nobr) satisfies QuartzComponentConstructor
