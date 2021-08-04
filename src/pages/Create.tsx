import { makeStyles, Typography, Button, Container } from "@material-ui/core";

import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
	btn: {
		fontSize: 32,
		background: 'violet',
		'&:hover': {
			background: 'purple'
		}
	},
	title: {
		textDecoration: "underline",
		marginBottom: 20
	}
})

const Create = () => {
	const classes = useStyles();

	return (
		<Container>
			<Typography
				className={classes.title}
				variant="h5"
				component="h2"
				color="textSecondary"
				gutterBottom
			>
				Create a New Node
			</Typography>

			<Button
				className={classes.btn}
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
