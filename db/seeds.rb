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
Merchandise.destroy_all
Merchandise.reset_pk_sequence
Event.destroy_all
Event.reset_pk_sequence

jane = User.create(username: 'janecho', password: 'janecho', name:'Jane', email: 'janechodance@gmail.com', phone: '1234567899', address:'111 lake street, New York, NY 11111', DOB:'19931110', is_vendor: true)

jenya = User.create(username: 'jenya', password: 'jenya', name:'Jenya', email: 'jenya@gmail.com', phone: '4567235742', address:'528 93rd st, Brooklyn, NY 14534', DOB:'19890326', is_vendor: false)

keishma = User.create(username: 'keishma', password: 'keishma', name:'Keishma', email: 'keishma@gmail.com', phone: '1357894563', address:'482 46th st, Queens, NY 14134', DOB:'19850924', is_vendor: true)

lauren = User.create(username: 'lauren', password: 'lauren', name:'Lauren', email: 'lauren@gmail.com', phone: '1354891330', address:'58 Main st, Warwick, NY 10910', DOB:'19850320', is_vendor: true)

kim = User.create(username: 'kim', password: 'kim', name:'Kim', email: 'kim@gmail.com', phone: '8459880880', address:'10 Main st, Warwick, NY 10990', DOB:'19831117', is_vendor: true)

diara = User.create(username: 'diara', password: 'diara', name:'Diara', email: 'diara@gmail.com', phone: '9178612058', address:'396 E 93rd st, New York, NY 10024', DOB:'19950615', is_vendor: false)

thecolorsofelephant = Vendor.create(user_id: jane.id, store_name: 'The colors of Elephant', category: 'jewelry', description: 'Handmade with love, macrame jewelry of your choice.')
thecolorsofelephant.logo.attach(io: File.open('./public/logos/thecolorsofelephant-logo.PNG'), filename: 'thecolorsofelephant-logo.PNG',  content_type: 'application/png')
elementalvybe = Vendor.create(user_id: keishma.id, store_name: 'ElementalVybe', category: 'jewelry', description: 'Elementalvybe creates handcrafted one of a kind jewelry using healing cyrtals.')
elementalvybe.logo.attach(io: File.open('./public/avatars/default-profile.jpeg'), filename: 'default-profile.jpeg', content_type: 'application/jpeg')
soybellocandles = Vendor.create(user_id: lauren.id, store_name: 'Soy Bello Candles', category: 'home goods', description: '100% natural soy wax candles. Hand poured with love. Latino Owned.Family powered.')
soybellocandles.logo.attach(io: File.open('./public/logos/soybello-logo.jpeg'), filename: 'soybello-logo.jpeg',  content_type: 'application/jpeg')
shantilife = Vendor.create(user_id: kim.id, store_name: 'Shanti life', category: 'health and wellness', description: 'Shanti Life is more than a cannabis boutique—it represents everything people need in order to optimize their wellbeing and attain true love for themselves.')
shantilife.logo.attach(io: File.open('./public/logos/shantilife-logo.png'), filename: 'shantilife-logo.png',  content_type: 'application/png')

Subscription.create(user_id: jenya.id, vendor_id: thecolorsofelephant.id)
Subscription.create(user_id: jenya.id, vendor_id: elementalvybe.id)
Subscription.create(user_id: keishma.id, vendor_id: thecolorsofelephant.id)
Subscription.create(user_id: jane.id, vendor_id:elementalvybe.id)
Subscription.create(user_id: lauren.id, vendor_id:thecolorsofelephant.id)
Subscription.create(user_id: kim.id, vendor_id:thecolorsofelephant.id)

tiger_eye_necklace = Merchandise.create(vendor_id: thecolorsofelephant.id, item_name: 'Tiger eye necklace', price: 35 ,description:"A tiger's eye stone necklace wrapped with yellow waxed cord with a hint of gold. Manifest your inner strength and immerse in golden confidence.", inventory: 1, is_sold_out: false )
tiger_eye_necklace.merch.attach(io: File.open('./public/merch/tiger_eye_necklace.jpg'), filename: 'tiger_eye_necklace.jpg',  content_type: 'application/jpg')
ocean_driftwood_candle = Merchandise.create(vendor_id: soybellocandles.id, item_name: 'Ocean Driftwood -Soy Wax Candle-9oz', price: 25 ,description:"A burst of lavender, cedar and amber give this candle a woodsy nautical edge.", inventory: 20, is_sold_out: false )
ocean_driftwood_candle.merch.attach(io: File.open('./public/merch/ocean-driftwood-candle.jpg'), filename: 'ocean-driftwood-candle.jpg',  content_type: 'application/jpg')

Event.create(vendor_id: thecolorsofelephant.id, title: "Soul Sister Vibez Pop Up Shop", start: DateTime.new(2022, 1, 8, 15, 0, 0), end: DateTime.new(2022, 1, 8, 20, 0, 0), type: "" , description: "251 Grand St, Brooklyn, NY 11211")
puts "done seeding..."
