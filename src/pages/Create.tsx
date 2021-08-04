import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";

const Create = () => {
	return (
		<Container>
			<Typography
				variant="h5"
				component="h2"
				color="textSecondary"
				gutterBottom
			>
				Create a New Node
			</Typography>

			<Button
				onClick={() => console.log('Button clicked')}
				type="submit"
				color="secondary"
				variant="contained"
			>
				Submit
			</Button>

			{/* <Button 
				type="submit"
				variant="contained"
				color="primary"
			>Hello</Button>
			<Button 
				type="submit"
				variant="outlined"
				color="secondary"
			>Hello</Button>

			<br />
			<br />
			<ButtonGroup color="secondary" variant="contained">
				<Button 
				>One</Button>
				<Button 
				>Two</Button>
				<Button 
				>Three</Button>
			</ButtonGroup> */}
		</Container>
	);
};

export default Create;
