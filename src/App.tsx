import { Provider, useDispatch, useSelector } from "react-redux";
import { store, AppState } from "./store";
import { incrementAttempts } from "./actions";

const AttemptsCounter = () => {
  const dispatch = useDispatch();
  const attemptsCount = useSelector(
    (state: AppState) => state.attempts.attemptsCount
  );

  return (
    <div>
      <p>Количество попыток: {attemptsCount}</p>
      <button onClick={() => dispatch(incrementAttempts())}>
        Купить попытку
      </button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AttemptsCounter />
  </Provider>
);

export default App;
