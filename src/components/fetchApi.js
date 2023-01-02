import React, {useState, useEffect}  from 'react';
import { AiOutlineUser, AiOutlineDown } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import dr from "../image/dr.PNG"

function FetchApi(){
    
    const [data, setData] = useState([])

    const apiGet = () => {
        fetch( 'https://jsonblob.com/api/jsonBlob/1055904133357518848' ,{method: 'GET'})
        .then(response => response.json())
        .then(json => {
            console.log(json['waiting']);
            setData(json['waiting'])
        })
    };

    useEffect(()=>{
        apiGet();
    }, []);

    // function getAge(dateString) {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    return (
        <div>
            <div class="nav-table">
                <table id="nav-ul">
                    <tr>
                        <td><img class="img-css" src={dr} alt="react logo" /></td>
                        <td class="nav-td"><AiOutlineDown /></td>
                        <td class="nav-td"><AiOutlineUser /></td>
                    </tr>
                </table>
            </div>
            <div class="search-table-div">
                <table >
                    <tr>
                        <td style={{width:'10%'}} ><h3 style={{color:'#029aec'}}>Waiting List</h3></td>
                        <td style={{width:'20%'}}>
                            <form class="example" >
                                <button type="submit"><BsSearch /></button>
                                <input type="text" placeholder="Search with Name,IP number,Patient ID" name="search2" />
                            </form>
                        </td>
                        <td>
                            <form  action="#" method="post" id="form">
                                <div class="select">
                                    <select name="nameValueSelect" class="select__field" required>
                                    <option value="" selected>Waiting List</option>
                                    <option value="" >Completed</option>
                                    <option value="" >Review Patient</option>
                                    <option value="" >Appointments</option>
                                    <option value="" >Online</option>
                                    <option value="" >Investigation</option>
                                    </select>
                                </div>
                            </form>
                        </td>
                        <td style={{width:'15%'}} ><button class="reg-btn">New Registration</button></td>
                        <td style={{width:'10%'}} ><button class="queue-btn">Add to Queue</button></td>
                    </tr>
                </table>
            </div>
          
           <div>    
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Previous Appoinment</th>
                        <th>Status Tag</th>
                        <th>Action</th>
                    </tr>          
                    {data.map((item) => (
                            <tr>
                                <td>{item.name.toUpperCase()}<p class="p_style">{item.place}</p></td>
                                {/* <td>{getAge(item.age)}/{item.gender ==='Male' ? 'M' : 'F'}</td> */}
                                {<td>{2022-item.age.slice(-4)}/{item.gender === 'Male' ? 'M' : 'F'}</td>}
                                <td>{item.previous_appointment}</td>
                                <td>
                                    <table class ='inside_table'>
                                        <tr>
                                            <td><button class={item.vitals === "1" ? "vitals-css" : "button button4"}>Vitals</button></td>
                                            <td><button class={item.history === "1" ? "vitals-css" : "button button4"}>History</button></td>
                                            <td><button class={item.diagnosis === "1" ? "vitals-css" : "button button4"}>Diagnosis</button></td>
                                            <td><button class={item.prescription === "1" ? "vitals-css" : "button button4"}>Prescription</button></td>
                                        </tr>
                                    </table>
                                    <table class ='inside_table'>
                                        <tr>
                                            <td>
                                                <h6 style={{color:'red'}}>
                                                    { item.critical_on !== null ? <GoPrimitiveDot/> : null }
                                                    { item.critical_on !== null ? item.critical_on : null }
                                                </h6>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td>⥯</td>
                            </tr>
                       
                    ))}
                </table>
                
           </div>
        </div>
       
    );
}

export default FetchApi;
