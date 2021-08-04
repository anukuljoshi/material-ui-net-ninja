import React, { useState, useEffect } from 'react';

import { Container, Grid, Paper } from '@material-ui/core'


import { API_URL } from '../constants/api';

interface INote{
	title: string,
	details: string,
	category: string,
	id: number
}

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				setNotes(data)
			})
			.catch(err => console.log(err));
	}, [])
	
	return (
		<Container>
			<Grid container spacing={2}>
			{
				notes.map((note: INote) => (
					<Grid item xs={12} md={6} lg={4} key={note.id}>
						<Paper>
							{note.title}
						</Paper>
					</Grid>
				))
			}
			</Grid>
		</Container>
	);
};

export default Notes;
