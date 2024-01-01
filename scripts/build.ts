import { NodeEnvironment } from "../config/setup";
import createWebpackConfig from "../config/webpack.config";

process.env.BABEL_ENV = NodeEnvironment.production;

export default () => createWebpackConfig(NodeEnvironment.production);
