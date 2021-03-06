import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo } from '@ember-decorators/data';

export default class BatchModel extends Model {
  @attr('date') startDate;
  @attr('date') endDate;
  @attr('string') lectureStartTime;
  @attr('string') lectureEndTime;
  @belongsTo('teacher') teacher;
  @belongsTo('course') course;
  @belongsTo('center') center;
}
