import React from 'react';

import '../../styles/ui/header.scss';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-content">
            <h1>dynaware</h1>
            <h2>NAO Challenge 2023</h2>
            <p> di Robotica dell'IIS Alessandro Volta di Pescara.</p>
        </div>
        <img src="https://i.postimg.cc/qRwr1FJz/a5cb68e3-c67f-4d9f-a1ab-1a93d90e6a5a.png"></img>
      </header>
    );
  }
}