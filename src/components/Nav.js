import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import book from '../images/Bookopen.svg';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { navItems } from '../mocks/navItems';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'white',
    color: '#565D66',
  },
  width: {
    margin: 'auto 7%',
  },
  title: {
    flexGrow: 1,
    color: '#0050CB',
    textDecoration: 'none',
  },
  list: {
    display: 'flex',
    color: '#565D66',
  },
  active: {
    color: '#0050C8',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <AppBar color={classes.navbar}>
      <Toolbar className={classes.width}>
        <IconButton edge='start'>
          <Link to='/'>
            <img src={book} alt='Bookopen.svg' width='40.71' height='40.71' />
          </Link>
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          <Link to='/'>DSLMS</Link>
        </Typography>
        <List className={classes.list}>
          {navItems.map((nav) => (
            <ListItem
              key={nav.text}
              variant='h6'
              button
              onClick={() => history.push(nav.path)}
              className={location.pathname === nav.path && classes.active}
            >
              <ListItemText>{nav.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
