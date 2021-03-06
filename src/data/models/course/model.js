import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from '@ember-decorators/data';

export default class CourseModel extends Model {
  @attr('string') name;
  @hasMany('batch') batches;
  @attr('string') tagline;
  @attr('string') description;
  @attr('boolean') hasOnline;
  @attr('boolean') hasOffline;
}
