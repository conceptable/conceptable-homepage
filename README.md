Conceptable Homepage
================================

Conceptable homepage source, including assets, view templates and content. Publishing of the homepage is automated via Circle CI.

[![CircleCI](https://circleci.com/gh/conceptable/conceptable-homepage.svg?style=svg)](https://circleci.com/gh/conceptable/conceptable-homepage)

## Getting started

### Update page content

Update the markdown files inside the folder `/content`. Commit and push the changes.

Alternatively, edit the markdown files directly on GitHub as follow:

#### Step 1

Select `Content`
![step1](https://user-images.githubusercontent.com/130385/43202435-dcde68da-905e-11e8-866a-7a4b4d595941.jpg)

#### Step 2

Select the content file you want to modify, e.g. `about_us_desc.md`
![step2](https://user-images.githubusercontent.com/130385/43202434-dc9cc66e-905e-11e8-8099-6d1499408d27.jpg)

#### Step 3

Click the little pen icon to edit the file
![step3](https://user-images.githubusercontent.com/130385/43202432-dc480e26-905e-11e8-89c0-0f08e6e4e652.jpg)

#### Step 4

Make the changes directly in the WYSIWYG editor
![step4](https://user-images.githubusercontent.com/130385/43202431-dc00bd82-905e-11e8-9eb1-c675448f63bf.jpg)

#### Step 5
Once you've done with the changes, scroll down to the bottom of the page, click `Commit changes` and you are good to go!
![step5](https://user-images.githubusercontent.com/130385/43202429-dbad4e72-905e-11e8-91d1-5581eb82a6a2.jpg)

### Update page layout

Update `/views/index.mustache`. Commit and push the changes.

### Update stylesheets

Update `/stylesheets/*.scss`. Commit and push the changes.

### Update images or assets

Update `/images` or `/assets` accordingly. Commit and push the changes.

## Local development

In order to see live preview and changes locally, you need to setup your local machine as follows.

### Prerequisite

- Node.js v8.9.4

run `npm install` to install the requires package

### Package the webpage

Run `npm run build`

This will create a new folder `/dist` that contains the full homepage source. Open `/dist/index.html` on the browser to see the changes.

To simplify running `npm run build` for every changes, you can run `npm run watch` instead, which will automatically generate new html and css files when you update any `.scss`, `.md` or `.mustache` files.

## For repository maintainers

Changes on this repository will be automatically deployed to https://github.com/conceptable/conceptable.github.io using Circle CI.

`/.circleci/config.yml` contains the environment setup and deployment steps.

`/.auto/publish.sh` contains the script the push changes to conceptable.github.io.
