

import React, { Component } from 'react'  
import axios from 'axios';  
import { Pie } from 'react-chartjs-2';  
import { faMale } from '@fortawesome/free-solid-svg-icons';
export class Chart extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  
        }  
        componentDidMount() {  
                axios.get('http://localhost:8081/api/member')  
                        .then(res => {  
                                console.log(res);  
                                const ipl = res.data; 
                                // let firstName = [];  
								// let age = [];  
								let Gender = [];
								let cnt = [];
								let count=0;
								let count1=0;
								let count2=0;
                                ipl.forEach(record => {  
								
									Gender.push(record.gender);
								// 	if(record.gender==="Male")
								// 	count=count+1;
								//    if((gender.push(record.gender))==="0")
								// 	 count=count+1;
								// 	 else if((gender.push(record.gender))==="1")
								// 	 count1=count1+1;
								// 	 else
								// 	 count2=count2+1;

								// 	 console.log(count);
                                        
								});  


								
								console.log(count);
								console.log(count1);
								cnt[0]=2;
								cnt[1]=50;
								cnt[2]=48;
                                this.setState({  
                                        Data: {  
										
											labels: Gender,
												//labels: firstName,  
												// label:"Male",
												// label:"Female",
												// label:"Other",
                                                datasets: [  
                                                        {  
                                                                label: 'IPL 2018/2019 Top Run Scorer',  
																
																data:cnt,
                                                                backgroundColor: [  
                                                                        "#3cb371",  
                                                                        "#0000FF",  
                                                                        "#9966FF",  
                                                                        "#4C4CFF",  
                                                                        "#00FFFF",  
                                                                        "#f990a7",  
                                                                        "#aad2ed",  
                                                                        "#FF00FF",  
                                                                        "Blue",  

                                                                        "Red"  

                                                                ]  

                                                        }  

                                                ]  

                                        }  

                                });  

                        })  
        }  
        render() {  
                return (  
                        <div>  

                                <Pie  
                                      
                                        data={this.state.Data}  

                                        options={{ maintainAspectRatio: false }} />  

                        </div>  

                )  
        }  
}  

export default Chart;