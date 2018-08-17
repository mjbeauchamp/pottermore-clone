import React from "react";
import range from "lodash.range";
import { scaleLinear } from "d3-scale";
import { NodeGroup } from "react-move";

// consider making this a higher order component so that we can use the same code, but change details about it.

const linear = scaleLinear().domain([0, window.innerWidth]);

class CursorTrail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("touchmove", this.handleTouchMove);
  }

  handleMouseMove({ pageX: x, pageY: y }) {
    this.setState({ x, y });
  }

  handleTouchMove({ touches }) {
    this.handleMouseMove(touches[0]);
  }



  render() {
    return (
      <div>
        <NodeGroup
          data={range(30).map(d => {
            return {
              key: `key-${d}`,
              x: this.state.x,
              y: this.state.y
            };
          })}

          keyAccessor={d => d.key}
  
          start={data => {
            return { x: data.x, y: data.y };
          }}

          update={(data, index) => {
            return {
              x: [data.x + 26],
              y: [data.y + 35],
              timing: {
                delay: index * 14,
                duration: 300,
              }
            };
          }}
        >
          {nodes => {
            return (
              <div>
                {nodes.map((node, index) => {
                  const { x, y } = node.state;

                  return (
                    <div
                      key={node.key}
                      style={{
                        backgroundColor: 'red',
                        marginTop: -5,
                        width: 5,
                        height: 5,
                        borderRadius: 25,
                        opacity: 0.7,
                        WebkitTransform: `translate3d(${x - 25}px, ${y -
                          25}px, 0)`,
                        transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                        zIndex: nodes.length - index + 5000
                      }}
                    />
                  );
                })}
              </div>
            );
          }}
        </NodeGroup>
        <NodeGroup
        data={range(30).map(d => {
          return {
            key: `key-${d}`,
            x: this.state.x,
            y: this.state.y
          };
        })}

        keyAccessor={d => d.key}
 
        start={data => {
          return { x: data.x, y: data.y };
        }}

        update={(data, index) => {
          return {
            x: [data.x + 26],
            y: [data.y + 35],
            timing: {
              delay: index * 20,
              duration: 300,
            }
          };
        }}
      >
        {nodes => {
          return (
            <div>
              {nodes.map((node, index) => {
                const { x, y } = node.state;

                return (
                  <div
                    key={node.key}
                    style={{
                      backgroundColor: 'yellow',
                      marginTop: -5,
                      width: 5,
                      height: 5,
                      borderRadius: 25,
                      opacity: 0.7,
                      WebkitTransform: `translate3d(${x - 25}px, ${y -
                        25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: nodes.length - index + 5000
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </NodeGroup>
      <NodeGroup
        data={range(30).map(d => {
          return {
            key: `key-${d}`,
            x: this.state.x,
            y: this.state.y
          };
        })}

        keyAccessor={d => d.key}
 
        start={data => {
          return { x: data.x, y: data.y };
        }}

        update={(data, index) => {
          return {
            x: [data.x + 26],
            y: [data.y + 35],
            timing: {
              delay: index * 17,
              duration: 300,
            }
          };
        }}
      >
        {nodes => {
          return (
            <div>
              {nodes.map((node, index) => {
                const { x, y } = node.state;

                return (
                  <div
                    key={node.key}
                    style={{
                      backgroundColor: 'blue',
                      marginTop: -5,
                      width: 5,
                      height: 5,
                      borderRadius: 25,
                      opacity: 0.7,
                      WebkitTransform: `translate3d(${x - 25}px, ${y -
                        25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: nodes.length - index + 5000
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </NodeGroup>
      </div>
      
    );
  }
}

export default CursorTrail
