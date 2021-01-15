import React, { Component } from 'react';
import ApplicationService from '../../Services/ApplicationService';
import UserService from '../../Services/UserService';
import './Style/LoginUserComponentStyle.css';
let userId;
class CreateUserComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
                // userId:'',
                userName:'',
                password:'',
                role:'',
                
            }
            

            this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
            this.changePasswordHandler = this.changePasswordHandler.bind(this);
            this.changeRoleHandler = this.changeRoleHandler.bind(this);
            this.saveUser = this.saveUser.bind(this);

        }
        
        saveUser = (e)=>{
            e.preventDefault();
            let user ={ 
                userName: this.state.userName, 
                password: this.state.password,
                role: this.state.role ==="admin"? 0: 1 
                
            };

            console.log(JSON.stringify(user));
            
            UserService.createUser(user).then(userResponse =>{
                this.props.history.push('/');
                console.log(JSON.stringify(userResponse))
                console.log(userResponse.data.userId)  
                userId=userResponse.data.userId;
                console.log(userId);           
                // console.log(userResponse.body);    
                }).then(response=>{
                    console.log(userId);              
                    ApplicationService.createApplication(userId).then(applicationResponse=>{
                    console.log(JSON.stringify(applicationResponse));
                    
                    })
                })
            
         }  

            
        cancel(){
            this.props.history.push('/user');
        }

        changeUserNameHandler = (event) =>{
            this.setState({userName: event.target.value});
        }
    
        changePasswordHandler = (event) =>{
            this.setState({password: event.target.value});
        }
    
        changeRoleHandler = (event) =>{
            this.setState({role: event.target.value});
        }

        render() {
            return (
               
                <div className="createUser_container">
               
                        {/* <div className="row">     */}
                        <div className='login'>                        
                            <h3 className="text-center" style={{width:"100%", color:"white"}}><i class="fas fa-users"></i>Registration</h3>
                            <div  className = "card col-md-8 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className="form-group"> 
                                            <label><b>Enter User Name:</b></label>
                                            <input placeholder="User Name" name="userName"
                                                className="form-control" value = {this.state.userName} 
                                                onChange = {this.changeUserNameHandler}/>
                                        </div>
                                        
                                        <div className="form-group"> 
                                            <label><b>Enter Password:</b></label>
                                            <input placeholder="Password" name="password"
                                                className="form-control" value = {this.state.password} 
                                                onChange = {this.changePasswordHandler}/>
                                        </div>
                                        <div className="form-group"> 
                                        <label><b>Choose Role:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Admin"
                                            checked={this.state.role === "Admin"}
                                            onChange={this.changeRoleHandler}/>Admin
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="User"
                                            checked={this.state.role === "User"}
                                            onChange={this.changeRoleHandler}/>User
                                            </label>
                                         </div>
                                    </div>

                               <div className="buttons">

                                    <button className = "btn btn-success" onClick = {this.saveUser} 
                                    
                                    >
                                        <i class="fas fa-user-plus"></i>Register</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} 
                                    
                                    ><i class="far fa-times-circle"></i>Cancel</button>
                               </div>
                                    </form>
                                </div>
                            </div>
                         </div>
                     {/* </div> */}
                  </div>
                //  </div>
                );
    
             }
}

export default CreateUserComponent;
    