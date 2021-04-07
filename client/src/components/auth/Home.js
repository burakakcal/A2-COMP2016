import React, { Fragment } from 'react';
import Image from '../../image.jpeg';

const Home = () => {
    return (
        <Fragment>

            <h1 className="cover-heading">Interactive App Home Page</h1>
            <p className="lead">This is an app that enables users to interact through upvoting/downvoting their posts' </p>

            <img src={Image}alt="interactive app"/>
        </Fragment>
    );
};

export default Home;

