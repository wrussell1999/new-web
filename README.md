# new-web

New website for Hack Kosice using Hugo.

## Making changes

### Editing live

When you want to make changes to the live website, you can either use Git (for developers mostly), or edit the contents directly in GitHub. All changes on the `master` branch will be automatically tested for correctness, built and deployed to [dev.hackkosice.com](https://dev.hackkosice.com/). The process may take 1-3 minutes, and you can [check the build status on CircleCI](https://app.circleci.com/pipelines/github/hackkosice/new-web). You can check when the website was last built in the footer.

### Local installation

If you prefer developing locally (you can preview any changes immediately and without having to commit), follow these steps:

1.  [Install Hugo](https://gohugo.io/getting-started/installing/)
2.  `git clone git@github.com:hackkosice/new-web`
3.  `hugo server -DF` (`-DF` is to include drafts and posts dated in the future) or `hugo -DF` to just build the website (to the `public` directory)

If you are developing locally, running `hugo server` command will reload these changes automatically and immediately.

## Getting Started

### Structure

- `config.yml` - global configuration (website title, menu, metadata, other options)
- `content` - contains all the content: pages, blog posts, portfolio
- `static` - images and other static assets
- `themes/orbitor-hugo`
    - `layouts` - HTML code of the website
    
### Page metadata

Each page has a block delimited by `---`, containing information such as the page's title, date, appearance in the menu, whether it should be published, and more. The page metadata, as well as all other configuration blocks, are written in [YAML](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot's-introduction-to-yaml). For example:

```yaml
---
title: Page example
date: 2020-07-06T11:46:13+00:00
description: "This is meta description"
bgImage: "images/bg/background.jpg"
menu: main
---

...website content goes here!
```

### Create a simple page

Content of each page, after the metadata block, is written in [Markdown](https://www.markdownguide.org/basic-syntax/).

1.  Create a new file in the `content` directory, named `something.md` (where `/something` is be the path how you access the page)
2.  Copy the content from [bare-markdown.md](https://github.com/hackkosice/new-web/blob/master/content/examples/bare-markdown.md), and edit it as needed. The file contains page metadata (delimited by `---`), then page contents.

### Create a rich page

A more advanced page can be composed of sections of various types. The `basic` type is just what you saw above - a simple page is just one `basic` section.
 
- A rich page is distinguished by specifying `use_sections: true` in the page metadata. See [preview-all-sections.md](https://github.com/hackkosice/new-web/blob/master/content/examples/preview-all-sections.md) for an example.
- In Markdown, you create a section by surrounding the content with `{{< section type="banner" config="banner1" >}}` and `{{< /section >}}`, where `type` defines the type of the row, and `config` specifies which values from the page metadata should be used to populate the section with data. See the example file.

The following **page types** are supported:

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

### Add a page to the menu

Use the following code in the page's metadata to add the page to the `main` menu:

```yaml
menu: main
```

or customise the menu entry with more options

```yaml
menu:
  main:
    identifier: blog_post_3
    name: Blog post 3
    parent: Blog
    weight: 20
```
