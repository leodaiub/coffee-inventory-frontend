import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from './logo/logo';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#E2E2E2'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#111'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#E2E2E2'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#E2E2E2'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 50
    
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  }
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            CAFÉ DO TEATRO COMMUNE
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <Logo></Logo>
          
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to="/vendas">
            <ListItem button >
                <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
                <ListItemText>VENDAS</ListItemText>
              </ListItem>
          </Link>
          <Link className={classes.link} to="/estoque">
            <ListItem button>
              <ListItemIcon><LocalGroceryStoreIcon /></ListItemIcon>
              <ListItemText>ESTOQUE</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}
