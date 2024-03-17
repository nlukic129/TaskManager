import { useRef } from "react";
import classes from "./Search.module.css";

import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const searchBox = useRef<HTMLDivElement>(null);
  const searchBtn = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const cancelBtn = useRef<HTMLDivElement>(null);

  const onClickSearchIconHandler = () => {
    searchBox.current && searchBox.current.classList.add(classes.active);
    searchBtn.current && searchBtn.current.classList.add(classes.active);
    searchInput.current && searchInput.current.classList.add(classes.active);
    searchInput.current && searchInput.current.focus();
    cancelBtn.current && cancelBtn.current.classList.add(classes.active);
  };

  const onClickCancelIconHandler = () => {
    searchBox.current && searchBox.current.classList.remove(classes.active);
    searchBtn.current && searchBtn.current.classList.remove(classes.active);
    searchInput.current && searchInput.current.classList.remove(classes.active);
    cancelBtn.current && cancelBtn.current.classList.remove(classes.active);
  };

  return (
    <div className={classes.search_box} ref={searchBox}>
      <input type="text" placeholder="Type to search person..." ref={searchInput}></input>
      <div className={classes.search_icon} onClick={onClickSearchIconHandler} ref={searchBtn}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={classes.cancel_icon} onClick={onClickCancelIconHandler} ref={cancelBtn}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={classes.search_data}></div>
    </div>
  );
};

export default Search;
