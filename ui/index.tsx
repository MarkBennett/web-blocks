import React = require('react');
import ReactDOM = require('react-dom');
import mui = require('material-ui');
import ThemeManager = require('material-ui/lib/styles/theme-manager');
import LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
import ToolBox = require('./ToolBox');
import Game from '../app/Game';

const Colors = mui.Styles.Colors;
const injectTapEventPlugin = require('react-tap-event-plugin');

// ThemeManager.setTheme(ThemeManager.types.LIGHT);

injectTapEventPlugin();

class UserInterface {
  container: HTMLDivElement;
  app: any;

  init(_container: HTMLDivElement) {
    this.container = _container;
    this.app = ReactDOM.render(<App />, this.container);
  }

  getViewPort() {
    return ReactDOM.findDOMNode(this.app.refs.viewPort) as HTMLDivElement;
  }

  setGame(game: Game) {
    this.app = ReactDOM.render(<App game={game} />, this.container);
  }
}

const App = React.createClass<{ game?: Game }, any>({
  getInitialState() {
    return {};
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  componentWillMount() {
    //ThemeManager.setPalette({
    //  accent1Color: Colors.deepOrange500
    //});
  },

  render() {
    return (
      <div className="app">
        <ViewPort ref="viewPort"></ViewPort>
        <ToolBox game={this.props.game}></ToolBox>
      </div>
    );
  }
});

const ViewPort = React.createClass<{ ref: string }, any>({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div className="viewPort">
        <div className="helpBar">Keys: [W] = Forwards, [S] = Backwards, [A] = Move Left, [D] = Move Right, Arrow Keys = Look around, [ESCAPE] = Toggle Code Editor</div>
      </div>
    );
  }
});

export default UserInterface;
