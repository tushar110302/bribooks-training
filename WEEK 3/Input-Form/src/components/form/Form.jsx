import { useState } from "react";
import "./index.css";

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    text_area: "",
    is_online: false,
    is_offline: false,
    gender: "",
    fav_car: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    } else if (
      formData.first_name.length < 3 ||
      formData.first_name.length > 15
    ) {
      newErrors.first_name =
        "First name must be at least 3 characters and at most 15 characters";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    } else if (
      formData.last_name.length < 3 ||
      formData.last_name.length > 15
    ) {
      newErrors.last_name =
        "Last name must be at least 3 characters and at most 15 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.text_area.trim()) {
      newErrors.text_area = "Comment is required";
    } else if (
      formData.text_area.length < 10 ||
      formData.text_area.length > 100
    ) {
      newErrors.text_area =
        "Comment must be at least 10 characters and at most 100 characters";
    }

    if (!formData.is_online && !formData.is_offline) {
      newErrors.mode = "Please select at least one mode";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }
    if (!formData.fav_car) {
      newErrors.fav_car = "Please select a favourite car";
    }

    return newErrors;
  }
  const submitHandler =(e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert("Form submitted successfully!");
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <h2 className="form-title">User Form</h2>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            placeholder="First Name"
            type="text"
            id="first_name"
            name="first_name"
            onChange={changeHandler}
            value={formData.first_name}
          />
          {errors.first_name && <p className="error">{errors.first_name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            name="last_name"
            id="last_name"
            onChange={changeHandler}
            value={formData.last_name}
          />
          {errors.last_name && <p className="error">{errors.last_name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
            value={formData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="text_area">Message</label>
          <textarea
            placeholder="Enter your message"
            name="text_area"
            id="text_area"
            onChange={changeHandler}
            value={formData.text_area}
          />
          {errors.text_area && <p className="error">{errors.text_area}</p>}
        </div>

        <p className="checkbox-label">Choose Mode</p>
        <div className="checkbox-container">
          <div className="checkbox-group">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="is_online"
              id="is_online"
              checked={formData.is_online}
            />
            <label htmlFor="is_online">Online</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="is_offline"
              id="is_offline"
              checked={formData.is_offline}
            />
            <label htmlFor="is_offline">Offline</label>
          </div>
        </div>
        {errors.mode && <p className="error">{errors.mode}</p>}

        <div className="radio-group">
          <p>Choose Gender</p>

          <div className="radio-container">
            <div>
              <input
                type="radio"
                onChange={changeHandler}
                name="gender"
                id="male"
                value="Male"
                checked={formData.gender === "Male"}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div>
              <input
                type="radio"
                onChange={changeHandler}
                name="gender"
                id="female"
                value="Female"
                checked={formData.gender === "Female"}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="fav_car">Choose Favourite Car</label>
          <select
            onChange={changeHandler}
            value={formData.fav_car}
            name="fav_car"
            id="fav_car"
          >
            <option value="">Select..</option>
            <option value="Tata">Tata</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Maruti">Maruti</option>
          </select>
          {errors.fav_car && <p className="error">{errors.fav_car}</p>}
        </div>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
