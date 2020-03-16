
# 3D ArcGIS API for JavaScript Sessions

Esri Developer Summit 2020 Palm Springs:
https://esri.github.io/devsummit-2020-3D-jsapi/

## Usage

The presentations are built using [reveal-md](https://github.com/webpro/reveal-md). Use the following commands to run them locally:

```
npm install
npm run start
```

This will launch the default browser and serve the presentations at http://localhost:1948

**Deploying a new version**

We use GitHub pages to serve the reveal.js presentations using a dedicated branch for the deployment (as described in [this](https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7) tutorial).

To deploy a new version, first make sure you have the `gh-pages` branch checked out in the `dist` folder.

```
rm -rf dist
git worktree add dist gh-pages
```

After that build the project in the root folder.

```
npm run dist
```

No `cd` into the `dist` folder and push the new version to the `gh-pages` branch:

```
cd dist
git add .
git commit -am '💥'
git push origin gh-pages
```

## Resources
The following external libraries, APIs, open datasets and specifications were used to make this application:
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
* [Anime.js](https://animejs.com) for animations

## Disclaimer

This demo application is for illustrative purposes only and it is not maintained. The area in Dumbo, Brooklyn NY used in the application is a fictional redevelopment area. There is no support available for deployment or development of the application.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](./license.txt) file.
