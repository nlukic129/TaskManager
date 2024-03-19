import { useRef } from "react";
import classes from "./Search.module.css";
import { useDispatch } from "react-redux";
import { setSearchFilter } from "../../store/TaskSlice";

import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const searchBox = useRef<HTMLDivElement>(null);
  const searchBtn = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const cancelBtn = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

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
    dispatch(setSearchFilter(""));
  };

  const onTypingHandler = () => {
    if (!searchInput.current) return;
    let typingTimer;

    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      searchInput.current && dispatch(setSearchFilter(searchInput.current.value));
    }, 700);
  };

  return (
    <div className={classes.search_box} ref={searchBox}>
      <input type="text" placeholder="Type to search person..." ref={searchInput} onChange={onTypingHandler}></input>
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
