import React, { Fragment } from 'react';
import Image from '../../image.jpeg';

const Home = () => {
    return (
        <Fragment>

            <h1 className="cover-heading">Interactive App Home Page</h1>
            <p className="lead">This is an app that enables users to interact with each others posts</p>

            <img src={Image}/>
        </Fragment>
    );
};

export default Home;

