"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useFormValidation } from "@/hooks/useValidation";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity
  const [isPasswordEntered, setIsPasswordEntered] = useState(false); // Track password entry

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useFormValidation(["user_name", "email", "password"]);

  // Memoized input change handler
  const handleInputChange = useCallback(
    (field) => async (event) => {
      const { value } = event.target;
      setValue(field, value);
      await trigger(field);

      // Check email validation
      if (field === "email") {
        const isValid = await trigger("email");
        setIsEmailValid(isValid);
      }

      // Check password entry
      if (field === "password") {
        setIsPasswordEntered(value.trim().length > 0);
      }
    },
    [setValue, trigger]
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
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-3/12 space-y-4">
      {/* Email Input */}
      <Input
        type="email"
        placeholder="Personal Email Address"
        value={watch("email") || ""}
        onChange={handleInputChange("email")}
        error={errors.email?.message}
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
          btnName="Login"
          isLoading={isSubmitting}
          disabled={isSubmitting || Object.keys(errors).length > 0}
        />
      )}
    </form>
  );
}
