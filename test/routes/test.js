/**
 * Created by tannguyen on 01/08/2016.
 */
var TestController =  require('../controllers/TestController');

module.exports = function(router) {
  router.get('/test',TestController.test);
}
