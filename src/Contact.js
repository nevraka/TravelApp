import React from 'react';
import './contact.css';
import { Card } from 'antd';
import { PhoneFilled, CommentOutlined } from '@ant-design/icons';

function Contact() {
  return (
    <div>
      <div className="background-image">
        <div>
          <div className="banner-message-1">Get in touch</div>
          <div className="banner-message-2">
            Want to get in touch?We'd love to hear from you.Here's how you can
            reach us..
          </div>
          <div className="cards">
            <Card style={{ width: 400, height: 250 }}>
              <PhoneFilled style={{ fontSize: '30px', paddingLeft: '10px' }} />
              <h1>Talk to Sales</h1>
              <p>
                Interested in World Wide Travel ? Just pick up the phone to chat
                with a member of our sales team.
              </p>
              <p>+49 69 153253503</p>
            </Card>
            <Card style={{ width: 400, height: 250 }}>
              <CommentOutlined
                style={{ fontSize: '30px', paddingLeft: '10px' }}
              />
              <h1>Contact Customer Support</h1>
              <p>
                Sometimes you need a little help from your friends. Or a HubSpot
                support rep. Don’t worry… we’re here for you.
              </p>
              <button>Contact Support</button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
