import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import {addPost} from '../actions/postActions'
import { connect } from "react-redux"


const AddPost = (props) => {
  const [addPost, setAddPost] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [desc, setDesc] = React.useState('')


  const handleClickOpen = () => {
    setAddPost(true)
  };

  const handleClose = () => {
    setAddPost(false);
    clearForm()
  };

  const handleSave = () => {
    setAddPost(false)
    console.log(title)
    props.addPost({title: title, url: url, desc: desc})
    clearForm()
  };

  const clearForm = () => {
    setTitle('')
    setUrl('')
    setDesc('')
  };

  return (
    <div>
      <Button
        color="inherit"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}>
        Add Post
      </Button>
      <Dialog open={addPost} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
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

export default connect(null,{ addPost })(AddPost)