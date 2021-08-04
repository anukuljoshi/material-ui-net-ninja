import React from 'react'
import { makeStyles } from '@material-ui/core';

interface LayoutProps{
  children: React.ReactNode
}

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  }
})

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      {/* app bar */}

      {/* side drawer */}
      
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout
