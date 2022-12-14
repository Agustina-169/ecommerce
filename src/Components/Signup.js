import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link as RouteLink, useHistory} from 'react-router-dom';
import{ auth }from '../firebase';



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },

    form: {
        whidth: ' 100%',
        marginTop: theme.spacing(3),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        }).catch((err)=>alert(err.menssage))
        }

        
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

    
    <form className={classes.form} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
            autoComplete='fname'
            name='firstName'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
    />
         </Grid>

         <Grid item xs={12} sm={6}>
            <TextField
            variant='outlined'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='lname'

    />
     </Grid>
    <Grid item xs={12} >
        <TextField
            value={email}
            onChange={e=>setEmail(e.target.value)}
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
    />
    </Grid>
    <Grid item xs={12}>
        <TextField
         value={password}
         onChange={e=>setPassword(e.target.value)}
            variant='outlined'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
    />
    </Grid>
    <Grid item xs={12}>
        <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="i want to receive enspiration, marketing promotions and updates via email."
    />
    </Grid>
    </Grid>
        <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={signup}
        >
            Sign Up
        </Button>
            <Grid container justify='flex-end'>
                <Grid item>
               <RouteLink to='signin'>
               Already have an account?  Sign in
               </RouteLink>
                       
                </Grid>
            </Grid>
        </form>
     </div>
     <Box mt={5}>
        <Copyright />
    </Box>
    </Container>

    );

};

