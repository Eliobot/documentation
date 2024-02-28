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


