import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'
import { Container, Grid } from '@material-ui/core'

import NoteCard from '../components/Notes/NoteCard'

import { API_URL } from '../constants/api';
import { INote } from '../types/main.types'

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

	const handleDeleteNote = async (id: number) => {
		await fetch(`${API_URL}/${id}`, {
			method: 'DELETE'
		});

		const newNotes = notes.filter((note: INote) => note.id!==id)
		setNotes(newNotes);
	}

	const breakpoints = {
		default: 3,
		1280: 2,
		960: 1,
	}
	
	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className={'my-masonry-grid'}
				columnClassName={'my-masonry-grid_col'}
			>
				{
					notes.map((note: INote) => (
						<div key={note.id}>
							<NoteCard note={note} handleDeleteNote={handleDeleteNote}></NoteCard>
						</div>
					))
				}
			</Masonry>

			{/* using grid */}
			{/* <Grid container spacing={3}>
			{
				notes.map((note: INote) => (
					<Grid item xs={12} md={6} lg={4} key={note.id}>
						<NoteCard note={note} handleDeleteNote={handleDeleteNote}></NoteCard>
					</Grid>
				))
			}
			</Grid> */}
		</Container>
	);
};

export default Notes;
