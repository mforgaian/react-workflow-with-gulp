import React from 'react';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    console.log("inside constructor");    
  }

  render() {
    console.log("inside constructor");
    // debugger;    
    if (this.state.liked) {
      return 'You liked this';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

export default LikeButton;