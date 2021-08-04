import React from 'react'

import { Card, CardHeader, CardContent, IconButton, Typography, makeStyles } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons'

import { INote } from '../../types/main.types';

interface NoteCardProps{
  note: INote,
  handleDeleteNote: (id: number) => Promise<void>
}

const useStyles = makeStyles({
  test: {
    border: (note: INote) => {
      if(note.category==='work'){
        return '1px solid red'
      }
    }
  }
})

const NoteCard = (props: NoteCardProps) => {
  const { note, handleDeleteNote } = props;
  const classes = useStyles(note);

  return (
    <Card elevation={3} className={classes.test}>
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
