import { useContext } from 'react';
import { Avatar, Button, Dropdown, Menu, Space } from 'antd';
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { nameAbbreviation } from '../../utils/stringUtils';
import { useAppStore } from '../../store/zustand/useAppStore';

export const AvatarAndUser = () => {
  const { user, logOut } = useContext(AuthContext);
  const clearUserZustand = useAppStore((state) => state.clearUserZustand);

  const funLogOut = () => {
    try {
      //To do zustand
      clearUserZustand();

      //To do context
      logOut();
    } catch (err) {}
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text">
          <Link to="/profile">Profile</Link>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="text" onClick={logOut}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-container-avatar">
      <Space>
        <span>{user.fullName}</span>
        <Dropdown overlay={menu}>
          <div>
            <Avatar style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }} size="large">
              {nameAbbreviation(user.fullName)}
            </Avatar>
            <CaretDownOutlined />
          </div>
        </Dropdown>
      </Space>
    </div>
  );
};
