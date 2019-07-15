import * as React from "react";
import styles from "./styles.scss";

type CardProps = {
  data: any;
};

export default class CardViewOne extends React.PureComponent<CardProps, {}> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.cardContainer} data-card={"one"}>
        <div
          className={styles.cardupper}
          data-card={"one"}
          style={{ background: `url(${data.backgroundImage}) no-repeat`, backgroundOrigin: "center", backgroundSize: "cover" }}
        />
        <div className={styles.cardlower} data-card={"one"}>
          <h1>{data.blogTitle}</h1>
          <h3>{data.subTitle}</h3>
          <p>{data.content.toString().substr(0, 100) + "..."}</p>

          <a href={data.Link}>Read More</a>
        </div>
        <div className={styles.cardfooter}>
          <div className={styles.userPic} />
          <div className={styles.views} />
        </div>
      </div>
    );
  }
}
