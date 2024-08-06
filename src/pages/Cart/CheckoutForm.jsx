/* eslint-disable react/display-name */
import { memo, useEffect, useState } from "react";
import Form from "../../features/Form/Form";
import FormRow from "../../features/Form/FormRow";
import InputContainer from "../../features/Form/InputContainer";
import Input from "../../features/Form/Input";
import { useForm } from "react-hook-form";
import Filter from "../../ui/Filter";
import Divider from "../../ui/Divider";
import TextArea from "../../features/Form/TextArea";
import Heading from "../../ui/Heading";

const CheckoutForm = memo(() => {
  const { register, formState } = useForm();
  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/all?fields=name`
        );
        const data = await res.json();
        data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        });
        console.log(data);
        setCountries(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return (
    <Form>
      <FormRow className="name">
        <InputContainer label="first name *" error={errors?.firstName?.message}>
          <Input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "This feild is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Please provide a valid name",
              },
            })}
          />
        </InputContainer>
        <InputContainer label="last name *" error={errors?.lastName?.message}>
          <Input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "This feild is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Please provide a valid last name",
              },
            })}
          />
        </InputContainer>
      </FormRow>
      <FormRow className="country">
        <InputContainer label="country / region *">
          <Filter.SelectBox id="countries-list" shape="button">
            <Filter.Option value="filter" defaultValue>
              {!isLoading && countries[0].name.common}
            </Filter.Option>
            {!isLoading &&
              countries.map((country, i) => (
                <Filter.Option
                  key={i}
                  value={country.name.common}
                  data-index={i}
                >
                  {country.name.common}
                </Filter.Option>
              ))}
          </Filter.SelectBox>
        </InputContainer>
      </FormRow>
      <FormRow className="address">
        <InputContainer label="address *" error={errors?.address?.message}>
          <Input
            type="text"
            placeholder="House number and street name"
            id="address"
            {...register("address", {
              required: "This feild is required",
              pattern: {
                value: /^\w+$/,
                message: "Please provide a valid address",
              },
            })}
          />
          <Input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            id="subAddress"
            {...register("subAddress", {
              required: "This feild is required",
              pattern: {
                value: /^\w+$/,
                message: "Please provide a valid last address",
              },
            })}
          />
        </InputContainer>
      </FormRow>
      <FormRow>
        <FormRow className="town">
          <InputContainer
            label="town / city *"
            error={errors?.townCity?.message}
          >
            <Input
              type="text"
              id="town-city"
              {...register("townCity", {
                required: "This feild is required",
                pattern: {
                  value: /^[a-zA-Z]]+$/,
                  message: "Please provide a valid town / city",
                },
              })}
            />
          </InputContainer>
        </FormRow>
        <FormRow className="province">
          <InputContainer label="province *" error={errors?.province?.message}>
            <Input
              type="text"
              id="province"
              {...register("province", {
                required: "This feild is required",
                pattern: {
                  value: /^[a-zA-Z]]+$/,
                  message: "Please provide a valid province",
                },
              })}
            />
          </InputContainer>
        </FormRow>
        <FormRow className="postcode">
          <InputContainer
            label="postcode / zip *"
            error={errors?.postcode?.message}
          >
            <Input
              type="text"
              id="postcode"
              {...register("postcode", {
                required: "This feild is required",
                pattern: {
                  value: /^[\d]]+$/,
                  message: "Please provide a valid postcode",
                },
              })}
            />
          </InputContainer>
        </FormRow>
      </FormRow>
      <FormRow className="phone-email">
        <InputContainer label="phone (optional)" error={errors?.phone?.message}>
          <Input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "This feild is required",
              pattern: {
                value: /^\+?[\d]]+$/,
                message: "Please provide a valid phone",
              },
            })}
          />
        </InputContainer>
        <InputContainer label="email address *" error={errors?.email?.message}>
          <Input
            type="text"
            placeholder="johndoes@example.com"
            id="email"
            {...register("email", {
              required: "This feild is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email",
              },
            })}
          />
        </InputContainer>
      </FormRow>
      <Divider width="100%" color="var(--light-700)" />
      <FormRow className="check-for-different-address">
        <InputContainer label="Ship to a different Address?">
          <Input
            type="checkbox"
            id="differentAddress"
            name="check"
            label="Ship to a different Address?"
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </InputContainer>
      </FormRow>
      <FormRow className="notes">
        <InputContainer label="order notes (optional)">
          <TextArea
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery"
          />
        </InputContainer>
      </FormRow>
      <Divider width="100%" color="var(--light-700)" />
      <Heading as="h4">
        What would you like us to do if an Item is out of Stock?
      </Heading>
      <FormRow className="notes">
        <InputContainer>
          <TextArea
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery"
          />
        </InputContainer>
      </FormRow>
      <Divider width="100%" color="var(--light-700)" />
      <Heading as="h4">Where did you hear About Us?</Heading>
      <FormRow className="notes">
        <InputContainer>
          <TextArea
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery"
          />
        </InputContainer>
      </FormRow>
    </Form>
  );
});

export default CheckoutForm;
