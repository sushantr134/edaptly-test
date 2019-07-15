import * as React from "react";
import styles from "./styles.scss";

import * as blogData from "../../../static/latestblogsinfo.json";

import CardViewOne from "../components/Cards/card-view-one";

export default class LatestBlog extends React.PureComponent<{}> {
  render() {
    const blogInfo: any = blogData;
    return (
      <section className={styles.latestBlogContainer}>
        <h1>Latest blogs</h1>
        <div className={styles.blogcardsContainer}>
          {blogInfo.default.map((blog: any, i: number) => (
            <CardViewOne key={i} data={blog} />
          ))}
        </div>
      </section>
    );
  }
}
