# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Project structure

### Images

All the images must be placed in ```/static/img``` 

Inside this folder, all the images are sorted into subfolder according to the docs structure they are called into.

For example, an image used into ```docs/elioblocs/blocs/conditions.md``` is going into ```static/img/elioblocs/blocs/conditions```

There is two exceptions with commonly used images files :
- Logos goes in the ```logos``` folder
- All other images than logos, but still commonly used goes in ```common``` folder


## Creating the static website

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npm run serve
```


### Deployment

> :warning: **Warning** :warning:<br></br>
Any push to the  ```main``` branch will be deployed, be careful to double-check before doing any change to the ```main``` branch.

To deploy to https://docs.eliobot.com just push into the ```main``` branch, the project will be automatically be built and deploy with github actions.

## Adding a new language (i18n)

This project is configured with Docusaurus i18n.  
To add a new locale (example: `es`), follow this workflow.

### 1. Add the locale in `docusaurus.config.js`

Update the `i18n.locales` array:

```js
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'es'],
},
```

### 2. Generate i18n files for the locale

```bash
npm run write-translations -- --locale es
```

This creates:

- `i18n/es/code.json`
- `i18n/es/docusaurus-theme-classic/navbar.json`
- `i18n/es/docusaurus-theme-classic/footer.json`
- `i18n/es/docusaurus-plugin-content-docs/current.json`

### 3. Create localized docs content

Copy docs into the locale folder:

```bash
mkdir -p i18n/es/docusaurus-plugin-content-docs/current
rsync -a --delete docs/ i18n/es/docusaurus-plugin-content-docs/current/
```

Then translate markdown files in:

- `i18n/es/docusaurus-plugin-content-docs/current/**/*.md`

### 4. Translate navigation and sidebar labels

Translate messages in:

- `i18n/es/docusaurus-theme-classic/navbar.json`
- `i18n/es/docusaurus-theme-classic/footer.json`
- `i18n/es/docusaurus-plugin-content-docs/current.json`

### 5. Translate homepage and custom UI strings

Homepage strings are in React components and use Docusaurus `Translate`/`translate`:

- `src/pages/index.js`
- `src/components/HomepageFeatures/index.js`

Add translated values for those ids in:

- `i18n/es/code.json`

### 6. Important MDX/asset rules

- Keep MDX/JSX tags unchanged (`<Jump ...>`, `<img ...>`, `import ...`).
- In localized docs, image links should use `/img/...` (not relative `../../static/img/...`), otherwise builds can fail.
- Keep frontmatter structure intact.

### 7. Build and validate

```bash
npm run build
```

Check that all locales are built (example):

- `build/` (fr)
- `build/en/`
- `build/es/`

### Common issues

- `write-translations` error with duplicate sidebar keys:
  add a unique `key` for duplicate categories in `sidebars.js`.
- Broken markdown images in localized docs:
  replace relative `.../static/img/...` paths with `/img/...`.
- Translated MDX tags (example `<Jump>` changed by machine translation):
  restore original tag/component names manually.

