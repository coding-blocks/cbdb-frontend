import Route from '@ember/routing/route';

export default class CoursesRoute extends Route {
  model() {
    return({
      courses: this.store.findAll('course', {
        backgroundReload: true
      })
    })
  }
}
