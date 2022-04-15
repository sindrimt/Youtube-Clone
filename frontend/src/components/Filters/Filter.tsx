import React, { useEffect, useRef } from "react";

import { FilterContainer, FilterContent, Tag } from "./FilterStyles";

export const Filter = () => {
  const tags: any /* Array<string> */ = [
    "Mattematikk",
    "Matlagingsprogrammer",
    "Gaming",
    "Direkte",
    "Minecraft Bedrock",
    "Tegnefilmer",
    "Kunshåndtverk",
    "Kunshåndtverk",
    "Action",
  ];

  const buttonRef: any = React.useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <FilterContainer>
      <FilterContent>
        <Tag ref={buttonRef}>Alle</Tag>
        {tags.map((tag: string) => (
          <Tag>{tag}</Tag>
        ))}
      </FilterContent>
    </FilterContainer>
  );
};
