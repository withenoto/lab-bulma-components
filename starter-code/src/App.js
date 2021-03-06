import React, { Component } from "react";

import Navbar from "./Navbar.js"
import FormField from "./Formfield.js"
import Signup from "./Signup.js";
import Message from "./Message.js";

class App extends Component {

    render() {
        return (
        <div className="App">
        <Navbar/>
        <div className="formfield">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        {/* <Signup/> */}
        {/* <Message/> */}
        </div>
        )
    }
}

export default App;
