import React, { useState, useEffect } from 'react';

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
		<div>
			{
				notes.map((note: INote) => (
					<p key={note.id}>
						{note.title}
					</p>
				))
			}
		</div>
	);
};

export default Notes;
