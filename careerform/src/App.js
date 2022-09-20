import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('forms');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state 
  const [forms, setforms]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [phoneno, setPh]=useState('');
  const [state, setSt]=useState('');
  const [country, setCo]=useState('');
  const [skills, setSkill]=useState('');
  const [degree, setDeg]=useState('');
  const [experience, setExp]=useState('');
  const [contact, setCont]=useState('');

  // form submit event
  const handleAddFormSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let form={
      name,
      email,
      phoneno,
      state,
      country,
      skills,
      degree,
      experience,
      contact
    }
    setforms([...forms,form]);
    setName('');
    setEmail('');
    setPh('');
    setSt('');
    setCo('');
    setDeg('');
    setExp('');
    setCont('');
  }

  // delete from LS
  const deleteForm=(name)=>{
    const filteredForms=forms.filter((element,index)=>{
      return element.name !== name
    })
    setforms(filteredForms);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('forms',JSON.stringify(forms));
  },[forms])

  return (
    <div className='wrapper'>
      <h1>Registration Form</h1>
    
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddFormSubmit}>
            <label>Full Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label>Phone no.</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPh(e.target.value)} value={phoneno}></input>
            <br></br>
            <label>State</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSt(e.target.value)} value={state}></input>
            <br></br>
            <label>Country</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setCo(e.target.value)} value={country}></input>
            <br></br>
            <label>Skills</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSkill(e.target.value)} value={skills}></input>
            <br></br>
            <label>Degree</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDeg(e.target.value)} value={degree}></input>
            <br></br>
            <label>Experience</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setExp(e.target.value)} value={experience}></input>
            <br></br>
            <label>Contact</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setCont(e.target.value)} value={contact}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {forms.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Skills</th>
                    <th>Degree</th>
                    <th>Experience</th>
                    <th>Contact</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View forms={forms} deleteForm={deleteForm}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setforms([])}>Remove All</button>
          </>}
          {forms.length < 1 && <div>No entries are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
