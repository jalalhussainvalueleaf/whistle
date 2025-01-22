"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

function Input({
  placeholder,
  value,
  onChange,
  type = "text", // Default type is "text"
  maxLength,
}) {
  const [validationMessage, setValidationMessage] = useState("");
  const debounceTimeout = useRef(null); // To track debounce timeout

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (type === "number" && maxLength && inputValue.length > maxLength) {
      return; // Prevent further input if maxLength is exceeded
    }

    // Apply debouncing for email validation
    if (type === "email") {
      clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        // validateEmail(inputValue);
      }, 500); // Adjust debounce delay (in ms) as needed
    }

    onChange(e);
  };

  // const validateEmail = (email) => {
  //   const blockedDomains = ["test.com", "testing.com", "example.com"];

  //   if (!email) {
  //     setValidationMessage("Field is required.");
  //     return;
  //   }

  //   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) {
  //     setValidationMessage("Invalid email address.");
  //     return;
  //   }

  //   const domain = email.split("@")[1];
  //   if (blockedDomains.includes(domain)) {
  //     setValidationMessage("This email address is not allowed.");
  //     return;
  //   }

  //   // If all validations pass, clear the validation message
  //   setValidationMessage("");
  // };

  useEffect(() => {
    if (validationMessage) {
      toast.error(validationMessage);
    }
  }, [validationMessage]);

  // SVG icons
  const renderIcon = () => {
    if (type === "password") {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z"
            stroke="#e37e28"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 11C2 11 5 4 12 4C19 4 22 11 22 11C22 11 19 18 12 18C5 18 2 11 2 11Z"
            stroke="#e37e28"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    // Default icon
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="#e37e28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5737 7L12 13L3.42635 7"
          stroke="#e37e28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="relative w-full space-y-2">
      <label
        htmlFor="input-field"
        className="mb-0 block text-sm font-medium text-wlOrange dark:text-white"
      >
        {placeholder}
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {renderIcon()}
        </div>
        <input
          id="input-field"
          type={type}
          className={`block w-full rounded-full border bg-white p-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-wlOrange focus:ring-wlOrange dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-wlOrange ${
            validationMessage ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default Input;
