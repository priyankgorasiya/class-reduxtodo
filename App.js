
import React,{ Component } from "react";
import { Provider } from "react-redux";
import Display from "./component/Display";

import store from "./store/DataStore";

export default class App extends Component{

  render(){
    return <Provider store={ store }>
      <Display/>
    </Provider>
  }
}