import React from 'react'

import { Card, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons'

import { INote } from '../../types/main.types';

interface NoteCardProps{
  note: INote,
  handleDeleteNote: (id: number) => Promise<void>
}

const NoteCard = (props: NoteCardProps) => {
  const { note, handleDeleteNote } = props;
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDeleteNote(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      >
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard
