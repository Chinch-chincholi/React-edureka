import React from 'react';
const url = 'http://localhost:8900/list';
class PostDetails extends React.Component{

    constructor(){
        super()
        this.state={
            topic:''
        }
    }

    componentDidMount(){
        console.log(this.props);
        fetch(`${url}/${this.props.match.params.id}`)
        .then((resp)=>{return resp.json()})
        .then((data)=>{
            this.setState({
                topic:data
            })
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.topic.title}</h3>
            </div>
        )
    }
   
}

export default PostDetails;