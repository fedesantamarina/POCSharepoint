import * as React from "react";
import "react-orgchart/index.css";
import { IOrgChartPocProps } from "./IOrgChartPocProps";
import styles from "./OrgChartPoc.module.scss";
export class IOrgChartPocState {
  data: any[];
}
export default class OrgChartPoc extends React.Component<
  IOrgChartPocProps,
  IOrgChartPocState
> {
  public constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Child 1",
        } /*
        {
          name: "Child 2",
        },
        {
          name: "Child 3",
        },*/,
      ],
    };
  }
  avatarPersonnel = (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <rect id="a" width="96" height="96" rx="48" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#E8F6FC" />
        <path
          d="M62.297 53.094c1.666.416 3.034 1.302 4.101 2.656C67.466 57.104 68 58.64 68 60.36v2.89c0 1.042-.365 1.927-1.094 2.656-.729.73-1.614 1.094-2.656 1.094h-32.5c-1.042 0-1.927-.365-2.656-1.094-.73-.729-1.094-1.614-1.094-2.656v-2.89c0-1.72.534-3.256 1.602-4.61 1.067-1.354 2.434-2.24 4.101-2.656l5.547-1.406c2.448 1.77 5.208 2.708 8.281 2.812 3.386.104 6.459-.833 9.219-2.812l5.547 1.406zM48 24c2.24 0 4.323.56 6.25 1.68a12.411 12.411 0 0 1 4.57 4.57 12.227 12.227 0 0 1 1.68 6.25c0 2.24-.56 4.323-1.68 6.25a12.411 12.411 0 0 1-4.57 4.57A12.227 12.227 0 0 1 48 49c-2.24 0-4.323-.56-6.25-1.68a12.411 12.411 0 0 1-4.57-4.57 12.227 12.227 0 0 1-1.68-6.25c0-2.24.56-4.323 1.68-6.25a12.411 12.411 0 0 1 4.57-4.57A12.227 12.227 0 0 1 48 24z"
          stroke="#767676"
          stroke-width="4"
        />
      </g>
    </svg>
  );

  public render(): React.ReactElement<IOrgChartPocProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;
    const nodeWidth = 200;
    const marginWidth = 20;
    return (
      <section className={`${styles.orgChartPoc}`}>
        <div className={styles.orgTree}>
          <div className={styles.orgTreeHeader}>
            <div className={styles.orgTreeRoot}>Root</div>
            {this.state.data.length === 1 && (
              <div className={styles.linecontainer1}>
                <div className={styles.complement}></div>
                <div className={styles.line}></div>
              </div>
            )}
            {this.state.data.length === 2 && (
              <>
                <div className={styles.linecontainer1}>
                  <div className={styles.complement}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.linecontainer2}>
                  <div className={styles.complement}></div>
                  <div
                    className={styles.lineLeft}
                    style={{
                      width: nodeWidth + marginWidth * 3,
                    }}
                  ></div>
                  <div
                    className={styles.lineRight}
                    style={{
                      width: nodeWidth + marginWidth * 3,
                    }}
                  ></div>
                  <div className={styles.complement}></div>
                </div>
              </>
            )}
            {this.state.data.length === 3 && (
              <>
                <div className={styles.linecontainer1}>
                  <div className={styles.complement}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.linecontainer2}>
                  <div className={styles.complement}></div>
                  <div
                    className={styles.lineLeft}
                    style={{
                      width: nodeWidth + marginWidth,
                    }}
                  ></div>
                  <div
                    className={styles.linecontainer1}
                    style={{ width: nodeWidth * this.state.data.length - 1 }}
                  >
                    <div
                      className={styles.complement}
                      style={{
                        borderTop: "1px solid #000",
                        width:
                          nodeWidth / 2 +
                          marginWidth * this.state.data.length -
                          1,
                      }}
                    ></div>
                    <div
                      className={styles.line}
                      style={{
                        borderTop: "1px solid #000",
                        width:
                          nodeWidth / 2 +
                          marginWidth * this.state.data.length -
                          1,
                      }}
                    ></div>
                  </div>
                  <div
                    className={styles.lineRight}
                    style={{
                      width: nodeWidth + marginWidth,
                    }}
                  ></div>
                  <div className={styles.complement}></div>
                </div>
              </>
            )}
            <div className={styles.orgTreeNodes}>
              {this.state.data.map((node, index) => (
                <>
                  <div
                    className={styles.orgTreeNode}
                    style={{
                      width: nodeWidth - 1,
                      marginLeft: marginWidth,
                      marginRight: marginWidth,
                    }}
                  >
                    <div className={styles.orgTreeNodeAvatar}>
                      {this.avatarPersonnel}
                    </div>
                    <div className={styles.orgTreeNodeName}>{node.name}</div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
