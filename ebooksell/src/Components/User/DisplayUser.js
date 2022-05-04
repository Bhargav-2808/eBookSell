import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  Button,
  Col,
  Container,
  Modal,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import "./displayuser.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { deleteUser, displayUser, paginateUser } from "../../api";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { IconButton } from "@mui/material";

const DisplayUser = () => {
  const [data, setData] = useState();
  const [pageCount, setpageCount] = useState();
  const [perPage, setperPage] = useState(1);
  const [totalPages, settotalPages] = useState();
  const [page, setPage] = useState(1);

  console.log(page);
  console.log(data, pageCount, totalPages, perPage);

  useEffect(() => {
    displayUserData();
  }, [page, perPage]);
  const displayUserData = async () => {
    // const response = await displayUser();
    // setData(response?.data);
    const response = await paginateUser(page, perPage);
    //console.log(response?.data);
    setData(response?.data?.user);
    setpageCount(response?.data?.count);
    settotalPages(response?.data?.totalPages);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    displayUserData();
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="d-flex justify-content-center">
            <h4>User Page</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Total User : {pageCount}</h5>
            <Table responsive="lg" className="mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((udata, index) => {
                  return (
                    <tr key={udata._id + udata.firstname}>
                      <td>{index + 1}</td>
                      <td>{udata.firstname}</td>
                      <td>{udata.lastname}</td>
                      <td>{udata.email}</td>
                      <td>{udata.role}</td>
                      <td>
                        <button className="user-edit" type="submit">
                          <Link
                            className="usere-edit"
                            to={`/edituser/${udata?._id}`}
                          >
                            Edit
                          </Link>
                        </button>

                        <Button
                          className="user-delete"
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
                                          deleteUserData(udata?._id);
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
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-end me-5">
            <div className="d-flex me-5">
              <p className="me-3">Rows per page</p>
              <form>
                <select
                  onChange={(e) => {
                    setperPage(parseInt(e.target.value));
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </form>
            </div>
            <div>
              <IconButton
                disabled={page === 1}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <ArrowBackIosNewIcon className="_icon" />
              </IconButton>

              <IconButton
                onClick={() => {
                  setPage(page + 1);
                }}
                disabled={page === totalPages}
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

export default DisplayUser;
