import DS from 'ember-data';
const { JSONAPIAdapter } = DS;

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3232'
  namespace = 'api'
}