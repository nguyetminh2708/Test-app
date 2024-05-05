import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';
import classNames from 'classnames';

const MainMenuItems = [
  {
    to: '/dashboard',
    text: 'Dashboard',
  },
];

interface IProps {
  isAdmin: boolean;
  dateId: string;
}
export const LeftMenu = ({ isAdmin, dateId }: IProps) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const history = useHistory();
  const location = useLocation();
  const [selectedTeam, setSelectedTeam] = useState<number>(undefined);

  useEffect(() => {
    location.pathname !== history.location.pathname && setSelectedTeam(undefined);
  }, [location]);

  let MenuItems = [];
  MenuItems = MenuItems.concat(MainMenuItems);

  return (
    <>
      <Button icon={<MenuOutlined />} onClick={() => setVisible(true)} size="middle" />
      <Drawer
        className="app-main-menu"
        title="MENU"
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <StyledMenu>
          {MenuItems.map((menuitem) => {
            return (
              <Button key={menuitem.text} type="text" className={classNames({ 'is-active': pathname === menuitem.to })}>
                <Link to={menuitem.to} onClick={() => setVisible(false)}>
                  {menuitem.text}
                </Link>
              </Button>
            );
          })}
        </StyledMenu>
      </Drawer>
    </>
  );
};
