import Route from '@ember/routing/route';

export default class CoursesCourseRoute extends Route {
  model({ id }) {
   return ({
     course: this.store.findRecord('course', id)
   })
  }

}
