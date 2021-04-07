
function EyesOnMe(){
    function focus(){
        console.log("Good!")
    }
    function blur(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={focus} onBlur={blur}>Eyes On Me</button>
    )
}

export default EyesOnMe
