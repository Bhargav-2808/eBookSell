import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./displayuser.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { deleteUser, displayUser} from "../../api";
import { Link } from "react-router-dom";

const DisplayUser = () => {
  const [data, setData] = useState();

  useEffect(() => {
    displayUserData();
  }, []);

  const displayUserData = async () => {
    const response = await displayUser();
    setData(response?.data);
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
            <h4>Product Page</h4>
          </Col>
        </Row>

        <Row>
          <Col>
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
                        <button className="user-edit" type="submit" >
                          <Link className="usere-edit" to={`/edituser/${udata?._id}`}>Edit</Link>
                        </button>
                        <button className="user-delete" type="submit" onClick={()=>deleteUserData(udata?._id)}>
                          <Link className="usere-delete" to="">Delete</Link>
                        </button>
                        {/* <Button
                        className="deleteLink"
                        onClick={() => {
                          confirmAlert({
                            title: "Confirm to Delete",
                            message: "Are you sure?",
                            buttons: [
                              {
                                label: "Yes",
                                onClick: () => deleteUserData(udata._id),
                              },
                              {
                                label: "No",
                                onClick: () => {},
                              },
                            ],
                          });
                        }}
                      >
                        Delete
                      </Button> */}
                      </td>
                      <td>
                        {/* <Button className="updateLink">
                        <Link className="updateLink" to={`/edit/${udata._id}`}>
                          Edit
                        </Link>{" "}
                      </Button> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              {/* <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <button className="user-edit" type="submit">
                      Edit
                    </button>
                    <button className="user-delete" type="submit">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    {" "}
                    <button className="user-edit" type="submit">
                      Edit
                    </button>
                    <button className="user-delete" type="submit">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    {" "}
                    <button className="user-edit" type="submit">
                      Edit
                    </button>
                    <button className="user-delete" type="submit">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    {" "}
                    <button className="user-edit" type="submit">
                      Edit
                    </button>
                    <button className="user-delete" type="submit">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody> */}
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

export default DisplayUser;
