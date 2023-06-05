import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../components/common/Button";
import TextField from "../components/common/TextField";
import { addUser } from "../redux/userSlice";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fName: '',
    lName: '',
    status: "Active"
  });

  const handleAddUser = () => {
    if(values.fName === "") return alert("Enter First Name");
    if(values.lName === "") return alert("Enter Last Name");
    dispatch(addUser({
      id: uuidv4(),
      fName: values.fName,
      lName: values.lName,
      status: values.status
    }));
    setValues({ fName: '', lName: '', status : "Active" });
    navigate('/');
  }

  const cancelAdduser = () => {
    navigate('/')
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="First Name"
        value={values.fName}
        onChange={(e:any) => setValues({ ...values, fName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter First Name' }}
      />
      <br />
      <TextField
        label="Last Name"
        value={values.lName}
        onChange={(e:any) => setValues({ ...values, lName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Last Name' }}
      />
      <div className="mb-4">
        <label className="block font-semibold mb-2">Status:</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Active"
              checked={values.status === 'Active'}
              onChange={() => setValues({ ...values, status: 'Active' })}
              className="form-radio"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              value="Inactive"
              checked={values.status === 'Inactive'}
              onChange={() =>setValues({ ...values, status: 'Inactive' })}
              className="form-radio"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
      </div>
      <Button onClick={handleAddUser}>Submit</Button>
      <Button onClick={cancelAdduser}>Cancel</Button>

    </div>
  )
}

export default AddContact