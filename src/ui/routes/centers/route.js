import Route from '@ember/routing/route';

export default class CentersRoute extends Route {
  model() {
    return ({
      centers: this.store.findAll('center')
    })
  }
}
