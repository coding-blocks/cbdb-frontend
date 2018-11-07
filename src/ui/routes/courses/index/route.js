import Route from '@ember/routing/route';

export default class CoursesIndexRoute extends Route {
  model() {
    return({
      courses: this.store.findAll('course', {
        backgroundReload: true
      })
    })
  }
}
