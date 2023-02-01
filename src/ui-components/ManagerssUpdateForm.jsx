/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Managerss } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ManagerssUpdateForm(props) {
  const {
    id,
    managerss,
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
    ManagersName: undefined,
    Assistant: undefined,
  };
  const [ManagersName, setManagersName] = React.useState(
    initialValues.ManagersName
  );
  const [Assistant, setAssistant] = React.useState(initialValues.Assistant);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...managerssRecord };
    setManagersName(cleanValues.ManagersName);
    setAssistant(cleanValues.Assistant);
    setErrors({});
  };
  const [managerssRecord, setManagerssRecord] = React.useState(managerss);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Managerss, id) : managerss;
      setManagerssRecord(record);
    };
    queryData();
  }, [id, managerss]);
  React.useEffect(resetStateValues, [managerssRecord]);
  const validations = {
    ManagersName: [],
    Assistant: [],
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
          ManagersName,
          Assistant,
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
          await DataStore.save(
            Managerss.copyOf(managerssRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ManagerssUpdateForm")}
    >
      <TextField
        label="Managers name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={ManagersName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ManagersName: value,
              Assistant,
            };
            const result = onChange(modelFields);
            value = result?.ManagersName ?? value;
          }
          if (errors.ManagersName?.hasError) {
            runValidationTasks("ManagersName", value);
          }
          setManagersName(value);
        }}
        onBlur={() => runValidationTasks("ManagersName", ManagersName)}
        errorMessage={errors.ManagersName?.errorMessage}
        hasError={errors.ManagersName?.hasError}
        {...getOverrideProps(overrides, "ManagersName")}
      ></TextField>
      <TextField
        label="Assistant"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Assistant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ManagersName,
              Assistant: value,
            };
            const result = onChange(modelFields);
            value = result?.Assistant ?? value;
          }
          if (errors.Assistant?.hasError) {
            runValidationTasks("Assistant", value);
          }
          setAssistant(value);
        }}
        onBlur={() => runValidationTasks("Assistant", Assistant)}
        errorMessage={errors.Assistant?.errorMessage}
        hasError={errors.Assistant?.hasError}
        {...getOverrideProps(overrides, "Assistant")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
