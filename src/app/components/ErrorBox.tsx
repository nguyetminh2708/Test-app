import { Alert } from 'antd';
import React from 'react';

interface IProps {
  error: Response;
  message?: string;
}

const GENERIC_MESSAGE = 'There has been an error processing your request. Please contact support for assistance.';

export const ErrorBox = ({ error, message = GENERIC_MESSAGE }: IProps) => {
  if (!error || error.status === undefined) {
    return null;
  }
  if (error.status === 401 || error.status === 404) message = 'The Username or Password is incorrect.';
  return (
    <div className="submit-error" style={{ marginBottom: '10px' }}>
      <Alert message={message} type="error" />
    </div>
  );
};
