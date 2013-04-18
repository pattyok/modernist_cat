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
  selected: DS.belongsTo('App.AddonItem'),
  choices: DS.hasMany('App.AddonChoices')
  });

App.AddonChoices = DS.Model.extend({

  addonItem: DS.belongsTo('App.AddonItem'),
  name: DS.attr('string'),
  content: DS.attr('string')

  });

App.AddonSelections = Ember.Object.extend({
  id: null,
  name: null,
  content: null
})

App.Slideshow = DS.Model.extend({
  src: DS.attr('string')
});

App.selectedAddonItemController = Ember.Object.create({
  AddonSelections: null
});

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
  addonItems:[100]
}, {
  id:2,
  addonItems:[200,400]
}, {
  id:3,
  addonItems:[300,400]
}, {
  id:4,
  addonItems:[100,400]
}, {
  id:5,
  addonItems:[100,200,300]
}, {
  id:6,
  addonItems:[100,400]
}]

App.AddonItem.FIXTURES = [{
  id: 100,
  name: 'Scratch Pad',
  selected: null,
  choices: [101, 102, 103] //['Bark', 'Teal', 'Tangerine']
}, {
  id: 200,
  name: 'Entrance',
  selected: null,
  choices: [201, 202]
}, {
  id: 300,
  name: 'Door Finish',
  selected: null,
  choices: [301, 302]
}, {
  id: 400,
  name: 'Exterior Lounge Pad',
  selected: null,
  choices: [401, 402, 403]
}];


App.AddonChoices.FIXTURES = [
  { id:101, content: 'Bark' },
  { id:102, content: 'Teal' },
  { id:103, content: 'Tangerine' },
  { id:201, content: 'Round' },
  { id:202, content: 'Square' },
  { id:301, content: 'White' },
  { id:302, content: 'Maple' },
  { id:401, content: 'Chipper Black' },
  { id:402, content: 'Chipper White' },
  { id:403, content: 'Chipper Grey' }
];


App.Slideshow.FIXTURES = [
  { id: 666,
    src: 'http://placekitten.com/200/300' },
  { id: 667,
    src: 'http://placekitten.com/300/300' },
  { id: 668,
    src: 'http://placekitten.com/400/300' }
]

