'use client'

import Image from "next/image";
import React, {Component} from 'react';
import Intro from './components/Intro';
import Photos from './components/Photos';
import Greeting from './components/Greeting';


function selectPage(page, handlePageChange){
  return (page === "one") ? <Intro handleClick={handlePageChange}/> :
    (page === "two") ? <Photos handle/> :
    <Greeting/>
}

export default class Page extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      page: "one"
    }

    this.handlePageChange = this.handlePageChange.bind(this);

  }

  handlePageChange(){
    event.preventDefault();
    
    this.setState({
      page: (page === "one") ? "two" : "three"
    })
  }

  render(){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {selectPage(this.state.page, () => this.handlePageChange())}
      </div>
    );    
  }
}
