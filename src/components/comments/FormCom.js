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

const tailLayout = {
  wrapperCol: { offset: 3, span: 21 },
};
function FormCom({ handleSubmit, comment, setComment }) {
  return (
    <div>
      <Content>
        <Row>
          <Col offset={1} span={14}>
            <Form {...layout} style={{ height: '68vh' }}>
              <Form.Item label="Hotel ID">
                <Input
                  type="text"
                  value={comment.hotelId}
                  onChange={(e) =>
                    setComment({ ...comment, hotelId: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="User ID">
                <Input
                  type="text"
                  value={comment.userId}
                  onChange={(e) =>
                    setComment({ ...comment, userId: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Text">
                <Input
                  type="text"
                  value={comment.text}
                  onChange={(e) =>
                    setComment({ ...comment, text: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Date">
                <Input
                  type="text"
                  value={comment.dateCreated}
                  onChange={(e) =>
                    setComment({ ...comment, dateCreated: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
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

export default FormCom;
