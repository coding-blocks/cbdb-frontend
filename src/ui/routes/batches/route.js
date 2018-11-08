import Route from '@ember/routing/route';

export default class BatchesRoute extends Route {
  model() {
    return ({
      batches: this.store.findAll('batch')
    })
  }
}
