import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Block = styled.div`
  background-color: red;
  border: 3px black solid;
  display: inline-block;
  height: 30px;
  width: ${props => (props.width || 100)}px;
`;

const Timeline = styled.div`
  background-color: #4b4b4b;
  border: thin solid rgba(240, 240, 240, .2);
  border-bottom-right-radius: 5px;
  grid-area: body;
  padding: 5px;
`;

const Line = styled.div`
  background-color: cadetblue;
  border: thin solid rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

const Menu = styled.div`
  background-color: #4b4b4b;
  border: thin solid rgba(240, 240, 240, .2);
  border-top-right-radius: 5px;
  grid-area: menu;
  padding: 5px;
`;

const Panel = styled.div`
  background-color: #4b4b4b;
  border: thin solid rgba(240, 240, 240, .2);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  grid-area: panel;
  padding: 5px;
`;

const Properties = styled.div`
  grid-area: properties;
`;

class App extends PureComponent {
  static propTypes = { className: PropTypes.string };

  constructor() {
    super();

    this.state = {
      widthA: 50,
      widthB: 50,
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <Menu>Menu</Menu>
        <Panel>
          Assets
          <button>Add</button>
          music1
          music2
        </Panel>
        <Properties />
        <Timeline>
          <Line>
            <Block
              width={this.state.widthA}
              onClick={() => this.setState({ ...this.state, widthA: this.state.widthA + 50 })}
            >
              <audio id="sound2" controls />
              <input type="file" onChange={(e) => {
                const sound = document.getElementById('sound2');
                sound.src = URL.createObjectURL(e.target.files[0]);
              }} />
            </Block>
          </Line>
          <Line>
            <Block
              width={this.state.widthB}
              onClick={() => this.setState({ ...this.state, widthB: this.state.widthB + 50 })}
            >
              <audio id="sound" controls />
              <input type="file" onChange={(e) => {
                const sound = document.getElementById('sound');
                sound.src = URL.createObjectURL(e.target.files[0]);
              }} />
            </Block>
          </Line>
          <div>
            Controles
          </div>
        </Timeline>
      </div>
    );
  }
}

export default styled(App)`
  background-color: #3b3b3b;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "menu menu"
    "panel body"
    "properties body"
  ;
  height: 97%;
  padding: 1%;
  position: absolute;
  width: 98%;
`;
