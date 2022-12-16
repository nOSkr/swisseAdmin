import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Tooltip,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

import product1 from "../../../assets/images/products/img-1.png";
import product6 from "../../../assets/images/products/img-6.png";
import product8 from "../../../assets/images/products/img-8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";

SwiperCore.use([FreeMode, Navigation, Thumbs]);


function EcommerceProductDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Бараа дэлгэрэнгүй" pageTitle="Дэлгүүр" />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <Row className="gx-lg-5">
                  <Col xl={4} md={8} className="mx-auto">
                    <div className="product-img-slider sticky-side-div">
                      <Swiper
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="swiper product-thumbnail-slider p-2 rounded bg-light"
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <img
                              src={product8}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product6}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product1}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product8}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>

                      <div className="product-nav-slider mt-2">
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          spaceBetween={10}
                          className="swiper product-nav-slider mt-2 overflow-hidden"
                        >
                          <div className="swiper-wrapper">
                            <SwiperSlide className="rounded">
                              <div className="nav-slide-item">
                                <img
                                  src={product8}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product6}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product1}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product8}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </Col>

                  <Col xl={8}>
                    <div className="mt-xl-0 mt-5">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h4>Full Sleeve Sweatshirt for Men (Pink)</h4>
                          <div className="hstack gap-3 flex-wrap">
                            <div>
                              <Link to="#" className="text-primary d-block">
                                Swisse
                              </Link>
                            </div>
                            <div className="vr"></div>
                            <div className="text-muted">
                              Katегори :{" "}
                              <span className="text-body fw-medium">
                                Хүүхэд
                              </span>
                            </div>
                            <div className="vr"></div>
                            <div className="text-muted">
                              Нийтэлсэн :{" "}
                              <span className="text-body fw-medium">
                                26 Mar, 2021
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <Tooltip
                              placement="top"
                              isOpen={ttop}
                              target="TooltipTop"
                              toggle={() => {
                                setttop(!ttop);
                              }}
                            >
                              Өөрчлөх
                            </Tooltip>
                            <a
                              href="apps-ecommerce-add-product"
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <Row className="mt-4">
                        <Col lg={3} sm={6}>
                          <div className="p-2 border border-dashed rounded">
                            <div className="d-flex align-items-center">
                              <div className="avatar-sm me-2">
                                <div className="avatar-title rounded bg-transparent text-info fs-24">
                                  <i className="ri-money-dollar-circle-fill"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-1">Үнэ :</p>
                                <h5 className="mb-0">230,000</h5>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="p-2 border border-dashed rounded">
                            <div className="d-flex align-items-center">
                              <div className="avatar-sm me-2">
                                <div className="avatar-title rounded bg-transparent text-info fs-24">
                                  <i className="ri-stock-fill"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-1">Үлдэгдэл :</p>
                                <h5 className="mb-0">23</h5>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="p-2 border border-dashed rounded">
                            <div className="d-flex align-items-center">
                              <div className="avatar-sm me-2">
                                <div className="avatar-title rounded bg-transparent text-info fs-24">
                                  <i className="ri-stock-fill"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-1">Төсөөллийн ашиг :</p>
                                <h5 className="mb-0">5,290,000</h5>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="mt-4 text-muted">
                        <h5 className="fs-14">Танилцуулга :</h5>
                        <p>
                          Tommy Hilfiger men striped pink sweatshirt. Crafted
                          with cotton. Material composition is 100% organic
                          cotton. This is one of the world’s leading designer
                          lifestyle brands and is internationally recognized for
                          celebrating the essence of classic American cool
                          style, featuring preppy with a twist designs.
                        </p>
                      </div>

                      {/* <Row>
                        <Col sm={6}>
                          <div className="mt-3">
                            <h5 className="fs-14">Features :</h5>
                            <ul className="list-unstyled">
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                Full Sleeve
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                Cotton
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                All Sizes available
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                4 Different Color
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="mt-3">
                            <h5 className="fs-14">Services :</h5>
                            <ul className="list-unstyled product-desc-list">
                              <li className="py-1">10 Days Replacement</li>
                              <li className="py-1">
                                Cash on Delivery available
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row> */}

                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">Барааны бүрэн Танилцуулга :</h5>
                        <Nav tabs className="nav-tabs-custom nav-success">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "1",
                              })}
                              onClick={() => {
                                toggleCustom("1");
                              }}
                            >
                              Мэдээлэл
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "2",
                              })}
                              onClick={() => {
                                toggleCustom("2");
                              }}
                            >
                              Дэлгэрэнгүй
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent
                          activeTab={customActiveTab}
                          className="border border-top-0 p-4"
                          id="nav-tabContent"
                        >
                          <TabPane id="nav-speci" tabId="1">
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row" style={{ width: "200px" }}>
                                      Category
                                    </th>
                                    <td>T-Shirt</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Brand</th>
                                    <td>Tommy Hilfiger</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Color</th>
                                    <td>Blue</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Material</th>
                                    <td>Cotton</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Weight</th>
                                    <td>140 Gram</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </TabPane>
                          <TabPane id="nav-detail" tabId="2">
                            <div>
                              <h5 className="font-size-16 mb-3">
                                Tommy Hilfiger Sweatshirt for Men (Pink)
                              </h5>
                              <p>
                                Tommy Hilfiger men striped pink sweatshirt.
                                Crafted with cotton. Material composition is
                                100% organic cotton. This is one of the world’s
                                leading designer lifestyle brands and is
                                internationally recognized for celebrating the
                                essence of classic American cool style,
                                featuring preppy with a twist designs.
                              </p>
                              <div>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Machine Wash
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Fit Type: Regular
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  100% Cotton
                                </p>
                                <p className="mb-0">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  Long sleeve
                                </p>
                              </div>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EcommerceProductDetail;
