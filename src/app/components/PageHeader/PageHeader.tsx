import { Menu, PageHeader, Space, Dropdown, Image, Button, Grid } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import 'draft-js/dist/Draft.css';
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined';
import { AuthContext } from '../../contexts/AuthContext';
import { LeftMenu } from '../Menu/Menu';
import { StyledMenu } from './PageHeader.styled';
import { AvatarAndUser } from '../AvatarUser/AvatarUser';

const dropdownmenu = (value: any) => (
  <Menu mode="horizontal">
    {value.map((dropdownitem) => {
      return (
        <Menu.Item key={dropdownitem.text}>
          <Button type="text">
            <Link to={dropdownitem.to}>{dropdownitem.text}</Link>
          </Button>
        </Menu.Item>
      );
    })}
  </Menu>
);
const { useBreakpoint } = Grid;
const MenuItems = [
  {
    to: '/dashboard',
    text: 'Overview',
  },
];

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedTeam, setSelectedTeam] = useState<number>(undefined);
  const {
    user: { isAdmin },
  } = useContext(AuthContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileSize, setMobileSize] = useState(false);
  const [headerItem, setHeaderItem] = useState(MenuItems);
  const [dropdownItem, setDropdownItem] = useState([]);
  const ref = useRef(null);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpointDropDownHeader = [895, 810, 750, 670, 560];
  const breakpoint = 1000;

  useEffect(() => {
    location.pathname !== history.location.pathname && setSelectedTeam(undefined);
  }, [location]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    let showDropDownHeader = width - ref.current.offsetWidth;
    let headerItem = MenuItems;
    let dropdownItem = [];
    if (width >= breakpoint) {
      for (let n = 0; n < 5; n++) {
        if (showDropDownHeader <= breakpointDropDownHeader[n]) {
          dropdownItem = dropdownItem.concat(headerItem.slice(-1));
          headerItem = headerItem.slice(0, -1);
        }
      }
    }
    setDropdownItem(dropdownItem);
    setHeaderItem(headerItem);
    setMobileSize(width < breakpoint);
  }, [width, ref.current]);

  const params = new URLSearchParams(location.search);
  const dateId = params.get('dateId');

  const { sm, md } = useBreakpoint();
  return (
    <PageHeader className="site-page-header ">
      <div className="nav-container">
        <Space align="center" size="middle" className="logo-holder">
          <LeftMenu isAdmin={isAdmin} dateId={dateId} />
          <Link style={{ display: 'flex' }} to="/">
            <Image className="logo" width={50} src="/assets/img/icon.svg.png" preview={false} />
          </Link>
          {!mobileSize && (
            <StyledMenu>
              <div className="header-btn">
                {headerItem.map((menuitem) => {
                  return (
                    <Button
                      key={menuitem.text}
                      type="text"
                      size="large"
                      className={classNames({ 'is-active': location.pathname === menuitem.to })}
                    >
                      <Link to={menuitem.to}>{menuitem.text}</Link>
                    </Button>
                  );
                })}
                {dropdownItem.length > 0 && (
                  <Dropdown overlay={dropdownmenu(dropdownItem)}>
                    <CaretDownOutlined />
                  </Dropdown>
                )}
              </div>
            </StyledMenu>
          )}
        </Space>
      </div>
      <div className="user-container" ref={ref}>
        <AvatarAndUser />
      </div>
    </PageHeader>
  );
};
