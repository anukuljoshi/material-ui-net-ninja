import React from 'react'
import { makeStyles, Drawer, Divider, Typography } from '@material-ui/core';

interface LayoutProps{
  children: React.ReactNode
}

const drawerWidth: number = 240;

const useStyles = makeStyles({
  root:{
    display: 'flex'
  },
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
})

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const classes = useStyles();

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
          <Typography variant="h5">
            Notes
          </Typography>
        </div>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout
