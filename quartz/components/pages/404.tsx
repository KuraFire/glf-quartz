import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>{i18n(cfg.locale).pages.error.title}</h1>
      <p>
        If this page was linked to, it’s not (yet) finished or published. It might need some
        financial support to be created.{" "}
        <a href="https://venmo.com/farukspeaks">Venmo @FarukSpeaks</a> to support its creation, and
        put the page name or essay title in your message.
      </p>
      <p>
        The current threshold for essays to be put on top of the{" "}
        <a href="/essays/to-write">to-write pile</a> is: <nobr>$55</nobr>.
      </p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
