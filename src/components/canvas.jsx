import React from "react";

//import styles from "../styles/canvas.css";

export default class Canvas extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      canvas: null
    };
  }

  componentDidMount () {
    let {title} = this.props;

    let fCanvas = new fabric.Canvas('canvas');
    let fTitle = new fabric.Text(title, {
      top: 20 + 20,
      left: 600 / 2,
      originX: 'center',
      textAlign: 'center',
      fontSize: 26,
      fontWeight: 'bold'
    });
    //fCanvas.add(fTitle);

    this.setState({canvas: fCanvas});
  }

  render () {
    let { children, ...parentProps } = this.props;
  
    const childrenWithProps = React.Children.map(this.props.children, (child, id) => {
      return React.cloneElement(child, {
        index: id,
        canvas: this.state.canvas,
        ...parentProps
      });
    });

    return (
      <div>
        <canvas id="canvas" width="600"></canvas>
        {childrenWithProps}
      </div>
    );
  }
  
}

Canvas.displayName = "Canvas";

Canvas.propTypes = {};

Canvas.defaultProps = {
  title: 'Test Title',
  width: 600
};
