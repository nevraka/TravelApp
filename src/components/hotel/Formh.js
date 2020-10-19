import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Layout, Button, Row, Col } from 'antd';

const { Footer, Content } = Layout;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};

function Formh({ handleSubmit, hotel, setHotel, buttonText }) {
  return (
    <div>
      <Content>
        <Row>
          <Col offset={1} span={14}>
            <Form {...layout} style={{ height: '68vh' }}>
              <Form.Item label="Hotel">
                <Input
                  type="text"
                  value={hotel.name}
                  onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="City">
                <Input
                  type="text"
                  value={hotel.city}
                  onChange={(e) => setHotel({ ...hotel, city: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="Counrty">
                <Input
                  type="text"
                  value={hotel.country}
                  onChange={(e) =>
                    setHotel({ ...hotel, country: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                  Add
                </Button>
                <Link to="/">
                  <Button>Back</Button>
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer />
    </div>
  );
}

export default Formh;
