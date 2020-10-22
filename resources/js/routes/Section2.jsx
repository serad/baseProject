import React, { Component } from 'react';
import { Card, Avatar, Row, Col, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const { Meta } = Card;

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <Title style={{ textAlign: 'center'}}>¿Quienes somos?</Title>
        <Row gutter={[ { xs: 8, sm: 16, md: 24, lg: 32 }, 24 ]} justify="space-around">
          <Col xs={24} sm={12} md={12} lg={6} >
            <Card
              cover={ <Avatar size={124} 
                style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5px'}}
                src="/img/avatar_female.jpg"
                icon={<UserOutlined />}
              /> }
            >
              <Meta title="Ana Isabel" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              cover={ <Avatar size={124}
                style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5px'}}
                src="/img/avatar_male.jpg"
                icon={<UserOutlined />} 
              /> }
            >
              <Meta title="Sergio" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              cover={ <Avatar size={124}
                style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5px'}}
                src="/img/avatar_male.jpg"
                icon={<UserOutlined />} 
              /> }
            >
              <Meta title="Pepe"  />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              cover={ <Avatar size={124}
                style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5px'}}
                src="/img/avatar_female.jpg"
                icon={<UserOutlined />} 
              /> }
            >
              <Meta title="Pepita" />
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}