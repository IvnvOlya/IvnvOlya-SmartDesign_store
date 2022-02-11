import "./List.css";
import { useState, useEffect } from "react";

export default function List(data) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const searchGood = items.filter((item) => {
    let priceGood = item.price.trim().includes(value.trim());
    let titleGood = item.title
      .toLowerCase()
      .trim()
      .includes(value.toLowerCase().trim());
    return titleGood || priceGood;
  });

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setOpen(!open);
  };
  const inputClickHandler = () => {
    setOpen(true);
  };
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <div className="form">
          <form className="form-search">
            <input
              type="text"
              className="form-control input-search"
              placeholder="Поиск товара"
              onChange={(event) => setValue(event.target.value)}
              onClick={inputClickHandler}
              value={value}
            />
            <ul className="autocomplete">
              {value && open
                ? searchGood.map((item, index) => {
                    return (
                      <li
                        className="autocomplete-item"
                        onClick={itemClickHandler}
                        key={index}
                      >
                        {item.title}
                      </li>
                    );
                  })
                : null}
            </ul>
          </form>
        </div>
        <table className="table">
          <thead className="thead-dark thead">
            <tr>
              <th scope="col">Товар</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            {searchGood.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price} руб.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
