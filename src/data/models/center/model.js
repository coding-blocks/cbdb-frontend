import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from 'ember-decorators/data';

export default class CenterModel extends Model {
  @attr('string') name;
  @hasMany('batch') batches;
  @attr('string') cotactNo;
  @attr('string') email;
}
