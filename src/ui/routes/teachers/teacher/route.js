import Route from '@ember/routing/route';

export default class TeachersTeacherRoute extends Route {
  model({ id }) {
    return ({
      teacher: this.store.findRecord('teacher', id)
    })
  }
}
