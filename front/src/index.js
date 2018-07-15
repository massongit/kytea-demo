import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "./reducers"
import App from "./containers/App"
import "bootstrap/dist/css/bootstrap.css"

process.on("uncaughtException", er => {
    alert("エラーが発生しました！\n" + er.message)
})

// ルート要素を表示する
render((
    <Provider
        store={createStore(rootReducer)}
    >
        <App/>
    </Provider>
), document.getElementById("root"))
