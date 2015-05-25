import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return {
            Owners: ['Jeff', 'Kyle', 'Morgan'],
            Holders: ['Jeff', 'Kyle', 'Morgan']
        };
    }
});