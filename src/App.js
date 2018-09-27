import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  background-color: red;
  border: 3px black solid;
  display: inline-block;
  height: 30px;
  width: ${props => (props.width || 100)}px;
`;

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      widthA: 50,
      widthB: 50,
    };
  }

  render() {
    return (
      <div className="App">
        <Block
          width={this.state.widthA}
          onClick={() => this.setState({ ...this.state, widthA: this.state.widthA + 50 })}
        >
          lalal
        </Block>
        <Block
          width={this.state.widthB}
          onClick={() => this.setState({ ...this.state, widthB: this.state.widthB + 50 })}
        >
          lalal
        </Block>
      </div>
    );
  }
}

export default App;
