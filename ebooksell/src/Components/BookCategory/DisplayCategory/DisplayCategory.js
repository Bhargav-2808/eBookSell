import { IconButton } from "@mui/material";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import { deleteCategory,  paginateCategory } from "../../../api";
import Search from "../../Search/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DisplayCategory = () => {
  const [data, setData] = useState();
  const [pageCount, setpageCount] = useState();
  const [perPage, setperPage] = useState(4);
  const [totalPages, settotalPages] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  console.log(search);
  const searchData = (data) => {
    
    setSearch(data);
  };

  // console.log(page);
  // console.log(data, pageCount, totalPages, perPage, search);

  useEffect(() => {
    displayCategoryData();
  }, [page, perPage, search]);
  const displayCategoryData = async () => {
    const response = await paginateCategory(page,perPage,search);
    console.log(response);
     // const response = await displayUser();
    // setData(response?.data);
    // const response = await paginateUser(page, perPage, search);
    //console.log(response?.data);
    setData(response?.data?.searchCategory);
    setpageCount(response?.data?.count);
    settotalPages(response?.data?.totalPages);
  };
  const deleteCategoryData = async (id) => {
    await deleteCategory(id);
    displayCategoryData();
  };
  return (
    <>
      <Search searchData={searchData} />
      <Container className="mt-2">
        <Row>
          <Col className="d-flex justify-content-center">
            <h4>Category Page</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Total Category : {pageCount}</h5>
            <Table responsive="lg" className="mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((category, index) => {
                  return (
                    <tr key={category._id + category.category}>
                      <td>{index + 1}</td>
                      <td>{category.category}</td>

                      <td>
                        <button className="user-edit" type="submit">
                          <Link
                            className="usere-edit"
                            to={`/editcategory/${category?._id}`}
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
                                          deleteCategoryData(category?._id);
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
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10</option>
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

export default DisplayCategory;
