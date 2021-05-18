import { Router } from 'express';
/* yarn add typescript -D
//yarn add tsc --init
yarn add express
tsconfig alterar ourdir e rootdir
yarn add @types/express -D
Altear no package.json para scripts
yarn add ts-node-dev -D
--transpileOnly --ignore-watch node_modules
editor config.
yarn add eslint -D
yarn eslint --init
install eslink vscode
yarn add -D eslint-import-resolver-typescript
yarn dev:server
*/
import express from 'express';
import routes from './routes/index';
const app = express();
app.use(routes);

app.listen(3333,() => {
  console.log('🎈Server online porta 3333🎈');
});
