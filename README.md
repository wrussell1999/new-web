# new-web

New website for Hack Kosice using Hugo.

## Getting Started

To develop the website locally:

1.  [Install Hugo](https://gohugo.io/getting-started/installing/)
2.  `git clone git@github.com:hackkosice/new-web`
3.  `hugo server -DF` (`-DF` is to include drafts and posts dated in the future) or `hugo -DF` to just build the website (to the `public` directory)

## Structure

- `config.yml` - global configuration (website title, menu, metadata, other options)
- `content` - contains all the content: pages, blog posts, portfolio
- `static` - images and other static assets
- `themes/orbitor-hugo`
    - `layouts` - HTML code of the website

## How to make changes

If you are developing locally, running `hugo server` command will reload these changes automatically and immediately.

When you want to make changes to the live website, you can either use Git (for developers mostly), or edit the contents directly in GitHub. After each commit with changes you need wait for ~1 minute for the website to reload. You can check when the website was last built in the footer.

### Create a simple page

1.  Create a new file in the `content` directory, named `something.md` (where `/something` is be the path how you access the page)
2.  Copy the content from [bare-markdown.md](https://github.com/hackkosice/new-web/blob/master/content/examples/bare-markdown.md), and edit it as needed. The file contains page metadata (delimited by `---`), then page contents - this is written in [Markdown](https://www.markdownguide.org/basic-syntax/).

### Create a rich page

A more advanced page can be composed of sections of various types. The `basic` type is just what you saw above - a simple page is just one `basic` section.
 
- A rich page is distinguished by specifying `use_sections: true` in the page metadata. See [preview-all-sections.md](https://github.com/hackkosice/new-web/blob/master/content/examples/preview-all-sections.md) for an example.
- In Markdown, you create a section by surrounding the content with `{{< section type="banner" config="banner1" >}}` and `{{< /section >}}`, where `type` defines the type of the row, and `config` specifies which values from the page metadata should be used to populate the section with data. See the example file.

The following page types are supported:

- `basic`
- `banner`
- `bannerFeature`
- `feature`
- `cta`
- `project`
- `counter`
- `clients`
- `testimonial`
- `bigcounter`
- `promovideo`
- `team`
- `pricing`
- `services`
- `casestudy`
- `solutions`
- `smallcta`
- `contact`
- `map`
- `branch`

...