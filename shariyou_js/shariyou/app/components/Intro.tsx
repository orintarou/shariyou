import React, {Component} from 'react';


export default class Intro extends Component{

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
          <form>
            <textarea className="text-s w-[50vw] mt-[-50vh]" placeholder="Hi!  I'm an aspiring hip hop artist from NYC.  My music is heavily practiced on beats that are sad with lofi elements.
            I have about 10 songs ready to release."></textarea>
            <input onClick={this.props.handleClick} className="font-sans text-xs w-[100px] h-[20px] m-[20px] float-right border-[.2px] hover:bg-[tomato] opacity-[50%]" type="submit"/>
          </form>
          <div>
            - shariyou
          </div>
        </div>
    )
  }
}