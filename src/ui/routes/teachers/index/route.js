import Route from '@ember/routing/route';

export default class TeachersIndexRoute extends Route {
  model() {
    return this.modelFor('teachers')
  }
}
