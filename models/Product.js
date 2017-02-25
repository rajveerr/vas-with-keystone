var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Products Model
 * =============
 */

var Product = new keystone.List('Product', {
  map: {name: 'title'},
  singular:'Product',
  plural: 'Products',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Product.add({
  title: {type: String, required: true},
  price: {type: Number},
  shortDescription: {type: String},
  description: {type: Types.Html, wysiwyg: true, height: 400},
  bestfor: {type: String},
  // publishedWhen: (type: Date, default: Date.now),
})

Product.register();
