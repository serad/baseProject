import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'antd';

const { Meta } = Card;

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <Row gutter={[ { xs: 8, sm: 16, md: 24, lg: 32 }, 24 ]} justify="space-around">
          <Col xs={24} sm={12} md={12} lg={6} >
            <Card
              hoverable
              style={{ backgroundColor: '#EEE', border: 0 }}              
              cover={ <Image src="/img/Flag_of_Córdoba,_Spain.svg" /> }
            >
              <Meta title="Cordoba" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE' }}
              cover={ <Image src="img/1024px-Flag_of_Venice.png" /> }
            >
              <Meta title="Venecia" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE' }}
              cover={ <Image src="img/Flag_of_Sevilla,_Spain.svg" /> }
            >
              <Meta title="Sevilla" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE', border: 0 }}
              cover={ <Image src="/img/Flag_of_Córdoba,_Spain.svg" /> }
            >
              <Meta title="Cordoba" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>

        <Row gutter={[ { xs: 8, sm: 16, md: 24, lg: 32 }, 24 ]} justify="space-around">
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE', border: 0 }}              
              cover={ <Image src="/img/Flag_of_Córdoba,_Spain.svg" /> }
            >
              <Meta title="Cordoba" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE' }}
              cover={ <Image src="img/1024px-Flag_of_Venice.png" /> }
            >
              <Meta title="Venecia" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE' }}
              cover={ <Image src="img/Flag_of_Sevilla,_Spain.svg" /> }
            >
              <Meta title="Sevilla" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              style={{ backgroundColor: '#EEE', border: 0 }}
              cover={ <Image src="/img/Flag_of_Córdoba,_Spain.svg" /> }
            >
              <Meta title="Cordoba" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}