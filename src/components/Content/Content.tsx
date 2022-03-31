import React, { useEffect, useState } from "react";
import ContentSearch from "./ContentSearch";
import ContentDefault from "./ContentDefault";

import { useSelector } from "react-redux";
import { State } from "../../state/index";

const Content = () => {
  const url = useSelector((state: State) => state.bank);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect((): void => {
    setIsLoading(true);
    if (url === "") {
      setShowSearch(false);
      setIsLoading(false);
    } else {
      setShowSearch(true);
      setIsLoading(false);
    }
  }, [url]);

  if (isLoading) {
    return (
      <section className="outer">
        <div className="loading">Loading...</div>
      </section>
    );
  }
  return <>{showSearch ? <ContentSearch searchTerm={url} /> : <ContentDefault />}</>;
};

export default Content;
