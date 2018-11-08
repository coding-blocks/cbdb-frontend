import Route from '@ember/routing/route';

export default class TeachersRoute extends Route {
  model() {
    return ({
      teachers: this.store.findAll('teacher')
    })
  }
}
