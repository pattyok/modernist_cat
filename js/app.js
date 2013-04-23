

var App = Ember.Application.create({
    radio1: ""
});

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
  description: DS.attr('string'),
  subtitle: DS.attr('string'),
  features: DS.attr('string'),
  specifications: DS.attr('string'),
  shipping:DS.attr('string')
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
  name: 'Circa50:Console',
  subtitle: "Pet Scratcher",
  description: "The Modernist Cat Circa50: Console is perfect for any room in your home and ideal for small spaces! Designed by Crystal Gregory, this dual purpose console attaches to any wall for support and provides a sleek and functional solution for keeping important items at hand while giving your modern kitty the ultimate place to perch and scratch!<br/><br/>We offer custom fit FLOR carpet tiles that are easy to replace if it get’s worn or if you just want to change the color to switch-up your décor!",
  addons: 1,
  price: 399,
  features: "<li>Hand crafted with Walnut Hardwood veneer Euro Ply</li><li> Water resistant finish</li>" +
            "<li>Slender display shelf</li><li>Open storage cubby</li>" +
            "<li>Removable/replaceable FLOR carpet tiles in 5 colors</li>" + 
            "<li>Easy installation – wall mounting hardware included</li>",
  specifications: "21 1/8”W x 12”D x 34”H<br/>Display Shelf: 21 1/8”W x 7 ½ “D<br/>Open Cubby: 19 ¾”W x 7 ½ D x 6”H",
  shipping:"Items ship free, fully assembled (Continental US only)<br/>" + 
            "Please allow 2-3 weeks for delivery<br/>" +
            "For international shipping rates, please contact me for a quote"
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

// Additional Javascript
Ember.RadioButton = Ember.View.extend({
  title: null,
  checked: false,
  group: "radio_button",
  disabled: false,

  classNames: ['ember-radio-button'],

  defaultTemplate: Ember.Handlebars.compile('<label><input type="radio" {{ bindAttr disabled="view.disabled" name="view.group" value="view.option" checked="checked"}} />{{view.title}}</label>'),

  change: function() {
    Ember.run.once(this, this._updateElementValue);
  },

  _updateElementValue: function() {
    var input = this.$('input:radio');
    set(this, 'value', input.attr('value'));
  }
});





