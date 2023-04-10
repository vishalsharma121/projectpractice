import React from "react";
class RenderMethoud extends React.Component{
    render(props)
    {
      console.warn('render in console')  
        return(
        
            <div>
                <h1>Render Method {this.props.name}</h1>
            </div>

        )

    }

}
export default RenderMethoud;