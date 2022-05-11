import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./editproduct.css";
import {
  addBook,
  displayCategory,
  editBook,
  getBookById,
} from "../../../../api";
const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [img, setImg] = useState(null);
  // console.log(data);

  const imgSet = (event) => {
    setImg(event.target.files[0]);
  };

  // console.log(img);
  useEffect(() => {
    displayCategories();
    loadBooksData();
  }, []);

  const displayCategories = async () => {
    const response = await displayCategory();
    // console.log(response);
    setData(response?.data);
  };

  const onSubmit = async (data) => {
    //  console.log(data);
    const formdata = new FormData();
    formdata.append("picture", img);
    formdata.append("firstname", data?.firstname);
    formdata.append("lastname", data?.lastname);
    formdata.append("category", data?.category);
    formdata.append("price", data?.price);
    formdata.append("description", data?.description);
    // formdata.append("fn",data?.fname) ;
    console.log(formdata);
    const response = await editBook(formdata, id);
    // if(response){

    //   // navigate("/productlist");
    // }
  };

  const { register, handleSubmit, reset } = useForm();
  const loadBooksData = async () => {
    const response = await getBookById(id);
    //console.log(response);
    // console.log(response)
    reset(response.data);
  };


  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Edit Product</h2>
          </Col>
        </Row>
        <form
          className=""
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <Row className="mt-3">
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    {...register("firstname", { required: true })}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    {...register("lastname", { required: true })}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col style={{ display: "row", flexDirection: "column" }}>
                  <Form.Label>Shop by Categories</Form.Label>
                  <select
                    className="_select"
                    style={{ border: "1px solid #ced4da " }}
                    name="category"
                    {...register("category", { required: true })}
                  >
                    {data.map((data, index) => (
                      <option key={index}>{data?.category}</option>
                    ))}
                  </select>
                </Col>

                <Col>
                  <Form.Label>Price *</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    {...register("price", { required: true })}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label className="mt-3">Description *</Form.Label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea4"
                    rows="3"
                    name="description"
                    {...register("description", {
                      required: true,
                      min: 3,
                      max: 100,
                    })}
                  ></textarea>
                </Col>
              </Row>

              <Form.Group controlId="formFile" className="mb-3 mt-5">
                <Form.Control
                  type="file"
                  name="picture"
                  accept=".png, .jpg, .jpeg"
                  onChange={imgSet}
                />
              </Form.Group>
            </Form.Group>
          </Row>
          <Row className="mt-1">
            <Col className="d-flex justify-content-start">
              <button
                style={{
                  backgroundColor: "#80bf32",
                  color: "white ",
                  height: "40px",
                  padding: "0 15px",
                }}
                type="submit"
              >
                Save
              </button>
              <button
                style={{
                  backgroundColor: "#f14d54",
                  color: "white ",
                  height: "40px",
                  padding: "0 15px",
                  marginLeft: "5px",
                }}
                type="reset"
              >
                Cancle
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default EditProduct;
