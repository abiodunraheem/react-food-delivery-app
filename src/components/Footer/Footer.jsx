import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Nihil voluptatem possimus,
                vel asperiores repellat eligendi!
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>8:00am - 5:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: Plot5, Cresent Avenue, Ikeja Lagos Nigeria</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: +2348060165838</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: raheemabiodun23@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Newsletter</h5>
          <p>Subscribe for our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Enter your email' />
            <span><i className='ri-send-plane-line'></i></span>
          </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - 2023, webste design and developed by 
              Raheem Abiodun. All right reserved.
            </p>
          </Col>

          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4">
              <p className='m-0'>Follow: </p>
              <span>
                {" "}
                <Link to='https://github.com/abiodunraheem'>
                <i class="ri-github-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://www.linkedin.com/in/abiodun-raheem/'>
                  <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://medium.com/@raheemabiodun23'>
                  <i class="ri-medium-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://twitter.com/@abiodunraheem23'>
                  <i class="ri-twitter-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer