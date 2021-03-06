import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Layout, Button, Row, Col } from 'antd';
import { DatePicker } from 'antd';

const { Footer, Content } = Layout;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};

function _Form({ formSubmit, buttonText, initialValue }) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [form, initialValue]);

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
            <Form {...layout} form={form} style={{ height: '68vh' }}>
              <Form.Item
                label="Hotel ID"
                name="hotelId"
                rules={[{ required: true }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="User ID"
                name="userId"
                rules={[{ required: true }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Text" name="text">
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Date" name="dateCreated">
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleFormSubmit}>
                  {buttonText}
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

export default _Form;
