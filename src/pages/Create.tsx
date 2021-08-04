import React, { useState } from "react";

import { makeStyles, Typography, Button, Container, TextField } from "@material-ui/core";
import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	}
})

const Create = () => {
	const classes = useStyles();

	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setTitleError(false);
		setDetailsError(false);

		if(title===''){
			setTitleError(true);
		}
		if(details===''){
			setDetailsError(true);
		}
		if(title && details){
			console.log(title, details)
		}
	}

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

			<form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
				<TextField 
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label="Notes Title"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					error={titleError}
				></TextField>
				<TextField 
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					multiline
					rows={4}
					error={detailsError}
				></TextField>
				<Button
					type="submit"
					color="secondary"
					variant="contained"
					endIcon={<KeyboardArrowRight></KeyboardArrowRight>}
				>
					Submit
				</Button>
			</form>

		</Container>
	);
};

export default Create;
