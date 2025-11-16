import React, {Component} from 'react';


export default class Photos extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      images: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(){
    event.preventDefault();

    let files = document.querySelector("input").files;
    let images = [];

    for(var i=0; i<files.length; i++){
      let image = document.createElement("img");
      image.src = URL.createObjectURL(files[i]);
      images.push(image);
    }

    this.setState({
      images: images
    });

    alert("uploaded some files");

  }

  render(){
    console.log(this.state.images);
    return(
        <div className="font-sans text-xs flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div>
            <div>Import your IG (images).</div>
            <div>
              <input onChange={this.handleChange} className="mt-[15px] hover:bg-gray-300" type="file" placeholder="images" multiple/>
            </div>
          </div>
        <div>
          {this.state.images.map((item) => {
            return(
              <img src={item.src}/>
            )
          })}
        </div>
      </div>
    )
  }
}