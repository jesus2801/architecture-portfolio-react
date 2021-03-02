import React, {Fragment} from 'react';
import logo from '../images/logo.svg';
import Banner from './Banner';

const Home = () => {
  return (
    <Fragment>
      <Banner
        title="García Architects"
        circleText="professional staff"
        description="Fully professional architectural firm, ready to build the future structure of your dreams"
        logo={logo}
      />
    </Fragment>
  );
};

export default Home;
