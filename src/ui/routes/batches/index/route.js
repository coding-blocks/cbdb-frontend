import Route from '@ember/routing/route';

export default class BatchesIndexRoute extends Route {
  model() {
    return this.modelFor('batches')
  }
}
