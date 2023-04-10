import React from "react"
class Constructor extends React.Component{
    constructor()
    {
        super();
        console.warn('this is constructor')
        this.state={
            data:'vishal'
        }
    }
    // API call here
    render()
    {
        console.warn('this is render')
        return(
            <div>
                <h1>Hello {this.state.data} this is a Class Component</h1>
            </div>
        )
    }
}
export default Constructor;