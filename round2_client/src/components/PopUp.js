import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PopUpDialog({ heading, long_desc }) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  function streamStartVideo() {
    // Grab elements, create settings, etc.
    var video = document.getElementById("videoElement");

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          //video.src = window.URL.createObjectURL(stream);
          video.srcObject = stream;
          video.play();
        });
    }
  }
  function streamStopVideo() {
    const video = document.querySelector("video");

    // A video's MediaStream object is available through its srcObject attribute
    if(video !== null){
    const mediaStream = video.srcObject;
    if(mediaStream !==null){
        const tracks = mediaStream.getTracks();

        // Tracks are returned as an array, so if you know you only have one, you can stop it with:
        tracks[0].stop();
    }
    // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
   
    }
    
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    streamStopVideo();
  };

  return (
    <div style={{ display: "flex" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Try Out
      </Button>
      <Dialog open={open}>
        <div style={{ padding: "20px" }}>
          <Grid container direction="row" spacing={spacing}>
            <Grid item lg={8}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <strong>{heading}</strong>
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>{long_desc}</Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Grid>

            <Grid item lg={4}>
              <p>Using in-built Camera</p>
              <video
                id="videoElement"
                width="100%"
                height="100%"
                autoplay
              ></video>
              <Button onClick={streamStartVideo}>Start</Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
