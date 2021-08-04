import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import { makeStyles, Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@material-ui/core";
import { KeyboardArrowRight } from '@material-ui/icons'


import { API_URL } from '../constants/api'

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	}
})

const Create = () => {
	const classes = useStyles();
	const history = useHistory();

	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const [category, setCategory] = useState('money');

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
			const config = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: title,
					details: details,
					category: category
				})
			}
			fetch(API_URL, config)
			.then(res => res.json())
			.then(data => {
				history.push('/')
			})
			.catch(err => console.log(err))
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
					color="primary"
					fullWidth
					required
					error={titleError}
				></TextField>
				<TextField 
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label="Details"
					variant="outlined"
					color="primary"
					fullWidth
					required
					multiline
					rows={4}
					error={detailsError}
				></TextField>

				<FormControl className={classes.field}>
					<FormLabel>Notes Category</FormLabel>
					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
						<FormControlLabel value="money" control={<Radio />} label={"Money"} />
						<FormControlLabel value="todos" control={<Radio />} label={"Todos"} />
						<FormControlLabel value="reminders" control={<Radio />} label={"Reminders"} />
						<FormControlLabel value="work" control={<Radio />} label={"Work"} />
					</RadioGroup>
				</FormControl>

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
