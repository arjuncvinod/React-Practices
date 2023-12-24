import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id + "-firstName"}>First Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        id={id + "-firstName"}
      />
      <label htmlFor={id + "-lastName"}>Last Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        id={id + "-lastName"}
      />
      <label htmlFor={id + "-email"}>Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        id={id + "-email"}
      />
      <label htmlFor={id + "-comments"}>Comments</label>
      <textarea
        value={formData.comments}
        onChange={handleChange}
        name="comments"
        id={id + "-comments"}
      />
      <input
        type="checkbox"
        id={id + "-isFriendly"}
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id={id + "-unemployed"}
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor={id + "-unemployed"}>Unemployed</label>
        <br />

        <input
          type="radio"
          id={id + "-part-time"}
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor={id + "-part-time"}>Part-time</label>
        <br />

        <input
          type="radio"
          id={id + "-full-time"}
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor={id + "-full-time"}>Full-time</label>
        <br />
      </fieldset>
      <br />

      <label htmlFor={id + "-favColor"}>What is your favorite color?</label>
      <br />
      <select
        id={id + "-favColor"}
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
