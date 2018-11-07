import Route from '@ember/routing/route';

interface CourseRouteParams {
  id: string
}

export default class CoursesCourseRoute extends Route {
  model({ id }: CourseRouteParams) {
   return ({ id })
  }

}
