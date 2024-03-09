require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Appetizers', sortOrder: 10},
    {name: 'Sushi', sortOrder: 20},
    {name: 'Entrees', sortOrder: 30},
    {name: 'Salads', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
	{name: 'Gyoza', emoji: '🥟', category: categories[0], price: 6.95},
	{name: 'Dango', emoji: '🍡', category: categories[0], price: 8.95},
	{name: 'Oden', emoji: '🍢', category: categories[0], price: 6.95},
	{name: 'Oysters', emoji: '🦪', category: categories[0], price: 22.95},
  {name: 'Nigiri', emoji: '🍣', category: categories[1], price: 7.95},
  {name: 'Dragon Roll', emoji: '🐉', category: categories[1], price: 9.95},
  {name: 'Volcano Roll', emoji: '🌋', category: categories[1], price: 8.95}, 
  {name: 'California Roll', emoji: '💮', category: categories[1], price: 6.95},
  {name: 'Karaage', emoji: '🍗', category: categories[2], price: 13.95},
  {name: 'Bento Box', emoji: '🍱', category: categories[2], price: 13.95},
  {name: 'Ramen', emoji: '🍜', category: categories[2], price: 11.95},
  {name: 'Udon', emoji: '🍲', category: categories[2], price: 13.95},
  {name: 'Katsudon', emoji: '🍛', category: categories[2], price: 12.95},
  {name: 'Ebi Tempura', emoji: '🍤', category: categories[2], price: 12.95},
  {name: 'Kobe Beef', emoji: '🥩', category: categories[2], price: 27.95},
  {name: 'Green Salad', emoji: '🥗', category: categories[3], price: 13.95},
  {name: 'Hana Salad', emoji: '🥙', category: categories[3], price: 14.95},
  {name: 'Tako Su', emoji: '🐙', category: categories[3], price: 12.95},
  {name: 'Sesame Seaweed Salad', emoji: '🥬', category: categories[3], price: 6.95},
  {name: 'Cucumber Salad', emoji: '🥒', category: categories[3], price: 7.95},
  {name: 'Rice', emoji: '🍚', category: categories[4], price: 3.95},
  {name: 'Onigiri', emoji: '🍙', category: categories[4], price: 2.95},
  {name: 'Senbei', emoji: '🍘', category: categories[4], price: 2.95},
  {name: 'Fish Cake', emoji: '🍥', category: categories[4], price: 1.95},
  {name: 'Fortune Cookie', emoji: '🥠', category: categories[4], price: 0.00},
  {name: 'Aisukurimu', emoji: '🍨', category: categories[5], price: 1.95},
  {name: 'Hokkaido Cupcake', emoji: '🧁', category: categories[5], price: 0.95},
  {name: 'Cheesecake Souffle', emoji: '🍮', category: categories[5], price: 2.95},
  {name: 'Castella Cake', emoji: '🥮', category: categories[5]},
  {name: 'Green Tea', emoji: '🍵', category: categories[6], price: 0.95},
  {name: 'Bubble Tea', emoji: '🧋', category: categories[6], price: 7.95},
  {name: 'Sake', emoji: '🍶', category: categories[6], price: 8.95},
  {name: 'Rice Lager', emoji: '🍺', category: categories[6], price: 3.95},
  {name: 'Umeshu', emoji: '🥃', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();