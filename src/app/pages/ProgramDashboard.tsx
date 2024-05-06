import { Row, Col } from 'antd';
import moment from 'moment';

import { DATE_ID_FORMAT } from '../common/constants';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';
import { useAppStore } from '../store/zustand/useAppStore';
import { useAppSelector } from '../hooks/useStore';
import { authSelector } from '../store/redux/auth/selectors';

export const ProgramDashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dateId = params.get('dateId');
  const month = dateId ? moment(dateId, DATE_ID_FORMAT) : null;
  const userZustand = useAppStore((state) => state.userZustand);
  const { accessToken } = useAppSelector(authSelector);

  document.title = 'Test app';
  return (
    <>
      <Helmet>
        <title>Test app</title>
      </Helmet>
      <div className="page-home page-container">
        <section className="section-container section-padding">
          <div className="section-title-container" />
          <Row gutter={24}>
            <span className="section-title">Zustand data</span>
            {userZustand && (
              <Col>
                <Row>userName: {userZustand.userName}</Row>
                <Row>password: {userZustand.password}</Row>
              </Col>
            )}
          </Row>
        </section>
        <section className="section-container section-padding">
          <div className="section-title-container" />
          <Row gutter={24}>
            <span className="section-title">Redux data</span>
            {accessToken && (
              <Col>
                <Row>accessToken: {accessToken}</Row>
              </Col>
            )}
          </Row>
        </section>
      </div>
    </>
  );
};
