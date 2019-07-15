import * as React from "react";

import LatestBlog from "./containers/LatestBlog";
import FeaturedBlog from "./containers/FeaturedBlog";
import AllBlog from "./containers/AllBlog";

const App: React.FunctionComponent<{}> = () => (
  <>
    <LatestBlog />
    <FeaturedBlog />
    <AllBlog />
  </>
);
export default App;
