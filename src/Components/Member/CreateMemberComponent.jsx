import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import './Style/createMember.css';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                applicationId:'',
                firstName:'',
                lastName:'',
                gender:'',
                dob: '',
                educationDetails:'',
                maritalStatus:'',
                relationship: ''
        
        }
        this.changeMemberFirstNameHandler= this.changeMemberFirstNameHandler.bind(this);
        this.changeMemberLastNameHandler= this.changeMemberLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEducationDetailsHandler = this.changeEducationDetailsHandler.bind(this);
        this.changeDobHandler= this.changeDobHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
       
        this.saveMemberInformation = this.saveMemberInformation.bind(this);
    }     
    
    componentDidMount() {
        if (this.props.location.application) {
            this.setState({
                applicationId: this.props.location.application.applicationId,
            })
        }
    }
    saveMemberInformation = (e)=>{
        console.log("before passing to create member api application is:"+this.state.applicationId)
        e.preventDefault();
        let member ={ 
             
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            gender: this.state.gender,
            dob: this.state.dob,
            educationDetails: this.state.educationDetails, 
            maritalStatus:this.state.maritalStatus,
            relationship: this.state.relationship
            
        };
        console.log("member infor response"+JSON.stringify(member));
        MemberService.createMember(this.state.applicationId,member)
        .then(res =>{
            this.props.history.push('/member');
        })
    }  

    cancel(){
        this.props.history.push('/member');
    }

    changeMemberFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }

    changeMemberLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }

    changeGenderHandler = (event) =>{
        this.setState({gender: event.target.value});
    }

    changeDobHandler = (event) =>{
        this.setState({dob: event.target.value});
    }

    changeEducationDetailsHandler = (event) =>{
        this.setState({educationDetails: event.target.value});
    }

    changeMaritalStatusHandler = (event) =>{
        this.setState({maritalStatus: event.target.value});
    }

    changeRelationshipHandler = (event) =>{
        this.setState({relationship: event.target.value});
    }

    render() {
        return (
            <div className="member"> 
            <h3 className="text-center">Add Member</h3> 
            <div className="create_member"> 
                       <div className="createForm">
                            <div className = "createForm_body"> 
                                <form >
                                    <div className="form-group"> 
                                        <label><b>Enter First Name:</b></label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value = {this.state.firstName} 
                                            onChange = {this.changeMemberFirstNameHandler}/>
                                    </div>
                                    
                                    <div className="form-group"> 
                                        <label><b>Enter Last Name:</b></label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value = {this.state.lastName} 
                                            onChange = {this.changeMemberLastNameHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label><b> Select Gender:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="1"
                                            checked={this.state.gender === "1"}
                                            onChange = {this.changeGenderHandler}/>Female
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="0"
                                            checked={this.state.gender === "0"}
                                            onChange = {this.changeGenderHandler}/>Male
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="2"
                                            checked={this.state.gender === "2"}
                                            onChange = {this.changeGenderHandler}/>Other
                                            </label>
                                        </div>
                                    
                                    </div> 


                                    <div className="form-group"> 
                                        <label><b>Enter BirthDate(yyyy-mm-dd):</b></label>
                                        <input placeholder="BirthDate" name="dob"
                                            className="form-control" value = {this.state.dob} 
                                            onChange = {this.changeDobHandler}/>
                                    </div>



                                    <div className="form-group"> 
                                        <label><b>Enter Education Details:</b></label>
                                        <input placeholder="Education Details" name="educationDetails"
                                            className="form-control" value = {this.state.educationDetails} 
                                            onChange = {this.changeEducationDetailsHandler}/>
                                    </div>

                                    <div className="form-group"> 
                                        <label><b>Choose Maritial Status:</b></label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="0"
                                            checked={this.state.maritalStatus === "0"}
                                            onChange={this.changeMaritalStatusHandler}/>Married
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="1"
                                            checked={this.state.maritalStatus === "1"}
                                            onChange={this.changeMaritalStatusHandler}/>Unmarried
                                            </label>
                                         </div>
                                    </div>

                                    <div className="form-group"> 
                                        <label><b>Choose Relationship:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="0"
                                            checked={this.state.relationship === "0"}
                                            onChange={this.changeRelationshipHandler}/>Mother
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="1"
                                            checked={this.state.relationship === "1"}
                                            onChange={this.changeRelationshipHandler}/>Father
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="2"
                                            checked={this.state.relationship === "2"}
                                            onChange={this.changeRelationshipHandler}/>Son
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="3"
                                            checked={this.state.relationship === "3"}
                                            onChange={this.changeRelationshipHandler}/>Daughter
                                            </label>
                                        </div>


                                    </div> 
                                    <div className="create_member_Buttons">

                                    <button className = "btn btn-success"  onClick = {this.saveMemberInformation}><i class="far fa-check-circle"></i>&nbsp;&nbsp;Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)}><i class="far fa-times-circle"></i>&nbsp;&nbsp;Cancel</button>
                                    </div>
                                </form>
                                </div>
                             </div>
                        </div>
            </div>
        );
    }
}



export default CreateMemberComponent;