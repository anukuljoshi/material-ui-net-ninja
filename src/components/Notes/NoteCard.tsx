import React from 'react'

import { Card, CardHeader, CardContent, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons'

import { INote } from '../../types/main.types';
import { blue, green, orange, purple } from '@material-ui/core/colors';

interface NoteCardProps{
  note: INote,
  handleDeleteNote: (id: number) => Promise<void>
}

const useStyles = makeStyles({
  card: {
    border: (note: INote) => {
      if(note.category==='work'){
        return `1px solid ${blue[700]}`
      }else if(note.category==='reminder'){
        return `1px solid ${orange[600]}`
      }else if(note.category==='todo'){
        return `1px solid ${green[600]}`
      }else if(note.category==='money'){
        return `1px solid ${purple[500]}`
      }
    }
  },
  avatar: {
    background: (note: INote) => {
      if(note.category==='work'){
        return blue[700]
      }else if(note.category==='reminder'){
        return orange[600]
      }else if(note.category==='todo'){
        return green[600]
      }else if(note.category==='money'){
        return purple[500]
      }
    }
  }
})

const NoteCard = (props: NoteCardProps) => {
  const { note, handleDeleteNote } = props;
  const classes = useStyles(note);

  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
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
