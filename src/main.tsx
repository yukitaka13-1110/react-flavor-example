import * as React from "react";
import * as ReactDOM from "react-dom";
import envVariables from './config'

const App: React.FC = () => {
  return (
    <div>
      <div>React Flavor Example</div>
      <div>{envVariables.HOGE}</div>
      <div>{envVariables.FUGA}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

