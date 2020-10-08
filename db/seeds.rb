# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  { 
    name: "Chickpea Restaurant",
    image_url: '/chickpea.jpeg'
  }, 
  { 
    name: "Sula Indian Restaurant",
    image_url: '/sula.jpeg'
  },
  { 
    name: "Acorn Restaurant",
    image_url: '/Acorn.jpeg'
  }, 
  { 
    name: "Arbor Restaurant",
    image_url: '/arbor.jpeg'
  }, 
  { 
    name: "Grano Pizza",
    image_url: '/grano.jpeg'
  }, 
  { 
    name: "Umaluma cafe",
    image_url: '/umaluma.jpeg'
  },
 { 
    name: "Todiefor cafe",
    image_url: '/todiefor.jpeg'
 },
 {
    name: "Say hello sweets",
    image_url: '/sayhello.jpeg'
 },
 {
    name: "Oh sooo good",
    image_url: '/ohsoogood.jpeg'
 },
{
    name: "Oh sweet day",
    image_url: '/ohsweetday.jpeg'
},
{
    name: "meet on main",
    image_url: '/meetonmain.jpeg'
},
{
    name: "planetary burger",
    image_url: '/planetary.jpeg'
  }
])

 reviews = Review.create([
    {
         title: 'Great Restaurant',
         description: 'Butter tofu was so good',
         score: 5,
         restaurant: restaurants.first
    },
    {
        title: 'Good Restaurant',
        description: 'Food was good, but small portions',
        score: 4,
        restaurant: restaurants.first
    }
 ])