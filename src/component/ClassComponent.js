
import React, {Component} from 'react';

class ClassComp extends Component {

    constructor()
    {
    //     super();
    //     this.state={
    //         data:"vishal"
    //     }
    // }
    // BtnClick(){
    //     // alert('vis')
    //     this.setState({data:'sidhu'});
    // }

    super();
    this.state={
        data:1
    }
}
BtnClick(){
    // alert('vis')
    this.setState({data:this.state.data+1});
    console.warn('run click')
}

    render()
    {
    return(
        <>
       <h1>hello world {this.state.data}</h1> 
       <button onClick={()=>this.BtnClick()}>Update Data</button>
    </>
    );
    }
}
export default ClassComp;