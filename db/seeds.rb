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
Order.destroy_all
Order.reset_pk_sequence

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
Subscription.create(user_id: jenya.id, vendor_id: soybellocandles.id)
Subscription.create(user_id: keishma.id, vendor_id: thecolorsofelephant.id)
Subscription.create(user_id: jane.id, vendor_id:elementalvybe.id)
Subscription.create(user_id: lauren.id, vendor_id:thecolorsofelephant.id)
Subscription.create(user_id: kim.id, vendor_id:thecolorsofelephant.id)

tiger_eye_necklace = Merchandise.create(vendor_id: thecolorsofelephant.id, item_name: 'Tiger eye necklace', price: 35 ,description:"A tiger's eye stone necklace wrapped with yellow waxed cord with a hint of gold. Manifest your inner strength and immerse in golden confidence.", inventory: 1, is_sold_out: false )
tiger_eye_necklace.merch.attach(io: File.open('./public/merch/tiger_eye_necklace.jpg'), filename: 'tiger_eye_necklace.jpg',  content_type: 'application/jpg')
sodilate_necklace = Merchandise.create(vendor_id: thecolorsofelephant.id, item_name: 'Sodilate necklace', price: 35 ,description:"A sodalite necklace wrapped with yellow waxed cord with a hint of ocean. Connect to your into your inner peace and bathe in the calmness.", inventory: 1, is_sold_out: false )
sodilate_necklace.merch.attach(io: File.open('./public/merch/sodilate-necklace.jpg'), filename: 'sodilate-necklace.jpg',  content_type: 'application/jpg')
red_jasper_necklace = Merchandise.create(vendor_id: thecolorsofelephant.id, item_name: 'Red Jasper necklace', price: 35 ,description:"A red jasper necklace wrapped with waxed cord with a hint of fall. Stoke your inner fire and light up that passion of life.", inventory: 1, is_sold_out: false )
red_jasper_necklace.merch.attach(io: File.open('./public/merch/red-jasper-necklace.jpg'), filename: 'red-jasper-necklace.jpg',  content_type: 'application/jpg')
moon_child_earrings = Merchandise.create(vendor_id: thecolorsofelephant.id, item_name: 'Moon child earrings', price: 20 ,description:"Macrame earrings with a petite brass crescent moon to help you connect with your moon spirit.", inventory: 5, is_sold_out: false )
moon_child_earrings.merch.attach(io: File.open('./public/merch/moon-child-earrings.JPG'), filename: 'moon-child-earrings.JPG',  content_type: 'application/JPG')

ocean_driftwood_candle = Merchandise.create(vendor_id: soybellocandles.id, item_name: 'Ocean Driftwood -Soy Wax Candle-9oz', price: 25 ,description:"A burst of lavender, cedar and amber give this candle a woodsy nautical edge.", inventory: 20, is_sold_out: false )
ocean_driftwood_candle.merch.attach(io: File.open('./public/merch/ocean-driftwood-candle.jpg'), filename: 'ocean-driftwood-candle.jpg',  content_type: 'application/jpg')
snow_angels_candle = Merchandise.create(vendor_id: soybellocandles.id, item_name: 'Snow Angels -Soy Wax Candle-9oz', price: 25 ,description:"Top notes sweet peppermint sticks finished with a creamy vanilla foundation! This is what candy cane lane is made of!", inventory: 20, is_sold_out: false )
snow_angels_candle.merch.attach(io: File.open('./public/merch/snow-angles-candle.jpg'), filename: 'snow-angles-candle.jpg',  content_type: 'application/jpg')
sun_kissed_candle = Merchandise.create(vendor_id: soybellocandles.id, item_name: 'Sun Kissed -Soy Wax Candle-9oz', price: 25 ,description:"Escape to a tropical destination with Sun Kissed. It's a delicious combination of coconut and mango with a hint of sandalwood to tone down the sweetness.", inventory: 20, is_sold_out: false )
sun_kissed_candle.merch.attach(io: File.open('./public/merch/sun-kissed-candle.jpg'), filename: 'sun-kissed-candle.jpg',  content_type: 'application/jpg')
enchanted_forest_candle = Merchandise.create(vendor_id: soybellocandles.id, item_name: 'Enchanted Forest-Soy Wax Candle-9oz', price: 25 ,description:"Imagine walking through a forest of trees to cut down your very own Christmas tree! It's got beautiful blended notes of spruce, evergreen, fir, cedar, pine, and cypress. Infused with orange spice and clove oils to add a bit of warmth for the holidays!", inventory: 20, is_sold_out: false )
enchanted_forest_candle.merch.attach(io: File.open('./public/merch/enchanted_forest_candle.jpg'), filename: 'enchanted_forest_candle.jpg',  content_type: 'application/jpg')

raw_cbd_honey = Merchandise.create(vendor_id: shantilife.id, item_name: 'Raw wildflower Hemp infused honey', price: 30 ,description:"Woke botanicals CBD infused honey is the perfect way to elevate your wellness. There are many ways to use CBD infused honey, it is a perfect ingredient for all kinds of useful recipes. It can be added to food, drinks, lotions, lip balms, candy, facemasks, and more! Many prefer to use it as a natural sweetener for tea or coffee, but it can also be simply enjoyed on its own as a sweet spoonful.", inventory: 20, is_sold_out: false )
raw_cbd_honey.merch.attach(io: File.open('./public/merch/raw-cbd-honey.jpg'), filename: 'raw-cbd-honey.jpg',  content_type: 'application/jpg')
uplift_cbg_cbd_oil = Merchandise.create(vendor_id: shantilife.id, item_name: 'Uplift CBG + CBD Oil', price: 30 ,description:"Everyone could use a little extra boost in their day, which is why we created our new Uplift CBG + CBD Oil. Enjoy this brightening blend of full-spectrum hemp extract, cannabigerol isolate, and d-alpha-pinene and d-limonene terpenes. It’s a simple CBD product that provides a unique experience.", inventory: 20, is_sold_out: false )
uplift_cbg_cbd_oil.merch.attach(io: File.open('./public/merch/uplift_cbg_cbd_oil.png'), filename: 'uplift_cbg_cbd_oil.png',  content_type: 'application/png')
treatibles = Merchandise.create(vendor_id: shantilife.id, item_name: 'Treatibles', price: 8 ,description: "Treatibles are safe and non-toxic. Dosage may be administered as needed, according to the individual animal’s level of amelioration from Treatibles. Pet owners should observe their animal before and after administration of Treatibles to observe optimal dose. You know your animals better than anyone else.", inventory: 20, is_sold_out: false )
treatibles.merch.attach(io: File.open('./public/merch/treatbites.jpg'), filename: 'treatbites.jpg',  content_type: 'application/jpg')
delta8_gummies = Merchandise.create(vendor_id: shantilife.id, item_name: 'Delta8 gummies', price: 35 ,description: "Woke Botanical 8gummies, Unlike Delta 9 THC, Delta 8 can give that one of a kind kick you are looking for. THC Delta 8 is well noted for its lower psychotropic potency and promising therapeutic potential. THC Delta 8 can give a mild high with less anxiety and insomnia. To enjoy the medicinal and uplifting benefits of THC Delta 8, one doesn’t need to be a smoker or vaper anymore.", inventory: 20, is_sold_out: false )
delta8_gummies.merch.attach(io: File.open('./public/merch/gummies.jpg'), filename: 'gummies.jpg',  content_type: 'application/jpg')

Event.create(vendor_id: thecolorsofelephant.id, title: "Soul Sister Vibez Pop Up Shop", start: DateTime.new(2022, 1, 8, 15, 0, 0), end: DateTime.new(2022, 1, 8, 20, 0, 0), type: "" , description: "251 Grand St, Brooklyn, NY 11211")
Event.create(vendor_id: shantilife.id, title: "Warwick Market", start: DateTime.new(2022, 1, 15, 10, 0, 0), end: DateTime.new(2022, 1, 15, 15, 0, 0), type: "" , description: "21 South St, Warwick, NY 10990")

Order.create(user_id: jenya.id, total: 60, order_date: Date.new(2021,12,15))
puts "done seeding..."
