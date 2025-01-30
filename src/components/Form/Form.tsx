import { useState } from "react";
import { Input } from "../Input";
import Select from "../Select/Select";
import { cities, countries } from "./Data";

export const Form = () => {
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  return (
    <div className="w-full">
      <form className="flex flex-col gap-5">
        <h2 className="form-title">Yours Addres</h2>
        <Input
          type="text"
          // value={formData.username}
          // onChange={handleInput}
          name="username"
          label="Address"
          variant="outlined"
          labelClassName="address-form-label"
          inputClassName="address-input"
          placeholder="Home"
          placeHolderClass="address-form-placeholder"
        />
        <Input
          type="text"
          name="username"
          label="Address II"
          variant="outlined"
          labelClassName="address-form-label"
          inputClassName="address-input"
          placeholder="Street"
          placeHolderClass="address-form-placeholder"
        />
        <Select
          name="city"
          value={location.city}
          onChange={(value) => setLocation((prevLocation) => ({ ...prevLocation, city: value }))}
          options={cities}
          placeholder="City"
          className="select-input"
          labelClassName="address-form-label"
          label="City"
          disabled={true}
        />
        <Select
          name="country"
          value={location.country}
          onChange={(value) => setLocation((prevLocation) => ({ ...prevLocation, country: value }))}
          options={countries}
          placeholder="Country"
          className="select-input"
          labelClassName="address-form-label"
          label="Country"
          disabled={true}
        />
      </form>
    </div>
  );
};
