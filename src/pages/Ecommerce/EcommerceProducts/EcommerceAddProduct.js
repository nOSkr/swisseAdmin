import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  NavLink,
  Row,
  Input,
  Label,
  FormFeedback,
  Form,
} from "reactstrap";

// Redux
import { useDispatch } from "react-redux";
import {
  addNewProduct as onAddNewProduct,
  // updateProduct as onUpdateProduct,
} from "../../../store/ecommerce/action";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

// Import React FilePond
import { registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EcommerceAddProduct = (props) => {
  document.title = "Алтан заан ХХК || Бараа нэмэх"

  const history = useNavigate();
  const dispatch = useDispatch();

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }


  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const productCategory = [
    {
      options: [
        { label: "Swisse", value: "All" },
        { label: "Nutrex", value: "Kitchen Storage & Containers" },
      ],
    },
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      price: "",
      stock: "",
      orders: "",
      category: "",
      status: "",
      rating: 4.5,
      manufacturer_name: "",
      manufacturer_brand: "",
      product_discount: "",
      meta_title: "",
      meta_keyword: "",
      product_tags: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter a Product Title"),
      price: Yup.string().required("Please Enter a Product Price"),
      stock: Yup.string().required("Please Enter a Product stock"),
      orders: Yup.string().required("Please Enter a Product orders"),
      category: Yup.string().required("Please Enter a Product category"),
      status: Yup.string().required("Please Enter a Product status"),
      manufacturer_name: Yup.string().required(
        "Please Enter a Manufacturer Name"
      ),
      manufacturer_brand: Yup.string().required(
        "Please Enter a Manufacturer Brand"
      ),
      product_discount: Yup.string().required(
        "Please Enter a Product Discount"
      ),
      meta_title: Yup.string().required("Please Enter a Meta Title"),
      meta_keyword: Yup.string().required("Please Enter a Meta Keyword"),
      product_tags: Yup.string().required("Please Enter a Product Tags"),
    }),
    onSubmit: (values) => {
      const newProduct = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        name: values.name,
        price: values.price,
        stock: values.stock,
        orders: values.orders,
        category: values.category,
        status: values.status,
        rating: 4.5,
      };
      // save new product
      dispatch(onAddNewProduct(newProduct));
      history.push("apps-ecommerce-products");
      validation.resetForm();
    },
  });
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Бараа үүсгэх" pageTitle="Дэлгүүр" />

        <Row>
          <Col lg={8}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Барааны нэр
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Барааны нэр оруулна уу"
                      name="name"
                      value={validation.values.name || ""}
                      onBlur={validation.handleBlur}
                      onChange={validation.handleChange}
                      invalid={
                        validation.errors.name && validation.touched.name
                          ? true
                          : false
                      }
                    />
                    {validation.errors.name && validation.touched.name ? (
                      <FormFeedback type="invalid">
                        {validation.errors.name}
                      </FormFeedback>
                    ) : null}
                  </div>
                  <div>
                    <Label>Барааны дэлгэрэнгүй</Label>

                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>
                      Tommy Hilfiger men striped pink sweatshirt. Crafted with
                      cotton. Material composition is 100% organic cotton.
                      This is one of the world’s leading designer lifestyle
                      brands and is internationally recognized for celebrating
                      the essence of classic American cool style, featuring
                      preppy with a twist designs.
                    </p>
                    <ul>
                      <li>Full Sleeve</li>
                      <li>Cotton</li>
                      <li>All Sizes available</li>
                      <li>4 Different Color</li>
                    </ul>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Барааны зураг</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <h5 className="fs-15 mb-1">Барааны зураг</h5>
                    <p className="text-muted">Барааны нүүр зураг.</p>
                    <div className="text-center">
                      <div className="position-relative d-inline-block">
                        <div className="position-absolute top-100 start-100 translate-middle">
                          <label
                            htmlFor="product-image-input"
                            className="mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title=""
                            data-bs-original-title="Select Image"
                          >
                            <div className="avatar-xs">
                              <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                <i className="ri-image-fill"></i>
                              </div>
                            </div>
                          </label>
                          <input
                            className="form-control d-none"
                            defaultValue=""
                            id="product-image-input"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                          />
                        </div>
                        <div className="avatar-lg">
                          <div className="avatar-title bg-light rounded">
                            <img
                              src=""
                              id="product-img"
                              alt=""
                              className="avatar-md h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="fs-15 mb-1">Барааны зургийн цомог</h5>
                    <p className="text-muted">
                      Барааны зургийн цомог нэмэх (Дээд тал нь 4 зураг!)
                    </p>

                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone dz-clickable">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <h5>Зураг чирч оруулах эсвэл над дээр дар.</h5>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleCustom("2");
                        }}
                      >
                        Meta (Google ийн хайлтын системд холбоно)
                      </NavLink>
                </CardHeader>

                <CardBody>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="meta-title-input"
                            >
                               Meta гарчиг(Google ийн хайлтын системд илэрцэд харагдах гарчиг)
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter meta title"
                              id="meta-title-input"
                              name="meta_title"
                              value={validation.values.meta_title || ""}
                              onBlur={validation.handleBlur}
                              onChange={validation.handleChange}
                              invalid={
                                validation.errors.meta_title &&
                                validation.touched.meta_title
                                  ? true
                                  : false
                              }
                            />
                            {validation.errors.meta_title &&
                            validation.touched.meta_title ? (
                              <FormFeedback type="invalid">
                                {validation.errors.meta_title}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="meta-keywords-input"
                            >
                                Meta түлхүүр үг(Google ийн хайлтын системд хайх түлхүүр үг)
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter meta keywords"
                              id="meta-keywords-input"
                              name="meta_keyword"
                              value={validation.values.meta_keyword || ""}
                              onBlur={validation.handleBlur}
                              onChange={validation.handleChange}
                              invalid={
                                validation.errors.meta_keyword &&
                                validation.touched.meta_keyword
                                  ? true
                                  : false
                              }
                            />
                            {validation.errors.meta_keyword &&
                            validation.touched.meta_keyword ? (
                              <FormFeedback type="invalid">
                                {validation.errors.meta_keyword}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                      <div>
                        <Label
                          className="form-label"
                          htmlFor="meta-description-input"
                        >
                          Meta тайлбар(Google ийн хайлтын системд илэрцэд харагдах тайлбар)
                        </Label>
                        <textarea
                          className="form-control"
                          id="meta-description-input"
                          placeholder="Meta тайлбар(Google ийн хайлтын системд холбоно)"
                          name="meta_description"
                          rows="3"
                        ></textarea>
                      </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Оруулах
                </button>
              </div>
            </Form>
          </Col>

          <Col lg={4}>
            <Card>
            <CardHeader>
                <h5 className="card-title mb-0">Дэлгүүр сонгох</h5>
              </CardHeader>
                <CardBody>            
                  <div className="mb-3">
                    <label className="form-label" htmlFor="product-stock-input">
                      Үлдэгдэл
                    </label>
                    <div className="input-group mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="product-stock-input"
                        placeholder="Үлдэгдэл оруулна уу"
                        name="stock"
                        value={validation.values.stock || ""}
                        onBlur={validation.handleBlur}
                        onChange={validation.handleChange}
                        invalid={
                          validation.errors.stock && validation.touched.stock
                            ? true
                            : false
                        }
                      />
                      {validation.errors.stock && validation.touched.stock ? (
                        <FormFeedback type="invalid">
                          {validation.errors.stock}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </div>
                  </CardBody>
                  <CardBody>

             
                  <div className="mb-3">
                    <label className="form-label" htmlFor="product-price-input">
                      Үнэ
                    </label>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="product-price-addon"
                      >
                        ₮
                      </span>
                      <Input
                        type="text"
                        className="form-control"
                        id="product-price-input"
                        placeholder="Үнэ оруулна уу"
                        name="price"
                        aria-label="Price"
                        aria-describedby="product-price-addon"
                        value={validation.values.price || ""}
                        onBlur={validation.handleBlur}
                        onChange={validation.handleChange}
                        invalid={
                          validation.errors.price && validation.touched.price
                            ? true
                            : false
                        }
                      />
                      {validation.errors.price && validation.touched.price ? (
                        <FormFeedback type="invalid">
                          {validation.errors.price}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </div>
                  </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Дэлгүүр сонгох</h5>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">Дэлгүүр сонгох</p>
                <Input
                  name="category"
                  type="select"
                  className="form-select"
                  id="category-field"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.category || ""}
                >
                  {productCategory.map((item, key) => (
                    <React.Fragment key={key}>
                      {item.options.map((item, key) => (
                        <option value={item.value} key={key}>
                          {item.label}
                        </option>
                      ))}
                    </React.Fragment>
                  ))}
                </Input>
                {validation.touched.category && validation.errors.category ? (
                  <FormFeedback type="invalid">
                    {validation.errors.category}
                  </FormFeedback>
                ) : null}
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Барааны богино Танилцуулга</h5>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">
                  Барааны богино танилцуулга нэмэх
                </p>
                <textarea
                  className="form-control"
                  placeholder="Барааны богино танилцуулга нэмэх дээд тал нь 100 тэмдэгтээс тогтоно"
                  rows="3"
                ></textarea>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceAddProduct;
