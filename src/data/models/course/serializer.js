import DS from 'ember-data';
const { JSONAPISerializer } = DS;

export default class CourseSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
}
