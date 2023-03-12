import Table from "react-bootstrap/esm/Table";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Filter() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      console.log("filter into customer database");
      loadData();
    }, []);
  
    const loadData = async () => {
      const request = await axios.get(`http://localhost:8080/all`);
      const response = await request.data;
      setData(response);
      setFilter(response);
    };
  
    const handleSearch = (e) => {
      const search = e.target.value.toLowerCase();
      const searchData = filter.filter((item) =>
        item.name.toLowerCase().includes(search) ||
        item.city.toLowerCase().includes(search) ||
        item.pincode.toString().toLowerCase().includes(search)
      );
      setData(searchData);
      setQuery(search);
    };
  
    return (
      <>
        <div className="row mt-3">
          <div className="col-md-12 mt-3 mb-3">
            <h3 className="mb-3">Search record Datatable in React Js</h3>
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                value={query}
                className="form-control"
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
          </div>
  
          <div className="col-md-12">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Pincode</th>
                </tr>
              </thead>
              <tbody>
                {data.map((u, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{u.name}</td>
                    <td>{u.city}</td>
                    <td>{u.pincode}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
  