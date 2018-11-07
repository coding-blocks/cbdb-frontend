import Route from '@ember/routing/route';

export default class CoursesIndexRoute extends Route {
  model() {
    return this.modelFor('courses')
  }
}
