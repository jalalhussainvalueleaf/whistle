"use client";
import React, { useState, useCallback } from "react";
import { useFormValidation } from "@/hooks/useValidation";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { toast } from "react-hot-toast";

let emailValidationTimeout; // To debounce email validation

export default function Login() {
  const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity
  const [isPasswordEntered, setIsPasswordEntered] = useState(false); // Track password entry
  const [delayedEmailError, setDelayedEmailError] = useState(""); // Store the delayed email error

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
    getFieldState,
  } = useFormValidation(["user_name", "email", "password"]);

  const handleInputChange = useCallback(
    (field) => async (event) => {
      const { value } = event.target;
      setValue(field, value);

      // Debounce email validation
      if (field === "email") {
        clearTimeout(emailValidationTimeout);
        emailValidationTimeout = setTimeout(async () => {
          const isValid = await trigger("email");
          setIsEmailValid(isValid);

          // Update delayed error message
          const emailState = getFieldState("email");
          setDelayedEmailError(emailState.error?.message || "");
        }, 500); // Adjust the debounce delay as needed
      }

      // Check password entry
      if (field === "password") {
        setIsPasswordEntered(value.trim().length > 0);
      }
    },
    [setValue, trigger, getFieldState],
  );

  // Form submission handler
  const onSubmit = async (data) => {
    const payload = new URLSearchParams({
      user_name: data.email,
      password: data.password,
    });

    try {
      await partialSubmit(payload); // Save email through API
    } catch (error) {
      toast.error("Error submitting the form."); // Display error toast
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto space-y-4 px-4 lg:w-3/12 lg:px-0"
    >
      {/* Email Input */}
      <Input
        type="email"
        placeholder="Personal Email Address"
        value={watch("email") || ""}
        onChange={handleInputChange("email")}
        error={delayedEmailError} // Show the delayed error message
        aria-label="Email Address"
      />

      {/* Password Input */}
      {isEmailValid && (
        <Input
          type="password"
          placeholder="Password"
          value={watch("password") || ""}
          onChange={handleInputChange("password")}
          error={errors.password?.message}
          aria-label="Password"
        />
      )}

      {/* Login Button */}
      {isEmailValid && isPasswordEntered && (
        <Button
          btnName="Sign in"
          isLoading={isSubmitting}
          disabled={isSubmitting || Object.keys(errors).length > 0}
        />
      )}
    </form>
  );
}
