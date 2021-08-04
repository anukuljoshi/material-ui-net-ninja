import React from 'react'
import { makeStyles, Drawer, Divider, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar} from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';

import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { useHistory, useLocation } from 'react-router-dom';

import { format } from 'date-fns'

interface LayoutProps{
  children: React.ReactNode
}

interface MenuItem{
  text: string,
  icon: React.ReactElement<SvgIconProps>,
  path: string
}

const drawerWidth: number = 240;

const useStyles = makeStyles((theme) => {
  return {
    root:{
      display: 'flex'
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4',
    },
    title:{
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color={'secondary'} />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutline color={'secondary'} />,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Date: { format(new Date(), 'do MMMM Y') }
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar className={classes.avatar} src={'https://image.flaticon.com/icons/png/512/147/147144.png'}/>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notes
          </Typography>
        </div>

        {/* list links */}
        <List>
          {
            <>
            <Divider></Divider>
            {
              menuItems.map((item: MenuItem) => (
                <ListItem 
                  button 
                  key={item.text} 
                  onClick={() => history.push(item.path)}
                  className={location.pathname===item.path ? classes.active : ''}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))
            }
            </>
          }
        </List>
      </Drawer>
        
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Layout
