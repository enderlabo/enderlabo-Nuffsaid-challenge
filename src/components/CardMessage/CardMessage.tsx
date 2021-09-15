
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { IMessage } from '../../context/types'
import { useHomeStyles } from '../../hooks/useStyles'


interface IPropsMsg {
  messages: IMessage[];
  title: string;
  c ?: string;
  handleRemoveMessage: (id: string) => void;
}

export const CardMessage: React.FC<IPropsMsg> = ({messages, title, handleRemoveMessage, c}) => {
  const useStyles = useHomeStyles(c);
  return (
    <Grid item xs={12} sm={4}>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Typography component="h4" variant="subtitle1">
        Count:{messages.length}
      </Typography>
        {/*TODO: Map messages  */}
      {messages.map((message) => (
      <Paper key={message.id} style={{ backgroundColor: c }} className={useStyles.paper}>
        {message.messages}
        <Button
          onClick={() => handleRemoveMessage(message.id)}
          className={useStyles.button}
        >Clear</Button>
      </Paper>
      ))}
    </Grid>
  );
}

