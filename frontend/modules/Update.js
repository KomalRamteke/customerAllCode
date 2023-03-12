import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Update() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    city: "",
    pincode: "",
  });
 
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCustomer()
},[]);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/update/${id}`, data);
    console.log("data updated");

    navigate("/");
  };
/*
  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8080/update/${id}`);
    setData(result.data);
  };*/

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8080/update/${id}`);
    setData(prevData => ({
      ...prevData,
      name: result.data.name,
      city: result.data.city,
      pincode: result.data.pincode,

    }));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h4>Update Customer</h4>
            <hr />

            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Enter name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={data.name}
                  name="name"
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Enter city</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={data.city}
                  name="city"
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Enter pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pincode"
                  value={data.pincode}
                  name="pincode"
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Update
              </Button>
              <Link variant="danger" type="submit" to="/">
                cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
