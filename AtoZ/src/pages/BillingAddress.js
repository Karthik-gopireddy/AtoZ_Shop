import React, { useState } from 'react';
import './BillingAddress.css'; // Make sure to import the CSS file
import paymentimage from "./payment.png"

const BillingAddress = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send the form data back to Checkout
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-container-class">
        <div className="flex-item-class">
          <h2 className="text-lg font-bold mb-4">BILLING ADDRESS</h2>
          <label className="label-class">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter name"
            required
            className="input-class"
          />
          
          <label className="label-class">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="input-class"
          />
          
          <label className="label-class">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
            className="input-class"
          />
          
          <label className="label-class">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
            required
            className="input-class"
          />
          
          <div className="flex mb-2 stateZipcontainer">
            <div>
              <label className="block flex-1 mr-2">State</label><br />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="select-class"
                required
              >
                <option value="">Choose State...</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Delhi">Delhi</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              </select>
            </div>
            <div>
              <label className="block flex-1">Zip code</label><br />
              <input
                type="number"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip code"
                required
                className="select-class"
                maxLength="6"
              />
            </div>
          </div>
        </div>
        <div className="flex-item-class">
          <h2 className="text-lg font-bold mb-4">PAYMENT</h2>
          <div className="mb-4">
            <img src={paymentimage} alt="Accepted credit cards" className="mt-1 acceptcard" />
          </div>
          
          <label className="label-class">Credit Card Number</label>
          <input
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter card number"
            required
            className="input-class"
            maxLength="16"
          />
          
          <label className="label-class">Exp Month</label>
          <input
            type="number"
            name="expMonth"
            value={formData.expMonth}
            onChange={handleChange}
            max={12}
            placeholder="Enter Month"
            required
            className="input-class"
          />
          
          <div className="flex mb-2 yearandcvvcontainor">
            <div className='yearcontainer'>
              <label className="block flex-1 mr-2">Exp Year</label><br />
              <select
                name="expYear"
                value={formData.expYear}
                onChange={handleChange}
                className="select-class-year"
                required
              >
                {/* Options for years */}
                <option value="">Year</option>
                {Array.from({ length: 51 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block flex-1">CVV</label><br />
              <input
                type="number"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
                className="select-class-year"
                maxLength="3"
              />
            </div>
          </div>
          
          <button className="button-class" type="submit">Submit Billing Info</button>
        </div>
      </div>
    </form>
  );
};

export default BillingAddress;
