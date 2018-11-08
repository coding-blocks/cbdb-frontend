import Route from '@ember/routing/route';

export default class CentersIndexRoute extends Route {
  model() {
    return this.modelFor('centers')
  }
}
