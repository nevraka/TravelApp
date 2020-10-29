import React, { useEffect } from 'react';
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

function Formh({ formSubmit, buttonText, initialUser }) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(initialUser);
  }, [form, initialUser]);

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        formSubmit(values);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Content>
        <Row>
          <Col offset={1} span={14}>
            <Form {...layout} style={{ height: '68vh' }}>
              <Form.Item
                label="Hotel"
                name="hotel"
                rules={[{ required: true }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Counrty" name="country" rules={[{ min: 10 }]}>
                <Input type="text" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleFormSubmit}>
                  {buttonText}
                </Button>
                <Link to="/hotels">
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
