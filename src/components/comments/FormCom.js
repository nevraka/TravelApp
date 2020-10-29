import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Layout, Button, Row, Col } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const { Footer, Content } = Layout;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};

function FormCom({ formSubmit, buttonText, initialUser, setComment }) {
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
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(d) =>
                    setComment({
                      ...initialUser,
                      dateCreated: d
                        ? d.toISOString()
                        : moment(dateCreated).toISOString(),
                    })
                  }
                  value={moment(initialUser.dateCreated)}
                />
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

export default FormCom;
