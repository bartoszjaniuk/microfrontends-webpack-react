import { PropsWithChildren } from "react"; // Must be imported for webpack to work
import Layout from "./components/Layout";
import "../styles/style.css";
const App = ({ children }: PropsWithChildren) => {
	return <Layout>{children}</Layout>;
};

export default App;
