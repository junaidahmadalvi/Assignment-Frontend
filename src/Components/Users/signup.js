import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';


const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
// const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

function SignUp() { 
  const navigate= useNavigate();
 const [name,setName]=useState("");
 const [email, setEmail] = useState('');
 const [emailErr, setEmailErr] = useState(false);
 const [cell,setCell]=useState("");
 const [age,setAge]=useState("");
 const [error,setError]= useState(false);
function saveData()
{
  let data={name,email,cell,age}
console.log(data);

  if(!name || !email || !cell || !age)
  {
    setError(true)
    return false
  }
  // const validate = () => {
    if (!validEmail.test(email)) {
       setEmailErr(true);
    }else{  
      setEmailErr(false);  
    }
   

  fetch("http://localhost:7000/addUser", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
     console.warn("resp",resp);
     console.warn("data",data);
    resp.json().then((result)=>{
      console.log("result",result)

      alert(result?.message)
                
                if(result.message==="Registered Successfully")
                {
                navigate("/")

                }

    })

  })

}
  return (

    <Form style={{width: "500px",margin: "0px auto",padding:"30px",marginTop: "40px", border: "1px solid lightgray ",borderRadius: "10px"}}>
            <h1 style={{color: "#0072b1",fontWeight: "900"}} >Sign Up</h1>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label className="label">Name</Form.Label>
      <Form.Control type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}   placeholder="Username" />
      {error && !name &&(<span className='error'>Required name</span>)}
    </Form.Group>
      <br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="label">Email address</Form.Label>
      <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="name@gmail.com" />
      {error && !email &&(<span className='error'>Required Email</span>)}
      {emailErr && <span className='error'>Email is invalid</span>}

    </Form.Group>

    
    <br></br>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label className="label">Phone Number</Form.Label>
      <Form.Control type="text" name="cell" value={cell} onChange={(e)=>{setCell(e.target.value)}}   placeholder="Phone Number" />
      {error && !cell &&(<span className='error'>Required Phone Number</span>)}
    </Form.Group>
      <br></br>
    
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label className="label">Age</Form.Label>
      <Form.Control type="number" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}   placeholder="Age" />
      {error && !age &&(<span className='error'>Required Age</span>)}
    </Form.Group>
      <br></br>
    

      <br></br>
    <br></br>

    <Button variant="primary" type="button" onClick={saveData} style={{"fontWeight": "500","borderRadius":"24px","fontSize": "18px"}} >
      Submit
    </Button>

  </Form>



  );
  
}
export default SignUp;








