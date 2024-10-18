import UserClass from "./userclass";
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props);
console.log(" the parent called");
    }
componentDidMount(){
    console.log(" parent mount");

}
    render(){
        console.log(" this is inside the parent render");
        return(<>
            <div>
                <h1> About us</h1>
                <UserClass name={"Ram"} age={33} email={"Ram@gmail.com"} mobile={8232832} />
        
                <p> Adress : kurnool district 518004
                    abdul khan estate
                </p>
            </div>
            </>);

    }

}

export default About;