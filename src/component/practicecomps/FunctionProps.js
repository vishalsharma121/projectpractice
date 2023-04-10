function FucProp(props){
    return(
        <div class="text-center">
            <h1>This is Function as Props Component</h1>
            <button onClick={()=>props.data()}>Call detat function</button>
        </div>
    )
}
export default FucProp;