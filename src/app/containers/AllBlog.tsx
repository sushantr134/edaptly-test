import * as React from "react";

import styles from "./styles.scss";
import * as blogData from "../../../static/allblogsinfo.json";

import CardViewThree from "../components/Cards/card-view-three";

export default class AllBlog extends React.PureComponent<{}> {
  render() {
    const blogInfo: any = blogData;
    const cardItemsRendered = blogInfo.default.map((blog: any, i: number) => (
      <CardViewThree key={i} data={blog} />
    ));
    return (
      <section className={styles.allblogscontainer}>
        <h1>All blogs</h1>
        <div className={styles.blogcardsContainer} data-container="all">
          {cardItemsRendered}
        </div>
      </section>
    );
  }
}
