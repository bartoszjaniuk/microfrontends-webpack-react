import { NodeEnvironment } from "../config/setup";
import createWebpackConfig from "../config/webpack.config";

process.env.BABEL_ENV = NodeEnvironment.development;

export default () => createWebpackConfig(NodeEnvironment.development);
