import DS from 'ember-data';
const { JSONAPISerializer } = DS;

export default class BatchSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
}
