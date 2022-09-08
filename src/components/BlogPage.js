import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
export const BlogPage = (props) => {
  const [blog, setblog] = useState([]);
  const [image, setImage] = useState("");
  const [vimage, setVimage] = useState([]);
  const [varr, setVarr] = useState([]);
  const [fam, setFam] = useState([]);
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    getBlog();
  }, [blog]);
  const getBlog = async () => {
    const URL = "http://localhost:2001/blog/" + id;
    const data = await fetch(URL);
    const blog_data = await data.json();
    setVimage(blog_data.imgArr);
    setblog(blog_data.blog);
    setVarr(blog_data.blog.blogVisitingPlaces);
    setFam(blog_data.blog.blogFamousFor);
    setImage(
      btoa(
        String.fromCharCode(
          ...new Uint8Array(blog_data.blog.blogImage.data.data)
        )
      )
    );
  };
  const viewBlog = (data) => {};
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="blog_container">
          <div className="blogName">{blog.blogName}</div>
          <div className="blogImage">
            <img src={"data:image/png;base64," + image} width="300" alt="" />
          </div>
          <div className="clearfix"></div>
          <div className="blogText">{blog.blogText}</div>
          <div className="blogCreatedBy">
            <h4>blog Created By - </h4>
            {blog.blogCreatedBy}
          </div>
          <div className="famous">
            <h1>VILLAGE FAMOUS FOR</h1>
          </div>
          <ul>
            {fam.map((item, index) => {
              return (
                <li className="blogFamousFor" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>

          <h1>VISITING PLACES</h1>
          {varr.map((item, index) => {
            return (
              <div className="visiting_container" key={index}>
                <div className="placeImage">
                  <img
                    src={`data:image/png;base64,${vimage[index]}`}
                    width="300"
                    alt=""
                  />
                </div>
                <div className="placeName">{item.placeName}</div>
                <div className="placeLocation">{item.placeLocation}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
