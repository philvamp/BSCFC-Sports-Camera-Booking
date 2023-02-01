/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Note } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NoteCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    description: undefined,
    agegroup: undefined,
    gender: undefined,
    location: undefined,
    date: undefined,
    time: undefined,
    isdeleted: undefined,
    realdate: undefined,
    realtime: undefined,
    contact: undefined,
    pitch: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [agegroup, setAgegroup] = React.useState(initialValues.agegroup);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [location, setLocation] = React.useState(initialValues.location);
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [isdeleted, setIsdeleted] = React.useState(initialValues.isdeleted);
  const [realdate, setRealdate] = React.useState(initialValues.realdate);
  const [realtime, setRealtime] = React.useState(initialValues.realtime);
  const [contact, setContact] = React.useState(initialValues.contact);
  const [pitch, setPitch] = React.useState(initialValues.pitch);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setAgegroup(initialValues.agegroup);
    setGender(initialValues.gender);
    setLocation(initialValues.location);
    setDate(initialValues.date);
    setTime(initialValues.time);
    setIsdeleted(initialValues.isdeleted);
    setRealdate(initialValues.realdate);
    setRealtime(initialValues.realtime);
    setContact(initialValues.contact);
    setPitch(initialValues.pitch);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    agegroup: [],
    gender: [],
    location: [],
    date: [],
    time: [],
    isdeleted: [],
    realdate: [],
    realtime: [],
    contact: [],
    pitch: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          agegroup,
          gender,
          location,
          date,
          time,
          isdeleted,
          realdate,
          realtime,
          contact,
          pitch,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Note(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "NoteCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Agegroup"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup: value,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.agegroup ?? value;
          }
          if (errors.agegroup?.hasError) {
            runValidationTasks("agegroup", value);
          }
          setAgegroup(value);
        }}
        onBlur={() => runValidationTasks("agegroup", agegroup)}
        errorMessage={errors.agegroup?.errorMessage}
        hasError={errors.agegroup?.hasError}
        {...getOverrideProps(overrides, "agegroup")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender: value,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location: value,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date: value,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time: value,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Isdeleted"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted: value,
              realdate,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.isdeleted ?? value;
          }
          if (errors.isdeleted?.hasError) {
            runValidationTasks("isdeleted", value);
          }
          setIsdeleted(value);
        }}
        onBlur={() => runValidationTasks("isdeleted", isdeleted)}
        errorMessage={errors.isdeleted?.errorMessage}
        hasError={errors.isdeleted?.hasError}
        {...getOverrideProps(overrides, "isdeleted")}
      ></TextField>
      <TextField
        label="Realdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate: value,
              realtime,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.realdate ?? value;
          }
          if (errors.realdate?.hasError) {
            runValidationTasks("realdate", value);
          }
          setRealdate(value);
        }}
        onBlur={() => runValidationTasks("realdate", realdate)}
        errorMessage={errors.realdate?.errorMessage}
        hasError={errors.realdate?.hasError}
        {...getOverrideProps(overrides, "realdate")}
      ></TextField>
      <TextField
        label="Realtime"
        isRequired={false}
        isReadOnly={false}
        type="time"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime: value,
              contact,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.realtime ?? value;
          }
          if (errors.realtime?.hasError) {
            runValidationTasks("realtime", value);
          }
          setRealtime(value);
        }}
        onBlur={() => runValidationTasks("realtime", realtime)}
        errorMessage={errors.realtime?.errorMessage}
        hasError={errors.realtime?.hasError}
        {...getOverrideProps(overrides, "realtime")}
      ></TextField>
      <TextField
        label="Contact"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact: value,
              pitch,
            };
            const result = onChange(modelFields);
            value = result?.contact ?? value;
          }
          if (errors.contact?.hasError) {
            runValidationTasks("contact", value);
          }
          setContact(value);
        }}
        onBlur={() => runValidationTasks("contact", contact)}
        errorMessage={errors.contact?.errorMessage}
        hasError={errors.contact?.hasError}
        {...getOverrideProps(overrides, "contact")}
      ></TextField>
      <TextField
        label="Pitch"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              agegroup,
              gender,
              location,
              date,
              time,
              isdeleted,
              realdate,
              realtime,
              contact,
              pitch: value,
            };
            const result = onChange(modelFields);
            value = result?.pitch ?? value;
          }
          if (errors.pitch?.hasError) {
            runValidationTasks("pitch", value);
          }
          setPitch(value);
        }}
        onBlur={() => runValidationTasks("pitch", pitch)}
        errorMessage={errors.pitch?.errorMessage}
        hasError={errors.pitch?.hasError}
        {...getOverrideProps(overrides, "pitch")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
