import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={"/"}>
					<Notes></Notes>
				</Route>
				<Route exact path={"/create"}>
					<Create></Create>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
