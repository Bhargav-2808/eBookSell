import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./productlist.css";
import { deleteBook, displayBook } from "../../../../api";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const ProductList = () => {
  const [data, setData] = useState([]);

  // console.log(data);
  useEffect(() => {
    displaybooklist();
  }, []);
  // console.log(data);
  // console.log((data[21].description).split('!'));
  // console.log(data.description[0]);
  const displaybooklist = async () => {
    const response = await displayBook();
    // console.log(response);
    setData(response?.data);
  };
  const deleteBookData = async (id) => {
    await deleteBook(id);
    displaybooklist();
  };
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
              Search
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive="lg" className="mt-2">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Book Name</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((dataset, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataset.description.split("!")[0]}</td>
                    <td>{dataset?.price}</td>
                    <td>{dataset?.category}</td>
                    <td>
                      <button className="edit-book" type="submit">
                        <Link
                          style={{ color: "#80bf32", textDecoration: "none" }}
                          to={`/editbook/${dataset?._id}`}
                        >
                          Edit
                        </Link>
                      </button>
                      <button
                        className="delete-book"
                        type="submit"
                        onClick={() => {
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <>
                                  <div className="">
                                    <h1>Are you sure?</h1>
                                    <p>You want to delete this file?</p>
                                    <Button
                                      className="popCancel me-5"
                                      onClick={onClose}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      className="popDelete"
                                      onClick={() => {
                                        deleteBookData(dataset?._id)
                                        onClose();
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </>
                              );
                            },
                          });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr> */}
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </form>
            </div>
            <div>
              <ArrowBackIosNewIcon className="_icon" />
              <ArrowForwardIosIcon className="_icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
