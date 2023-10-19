import React, { useState } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [StudentData] = useState([
    { Name: "john", Age: 26, Course: "MERN", Batch: "October", Change: "Edit" },
    { Name: "Doe", Age: 25, Course: "MERN", Batch: "November", Change: "Edit" },
    {
      Name: "Arbab",
      Age: 24,
      Course: "MERN",
      Batch: "April",
      Change: "Edit",
    },
    {
      Name: "Bharat",
      Age: 22,
      Course: "MERN",
      Batch: "April",
      Change: "Edit",
    },
    {
      Name: "yajat",
      Age: 23,
      Course: "MERN",
      Batch: "April",
      Change: "Edit",
    },
    {
      Name: "Nitin",
      Age: 23,
      Course: "MERN",
      Batch: "Jun",
      Change: "Edit",
    },
    {
      Name: "Harsh",
      Age: 24,
      Course: "MERN",
      Batch: "October",
      Change: "Edit",
    },
  ]);
  return (
    <>
      <div className="student-record">
        <div className=" tabletop">
          <header>
            <div className="stud">Sudents Details</div>
            <button type="submit" className="add">
              Add new Students
            </button>
          </header>
        </div>
        <div className="table-block">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>

            {StudentData.map((data, index) => {
              return (
                <div className="data-block">
                  <tr key={index}>
                    <td>{data.Name}</td>
                    <td>{data.Age}</td>
                    <td>{data.Course}</td>
                    <td>{data.Batch}</td>
                    <td>
                      <Link to="#">{data.Change}</Link>
                    </td>
                  </tr>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Student;
