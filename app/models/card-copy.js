import DS from 'ember-data';

export default DS.Model.extend({
    card: DS.attr(),
    owner: DS.attr(),
    holder: DS.attr()
});
