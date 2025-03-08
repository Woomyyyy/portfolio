"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={props.id} 
        className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          isFocused ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`w-full px-4 py-2 border rounded-md transition-all duration-200 focus:outline-none ${
            error 
              ? 'border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive' 
              : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'
          } ${isFocused ? 'scale-[1.005]' : ''} ${className || ''}`}
        />
        {isFocused && !error && (
          <AnimatePresence>
            <motion.div 
              className="absolute inset-0 pointer-events-none rounded-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ 
                boxShadow: '0 0 0 2px var(--primary)',
                zIndex: -1
              }}
            />
          </AnimatePresence>
        )}
      </div>
      {error && (
        <motion.p 
          className="mt-1 text-xs text-destructive"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export const Textarea = ({ label, error, className, ...props }: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={props.id} 
        className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          isFocused ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`w-full px-4 py-2 border rounded-md transition-all duration-200 focus:outline-none ${
            error 
              ? 'border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive' 
              : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'
          } ${isFocused ? 'scale-[1.005]' : ''} ${className || ''}`}
        />
        {isFocused && !error && (
          <AnimatePresence>
            <motion.div 
              className="absolute inset-0 pointer-events-none rounded-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ 
                boxShadow: '0 0 0 2px var(--primary)',
                zIndex: -1
              }}
            />
          </AnimatePresence>
        )}
      </div>
      {error && (
        <motion.p 
          className="mt-1 text-xs text-destructive"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export const Button = ({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-all duration-200 relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[2px] active:translate-y-0",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-[2px] active:translate-y-0",
    outline: "bg-transparent border border-input hover:bg-secondary text-foreground hover:-translate-y-[2px] active:translate-y-0"
  };
  
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${isLoading ? 'cursor-not-allowed' : ''} ${className || ''}`}
    >
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      )}
    </button>
  );
}; 