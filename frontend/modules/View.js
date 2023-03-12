import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function View() {
  const [data, setData] = useState({
    name: "",
    city: "",
    pincode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/one/${id}`);
    setData(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Customer Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Customer id : {data.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {data.name}
                </li>
                <li className="list-group-item">
                  <b>City:</b>
                  {data.city}
                </li>
                <li className="list-group-item">
                  <b>Pincode:</b>
                  {data.pincode}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}