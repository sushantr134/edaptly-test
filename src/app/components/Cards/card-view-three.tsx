import * as React from "react";
import styles from "./styles.scss";

type CardProps = {
  data: any;
};

export default class CardViewThree extends React.PureComponent<CardProps, {}> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.cardContainer} data-card={"three"}>
        <div className={styles.leftPart} data-card={"three"}>
          <div
            className={styles.photoContainer}
            style={{ background: `url(${data.backgroundImage}) no-repeat`, backgroundOrigin: "center", backgroundSize: "cover" }}
          />
          <div className={styles.tagsContainer}>
            <span>Tag 1</span>
            <span>Tag 2</span>
            <span>Tag 3</span>
          </div>
        </div>
        <div className={styles.rightPart} data-card={"three"}>
          <div className={styles.tagline} data-card={"three"}>
            <div className={styles.one}>Meta Tag</div>
            <div className={styles.two}>English</div>
          </div>
          <div className={styles.cardlower} data-card={"three"}>
            <h1>{data.blogTitle}</h1>
            <h3>{data.subTitle}</h3>
            <p>{data.content.toString().substr(0, 50) + "..."}</p>

            <a href={data.Link}>Read More</a>
          </div>
          <div className={styles.cardfooter}>
            <div className={styles.userPic} />
            <div className={styles.views} />
          </div>
        </div>
      </div>
    );
  }
}
