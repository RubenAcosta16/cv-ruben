import * as React from 'react';

export const EmailTemplate= ({name,email,message}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>From: {email}</p>
    <p>{message}</p>
  </div>
);