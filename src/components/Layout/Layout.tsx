import React from 'react'
import { makeStyles, Drawer, Divider, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';

import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { useHistory, useLocation } from 'react-router-dom';

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
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    active: {
      background: '#f4f4f4'
    },
    title:{
      padding: theme.spacing(2)
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
                <>
                <ListItem 
                  button 
                  key={item.text} 
                  onClick={() => history.push(item.path)}
                  className={location.pathname===item.path ? classes.active : ''}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
                <Divider></Divider>
                </>
              ))
            }
            </>
          }
        </List>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout
