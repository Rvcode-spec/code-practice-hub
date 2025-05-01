import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button, Modal, Form } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaHashtag, FaInfoCircle, FaCalendarAlt, FaCamera } from 'react-icons/fa';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'Ravi Shankar Singh',
    email: '',
    mobile: '+919871585013',
    about: '',
    rollNumber: '',
    dateOfJoining: '',
    lastLogin: '02-14-2024 at 04:05',
    profilePic: '',
  });

  const [activeTab, setActiveTab] = useState('info');
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSave = () => {
    setShowModal(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container className="py-5">
      {/* Profile Header */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8} className="d-flex align-items-center position-relative">
              <div
                className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
                style={{ width: '80px', height: '80px', fontSize: '30px', fontWeight: 'bold', overflow: 'hidden' }}
              >
                {previewImage ? (
                  <img src={previewImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  user.name.split(' ').map((n) => n[0]).join('')
                )}
              </div>
              <label className="position-absolute" style={{ top: 55, left: 60, cursor: 'pointer' }}>
                <FaCamera className="text-primary" />
                <input type="file" className="d-none" onChange={handleImageUpload} />
              </label>
              <div className="ms-3">
                <h4 className="mb-0">{user.name}</h4>
              </div>
            </Col>
            <Col md={4} className="text-end text-muted">
              <small>Last login {user.lastLogin}</small>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Tabs */}
      <Card className="shadow">
        <Card.Header>
          <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'info')}>
            <Nav.Item>
              <Nav.Link eventKey="info">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="batches">Batches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="courses">Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="performance">Performance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="payments">Payments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="assignments">Assignments</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          {activeTab === 'info' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>Basic Information</h5>
                <Button variant="link" className="text-primary text-decoration-none" onClick={() => setShowModal(true)}>
                  Edit
                </Button>
              </div>

              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaUser className="me-2" />
                    <div>
                      <div className="text-muted">Name*</div>
                      <div>{user.name}</div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaHashtag className="me-2" />
                    <div>
                      <div className="text-muted">Mobile Number*</div>
                      <div>{user.mobile}</div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="me-2" />
                    <div>
                      <div className="text-muted">Email*</div>
                      <div>{user.email || '--------'}</div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaInfoCircle className="me-2" />
                    <div>
                      <div className="text-muted">About</div>
                      <div>{user.about || '--------'}</div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaHashtag className="me-2" />
                    <div>
                      <div className="text-muted">Roll Number</div>
                      <div>{user.rollNumber || '--------'}</div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <FaCalendarAlt className="me-2" />
                    <div>
                      <div className="text-muted">Date of Joining</div>
                      <div>{user.dateOfJoining || '--------'}</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}

          {activeTab === 'batches' && <div>Batches info aaega yahan 🚀</div>}
          {activeTab === 'courses' && <div>Courses info aaega yahan 📚</div>}
          {activeTab === 'performance' && <div>Performance data aaega 📈</div>}
          {activeTab === 'payments' && <div>Payments data aaega 💳</div>}
          {activeTab === 'assignments' && <div>Assignments data aaega 📝</div>}
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={user.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control name="mobile" value={user.mobile} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={user.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" name="about" value={user.about} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
