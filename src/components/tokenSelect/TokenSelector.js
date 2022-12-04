import "./style/TokenSelector.scss";
import closeIcon from "../../assets/images/close-icon.svg";
import plusIcon from "../../assets/images/plusIcon.svg";
import { useEffect, useState } from "react";
import { MultipleCoins } from "../../api/api";
import Modal from "../UI/Modal";

function TokenSelector(props) {
  const [coin, setCoin] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query1, setQuery1] = useState({
    query: "",
    list: [],
  });
  const [selection1, setSelection1] = useState(null);
  const [query2, setQuery2] = useState({
    query: "",
    list: [],
  });
  const [selection2, setSelection2] = useState(null);

  const fetchCoinName = async () => {
    try {
      setLoading(true);
      const response = await fetch(MultipleCoins);
      if (response.status !== 200) {
        alert("Crypto currency not found, please type another currency");
        // setSearchInput("");
      } else {
        const json = await response.json();
        console.log(json);
        const sortedCurrencies = json.sort(compareCoinsByIdName);
        setCoin(sortedCurrencies);
      }
    } catch (error) {
      setError(new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinName();
  }, []);

  const handleChange1 = (e) => {
    const results = coin.filter((c) => {
      if (e.target.value === "") {
        return coin;
      } else {
        return c.id.includes(e.target.value.toLowerCase());
      }
    });
    setQuery1({
      research: e.target.value,
      list: results,
    });
  };

  function handleSelection1(e) {
    console.log(e.target);
    setSelection1(e.target.innerHTML);
    setQuery1({
      research: "",
    });
  }

  const handleChange2 = (e) => {
    const results = coin.filter((c) => {
      if (e.target.value === "") {
        return coin;
      } else {
        return c.id.includes(e.target.value.toLowerCase());
      }
    });
    setQuery2({
      research: e.target.value,
      list: results,
    });
  };

  function handleSelection2(e) {
    console.log(e.target);
    setSelection2(e.target.innerHTML);
    setQuery2({
      research: "",
    });
  }
  //per ordinare gli oggetti dentro all'array sulla base della property "id"
  function compareCoinsByIdName(a, b) {
    let comparison = 0;
    if (a.id < b.id) {
      comparison = -1;
    }
    if (a.id > b.id) {
      comparison = 1;
    }
    return comparison;
  }

  return (
    <Modal onClose={props.onClose}>
      <div className="token-selector-wrapper">
        <div className="token-selector-header">
          <h2>Select a token</h2>
          <button>
            <img src={closeIcon} alt="close-icon" onClick={props.onClose}></img>
          </button>
        </div>
        <section className="token-selector-body">
          <div className="input-plus-list">
            <div className="token-selection">
              <input
                type="search"
                value={query1.research}
                onChange={handleChange1}
                placeholder="Search name"
              ></input>
            </div>
            <div className="token-list">
              <ul>
                {query1.research === ""
                  ? ""
                  : query1.list.map((c, index) => {
                      return (
                        <li key={index} onClick={handleSelection1}>
                          {c.id}
                        </li>
                      );
                    })}
              </ul>
            </div>
          </div>
          <div className="plus-icon-wrapper">
            <img className="plus-icon" src={plusIcon} alt="plus icon"></img>
          </div>
          <div className="input-plus-list">
            <div className="token-selection">
              <input
                type="search"
                value={query2.research}
                onChange={handleChange2}
                placeholder="Search name"
              ></input>
            </div>
            <div className="token-list">
              <ul>
                {query2.research === ""
                  ? ""
                  : query2.list.map((c, index) => {
                      return (
                        <li key={index} onClick={handleSelection2}>
                          {c.id}
                        </li>
                      );
                    })}
              </ul>
            </div>
          </div>
        </section>
        <div className="currency-choice">
          <h2>{selection1}</h2>
          <h2>{selection2}</h2>
        </div>
      </div>
    </Modal>
  );
}

export default TokenSelector;
