import { makeStyles } from "@material-ui/core";

//HomePage
export const useHomeStyles = makeStyles((theme) => ({
    root: {
        paddingRight:   theme.spacing(15),
        paddingLeft:    theme.spacing(15),
        marginRight:    'auto',
        marginLeft:     'auto',
        marginTop:      theme.spacing(10)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: theme.spacing(5),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
       
      },
      button: {
        color: 'black',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        marginTop: '2.0rem',
        fontSize: '0.60rem',
        marginRight: '-15px'
      },
  }));