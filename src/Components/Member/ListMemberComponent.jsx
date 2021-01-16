import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import { createBrowserHistory } from 'history';
import './Style/listMember.css';
export const history = createBrowserHistory();

class ListMemberComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            memberInformation: [],
            applicationId:''
        }
        this.addMemberInformation = this.addMemberInformation.bind(this);
        this.editMemberInformation = this.addMemberInformation.bind(this);
        this.deleteMemberInformation = this.deleteMemberInformation.bind(this);
        this.viewMemberInformation = this.viewMemberInformation.bind(this);
    }
    componentDidMount(){
        MemberService.getMember()
        .then((res) => {
            this.setState({memberInformation: res.data});
            
        });
        
            if (this.props.location.user) {
                this.setState({
                    applicationId: this.props.location.user.userId,
                })
                
            }
        
    }


    addMemberInformation(){
        this.props.history.push({
            pathname:'/add-member',
            application:{applicationId:this.state.applicationId}
            
        });
        console.log(this.state.applicationId);
    }

    editMemberInformation(memberId){
        this.props.history.push(`/update-member/${memberId}`)
    }

    deleteMemberInformation(memberId){
        MemberService.deleteMember(memberId).then((res) => {
            this.setState({memberInformation: this.state.memberInformation.filter( member => member.memberId !== memberId)});
            
        });
    }

    viewMemberInformation(memberId){
        this.props.history.push(`/view-member/${memberId}`);
    }


    render() {
        return (
        <div className="list_member">
                <div className="list_member_heading">
                    <h2 className="h3" >Member List</h2>
                </div>
                <div className="list_member_tableB">
        
<table className="list_member_tRow" >
    <thead>
                            <tr>                                
                                <th>Member Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Educational Details</th>
                                <th>Marital Status</th>
                                <th>Relationship</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.memberInformation.map(
                                    member => 
                                    <tr key= {member.memberId}>
                                        <td>{member.memberId}</td>
                                        <td>{member.firstName}</td>
                                        <td>{member.lastName}</td>
                                        <td>{member.age}</td>
                                        <td>{member.gender}</td>
                                        <td>{member.dob}</td>
                                        <td>{member.educationDetails}</td>
                                        <td>{member.maritalStatus}</td>
                                        <td>{member.relationship}</td>
                                        <td>
                                            <button onClick = {()=>this.editMemberInformation(member.memberId)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteMemberInformation(member.memberId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewMemberInformation(member.memberId)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }
                    </tbody>

                </table>

            </div>
             <button className="list_member_btn" onClick={this.addMemberInformation}>Add Member</button>
         </div>
         );
     }
}

export default ListMemberComponent;