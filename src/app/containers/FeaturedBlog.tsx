import * as React from "react";
import styles from "./styles.scss";
import * as blogData from "../../../static/featuredblogsinfo.json";

import CardViewTwo from "../components/Cards/card-view-two";

export default class FeaturedBlog extends React.PureComponent<{}> {
  render() {
    const blogInfo: any = blogData;
    return (
      <section className={styles.featuredBlogContainer}>
        <h1>Featured blogs</h1>
        <div className={styles.blogcardsContainer}>
          {blogInfo.default.map((blog: any, i: number) => (
            <CardViewTwo key={i} data={blog} />
          ))}
        </div>
      </section>
    );
  }
}
