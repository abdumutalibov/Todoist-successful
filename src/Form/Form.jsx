import React from "react";

export default function Form() {
  const [data, setData] = React.useState([{ name: "Jeevan", role: "Admin" }]);
  
  const handleAdd = () => {
    setData([...data, { name: "", role: "" }]);
  };
  const handleChange = (e,index) => {
      const tempData = data;
      tempData[index][e.target.name] = e.target.value
    setData([tempData]);
  };
  return (
    <div className="container my-5">
      <form action="">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={2}>
                <button className="btn btn-success" onClick={handleAdd}>
                  Add
                </button>
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    className="form-control"
                    required
                    defaultValue={item.name}
                    onChange={(e) => handleChange(e,index)}
                    name='name'
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    required
                    defaultValue={item.role}
                    onChange={(e)=> handleChange(e,index)}
                    name='role'
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>
                <button
                //   type="submit"
                  onClick={() => console.log(data)}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
