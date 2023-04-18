import React from 'react';
import ReactLoading from 'react-loading';

const Loadind = ({ spinningBubbles, color }) => (
    <ReactLoading  type={spinningBubbles} color="#471CA9" height={367} width={375} style={{margin: '0px auto'}} />
);

export default Loadind;
