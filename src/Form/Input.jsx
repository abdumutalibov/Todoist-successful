import React, { useState } from "react";

const Input = () => {
  const [serviceList, setServiceList] = useState([{ service: "" },{ service1: "" }]);

  console.log(serviceList);

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list)
  };

  return (
    <div>
      <label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="service">
            <div>
              <input name="service" type="text" id="service" required 
                onChange={(e) => handleServiceChange(e, index)}
                />
              <input
                name="service"
                type="text"
                id="service"
                required
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  onClick={handleServiceAdd}
                  type="button"
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div>
              {serviceList.length > 1 && (
                <button
                  onClick={() => handleServiceRemove(index)}
                  type="button"
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </label>
    </div>
  );
};

export default Input;
