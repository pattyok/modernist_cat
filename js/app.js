

var App = Ember.Application.create({
    radio1: ""
});

//Router
App.Router.map(function() {
  this.resource('products', function() {
    this.resource('product', { path: ':product_id' }, function(){
      this.route('features');
    });
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
  },
  events: {
    imageSwitch: function(imgID) {
    console.log("Switch " + imgID);
    $('.images').text('SwitchImage ' + imgID);
  }
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
  addons: DS.hasMany('App.AddonItem'),
  options: DS.hasMany('App.AddonItem'),
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
  class: DS.attr('string'),
  selected: DS.belongsTo('App.AddonItem'),
  choices: DS.hasMany('App.AddonChoices')
  });

App.AddonChoices = DS.Model.extend({

  addonItem: DS.belongsTo('App.AddonItem'),
  class: DS.attr('string'),
  title: DS.attr('string')

  });

App.optionSelections = Ember.Object.extend({
  type: null,
  selection:null,
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
  options: [100],
  addons: [100],
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
  name: 'Circa50:Standard',
  subtitle: "Litter Box Hideaway",
  description: "The Modernist Cat Circa50: Standard is perfect for any room in your home and ideal for small spaces! Designed by Crystal Gregory, this dual purpose console attaches to any wall for support and provides a sleek and functional solution for keeping important items at hand while giving your modern kitty the ultimate place to perch and scratch!<br/><br/>We offer custom fit FLOR carpet tiles that are easy to replace if it get’s worn or if you just want to change the color to switch-up your décor!",
  options: [200, 300],
  addons: [400],
  price: 599,
  features: "<li>Hand crafted with Walnut Hardwood veneer Euro Ply</li><li> Water resistant finish</li>" +
            "<li>Slender display shelf</li><li>Open storage cubby</li>" +
            "<li>Removable/replaceable FLOR carpet tiles in 5 colors</li>" + 
            "<li>Easy installation – wall mounting hardware included</li>",
  specifications: "21 1/8”W x 12”D x 34”H<br/>Display Shelf: 21 1/8”W x 7 ½ “D<br/>Open Cubby: 19 ¾”W x 7 ½ D x 6”H",
  shipping:"Items ship free, fully assembled (Continental US only)<br/>" + 
            "Please allow 2-3 weeks for delivery<br/>" +
            "For international shipping rates, please contact me for a quote"
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
  class: 'scratch',
  selected: null,
  choices: [101, 102, 103, 104, 105] //['Bark', 'Teal', 'Tangerine']
}, {
  id: 200,
  name: 'Entrance',
  class: 'entrance',
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
  { id:101, class: 'scratch101',  title: 'Bark' },
  { id:102, class: 'scratch102', title: 'Teal' },
  { id:103, class: 'scratch103', title: 'Tangerine' },
  { id:104, class: 'scratch104', title: 'Bone' },
  { id:105, class: 'scratch105', title: 'Kiwi' },
  { id:201, class: 'round', title: 'Round' },
  { id:202, class: 'square', title: 'Square' },
  { id:301, class: 'white', title: 'White' },
  { id:302, class: 'maple', title: 'Maple' },
  { id:401, class: 'chipperBlack', title: 'Chipper Black' },
  { id:402, class: 'chipperWhite', title: 'Chipper White' },
  { id:403, class: 'chipperGrey', title: 'Chipper Grey' }
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
/*{{view Ember.RadioButton 
        title="content.content" 
        option="1" 
        group="content.id" 
        valueBinding="App.radio1"}}
    {{/each}}*/

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

App.Options= Ember.View.extend({
  layoutName: 'options',
  selection:null
})

App.Tiles = Ember.View.extend({
  type:null,
  id:null,
  isSelected: false,
  click: function(evt) {
    this.get('controller').send('imageSwitch', this.id);
    
    var selected = this.get('id');
    
    App.optionSelections.pushObject({type: this.type, selected: selected})
    
    console.log(optionSelections.length)
    this.set('isSelected', true);
  },
  tagName:'li',
  attributeBindings: ['title'],
  classNameBindings: ['type', 'title', 'tileClass', 'isSelected:selected'],
  tileClass: function(){
    return  this.get('type') + this.get('id')
  }.property('type', 'id'),
  _updateSelectedValue: function() {
    var selectedOption = this.id;
    options.selection = selectedOption;
    console.log(selectedOption)
  }
});

App.SelectionTiles = Ember.CollectionView.extend({
  tagName: 'ul',
  content:null,
  type:content.name,
  classNameBindings: [':optionTiles', ':no-bullet'],
  itemViewClass: Ember.View.extend({
    classNameBindings:['view.type']
  })

})



