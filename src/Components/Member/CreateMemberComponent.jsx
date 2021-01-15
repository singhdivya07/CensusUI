import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import './Style/createMember.css';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                firstName:'',
                lastName:'',
                age:'',
                gender:'',
                dob: '',
                educationDetails:'',
                maritalStatus:'',
                relationship: ''
        
        }
        this.changeMemberFirstNameHandler= this.changeMemberFirstNameHandler.bind(this);
        this.changeMemberLastNameHandler= this.changeMemberLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEducationDetailsHandler = this.changeEducationDetailsHandler.bind(this);
        this.changeDobHandler= this.changeDobHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
       
        this.saveMemberInformation = this.saveMemberInformation.bind(this);
    }     

    saveMemberInformation = (e)=>{
        e.preventDefault();
        let memberInformation ={ id: null, firstName: this.state.firstName, 
            LastName: this.state.LastName,age: this.state.age,gender: this.state.gender,
            dob: this.state.dob,educationDetails: this.state.educationDetails, 
            maritalStatus: this.state.maritalStatus, relationship: this.state.relationship
        };
        console.log(JSON.stringify(memberInformation));
        MemberService.createMember(memberInformation).then(res =>{
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

    changeAgeHandler = (event) =>{
        this.setState({age: event.target.value});
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
                {/* <div className="container">*/}
                    {/* <div className="row"> */}
                    
                        {/* <div className = "card col-md-8 offset-md-3 offset-md-3"> */}
                       <div className="createForm">
                            <div className = "createForm_body"> 
                             {/* card-body */}
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
                                        <label><b>Enter age:</b></label>
                                        <input placeholder="Age" name="age"
                                            className="form-control" value = {this.state.age} 
                                            onChange = {this.changeAgeHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label><b> Select Gender:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Female"
                                            checked={this.state.gender === "Female"}
                                            onChange = {this.changeGenderHandler}/>Female
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Male"
                                            checked={this.state.gender === "Male"}
                                            onChange = {this.changeGenderHandler}/>Male
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Other"
                                            checked={this.state.gender === "Other"}
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
                                            <input type="radio"value="Married"
                                            checked={this.state.maritalStatus === "Married"}
                                            onChange={this.changeMaritalStatusHandler}/>Married
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Unmarried"
                                            checked={this.state.maritalStatus === "Unmarried"}
                                            onChange={this.changeMaritalStatusHandler}/>Unmarried
                                            </label>
                                         </div>
                                    </div>

                                    <div className="form-group"> 
                                        <label><b>Choose Relationship:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Mother"
                                            checked={this.state.relationship === "Mother"}
                                            onChange={this.changeRelationshipHandler}/>Mother
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Father"
                                            checked={this.state.relationship === "Father"}
                                            onChange={this.changeRelationshipHandler}/>Father
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Son"
                                            checked={this.state.relationship === "Son"}
                                            onChange={this.changeRelationshipHandler}/>Son
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="Daughter"
                                            checked={this.state.relationship === "Daughter"}
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
                        {/* </div> */}
                   {/* </div>*/}
                 </div>
            </div>
        );
    }
}



export default CreateMemberComponent;