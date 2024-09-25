import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { Nobr } from "../Nobr"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>{i18n(cfg.locale).pages.error.title}</h1>
      <p>
        If this page was linked to, it’s not (yet) finished or published. It might need some
        financial support to be created. See the{" "}
        <a href="/experiments/writing-experiment">Love First Writing Experiment</a> for more info.
      </p>
      <p>
        The current minimum threshold for essays to be put on top of the{" "}
        <a href="/essays/to-write">to-write pile</a> is: <Nobr>$55</Nobr>. Some pieces may require
        more.
      </p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
