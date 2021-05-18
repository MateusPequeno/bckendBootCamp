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
*/
import express from 'express';

const app = express();

app.get('/',(request,response) => {
  return response.json({ message: "Olá!"});
});

app.listen(3333,() => {
  console.log('🎈Server is on 3333🎈')
});
