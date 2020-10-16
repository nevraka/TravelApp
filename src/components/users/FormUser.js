import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Layout, Button, Row, Col } from 'antd';
import Hdr from '../../Hdr';

const { Footer, Content } = Layout;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};

const tailLayout = {
  wrapperCol: { offset: 3, span: 21 },
};

function FormUser({ handleSubmit, user, setUser, buttonText }) {
  return (
    <div>
      <Hdr />
      <Content>
        <Row>
          <Col offset={1} span={14}>
            <Form {...layout} style={{ height: '68vh' }}>
              <Form.Item label="Name">
                <Input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="Address">
                <Input
                  type="text"
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                  Add
                </Button>
                <Link to="/users">
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

export default FormUser;
