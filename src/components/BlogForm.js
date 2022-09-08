import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Navbar } from "./Navbar";
const BlogForm = (props) => {
  const [name, setName] = useState();
  const [text, setText] = useState();
  const [created, setCreated] = useState();
  const [famous, setFamous] = useState();
  const [image, setImage] = useState();

  const [visiting, setVisiting] = useState([
    { id: uuidv4(), placeName: "", placeImage: null, placeLocation: "" },
  ]);

  const changeVisiting = (id, event) => {
    const newVisiting = visiting.map((i) => {
      if (id === i.id) {
        if (event.target.name == "placeImage") {
          i[event.target.name] = event.target.files[0];
        } else i[event.target.name] = event.target.value;
      }
      return i;
    });
    setVisiting(newVisiting);
    event.preventDefault();
  };
  const handleAddFields = (event) => {
    setVisiting([
      ...visiting,
      { id: uuidv4(), placeName: "", placeImage: null, placeLocation: "" },
    ]);
    event.preventDefault();
  };

  const handleRemoveFields = (id) => {
    const values = [...visiting];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setVisiting(values);
  };

  const send = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("blogName", name);
    data.append("blogText", text);
    data.append("uploads", image);
    data.append("blogCreatedBy", created);
    console.log(famous);
    let famousarr = famous.split(",");

    famousarr.map((item, index) => {
      data.append(`blogFamousFor[${index}]`, item);
    });
    visiting.map((item, index) => {
      data.append(`blogVisitingPlaces[${index}][placeName]`, item.placeName);
      data.append(
        `blogVisitingPlaces[${index}][placeLocation]`,
        item.placeLocation
      );
      data.append(`blogVisitingPlaces[${index}][placeImage]`, null);
      data.append("uploads", item.placeImage);
    });
    const message = await axios.post("http://localhost:2001/blog", data);
    console.log(message);
  };

  return (
    <div className="form1-container">
      <Navbar />
      <form className="form-main">
        <div className="heading">
          <h1>ADD BLOG DETAILS</h1>
        </div>
        <div className="name fm">
          <div className="title">BLOG name:</div>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="name"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          ></input>
        </div>
        <div className="text fm">
          <div className="title">BLOGTEXT:</div>
          <textarea
            id="Price"
            name="Price"
            placeholder="blogText"
            onChange={(event) => {
              const { value } = event.target;
              setText(value);
            }}
          ></textarea>
        </div>
        <div className="image fm">
          <div className="title">BLOG image:</div>
          <input
            type="file"
            id="blogimage"
            name="blogimage"
            placeholder="image"
            onChange={(event) => {
              const file = event.target.files[0];
              setImage(file);
            }}
          ></input>
        </div>
        <div className="famous fm">
          <div className="title">BLOG Famous for(separated by comma):</div>
          <input
            type="text"
            id="Description"
            name="Description"
            placeholder="description"
            onChange={(event) => {
              const { value } = event.target;
              setFamous(value);
            }}
          ></input>
        </div>
        <div className="Availabilty fm">
          <div className="title">Blog Created By</div>
          <input
            type="text"
            id="availabilty"
            name="Availabity"
            placeholder="Availability"
            onChange={(event) => {
              const { value } = event.target;
              setCreated(value);
            }}
          ></input>
        </div>
        <div className="subheading">
          <h1>Visiting Places</h1>
        </div>
        {visiting.map((each) => {
          return (
            <div className="visiting" key={each.id}>
              <br />
              <br />
              <div className="Availabilty fm">
                <div className="title">placeName</div>
                <input
                  type="text"
                  id="availabilty"
                  name="placeName"
                  placeholder="placeName"
                  onChange={(event) => changeVisiting(each.id, event)}
                ></input>
              </div>
              <div className="Availabilty fm">
                <div className="title">placeLocation</div>
                <input
                  type="text"
                  id="availabilty"
                  name="placeLocation"
                  placeholder="placeLocation"
                  onChange={(event) => changeVisiting(each.id, event)}
                ></input>
              </div>
              <div className="Availabilty fm">
                <div className="title">placeImage</div>
                <input
                  type="file"
                  id="availabilty"
                  name="placeImage"
                  placeholder="placeImage"
                  onChange={(event) => changeVisiting(each.id, event)}
                ></input>
              </div>
              <button
                disabled={visiting.length === 1}
                onClick={() => handleRemoveFields(each.id)}
              >
                Remove
              </button>
              <button onClick={(event) => handleAddFields(event)}>Add</button>
            </div>
          );
        })}

        <input
          type="submit"
          value="Submit"
          className="submit fm"
          onClick={send}
        ></input>
      </form>
    </div>
  );
};
export default BlogForm;
