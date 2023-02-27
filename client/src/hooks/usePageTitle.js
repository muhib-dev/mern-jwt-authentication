import { useEffect, useState } from "react";
import { BRAND_NAME } from "@components/data/constrain";

const usePageTitle = (title) => {
  const [pageTitle, setPageTitle] = useState(title);

  useEffect(() => {
    document.title = `${pageTitle} - ${BRAND_NAME}`;
  }, [pageTitle]);

  const changeTitle = (title) => {
    setPageTitle(title);
  };

  return {
    title: pageTitle,
    changeTitle,
  };
};

export default usePageTitle;
