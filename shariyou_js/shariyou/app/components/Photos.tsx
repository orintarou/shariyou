import React, {Component} from 'react';


export default class Photos extends Component{
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    event.preventDefault();
    alert("hi");
  }

  render(){
    return(
        <div className="font-serif flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div>
            Describe your Art.
          </div>
          <div>Input your photos!</div>
          <div>
            - shariyou
          </div>
        </div>
    )
  }
}