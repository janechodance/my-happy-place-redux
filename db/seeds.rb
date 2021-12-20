# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.reset_pk_sequence
Vendor.destroy_all
Vendor.reset_pk_sequence
Subscription.destroy_all
Subscription.reset_pk_sequence

jane = User.create(name:'Jane', email: 'janechodance@gmail.com', phone: '1234567899', address:'111 lake street, New York, NY 11111', DOB:'19931110', is_vendor: true)
jenya = User.create(name:'Jenya', email: 'jenya@gmail.com', phone: '4567235742', address:'528 93rd st, Brooklyn, NY 14534', DOB:'19890326', is_vendor: false)
keishma = User.create(name:'Keishma', email: 'keishma@gmail.com', phone: '1357894563', address:'482 46th st, Queens, NY 14134', DOB:'19850924', is_vendor: true)
thecolorsofelephant = Vendor.create(user_id: jane.id, store_name: 'The colors of Elephant', category: 'jewelry', description: 'Handmade with love, macrame jewelry of your choice.')
elementalvybe = Vendor.create(user_id: jane.id, store_name: 'ElementalVybe', category: 'jewelry', description: 'Elementalvybe creates handcrafted one of a kind jewelry using healing cyrtals.')
Subscription.create(user_id: jenya.id, vendor_id: thecolorsofelephant.id)
Subscription.create(user_id: jenya.id, vendor_id: elementalvybe.id)
Subscription.create(user_id: keishma.id, vendor_id: thecolorsofelephant.id)
Subscription.create(user_id: jane.id, vendor_id:elementalvybe.id)

puts "done seeding..."
