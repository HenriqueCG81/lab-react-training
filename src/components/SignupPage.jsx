import React, { useState } from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const isEmailValid = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    // Simple password strength check (at least 8 characters)
    return password.length >= 8;
  };

  const getEmailValidationClass = () => {
    if (email === '' || isEmailValid(email)) {
      return 'is-valid';
    }
    return 'is-invalid';
  };

  const getPasswordValidationClass = () => {
    if (password === '' || isPasswordStrong(password)) {
      return 'is-valid';
    }
    return 'is-invalid';
  };

  const getGreetingMessage = () => {
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else if (nationality === 'fr') {
      return 'Bonjour';
    }
    return '';
  };

  return (
    <div>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={getEmailValidationClass()}
        />
        {email !== '' && !isEmailValid(email) && (
          <FormText color="danger">Invalid email</FormText>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={getPasswordValidationClass()}
        />
        {password !== '' && !isPasswordStrong(password) && (
          <FormText color="danger">Weak password</FormText>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="nationality">Nationality</Label>
        <Input
          type="select"
          id="nationality"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </Input>
      </FormGroup>
      <p>{getGreetingMessage()}</p>
      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
