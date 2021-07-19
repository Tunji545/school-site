import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  delta: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    backgroundColor: '#F5F7FA',
  },
  subtitle: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '14px',
  },
  left: {
    paddingLeft: '10px',
  },
});
const CardItems = ({ detail }) => {
  const classes = useStyles();
  return (
    <Card spacing={8}>
      <CardHeader
        avatar={
          <Avatar>
            <img src={detail.icon} alt='logo.svg' width='40' height='40' />
          </Avatar>
        }
        title={detail.title}
        subheader={detail.subHeading}
        classes={{
          title: classes.delta,
          subheader: classes.delta,
        }}
      />
      <CardContent className={classes.content}>
        <div className={classes.subtitle}>
          <img src={detail.image} alt='icon.svg' width='16' height='16' />
          <Typography variant='p' className={classes.left}>
            {detail.subTitle}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary' component='p'>
          {detail.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItems;
