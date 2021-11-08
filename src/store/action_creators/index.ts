import * as MenuActionCreators from './menucall'
import * as LoginActionCreators from './accesscall' 

const ActionCreators = {
    ...MenuActionCreators,
    ...LoginActionCreators,
}
export default ActionCreators