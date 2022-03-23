import React, { Component } from 'react';
import './App.scss';
import reactSvg from './assets/react.svg';
import { categories as data } from './backend/data';
import Card from './components/Card';
export default class App extends Component {
  render() {
    return (
      <>
        <img src={reactSvg} className="top-img" alt="reactjs" />
        <section className="menu-container">
          <div className="bars"></div>
          <section className="top">Languages</section>
          <section className="bottom">
            {data.map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </section>
        </section>
      </>
    );
  }
}
