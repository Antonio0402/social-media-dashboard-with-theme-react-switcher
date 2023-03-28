import { useLayoutEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import socialData from "./social-data";
import overviewData from "./overview-data";

function App() {
  const [colorMode, setColorMode] = useState(localStorage.getItem("theme"));

  useLayoutEffect(() => {
    if (colorMode) {
      document.body.dataset.bsTheme = colorMode;
      localStorage.setItem("theme", document.body.dataset.bsTheme);
    } else {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setColorMode("dark")
        : setColorMode("light");
    }
  }, [colorMode]);

  return (
    <>
      <Container className="px-6" fluid="xxl">
        <Row as="header" className="py-9 align-items-center gy-6">
          <Col sm={6}>
            <h1 className="text-lg text-text-900 fw-bold">
              Social Media Dashboard
            </h1>
            <span className="text-base fw-bold text-text">
              Total Followers: 23,004
            </span>
          </Col>
          <hr className="border mb-0 d-sm-none"></hr>
          <Col sm={6}>
            <Form className="d-flex align-items-center justify-content-between justify-content-sm-end">
              <span className="text-base text-text fw-bold">Dark Mode</span>
              <Form.Check type="checkbox" className="d-flex mb-0">
                <Form.Check.Input
                  type="checkbox"
                  id="color-mode"
                  className="d-none"
                  checked={colorMode === "dark" ? true : false}
                  onChange={(e) => {
                    e.target.checked
                      ? setColorMode("dark")
                      : setColorMode("light");
                  }}
                />
                <Form.Check.Label
                  id="toggle"
                  htmlFor="color-mode"
                ></Form.Check.Label>
              </Form.Check>
            </Form>
          </Col>
        </Row>
        <main>
          <Row className="mt-4 mb-6 row-gap-6">
            {socialData.map((data) => (
              <Col sm={6} md={3} key={data.id}>
                <Card
                  id={`card--${data.platform}`}
                  className={`card | d-flex flex-column py-7 bg-card border-top border-5 border-bottom-0 border-start-0 border-end-0 cursor-pointer border-${data.platform}`}
                >
                  <Card.Title>
                    <header className="d-flex gap-2 align-items-center justify-content-center text-text">
                      <data.icon />
                      <p className="text-xs mb-0">{data.user}</p>
                    </header>
                  </Card.Title>
                  <Card.Body className="d-flex flex-column gap-2 text-center">
                    <strong className="text-3xl text-text-900">
                      {data.number}
                    </strong>
                    <p className="text-uppercase text-follower text-text">
                      {data.measure}
                    </p>
                    <footer className="d-flex align-items-center mx-auto gap-1">
                      <data.trend />
                      <p
                        className={
                          `mb-0 text-sm fw-bold ` +
                          (data.isDown ? "text-secondary" : "text-primary")
                        }
                      >
                        {data.todayCount} Today
                      </p>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className="text-lg my-5 text-text-900 fw-bold">
            Overview - Today
          </h2>
          <Row className="gy-5 gy-sm-6">
            {overviewData.map((data) => (
              <Col sm={6} md={3} key={data.id}>
                <Card className="card | d-flex flex-column p-6 cursor-pointer bg-card gap-6 border-0">
                  <Card.Title>
                    <header className="d-flex align-items-center justify-content-between text-text">
                      <p className="text-base fw-bold mb-0">{data.measure}</p>
                      <data.icon />
                    </header>
                  </Card.Title>
                  <Card.Body className="d-flex align-items-center justify-content-between p-0">
                    <strong className="text-2xl text-text-900">
                      {data.number}
                    </strong>
                    <div className="d-flex align-items-center gap-1">
                      <data.trend />
                      <p
                        className={
                          `mb-0 text-sm fw-bold ` +
                          (data.isDown ? "text-secondary" : "text-primary")
                        }
                      >
                        {data.percentage}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </main>
      </Container>
    </>
  );
}

export default App;
