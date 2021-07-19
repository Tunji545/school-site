import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import banner from '../images/Group6290.svg';
import arrowLeft from '../images/navigation-right-circle-1-12.svg';
import arrowRight from '../images/navigation-right-circle-1-11.svg';
import CardItems from './CardItems';
import { cardDetails } from '../mocks/cardDetails';
import { library } from '../mocks/libraryWords';
import Rectangle3 from '../images/Rectangle3.svg';
import female from '../images/Group6287.svg';
import { missions } from '../mocks/mission';
import frame9 from '../images/Frame9.svg';
import frame10 from '../images/Frame10.svg';
import frame11 from '../images/Frame11.svg';
import backGroundImage from '../images/Group6297.svg';
import BEng from '../images/BEng.svg';
import BTech from '../images/BTech.svg';
import BEdu from '../images/BEdu.svg';
import BSc from '../images/BSc.svg';

const useStyles = makeStyles({
  mid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  width: {
    width: '30%',
  },
  par2: {
    marginBottom: '20px',
  },
  carousel1: {
    background: 'linear-gradient(180deg, #F7F9FC 16.49%, #D2DCEA 100%)',
    paddingTop: '100px',
    paddingBottom: '100px',
    width: '100%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
  arrows: {
    position: 'relative',
    top: '20px',
  },
  institute: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  briefing: {
    fontSize: '14px',
    marginBottom: '14px',
  },
  carousel2: {
    paddingTop: '100px',
    paddingBottom: '100px',
    width: '100%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
  institute2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '15px',
  },
  shift: {
    marginBottom: '30px',
  },
  male: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  male2: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  mission: {
    fontSize: '14px',
    marginLeft: '15px',
  },
  start: {
    textAlign: 'left',
  },
  vision: {
    background: '#F0F5FF',
    paddingTop: '100px',
    paddingBottom: '100px',
    width: '100%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
  right: {
    marginRight: '24px',
  },
  carousel3: {
    backgroundImage: `url(${backGroundImage})`,
    paddingTop: '100px',
    paddingBottom: '100px',
    width: '100%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
  institute3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginTop: '40px',
    marginBottom: '25px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  start2: {
    display: 'flex',
    textAlign: 'left',
  },
});

const Main = () => {
  const classes = useStyles();
  // let total = content.length;
  let content = [cardDetails[0], cardDetails[1], cardDetails[2]];

  const [index, setIndex] = useState(content);

  const cardTotal = cardDetails.length;

  const onArrowClick = (direction) => {
    const decrement = direction === 'left' ? -1 : 1;
    const newIndex = (index.length + decrement + cardTotal) % cardTotal;
    setIndex([...index, cardDetails[newIndex]]);

    console.log(index);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={5} className={classes.mid}>
          <Typography variant='h3' gutterBottom>
            Delta State Learning Management System
          </Typography>
          <Typography className={classes.par2}>
            Enhanced Learning through Information Technology
          </Typography>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.width}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <img src={banner} alt='banner.svg' width='100%' />
        </Grid>
      </Grid>
      <Grid container className={classes.carousel1}>
        <Grid item xs={8}>
          <Typography variant='h5' gutterBottom className={classes.institute}>
            Our Institutions
          </Typography>
          <Typography gutterBottom xs={8} className={classes.briefing}>
            It provides the state’s educational institutions with a single
            platform for making course material accessible online, including
            lesson content, assignments, and assessments.
          </Typography>
        </Grid>
        <Grid item xs={4} align='center' className={classes.arrows}>
          <img
            src={arrowLeft}
            alt='arrowRight.svg'
            direction='left'
            onClick={() => onArrowClick('left')}
          />
          <img
            src={arrowRight}
            alt='arrowLeft.svg'
            direction='right'
            onClick={() => onArrowClick('right')}
          />
        </Grid>
        <Grid container spacing={3}>
          {index.map((detail) => (
            <Grid item xs={12} sm={6} md={4} spacing={3} key={detail.id}>
              <CardItems detail={detail} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={classes.carousel2}>
        <Grid item xs={12} sm={7}>
          <Typography variant='h5' gutterBottom className={classes.institute2}>
            Delta State Distance Learning Program. Enhanced Learning through
            Information Technology
          </Typography>
          {library.map((sentence) => (
            <Typography
              key={sentence.text}
              variant='body2'
              color='textSecondary'
              className={classes.shift}
            >
              {sentence.text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={5} className={classes.male}>
          <img src={Rectangle3} alt='student.svg' width='356' height='308' />
        </Grid>
      </Grid>
      <Grid container className={classes.vision}>
        <Grid item xs={12} sm={6} className={classes.male}>
          <img src={female} alt='female.svg' max-width='100%' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5' gutterBottom className={classes.institute2}>
            Vision Statement
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.shift}
          >
            Enhance the learning experience with a centralized online system
            that offers useful student and staff support.
          </Typography>
          <Typography variant='h5' gutterBottom className={classes.institute2}>
            Mission Statement
          </Typography>
          <>
            {missions.map((mission) => (
              <div className={classes.male2}>
                <img
                  src={mission.img}
                  alt={mission.num}
                  width='45.82'
                  height='29.08'
                />
                <Typography
                  variant='body2'
                  color='textSecondary'
                  className={classes.mission}
                >
                  {mission.text}
                </Typography>
              </div>
            ))}
          </>
          <Typography variant='h5' gutterBottom className={classes.institute3}>
            Core Value
          </Typography>
          <div className={classes.start}>
            <img
              src={frame9}
              alt='frame9.svg'
              width='168'
              height='142'
              className={classes.right}
            />
            <img
              src={frame10}
              alt='frame10.svg'
              width='168'
              height='142'
              className={classes.right}
            />
            <img
              src={frame11}
              alt='frame11.svg'
              width='168'
              height='142'
              className={classes.right}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.carousel3}>
        <Grid item xs={12}>
          <Typography variant='h5' gutterBottom className={classes.institute2}>
            Degrees Offered in the Institutions
          </Typography>
          <div className={classes.start2}>
            <img src={BEng} alt='Beng.svg' max-width='100%' />
            <img src={BTech} alt='BTech.svg' max-width='100%' />
            <img src={BEdu} alt='BEdu.svg' max-width='100%' />
            <img src={BSc} alt='BSc.svg' max-width='100%' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
