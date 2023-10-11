import React from "react";
import {Link} from 'react-router-dom';
import PostDetails from "./PostDetails";
import PostView from "./PostView";
const url = 'http://localhost:8900/list';

class Details extends React.Component {
    constructor(){
        super();
        this.state={
            api:""
        }
    }
   
    componentDidMount(){
        fetch(url)
        .then((resp)=>{return resp.json()})
        .then((data)=>{
          this.setState({
            api:data
          })
        })

    }
    render(){
        return (
            <div>
              <PostView listData={this.state.api}></PostView>
            </div>
          );

    }
 
};

export default Details;
