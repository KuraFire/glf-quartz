# Going Love First

This is the working repository for [goinglovefirst.com](https://goinglovefirst.com/). Learn more about what Love First is at that link.

This version of the website is running on [Quartz](https://quartz.jzhao.xyz/), so that writing and editing can be done with [Obsidian](https://obsidian.md/).

## List of desired changes in the tech stack

In order of priority:

### 1. isIndex frontmatter support

Have the Folder Page system support rendering out one of the folder’s inner pages if it contains `isIndex: true` in its YAML Frontmatter, so that a file like `/people/supernova/Supernova.md` can serve as the index page for `/people/supernova/` in the generated site. This prevents the need for a ton of `index` files to prevent generic folder pages for every folder's root, and allows for much better use of Obsidian's features for automatic linking of pages and automatic updating of references when their name changes.

### 2. Auto-refresh system to watch `content` folder

Currently, the `content` folder (which has the Obsidian vault) doesn't seem to trigger automatic refreshes nor rebuilds in the Quartz build stack. This means for every change I want to see, I have to `ctrl-c` stop the server process, and hit up + enter and wait for it to rebuild and restart serving, before switching to my browser to manually hit refresh. TEDIOUS. (Because I know this is a solved problem.)

### 3. Custom components to work smoothly

Currently my VS Code has a "Problem" with my `<Nobr>` custom component that I made. I'd like to know how to make some custom components and have them Just Work™ with the codebase.

### 4. MDX integration

Custom components that I could use inside of the Markdown content in Obsidian (not that they would work in Obsidian, but that's okay!) would be super awesome. One example is a (relatively) simple `<IWe>` component that would track any listed authors or undersigners in frontmatter, and if there is more than one it would change the output from `I` to `We`, and there are attributes in the component that would change associated content along accordingly.

Example:

```js
// Input in raw markdown:
<IWe myself /> do this daily.

// Output with one or no authors listed in frontmatter
I myself do this daily.

// Output with two or more authors
We ourselves do this daily.
```

### 5. Customized Site map navigation

A new (Tailwind-powered?) component for the site navigation would be great. I'd like it to be manually controlled, meaning it populates from a JS object in the code that allows for custom ordering and which I have to update in order for something to change, regardless of what new content gets published to the site.

### 6. Tailwind integration

Currently it's all JSX components with SCSS styles in `.scss` files. I'd like to be able to move to a Tailwind version of this.
