import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
           Info:{
            name:"dummy",
            email:"Muppasani",
            mobile:"9052"

           }
        }
       console.log(" this is child constr");
        
    }
   async componentDidMount(){
    const data= await fetch("https://api.github.com/users/Muppasanipraneeth");
    const json=await data.json();
    console.log(json);
    this.setState({Info:json});
    }
    // updateName=()=>{
    //     this.setState({name :"RamCharan"});

    // }
    // increment=()=>{
    //     this.setState((preState)=>({
    //         count:preState.count+1
    //     }))
    // }
    // <button onClick={()=>{
    //     this.setState({count:this.state.count+1})
    //   }} >click</button>
  render() {
    console.log(" this is child inside render");
    const{name , email,location,mobile}=this.state.Info;
    return (
        
      <>
        <div className="user-details">
          <h3>Name: {name}</h3>
          <h3>Age: {}</h3>
          <h3>Email: {email}</h3>
          <h3>Mobile: {mobile}</h3>
          <h3>Location: {location}</h3>
          
          {/* <button onClick={this.updateName}> updateName</button>
          <h5> the count {count}</h5>
          <button onClick={this.increment}>click</button>
       */}
        </div>
      </>
    );
  }
}

export default UserClass;
