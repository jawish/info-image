import React from "react";

//import styles from "../styles/canvas.css";

export default class Canvas extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      canvas: null
    };
  }

  onDownload () {
    let link = document.createElement('a');
    link.setAttribute('href', this.state.canvas.toDataURL());
    link.setAttribute('download', this.props.title.toLowerCase() + '.png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  componentDidMount () {
    const fCanvas = new fabric.Canvas('canvas');

    this.setState({canvas: fCanvas});
  }

  render () {
    let { children, ...parentProps } = this.props;
  
    const childrenWithProps = React.Children.map(this.props.children, (child, id) => {
      return React.cloneElement(child, {
        index: id,
        canvas: this.state.canvas,
        parentProps
      });
    });

    return (
      <div>
        <canvas id="canvas" width="600" height="600"></canvas>
        {childrenWithProps}
        <button onClick={this.onDownload.bind(this)}>Download</button>
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
