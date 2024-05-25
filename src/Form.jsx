import React, { useState } from 'react';

function AddressForm() {
  // Define state for address data
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    country: ''
  });

  // Event handler to update address data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the address data, like sending it to a server
    console.log('Address submitted:', address);
  };

  // Display address form
  return (
    <div>
      <h2>Address Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
      <p>Postal Code: {address.postalCode}</p>
      <p>Country: {address.country}</p>
    </div>
  );
}

export default AddressForm;