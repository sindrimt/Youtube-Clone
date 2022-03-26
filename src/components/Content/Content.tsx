import React, { useEffect, useState } from "react";
import ContentSearch from "./ContentSearch";
import ContentDefault from "./ContentDefault";

import { useSelector } from "react-redux";
import { State } from "../../state/index";

const Content = () => {
  const url = useSelector((state: State) => state.bank);
  const [showSearch, setShowSearch] = useState(false);
  //console.log(url);

  useEffect((): void => {
    console.log(url);

    if (url === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [url]);

  if (showSearch) {
    return <ContentSearch searchTerm={url} />;
  } else {
    return <ContentDefault />;
  }
};

export default Content;
