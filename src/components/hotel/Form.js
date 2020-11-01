import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Layout, Button, Row, Col } from 'antd';
import { Select } from 'antd';
import countries from '../../data/countries.json';

const { Option } = Select;
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
            <Form form={form} {...layout} style={{ height: '68vh' }}>
              <Form.Item
                label="Hotel Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Country" name="country">
                <Select
                  showSearch
                  style={{ width: 250 }}
                  placeholder="Select country"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {countries.map((counrty) => (
                    <Option value={counrty.code}>{counrty.name}</Option>
                  ))}
                </Select>
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

export default _Form;
