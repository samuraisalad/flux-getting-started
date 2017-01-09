/**
 * Created by hitoshi.saito on 2017/01/09.
 */
var Dispatcher = require('flux').Dispatcher;

var assign = require('object-assign');

var appDispatcher = assign(new Dispatcher(),
  {
    handleServerAction: function (action) {
      this.dispatch({
        source: 'server',
        action: action
      })
    },
    handleViewAction: function (action) {
      this.dispatch({
        source: 'view',
        action: action
      });
    }
  });

module.exports = appDispatcher;
