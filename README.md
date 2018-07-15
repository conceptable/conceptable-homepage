Conceptable Homepage
================================

Conceptable homepage source, including assets, view templates and content. Publishing of the homepage is automated via Circle CI.

[![CircleCI](https://circleci.com/gh/conceptable/conceptable-homepage.svg?style=svg)](https://circleci.com/gh/conceptable/conceptable-homepage)

## Getting started

### Update page content

Update the markdown files inside the folder `/content`. Commit and push the changes.

Alternatively, edit the markdown files directly on https://github.com/conceptable/conceptable-homepage/tree/master/content

### Update page layout

Update `/views/index.mustache`. Commit and push the changes.

### Update stylesheets, images or assets

Update `/images` or `/assets` accordingly. Commit and push the changes.

## Local development

In order to see live preview and chnages locally, you need to setup your local machine as follows.

### Prerequisite

- Node.js v8.9.4

### Package the webpage

Run `npm run build`

This will create a new folder `/dist` that contains the full homepage source. Open `/dist/index.html` on the browser to see the changes.

To simplify running `npm run build` for every changes, you can run `npm run watch` instead, which will automatically generate new homage source when you update any `.js`, `.css`, `.md` or `.mustache` files.

## For repository maintainers

Changes on this repository will be automatically deployed to https://github.com/conceptable/conceptable.github.io using Circle CI.

`/.circleci/config.yml` contains the environment setup and deployment steps.

`/.auto/publish.sh` contains the script the push changes to conceptable.github.io.
