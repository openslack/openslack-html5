# openslack

启动命令：webpack-dev-server --progress --colors

export default 可以类比成 C# 里面的 public 关键字，这样才能在别的类中调用；可以省略，表示只在当前文件可见，相当于添加了 private 关键字。

react Ordering(顺序)

React.Component子类
constructor
optional static methods
getChildContext
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
    10. componentWillUnmount
    11. clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
    12. getter methods for render like getSelectReason() or getFooterContent()
    13. Optional render methods like renderNavigation() or renderProfilePicture()
    14. render
React.createClass
displayName
propTypes
contextTypes
childContextTypes
mixins
statics
defaultProps
getDefaultProps
getInitialState
    10. getChildContext
    11. componentWillMount
    12. componentDidMount
    13. componentWillReceiveProps
    14. shouldComponentUpdate
    15. componentWillUpdate
    16. componentDidUpdate
    17. componentWillUnmount
    18. clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
    19. getter methods for render like getSelectReason() or getFooterContent()
    20. Optional render methods like renderNavigation() or renderProfilePicture()
    21. render