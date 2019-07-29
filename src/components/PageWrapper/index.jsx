import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import Props from './props';
import Image from '../Image';

const useStyles = makeStyles({
  logo: {
    position: 'absolute',
    top: '5rem',
  },
  card: {
    width: 585,
    height: 515,
    padding: '2rem 4rem',
    borderRadius: '36.84px',
  },
});

const PageWrapper = ({
  children,
  maxWidth,
  className,
}) => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={maxWidth}
      className={className}
    >
      <Grid
        container
        className={classes.logo}
      >
        <Grid item xs={3}>
          <Image src="logo" />
        </Grid>
      </Grid>
      <Grid
        container
        className="Login__grid"
      >
        <Grid
          item
          xs={12}
          className="x-center"
        >
          <Card className={classes.card}>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

PageWrapper.propTypes = Props;
export default PageWrapper;
