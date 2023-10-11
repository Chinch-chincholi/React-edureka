import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Routing from '../Components/Routing/Routing.js';
//Class component
class App extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         data: "newList"
    //     }
    // }

    // FunEvent(userdata){
    //     return userdata;
    // }
   
    render() {
        return <>
        <Routing></Routing>
            {/* <Header datas = {(dataDisp)=>{this.FunEvent(dataDisp)}}></Header> */}
            {/* <ProductList></ProductList> */}
        </>;
    }
}

export default App;