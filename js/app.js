var App = Ember.Application.create();

//Router
App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', { path: ':table_id' });
  });
  this.resource('products', function() {
    this.resource('product', { path: ':product_id' });
  });

});

App.IndexRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('slideshow').set('model', App.Slideshow.find());
    this.controllerFor('allProducts').set('model', App.Product.find());
  }
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.Product.find();
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return App.Product.find(params.product_id);
  }
});

App.TableController = Ember.ObjectController.extend();
App.ProductController = Ember.ObjectController.extend();
App.OptionsController = Ember.ObjectController.extend();
App.AllProductsController = Ember.ArrayController.extend();
App.SlideshowController = Ember.ArrayController.extend();

// View Helpers
Ember.Handlebars.registerBoundHelper('money', function(value) {
  return (value % 100 === 0 ?
          value / 100 + '.00' :
          parseInt(value / 100, 10) + '.' + value % 100);
});


// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});


App.Product = DS.Model.extend({
  addons: DS.belongsTo('App.Addons'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string')
});

App.Addons = DS.Model.extend({
  addonItems: DS.hasMany('App.AddonItem')
});


App.AddonItem = DS.Model.extend({
  name: DS.attr('string'),
  choices: DS.hasMany('App.AddonChoices')
  });

App.AddonChoices = DS.Model.extend({
  addonItem: DS.belongsTo('App.AddonItem'),
  name: DS.attr('string'),
  content: DS.attr('string')
  });

App.AddonSelections = Ember.Object.extend({
  id: null,
  type: null,
  selection: null
});

App.Slideshow = DS.Model.extend({
  src: DS.attr('string')
});

App.selectedAddonSelectionsController = Ember.Object.create({
  addonselections: null
});

App.addonsController = Ember.ArrayController.create({
 id:1,
 type:'Scratch Pad',
 content:[
    App.AddonSelections.create({id:100, selection:'teal'}),
    App.AddonSelections.create({id:101, selection:'yellow'}),
 ],
 id:2,
 type:'Door Type',
 content:[
    App.AddonSelections.create({id:200, selection:'square'}),
    App.AddonSelections.create({id:201, selection:'round'}),
 ],
})

App.Product.FIXTURES = [{
  id: 1,
  addons: 1,
  name: 'Circa50:Console',
  description: 'A console table <br /> that is also a scratching post',
  price: '100'
}, {
  id: 2,
  addons: 2,
  name: 'Circa50:Standard',
  description: 'A modern litter box',
  price: '100'
}, {
  id: 3,
  addons: 3,
  name: 'Circa50:CompactI',
  description: 'A small modern litter box',
  price: '100'
}, {
  id: 4,
  addons: 4,
  name: 'Circa50:CompactII',
  description: 'Another small modern litter box',
  price: '100'
}, {
  id: 5,
  addons: 5,
  name: 'Circa50:Diner',
  description: 'Feeding Bowls',
  price: '100'
}, {
  id: 6,
  addons: 6,
  name: 'Circa50:PetCrate',
  description: 'A box for your dog',
  price: '100'
}];

App.Addons.FIXTURES = [{
  id:1,
  addonItems:[1]
}, {
  id:2,
  addonItems:[2,4]
}, {
  id:3,
  addonItems:[3,4]
}, {
  id:4,
  addonItems:[1,4]
}, {
  id:5,
  addonItems:[1,2,3]
}, {
  id:6,
  addonItems:[1,4]
}]

App.AddonItem.FIXTURES = [{
  id: 1,
  name: 'Scratch Pad',
  choices: [1, 2, 3] //['Bark', 'Teal', 'Tangerine']
}, {
  id: 2,
  name: 'Entrance',
  choices: ['Circle', 'Rectangle']
}, {
  id: 3,
  name: 'Door Finish',
  choices: ['Walnut', 'White']
}, {
  id: 4,
  name: 'Exterior Lounge Pad',
  choices: ['Chipper Black', 'Chipper Stone']
}];

App.AddonChoices.FIXTURES = [
  { id:1, content: 'Bark' },
  { id:2, content: 'Teal' },
  { id:3, content: 'Tangerine' }
];


App.Slideshow.FIXTURES = [
  { id: 666,
    src: 'http://placekitten.com/200/300' },
  { id: 667,
    src: 'http://placekitten.com/300/300' },
  { id: 668,
    src: 'http://placekitten.com/400/300' }
]

