import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple, teal } from "@material-ui/core/colors";

import Notes from "./pages/Notes";
import Create from "./pages/Create";


const theme = createTheme({
	palette: {
		primary: teal,
		secondary: purple
	},
	typography:{
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700
	}
});


function App() {
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
}

export default App;
