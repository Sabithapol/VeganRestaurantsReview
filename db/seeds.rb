# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  { 
    name: "Chickpea",
    image_url: '/photo-1.jpeg'
  }, 
  { 
    name: "Sula",
    image_url: '/photo-2.jpeg'
  },
  { 
    name: "Acorn",
    image_url: '/photo-3.jpeg'
  }, 
  { 
    name: "Arbor",
    image_url: '/photo-4.jpeg'
  }, 
  { 
    name: "Grano pizza",
    image_url: '/photo-5.jpeg'
  }, 
  { 
    name: "Umaluma cafe",
    image_url: '/photo-6.jpeg'
  },
 { 
    name: "Todiefor cafe",
    image_url: '/photo-7.jpeg'
 },
 {
    name: "Say hello sweets",
    image_url: '/photo-8.jpeg'
 },
 {
    name: "Oh sooo good",
    image_url: '/photo-9.jpeg'
 },
{
    name: "Oh sweet day",
    image_url: '/photo-10.jpeg'
},
{
    name: "meet on main",
    image_url: '/photo-11.jpeg'
},
{
    name: "planetary burger",
    image_url: '/photo-12.jpeg'
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