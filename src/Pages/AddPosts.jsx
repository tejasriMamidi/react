import React, { useRef} from 'react'
let Store;
function AddPosts() {
    const Nameref = useRef("")
    const Ageref = useRef("")
    const OnSubmitPost = (e) => {
        e.preventDefault()
      Store= localStorage.setItem("post", [JSON.stringify({ "name": Nameref.current.preventDefault, "age": Ageref.current.value })])
        
        console.log(Nameref.current.value, Ageref.current.value)
        Nameref.current.value = " "
        Ageref.current.value = " "
        
  }
    return (
        <React.Fragment>
            <div className="form">
                <h1>Adding Post</h1>
                <p>whole hoho</p>
            <form method="POST" onSubmit={ OnSubmitPost} >
            <label htmlFor="name"> Name </label>
             <input ref={Nameref} type="text"  id="name"/>
            <label htmlFor="age">  Age</label>
             <input ref={Ageref} type="text" id="age" />
              <button type="submit">AddPost</button>
             </form>
            </div>
            <main>
                <ul className="list">

                </ul>
            </main>
            
        </React.Fragment>
    )
}

export default AddPosts
