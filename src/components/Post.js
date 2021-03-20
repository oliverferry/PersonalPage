import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import EditIcon from '@material-ui/icons/Edit'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button, Card } from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import {deletePost, editPost} from '../actions/postActions'
import { connect } from "react-redux"




const Post = (props) => {
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState(props.content.title)
  const [url, setUrl] = React.useState(props.content.url)
  const [desc, setDesc] = React.useState(props.content.desc)

  const handleClose = () => {
    setEdit(false);
  };

  const handleSave = () => {
    setEdit(false)
    props.editPost({id: props.content.id, title: title, url: url, desc: desc})
  };

  const handleDelete = () => {
    setEdit(false)
    props.deletePost(props.content.id)
    clearForm()
  };

  const clearForm = () => {
    setTitle('')
    setUrl('')
    setDesc('')
  };

  return (
    <div style={{marginBottom: "20px"}}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={()=>{setEdit(true)}}>
              <EditIcon />
            </IconButton>
          }
          title={props.content.title}
        />
        <CardMedia
          height="300"
          component="img"
          image={props.content.url}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content.desc}
        </Typography>
        </CardContent>
      </Card>


      <Dialog open={edit} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="url"
            label="Image URL"
            fullWidth            
            value={url}
            onChange={(e)=>setUrl(e.target.value)}

          />
          <TextField
            margin="dense"
            id="desc"
            label="Description"
            fullWidth
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="secondary" style={{marginLeft: '10px'}}>
            Delete
          </Button>
          <div style={{flex: '1 0 0'}} />
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default connect(null, {deletePost, editPost})(Post)