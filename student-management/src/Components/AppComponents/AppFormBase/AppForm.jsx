import React from "react";

const AppForm = () => {
  
  const studentObject = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  };
  

  return (
    <div className="row">
      <div className="col-4">
        <label for="name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="fname"
          placeholder="Enter first name"
          name="fname"
        />
      </div>
      <div className="col-4">
        <label for="rollno">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lname"
          placeholder="Enter last name"
          name="lname"
        />
      </div>
      <div className="col-4">
        <label for="dateofbirth">DOB:</label>
        <input
          type="date"
          className="form-control"
          id="dateofbirth"
          placeholder="Enter Roll Number"
          name="dateofbirth"
        />
      </div>
      <div className="col-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppForm;
