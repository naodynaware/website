import React from 'react';

import '../../styles/ui/header.scss';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-content">
            <h1>dynaware</h1>
            <h2>NAO Challenge 2023</h2>
        </div>
      </header>
    );
  }
}