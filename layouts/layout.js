import React from 'react';
import Header from 'components/header';

export default function Layout(props) {
  console.log('layout');
  return (
    <div>
      <Header />

      <div id="main" className="fixed inset-0 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
}
