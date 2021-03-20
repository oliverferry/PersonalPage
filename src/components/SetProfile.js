import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import { connect } from "react-redux"
import { editProfile } from '../actions/profileActions'


const SetProfile = (props) => {
  const [editProfile, setEditProfile] = React.useState(false);
  const [url, setUrl] = React.useState('')
  const [desc, setDesc] = React.useState('')


  const handleClickOpen = () => {
    setEditProfile(true);
  };

  const handleClose = () => {
    setEditProfile(false);
    clearForm()
  };

  const handleSave = () => {
    setEditProfile(false)
    props.editProfile({url: url, desc: desc})
    clearForm()
  };

  const clearForm = () => {
    setUrl('')
    setDesc('')
  };

  return (
    <div>
      <Button
        color="inherit"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog open={editProfile} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Avatar URL"
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

export default connect(null, {editProfile})(SetProfile)