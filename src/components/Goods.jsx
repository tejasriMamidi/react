import React from 'react';
import {Link,Route, useHistory,useRouteMatch,Prompt} from "react-router-dom"
import { useState } from "react";
import Hello from './Hello';
function Goods() {
    const { url,path} = useRouteMatch()
    const [state, setState] = useState(false)
    return (
        <div>
            <Prompt when={state === "goodmorning"} message={(location)=> `are you sure ${location.pathname}`}/>
             <h1>Hello Beautifull!!</h1>
            <Link to={`${url}/hello`}>
                hello
            </Link>
            <Route path={`${path}/hello`} exact>
              <Hello/>
            </Route>
        </div>
    )
}

export default Goods
