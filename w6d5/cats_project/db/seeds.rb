# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

Cat.create(birth_date: "2005/11/11", color: "Brown", name: "Kitty", sex: "F", description: "first cat")

Cat.create(birth_date: "2004/11/11", color: "Black", name: "Tom", sex: "M", description: "second cat")

Cat.create(birth_date: "2003/11/11", color: "Orange", name: "Caesar", sex: "M", description: "third cat")

Cat.create(birth_date: "2002/11/11", color: "Black", name: "Rex", sex: "F", description: "fourth cat")