import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import TextField from "../components/common/TextField";
import { editUser } from "../redux/userSlice";

const EditContact = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store : any) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user : any) => user.id === params.id);
  const { fName, lName, status } = existingUser[0];
  const [values, setValues] = useState({
    fName,
    lName,
    status,
  });

  const handleEditUser = () => {
    // setValues({ fName: "", lName: "" });
    dispatch(
      editUser({
        id: params.id,
        fName: values.fName,
        lName: values.lName,
        status: values.status,
      })
    );
    navigate("/");
  };

  const cancelEditContact = () => {
    navigate("/")
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="fName"
        value={values.fName}
        onChange={(e) => setValues({ ...values, fName: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter First Name" }}
      />
      <br />
      <TextField
        label="lName"
        value={values.lName}
        onChange={(e) => setValues({ ...values, lName: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Last Name" }}
      />
      <div className="mb-4">
        <label className="block font-semibold mb-2">Status:</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Active"
              checked={values.status === "Active"}
              onChange={() => setValues({ ...values, status: "Active" })}
              className="form-radio"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              value="Inactive"
              checked={values.status === "Inactive"}
              onChange={() => setValues({ ...values, status: "Inactive" })}
              className="form-radio"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
        <Button onClick={handleEditUser}>Save</Button>
        <Button onClick={cancelEditContact}>Cancel</Button>

      </div>
    </div>
  );
};

export default EditContact;
