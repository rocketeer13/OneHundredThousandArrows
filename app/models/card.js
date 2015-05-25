import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(), //Card name
    id: DS.attr(), //Id-ified name
    url: DS.attr(), //TCGplayer link
    store_url: DS.attr(),
    types: DS.attr(), //This is an array of strings
    colors: DS.attr, //This is an array of strings
    cmc: DS.attr(), //Actually a Number
    cost: DS.attr(),  //String of form "{1}{R}"
    text: DS.attr(), //Rules text
    formats: DS.attr(), //Object of form format:legal/banned, no entry if format invalid
    editions: DS.attr() //Array of Objects, each object has set, rarity, artist, multiverse_id, flavor, number, layout, price{low, avg, high}, url(loopback), image_url, set_url, store_url
});