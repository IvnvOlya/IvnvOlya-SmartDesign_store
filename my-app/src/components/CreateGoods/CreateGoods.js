import "./CreateGoods.css";
import React from "react";
const axios = require("axios").default;

export default function CreateGoods() {
  function formHandler(e) {
    e.preventDefault();
    // fetch("http://localhost:3333/posts",{
    //     method: "POST",
    //     headers: {
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     },body : JSON.stringify({
    //         title: e.target.title.value,
    //         price: e.target.price.value
    //     }),
    // })
    //     .then(response => response.json())
    //     .then(response =>{
    //         console.log(response);
    //        setTitle(response)
    //         }).catch(error => console.log('errror'));
    //     }
    const newGood = {
      title: e.target.title.value,
      price: e.target.price.value,
    };
    const sendGood = async () => {
      try {
        const resp = await axios.post("http://localhost:3333/posts", newGood);
        console.log(resp.data);
      } catch (err) {
        console.log("errror");
      }
    };
    sendGood();
  }
  return (
    <div>
      <form
        onSubmit={formHandler}
        className="Form"
      >
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Название Товара:{" "}
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Введите название"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Цена:{" "}
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="price"
              id="price"
              className="form-control"
              placeholder="Введите цену"
            />
          </div>
        </div>
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Add new good
          </button>
        </div>
      </form>
    </div>
  );
}
