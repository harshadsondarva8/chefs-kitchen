import React from "react";
import { useState } from "react";

const Form = (props) => {
  (() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            // event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const [data, setDate] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    number: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setDate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    if (data.name === "" || data.email === "") {
      e.preventDefault();
      alert("fill up data");
    } else {
      alert(`thank you ${data.name} your data submited`);
    }
  };

  return (
    <form
      name="myForm"
      id="formfil"
      className={props.classx}
      onSubmit={formSubmit}
      noValidate
    >
      <div className="container-fluid row m-auto">
        <div className={props.part}>
          <input
            type="text"
            id="Name"
            name="name"
            value={data.name}
            placeholder="Name"
            className="form-control"
            onChange={InputEvent}
            required
          />
          <label htmlFor="Name" className="fs-6">
            Name
          </label>
          <div className="invalid-feedback">Enter your Name</div>
        </div>
        <div className={props.part}>
          <input
            type="email"
            id="Email"
            name="email"
            value={data.email}
            placeholder="Email"
            className="form-control"
            onChange={InputEvent}
            required
          />
          <label htmlFor="Email" className="fs-6">
            Email
          </label>
          <div className="invalid-feedback">Enter your mail</div>
        </div>
      </div>
      <div className="row container-fluid m-auto">
        <div className={props.part}>
          <input
            type="date"
            id="Date"
            name="date"
            value={data.date}
            placeholder="Date"
            className="form-control"
            onChange={InputEvent}
            required
          />
          <label htmlFor="Date" className="fs-6">
            Date
          </label>
          <div className="invalid-feedback">Enter your date</div>
        </div>
        <div className={props.part}>
          <input
            type="time"
            id="Time"
            name="time"
            value={data.time}
            placeholder="Time"
            className="form-control"
            onChange={InputEvent}
          />
          <label htmlFor="Time" className="fs-6">
            Time
          </label>
        </div>
      </div>
      <div className="row container-fluid m-auto">
        <div className={props.part}>
          <input
            type="number"
            id="Number"
            name="number"
            value={data.number}
            placeholder="People"
            className="form-control"
            onChange={InputEvent}
            min="0"
            max="10"
            required
          />
          <label htmlFor="Number" className="fs-6">
            Number
          </label>
          <div className="invalid-feedback">Enter your number</div>
        </div>
        <div className={props.submitbtn}>
          <button
            type="submit"
            id="submit"
            className="fontbu form-control btns py-3"
          >
            <span>{props.btn}</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
