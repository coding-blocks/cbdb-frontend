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
  this.route('centers', function() {
    this.route('center', { path: '/:id' });
  });
  this.route('batches', function() {
    this.route('batch', { path: '/:id' });
  });
  this.route('teachers', function() {
    this.route('teacher', { path: '/:id' });
  });
});

export default Router;
