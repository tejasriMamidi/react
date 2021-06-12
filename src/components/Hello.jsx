import React from 'react';
import {Link,Route, useHistory,useRouteMatch,Prompt, useLocation} from "react-router-dom"
import { useState } from "react";
import Page from "./Page"
function Hello() {
    const history = useHistory()
    const { url, path } = useRouteMatch()
    const location = useLocation()
    const item = new URLSearchParams(location.search)
    const [state, setState] = useState(false)
    return (
        <div>
            <Prompt when={state} message={(location)=> `are you sure ${location.pathname}`}/>
            <div>
                <h1>Hello</h1>
                <br />
                <br />
                <h1>Page {item.get("page")}</h1>
                <Page numbers={ item.get("page")}/>
                <button onClick={() => {
                     return history.push(`${url}?page=1`)
                }}>Page 1</button>
              <button onClick={() => {
                     return history.push(`${url}?page=2`)
                }}>Page 2</button></div>
              <button onClick={() => {
                     return history.push("/About/goods")
                }}>go Back</button>
        </div>
    )
}

export default Hello
