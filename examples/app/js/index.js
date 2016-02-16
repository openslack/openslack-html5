function renderDevTools(store) {
  if (__DEBUG__) {
    let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }else {
    return null;
  }
}

React.render(
    <div>
        <Provider store={store}>
            {() => <App /> }
        </Provider>
        {renderDevTools(store)}
    </div>,
  document.getElementById('app'));
/* app/configureStore.js */

var buildStore;
if(__DEBUG__) {
  buildStore = compose(
    applyMiddleware(thunk),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  )
}else {
  buildStore = compose(applyMiddleware(thunk), createStore)
}

export default function configureStore(initialState) {
  return buildStore(rootReducer, initialState);
}