import { Row } from 'antd';
import moment from 'moment';

import { DATE_ID_FORMAT } from '../common/constants';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';

export const ProgramDashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dateId = params.get('dateId');
  const month = dateId ? moment(dateId, DATE_ID_FORMAT) : null;

  document.title = 'Test app';
  return (
    <>
      <Helmet>
        <title>Test app</title>
      </Helmet>
      <div className="page-home page-container">
        <section className="section-container section-padding">
          <div className="section-title-container">
            <span className="section-title">Program Overview</span>
            {/* <ProgramDatePicker dateId={dateId} /> */}
          </div>
          <Row gutter={24} />
          <Row gutter={24} />
        </section>
      </div>
    </>
  );
};
