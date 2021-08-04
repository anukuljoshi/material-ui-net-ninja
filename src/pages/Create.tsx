import { makeStyles, Typography, Button, Container } from "@material-ui/core";

import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
})

const Create = () => {
	const classes = useStyles();

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
				endIcon={<KeyboardArrowRight></KeyboardArrowRight>}
			>
				Submit
			</Button>
		</Container>
	);
};

export default Create;
