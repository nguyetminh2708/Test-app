import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router';
import { login } from '../apis/authClient';
import { ACCESS_TOKEN_KEY } from '../common/constants';
import { ILoginForm } from '../types/LoginForm';
import { Image, Typography } from 'antd';
import './Login.scss';
import { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../common/authConfig';
import { ErrorBox } from '../components/ErrorBox';

const { Title } = Typography;

export const Login = () => {
  const history = useHistory();
  const [hasError, setHasError] = useState<Response>();
  const { instance } = useMsal();

  const onFinish = async (values: ILoginForm) => {
    try {
      //const { accessToken } = await login(values);
      const accessToken = 'test';
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      history.push('/dashboard');
    } catch (err) {
      setHasError(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onValueChanges = () => {
    setHasError(undefined);
  };

  const handleMicrosoftLogin = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (err) {
      console.error(err);
      notification.error({
        message: 'An error occurred with Microsoft Sign in',
      });
    }
  };

  return (
    <div className="page-login" style={{ backgroundImage: `url(/assets/img/login-background.jpg)` }}>
      <div className="page-login-form-wrapper">
        <div className="page-login-branding">
          <div style={{ textAlign: 'center' }}>
            {/* <Image src="" preview={false} width="50%" /> */}
            {/* logo */}
          </div>

          <Title
            className="page-login-title"
            level={2}
            style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', color: '#09488A' }}
          >
            Test app
          </Title>
        </div>
        <div className="page-login-form-container">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={onValueChanges}
          >
            <Form.Item>
              <Title level={3} style={{ textAlign: 'center', color: '#09488A' }}>
                Login
              </Title>
              <ErrorBox error={hasError} />
            </Form.Item>

            <Form.Item name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input size="large" placeholder="User Name" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" style={{ width: '100%' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
          <Button size="large" type="default" onClick={handleMicrosoftLogin}>
            Sign in with SSO
          </Button>
        </div>
      </div>
    </div>
  );
};
