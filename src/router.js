import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', { path: '/:id' });
  });
  this.route('centers');
});

export default Router;
