import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Popover } from 'antd';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
      this.setState({ images: response.data })
    });
  }

  render() {
    let { images } = this.state;
    images = images.slice(0,50);
    document.body.style.setProperty('--rowNum', images.length/5);

    return (
      <div className="grid-container">
        {images.map(image => {
          return (
            <div key={image.id} className="grid-item">
              <Popover 
                content={<div><img src={image.url}/></div>} 
                title={image.title} 
                trigger="click"
                placement="bottom"
              >
                <img src={image.thumbnailUrl}/>
              </Popover>
              </div>
          );
        })}
      </div>
    );
  }
}

export default App;
