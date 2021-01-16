import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';

class ViewMemberComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            member: {}
        }

    }

    componentDidMount(){
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        })
    }

    render() {
        return (
           
            
            <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center", 
                        flexDirection:"column",
                        backgroundColor:"grey",
                        height:"100vh"}}> 

                    <h3 className = "text-center"  style={{padding:"10px", color:"white"}}>View Member Details</h3>
                    
               <div className= "card col-md-6 offset-md-3">
                    <div className= "card-body">
                        <div className = "row">
                            <label>First Name: </label>
                            <div>{this.state.member.firstName}</div>
                        </div>

                        <div className = "row">
                            <label>Last Name: </label>
                            <div>{this.state.member.lastName}</div>
                        </div>

                        <div className = "row">
                            <label>Age: </label>
                            <div>{this.state.member.age}</div>
                        </div>
                        <div className = "row">
                            <label>Gender: </label>
                            <div>{this.state.member.gender}</div>
                        </div>
                        <div className = "row">
                            <label>BirthDate: </label>
                            <div>{this.state.member.bod}</div>
                        </div>

                        <div className = "row">
                            <label>Education Deatils: </label>
                            <div>{this.state.member.educationDetails}</div>
                        </div>

                        <div className = "row">
                            <label>Marital Status: </label>
                            <div>{this.state.member.maritalStatus}</div>
                        </div>

                        <div className = "row">
                            <label>Relationship: </label>
                            <div>{this.state.member.relationship}</div>
                        </div>
                           
                    </div>
                </div>
            </div>

        );
    }
}

export default ViewMemberComponent;
