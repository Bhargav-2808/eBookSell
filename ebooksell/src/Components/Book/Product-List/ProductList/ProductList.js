import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./productlist.css";
import { deleteBook, displayBook } from "../../../../api";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { IconButton } from "@mui/material";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(4);

  useEffect(() => {
    displaybooklist();
  }, [page, perPage, search]);


  console.log(data,search,count,page,perPage,totalPages);
  const displaybooklist = async () => {
    const response = await displayBook(page, perPage, search);
    // console.log(response);
    setData(response?.data?.searchBook);

    setCount(response?.data?.count);
    setTotalPages(response?.data?.totalPages);
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
            <button
              className="_addCart"
              type="submit"
              onClick={(e) => setSearch(e.target.value)}
            >
              Search
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Total Books : {count}</h5>
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
                                        deleteBookData(dataset?._id);
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
                <select  onChange={(e) => {
                    setPerPage(parseInt(e.target.value));
                  }}>
                  <option>2</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </form>
            </div>
            <div>
              <IconButton
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                <ArrowBackIosNewIcon className="_icon" />
              </IconButton>
              <IconButton
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                <ArrowForwardIosIcon className="_icon" />
              </IconButton>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
