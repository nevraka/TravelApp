import React from 'react';
import { Divider } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="ftr-container">
      <Divider>
        <span className="divider">
          <li>
            <FacebookOutlined />
          </li>
          <li>
            <InstagramOutlined />
          </li>
          <li>
            <YoutubeOutlined />
          </li>
          <li>
            <TwitterOutlined />
          </li>
          <li>
            <LinkedinOutlined />
          </li>
          <li>
            <MailOutlined />
          </li>
        </span>
      </Divider>
      <div className="span">
        <Link to="/">
          <p>World Wide Travel</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
