import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
  
    document.querySelector(".bg-change").style.backgroundColor = "black"
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid className="ml-[10%] mt-[10%]" container spacing={1}>
            {this.state.images.map((image) => {
              return(
                <img className="width-[80px]" key={image.src} src={image.src}/>
              )
            })}
          </Grid>
        </Box>
        </div>
      </div>
    )
  }
}