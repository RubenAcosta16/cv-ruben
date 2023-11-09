import * as React from 'react';

export const EmailTemplate= ({name,email,message}) => (
  <div>
    <h1>From: {name}</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);