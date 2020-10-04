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
    image_url: "https://unsplash.com/photos/sEuvlgAqsUA"
  }, 
  { 
    name: "Sula",
    image_url: "https://unsplash.com/photos/Djtc1T38-GY"
  },
  { 
    name: "Acorn",
    image_url: "https://unsplash.com/photos/uG6IchOznWw" 
  }, 
  { 
    name: "Arbor",
    image_url: "https://unsplash.com/photos/fMYQyLvtpiU" 
  }, 
  { 
    name: "Grano pizza",
    image_url: "https://unsplash.com/photos/MPMH77_XtBY" 
  }, 
  { 
    name: "umaluma cafe",
    image_url: "https://unsplash.com/photos/wrd6RfjvMjY" 
  },
 { 
    name: "to die for cafe",
    image_url: "https://unsplash.com/photos/H2avC2mh66Q" 
 },
 {
    name: "say hello sweets",
    image_url: "https://unsplash.com/photos/AKRaaxG9QIo"
 },
 {
    name: "oh sooo good",
    image_url: "https://unsplash.com/photos/3m575c3wgvw" 
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