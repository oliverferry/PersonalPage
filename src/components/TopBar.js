import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SetProfile from './SetProfile'
import { Avatar } from '@material-ui/core'
import AddPost from './AddPost'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
    marginLeft: 10,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const FixedPosition = withStyles(styles)(({ classes, profile }) => {
  const [editProfile, setEditProfile] = React.useState(false);

return (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <Avatar src={profile.url}/>
        <Typography
          variant="h5"
          color="inherit"
          className={classes.flex}>
          {profile.desc}
        </Typography>
        <SetProfile/>
        <AddPost/>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </div>
)});

const mapStateToProps = state => {
  let profile = state.profile
  return { profile };
};

export default connect(mapStateToProps)(FixedPosition)