import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./productpage.css";

function ProductFinal() {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="d-flex justify-content-center">
            <h4>Product Page</h4>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <input type="text" placeholder="Search.." className="_input" />
            <button className="_addCart" type="submit">
              Add Product
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive="lg" className="mt-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <button className="_addCart" type="submit">
                     Edit
                    </button>
                    <button className="_delete" type="submit">
                     Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td> <button className="_addCart" type="submit">
                     Edit
                    </button>
                    <button className="_delete" type="submit">
                     Delete
                    </button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td> <button className="_addCart" type="submit">
                     Edit
                    </button>
                    <button className="_delete" type="submit">
                     Delete
                    </button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td> <button className="_addCart" type="submit">
                     Edit
                    </button>
                    <button className="_delete" type="submit">
                     Delete
                    </button></td>
                </tr>
               
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end me-5">
            <div className="d-flex me-5">
              <p className="me-3">Rows per page</p>
              <form>
                <select>
                  <option>
                    1
                  </option>
                  <option>
                    2
                  </option>
                  <option>
                    3
                  </option>
                  <option>
                    4
                  </option>
                </select>
              </form>
            </div>
            <div>
                <ArrowBackIosNewIcon className="_icon"/>
                <ArrowForwardIosIcon className="_icon"/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductFinal;
