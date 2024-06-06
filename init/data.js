// const sampleListings = [
//   {
//     title: "Urban Loft in New York City",
//     description:
//       "Modern loft apartment in the heart of New York City, offering stunning skyline views.",
//     image: {
//       url: "https://example.com/urban-loft-nyc.jpg",
//       filename: "urban-loft-nyc.jpg",
//     },
//     price: 400,
//     location: "New York City",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-74.006, 40.7128],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Eiffel Tower View Apartment",
//     description:
//       "Charming apartment with a view of the Eiffel Tower, located in the heart of Paris.",
//     image: {
//       url: "https://example.com/eiffel-tower-apartment.jpg",
//       filename: "eiffel-tower-apartment.jpg",
//     },
//     price: 600,
//     location: "Paris",
//     country: "France",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [2.2945, 48.8584],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Alpine Retreat",
//     description:
//       "Idyllic retreat nestled in the Swiss Alps, offering stunning mountain views.",
//     image: {
//       url: "https://example.com/alpine-retreat.jpg",
//       filename: "alpine-retreat.jpg",
//     },
//     price: 300,
//     location: "Swiss Alps",
//     country: "Switzerland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [8.2275, 46.8182],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Medieval Castle Experience",
//     description:
//       "Experience the grandeur of a medieval castle stay, complete with turret views and tapestry-lined halls.",
//     image: {
//       url: "https://example.com/medieval-castle.jpg",
//       filename: "medieval-castle.jpg",
//     },
//     price: 800,
//     location: "Countryside",
//     country: "United Kingdom",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-2.2426, 53.4808],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Luxury Villa with Infinity Pool",
//     description:
//       "Opulent villa with an infinity pool overlooking the ocean, offering unparalleled luxury.",
//     image: {
//       url: "https://example.com/villa-infinity-pool.jpg",
//       filename: "villa-infinity-pool.jpg",
//     },
//     price: 1200,
//     location: "Tropical Paradise",
//     country: "Maldives",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [73.2207, 3.2028],
//     },
//     category: "Amazing Pools",
//   },
//   {
//     title: "Riverside Camping Experience",
//     description:
//       "Experience the serenity of riverside camping amidst nature's tranquility.",
//     image: {
//       url: "https://example.com/riverside-camping.jpg",
//       filename: "riverside-camping.jpg",
//     },
//     price: 50,
//     location: "Riverside",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-122.3321, 47.6062],
//     },
//     category: "Camping",
//   },
//   {
//     title: "Tranquil Farmhouse Stay",
//     description:
//       "Experience the charm of countryside living at this tranquil farmhouse retreat.",
//     image: {
//       url: "https://example.com/farmhouse-stay.jpg",
//       filename: "farmhouse-stay.jpg",
//     },
//     price: 150,
//     location: "Countryside",
//     country: "Italy",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [12.4964, 41.9028],
//     },
//     category: "Farms",
//   },
//   {
//     title: "Arctic Igloo Experience",
//     description:
//       "Experience the magic of the Arctic with a stay in a traditional igloo.",
//     image: {
//       url: "https://example.com/arctic-igloo.jpg",
//       filename: "arctic-igloo.jpg",
//     },
//     price: 300,
//     location: "Arctic Circle",
//     country: "Norway",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Geodesic Dome Retreat",
//     description:
//       "Unique geodesic dome retreat offering panoramic views of the surrounding landscape.",
//     image: {
//       url: "https://example.com/dome-retreat.jpg",
//       filename: "dome-retreat.jpg",
//     },
//     price: 250,
//     location: "Forest",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.3656, 48.4284],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Experience",
//     description:
//       "Indulge in luxury aboard a private yacht, exploring exotic destinations in style.",
//     image: {
//       url: "https://example.com/luxury-yacht.jpg",
//       filename: "luxury-yacht.jpg",
//     },
//     price: 2000,
//     location: "International Waters",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-68.7081, -54.1737],
//     },
//     category: "Boats",
//   },
//   {
//     title: "City View Studio Apartment",
//     description:
//       "Cozy studio apartment with a view of the city skyline, perfect for urban exploration.",
//     image: {
//       url: "https://example.com/city-view-apartment.jpg",
//       filename: "city-view-apartment.jpg",
//     },
//     price: 150,
//     location: "City Center",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-74.0059, 40.7128],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Historic Landmarks Tour",
//     description:
//       "Immerse yourself in the history of iconic landmarks with this guided tour package.",
//     image: {
//       url: "https://example.com/landmarks-tour.jpg",
//       filename: "landmarks-tour.jpg",
//     },
//     price: 300,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Mountain Cabin Retreat",
//     description:
//       "Escape to the mountains and unwind in this charming cabin retreat surrounded by nature.",
//     image: {
//       url: "https://example.com/mountain-cabin-retreat.jpg",
//       filename: "mountain-cabin-retreat.jpg",
//     },
//     price: 250,
//     location: "Mountain Range",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.1207, 49.2827],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Fairytale Castle Stay",
//     description:
//       "Live out your fairytale dreams with a stay in this enchanting castle surrounded by picturesque landscapes.",
//     image: {
//       url: "https://example.com/fairytale-castle.jpg",
//       filename: "fairytale-castle.jpg",
//     },
//     price: 800,
//     location: "Countryside",
//     country: "Germany",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [10.4515, 51.1657],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Infinity Pool Oasis",
//     description:
//       "Relax and rejuvenate in this luxurious oasis featuring a stunning infinity pool with panoramic views.",
//     image: {
//       url: "https://example.com/infinity-pool-oasis.jpg",
//       filename: "infinity-pool-oasis.jpg",
//     },
//     price: 1200,
//     location: "Tropical Paradise",
//     country: "Indonesia",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [115.1889, -8.4095],
//     },
//     category: "Amazing Pools",
//   },
//   {
//     title: "Glamping Adventure",
//     description:
//       "Experience luxury camping with this glamping adventure in the heart of nature.",
//     image: {
//       url: "https://example.com/glamping-adventure.jpg",
//       filename: "glamping-adventure.jpg",
//     },
//     price: 200,
//     location: "Wilderness",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-118.2437, 34.0522],
//     },
//     category: "Camping",
//   },
//   {
//     title: "Rustic Farmhouse Stay",
//     description:
//       "Experience the charm of rural living with a stay at this rustic farmhouse surrounded by rolling fields.",
//     image: {
//       url: "https://example.com/rustic-farmhouse.jpg",
//       filename: "rustic-farmhouse.jpg",
//     },
//     price: 180,
//     location: "Countryside",
//     country: "France",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [2.2137, 46.2276],
//     },
//     category: "Farms",
//   },
//   {
//     title: "Arctic Adventure Lodge",
//     description:
//       "Embark on an Arctic adventure with a stay at this cozy lodge nestled in the snowy wilderness.",
//     image: {
//       url: "https://example.com/arctic-lodge.jpg",
//       filename: "arctic-lodge.jpg",
//     },
//     price: 350,
//     location: "Arctic Circle",
//     country: "Norway",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Geodesic Dome Glamping",
//     description:
//       "Experience luxury camping in a unique geodesic dome, surrounded by nature's beauty.",
//     image: {
//       url: "https://example.com/dome-glamping.jpg",
//       filename: "dome-glamping.jpg",
//     },
//     price: 300,
//     location: "Forest",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.3656, 48.4284],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Charter",
//     description:
//       "Charter a luxury yacht for an unforgettable journey across the crystal-clear waters of the Mediterranean.",
//     image: {
//       url: "https://example.com/luxury-yacht-charter.jpg",
//       filename: "luxury-yacht-charter.jpg",
//     },
//     price: 5000,
//     location: "Mediterranean Sea",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Skyline View Penthouse",
//     description:
//       "Experience luxury living in this penthouse with breathtaking views of the city skyline.",
//     image: {
//       url: "https://example.com/skyline-view-penthouse.jpg",
//       filename: "skyline-view-penthouse.jpg",
//     },
//     price: 1500,
//     location: "City Center",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-74.006, 40.7128],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Historical Landmarks Tour",
//     description:
//       "Explore the rich history of iconic landmarks with this guided tour package.",
//     image: {
//       url: "https://example.com/historical-landmarks-tour.jpg",
//       filename: "historical-landmarks-tour.jpg",
//     },
//     price: 400,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Mountain Chalet Getaway",
//     description:
//       "Escape to the mountains and indulge in luxury at this cozy chalet retreat.",
//     image: {
//       url: "https://example.com/mountain-chalet.jpg",
//       filename: "mountain-chalet.jpg",
//     },
//     price: 350,
//     location: "Mountain Range",
//     country: "Switzerland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [7.8496, 46.8379],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Medieval Castle Escape",
//     description:
//       "Step back in time with a stay in this medieval castle, surrounded by majestic landscapes.",
//     image: {
//       url: "https://example.com/medieval-castle-escape.jpg",
//       filename: "medieval-castle-escape.jpg",
//     },
//     price: 900,
//     location: "Countryside",
//     country: "Scotland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-4.2026, 55.3781],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Private Island Paradise",
//     description:
//       "Experience ultimate luxury on your own private island paradise, surrounded by turquoise waters and white sandy beaches.",
//     image: {
//       url: "https://example.com/private-island.jpg",
//       filename: "private-island.jpg",
//     },
//     price: 10000,
//     location: "Tropical Paradise",
//     country: "Maldives",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [73.2207, 3.2028],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Aurora Borealis Lodge",
//     description:
//       "Witness the mesmerizing beauty of the Northern Lights from this cozy lodge in the Arctic wilderness.",
//     image: {
//       url: "https://example.com/aurora-borealis-lodge.jpg",
//       filename: "aurora-borealis-lodge.jpg",
//     },
//     price: 400,
//     location: "Arctic Circle",
//     country: "Norway",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Glass Dome Retreat",
//     description:
//       "Immerse yourself in nature with a stay in this unique glass dome retreat, offering panoramic views of the surrounding landscape.",
//     image: {
//       url: "https://example.com/glass-dome-retreat.jpg",
//       filename: "glass-dome-retreat.jpg",
//     },
//     price: 300,
//     location: "Forest",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.3656, 48.4284],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Party",
//     description:
//       "Host an unforgettable party aboard a luxury yacht, cruising along the azure waters of the Mediterranean.",
//     image: {
//       url: "https://example.com/luxury-yacht-party.jpg",
//       filename: "luxury-yacht-party.jpg",
//     },
//     price: 8000,
//     location: "Mediterranean Sea",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Boats",
//   },
//   {
//     title: "City View Apartment",
//     description:
//       "Enjoy breathtaking views of the city skyline from this stylish apartment located in the heart of downtown.",
//     image: {
//       url: "https://example.com/city-view-apartment.jpg",
//       filename: "city-view-apartment.jpg",
//     },
//     price: 200,
//     location: "Metropolis",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-73.935242, 40.73061],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Historic City Tour",
//     description:
//       "Embark on a guided tour through the historic streets and landmarks of a renowned city.",
//     image: {
//       url: "https://example.com/historic-city-tour.jpg",
//       filename: "historic-city-tour.jpg",
//     },
//     price: 100,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Mountain Lodge Retreat",
//     description:
//       "Escape to a cozy mountain lodge nestled amidst towering peaks and pristine wilderness.",
//     image: {
//       url: "https://example.com/mountain-lodge.jpg",
//       filename: "mountain-lodge.jpg",
//     },
//     price: 300,
//     location: "Mountain Range",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.1207, 49.2827],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Medieval Castle Retreat",
//     description:
//       "Experience the grandeur of medieval times with a stay in this beautifully preserved castle.",
//     image: {
//       url: "https://example.com/medieval-castle-retreat.jpg",
//       filename: "medieval-castle-retreat.jpg",
//     },
//     price: 500,
//     location: "Countryside",
//     country: "France",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [2.2137, 46.2276],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Infinity Pool Paradise",
//     description:
//       "Indulge in luxury at this stunning paradise featuring an infinity pool overlooking the ocean.",
//     image: {
//       url: "https://example.com/infinity-pool-paradise.jpg",
//       filename: "infinity-pool-paradise.jpg",
//     },
//     price: 1500,
//     location: "Tropical Island",
//     country: "Maldives",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [73.2207, 3.2028],
//     },
//     category: "Amazing Pools",
//   },
//   {
//     title: "Wilderness Camping Adventure",
//     description:
//       "Embark on an unforgettable camping adventure amidst untamed wilderness and starlit skies.",
//     image: {
//       url: "https://example.com/wilderness-camping.jpg",
//       filename: "wilderness-camping.jpg",
//     },
//     price: 50,
//     location: "Remote Wilderness",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-115.1398, 36.1699],
//     },
//     category: "Camping",
//   },
//   {
//     title: "Rustic Farm Cottage",
//     description:
//       "Experience the tranquility of farm life with a stay in this charming rustic cottage surrounded by rolling hills.",
//     image: {
//       url: "https://example.com/farm-cottage.jpg",
//       filename: "farm-cottage.jpg",
//     },
//     price: 120,
//     location: "Countryside",
//     country: "United Kingdom",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-2.2426, 53.4808],
//     },
//     category: "Farms",
//   },
//   {
//     title: "Arctic Wilderness Cabin",
//     description:
//       "Escape to the remote Arctic wilderness with a stay in this cozy cabin, surrounded by snow-capped peaks and icy landscapes.",
//     image: {
//       url: "https://example.com/arctic-cabin.jpg",
//       filename: "arctic-cabin.jpg",
//     },
//     price: 400,
//     location: "Arctic Circle",
//     country: "Norway",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Geodesic Dome Eco-Retreat",
//     description:
//       "Immerse yourself in nature at this eco-friendly geodesic dome retreat, offering sustainable luxury amidst natural beauty.",
//     image: {
//       url: "https://example.com/dome-eco-retreat.jpg",
//       filename: "dome-eco-retreat.jpg",
//     },
//     price: 250,
//     location: "Forest",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.3656, 48.4284],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Escape",
//     description:
//       "Set sail on a luxurious yacht escape, exploring exotic destinations and pristine coastlines in style.",
//     image: {
//       url: "https://example.com/yacht-escape.jpg",
//       filename: "yacht-escape.jpg",
//     },
//     price: 5000,
//     location: "International Waters",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-68.7081, -54.1737],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Luxury City Apartment",
//     description:
//       "Experience urban luxury in this exquisite city apartment with modern amenities and stunning skyline views.",
//     image: {
//       url: "https://example.com/luxury-city-apartment.jpg",
//       filename: "luxury-city-apartment.jpg",
//     },
//     price: 800,
//     location: "City Center",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-74.006, 40.7128],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "City Landmarks Tour",
//     description:
//       "Discover the iconic landmarks and hidden gems of a vibrant city with this guided tour.",
//     image: {
//       url: "https://example.com/city-landmarks-tour.jpg",
//       filename: "city-landmarks-tour.jpg",
//     },
//     price: 120,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Alpine Chalet Getaway",
//     description:
//       "Escape to the alpine wilderness and unwind in this cozy chalet nestled amidst snow-capped peaks.",
//     image: {
//       url: "https://example.com/alpine-chalet.jpg",
//       filename: "alpine-chalet.jpg",
//     },
//     price: 400,
//     location: "Alpine Region",
//     country: "Switzerland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [8.2275, 46.8182],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Medieval Castle Stay",
//     description:
//       "Live like royalty in this meticulously restored medieval castle, surrounded by stunning countryside.",
//     image: {
//       url: "https://example.com/medieval-castle-stay.jpg",
//       filename: "medieval-castle-stay.jpg",
//     },
//     price: 1000,
//     location: "Countryside",
//     country: "Ireland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-6.2603, 53.3498],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Luxury Private Island Retreat",
//     description:
//       "Experience unparalleled luxury on your own private island retreat, surrounded by pristine beaches and azure waters.",
//     image: {
//       url: "https://example.com/private-island-retreat.jpg",
//       filename: "private-island-retreat.jpg",
//     },
//     price: 15000,
//     location: "Tropical Paradise",
//     country: "Bahamas",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-77.3963, 25.0343],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Northern Lights Adventure Lodge",
//     description:
//       "Embark on an unforgettable adventure to witness the mesmerizing spectacle of the Northern Lights from this cozy lodge.",
//     image: {
//       url: "https://example.com/northern-lights-lodge.jpg",
//       filename: "northern-lights-lodge.jpg",
//     },
//     price: 600,
//     location: "Arctic Circle",
//     country: "Sweden",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Sustainable Dome Retreat",
//     description:
//       "Escape to this sustainable dome retreat and reconnect with nature while minimizing your environmental impact.",
//     image: {
//       url: "https://example.com/sustainable-dome-retreat.jpg",
//       filename: "sustainable-dome-retreat.jpg",
//     },
//     price: 200,
//     location: "Forest",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-121.4944, 38.5816],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Wedding",
//     description:
//       "Celebrate your special day aboard a luxurious yacht, surrounded by breathtaking ocean views and unparalleled luxury.",
//     image: {
//       url: "https://example.com/yacht-wedding.jpg",
//       filename: "yacht-wedding.jpg",
//     },
//     price: 10000,
//     location: "Mediterranean Sea",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Luxury Urban Loft",
//     description:
//       "Experience modern luxury living in this spacious urban loft located in the heart of the city.",
//     image: {
//       url: "https://example.com/urban-loft.jpg",
//       filename: "urban-loft.jpg",
//     },
//     price: 300,
//     location: "Downtown",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-118.2437, 34.0522],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Cultural City Tour",
//     description:
//       "Immerse yourself in the rich cultural heritage of a vibrant city with this guided tour.",
//     image: {
//       url: "https://example.com/cultural-city-tour.jpg",
//       filename: "cultural-city-tour.jpg",
//     },
//     price: 150,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Alpine Ski Chalet",
//     description:
//       "Enjoy world-class skiing and luxurious amenities in this charming alpine ski chalet nestled in the mountains.",
//     image: {
//       url: "https://example.com/alpine-ski-chalet.jpg",
//       filename: "alpine-ski-chalet.jpg",
//     },
//     price: 500,
//     location: "Mountain Resort",
//     country: "Switzerland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [7.8496, 46.8379],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Castle Hotel Experience",
//     description:
//       "Live like royalty in this luxurious castle hotel featuring opulent suites and breathtaking views.",
//     image: {
//       url: "https://example.com/castle-hotel.jpg",
//       filename: "castle-hotel.jpg",
//     },
//     price: 1000,
//     location: "Countryside",
//     country: "United Kingdom",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-2.2426, 53.4808],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Private Beachfront Villa",
//     description:
//       "Escape to paradise in this exclusive beachfront villa offering unparalleled luxury and privacy.",
//     image: {
//       url: "https://example.com/beachfront-villa.jpg",
//       filename: "beachfront-villa.jpg",
//     },
//     price: 2000,
//     location: "Tropical Paradise",
//     country: "Maldives",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [73.2207, 3.2028],
//     },
//     category: "Amazing Pools",
//   },
//   {
//     title: "Remote Wilderness Camping",
//     description:
//       "Embark on a rugged adventure and camp in the remote wilderness, far from the hustle and bustle of civilization.",
//     image: {
//       url: "https://example.com/wilderness-camping2.jpg",
//       filename: "wilderness-camping2.jpg",
//     },
//     price: 100,
//     location: "Remote Wilderness",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-115.1398, 36.1699],
//     },
//     category: "Camping",
//   },
//   {
//     title: "Rustic Farmhouse Retreat",
//     description:
//       "Experience the charm of rural life in this cozy farmhouse retreat surrounded by picturesque farmland.",
//     image: {
//       url: "https://example.com/farmhouse-retreat.jpg",
//       filename: "farmhouse-retreat.jpg",
//     },
//     price: 150,
//     location: "Countryside",
//     country: "France",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [2.2137, 46.2276],
//     },
//     category: "Farms",
//   },
//   {
//     title: "Arctic Expedition",
//     description:
//       "Embark on an unforgettable Arctic expedition and witness the beauty of the polar landscapes.",
//     image: {
//       url: "https://example.com/arctic-expedition.jpg",
//       filename: "arctic-expedition.jpg",
//     },
//     price: 800,
//     location: "Arctic Circle",
//     country: "Norway",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [20.9028, 69.6496],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Geodesic Dome Glamping Retreat",
//     description:
//       "Experience luxury glamping in a geodesic dome surrounded by the tranquility of nature.",
//     image: {
//       url: "https://example.com/dome-glamping2.jpg",
//       filename: "dome-glamping2.jpg",
//     },
//     price: 250,
//     location: "Forest",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-121.4944, 38.5816],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Yacht Party Experience",
//     description:
//       "Host an unforgettable party aboard a luxurious yacht, cruising along the coastline with friends and family.",
//     image: {
//       url: "https://example.com/yacht-party2.jpg",
//       filename: "yacht-party2.jpg",
//     },
//     price: 12000,
//     location: "Mediterranean Sea",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Boats",
//   },
//   {
//     title: "City Penthouse Oasis",
//     description:
//       "Escape the hustle and bustle of the city in this luxurious penthouse oasis offering panoramic skyline views.",
//     image: {
//       url: "https://example.com/city-penthouse.jpg",
//       filename: "city-penthouse.jpg",
//     },
//     price: 1000,
//     location: "City Center",
//     country: "United States",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-74.006, 40.7128],
//     },
//     category: "Rooms",
//   },
//   {
//     title: "Architectural City Tour",
//     description:
//       "Discover the architectural wonders of a city with this guided tour showcasing iconic buildings and landmarks.",
//     image: {
//       url: "https://example.com/architectural-city-tour.jpg",
//       filename: "architectural-city-tour.jpg",
//     },
//     price: 80,
//     location: "Various",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Iconic Cities",
//   },
//   {
//     title: "Ski-in/Ski-out Mountain Lodge",
//     description:
//       "Experience ultimate convenience and luxury with a stay in this ski-in/ski-out mountain lodge.",
//     image: {
//       url: "https://example.com/ski-lodge.jpg",
//       filename: "ski-lodge.jpg",
//     },
//     price: 600,
//     location: "Mountain Resort",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.1207, 49.2827],
//     },
//     category: "Mountains",
//   },
//   {
//     title: "Fairytale Castle Retreat",
//     description:
//       "Step into a fairytale with a stay in this enchanting castle retreat surrounded by lush gardens and picturesque landscapes.",
//     image: {
//       url: "https://example.com/fairytale-castle.jpg",
//       filename: "fairytale-castle.jpg",
//     },
//     price: 1200,
//     location: "Countryside",
//     country: "Germany",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [10.4515, 51.1657],
//     },
//     category: "Castles",
//   },
//   {
//     title: "Exclusive Island Resort",
//     description:
//       "Experience luxury and seclusion at this exclusive island resort, offering pristine beaches and unparalleled service.",
//     image: {
//       url: "https://example.com/island-resort.jpg",
//       filename: "island-resort.jpg",
//     },
//     price: 5000,
//     location: "Tropical Paradise",
//     country: "Fiji",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [177.1561, -17.7134],
//     },
//     category: "Boats",
//   },
//   {
//     title: "Northern Lights Safari",
//     description:
//       "Embark on a thrilling safari adventure to witness the mesmerizing beauty of the Northern Lights.",
//     image: {
//       url: "https://example.com/northern-lights-safari.jpg",
//       filename: "northern-lights-safari.jpg",
//     },
//     price: 1000,
//     location: "Arctic Circle",
//     country: "Finland",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [26.3564, 64.9631],
//     },
//     category: "Arctic",
//   },
//   {
//     title: "Sustainable Geodesic Dome",
//     description:
//       "Stay in harmony with nature at this sustainable geodesic dome offering eco-friendly accommodations.",
//     image: {
//       url: "https://example.com/sustainable-dome.jpg",
//       filename: "sustainable-dome.jpg",
//     },
//     price: 200,
//     location: "Forest",
//     country: "Canada",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [-123.3656, 48.4284],
//     },
//     category: "Domes",
//   },
//   {
//     title: "Luxury Yacht Retreat",
//     description:
//       "Escape to paradise aboard a luxury yacht, exploring remote islands and hidden coves in style.",
//     image: {
//       url: "https://example.com/yacht-retreat.jpg",
//       filename: "yacht-retreat.jpg",
//     },
//     price: 7000,
//     location: "Caribbean Sea",
//     country: "Various",
//     reviews: [],
//     owner: "60b9c1e678d84e001fcdcfce",
//     geometry: {
//       type: "Point",
//       coordinates: [0, 0],
//     },
//     category: "Boats",
//   },
// ];

// module.exports = { data: sampleListings };
const data = [
  {
    "title" : "Urban Loft in New York City",
    "description" :
      "Modern loft apartment in the heart of New York City, offering stunning skyline views.",
    "image" : {
      "url" : "https://example.com/urban-loft-nyc.jpg",
      "filename" : "urban-loft-nyc.jpg"
    },
    "price" : 400,
    "location" : "New York City",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-74.006, 40.7128]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Eiffel Tower View Apartment",
    "description" :
      "Charming apartment with a view of the Eiffel Tower, located in the heart of Paris.",
    "image" : {
      "url" : "https://example.com/eiffel-tower-apartment.jpg",
      "filename" : "eiffel-tower-apartment.jpg"
    },
    "price" : 600,
    "location" : "Paris",
    "country" : "France",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [2.2945, 48.8584]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Alpine Retreat",
    "description" :
      "Idyllic retreat nestled in the Swiss Alps, offering stunning mountain views.",
    "image" : {
      "url" : "https://example.com/alpine-retreat.jpg",
      "filename" : "alpine-retreat.jpg"
    },
    "price" : 300,
    "location" : "Swiss Alps",
    "country" : "Switzerland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [8.2275, 46.8182]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Medieval Castle Experience",
    "description" :
      "Experience the grandeur of a medieval castle stay, complete with turret views and tapestry-lined halls.",
    "image" : {
      "url" : "https://example.com/medieval-castle.jpg",
      "filename" : "medieval-castle.jpg"
    },
    "price" : 800,
    "location" : "Countryside",
    "country" : "United Kingdom",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-2.2426, 53.4808]
    },
    "category" : "Castles"
  },
  {
    "title" : "Luxury Villa with Infinity Pool",
    "description" :
      "Opulent villa with an infinity pool overlooking the ocean, offering unparalleled luxury.",
    "image" : {
      "url" : "https://example.com/villa-infinity-pool.jpg",
      "filename" : "villa-infinity-pool.jpg"
    },
    "price" : 1200,
    "location" : "Tropical Paradise",
    "country" : "Maldives",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [73.2207, 3.2028]
    },
    "category" : "Amazing Pools"
  },
  {
    "title" : "Riverside Camping Experience",
    "description" :
      "Experience the serenity of riverside camping amidst nature's tranquility.",
    "image" : {
      "url" : "https://example.com/riverside-camping.jpg",
      "filename" : "riverside-camping.jpg"
    },
    "price" : 50,
    "location" : "Riverside",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-122.3321, 47.6062]
    },
    "category" : "Camping"
  },
  {
    "title" : "Tranquil Farmhouse Stay",
    "description" :
      "Experience the charm of countryside living at this tranquil farmhouse retreat.",
    "image" : {
      "url" : "https://example.com/farmhouse-stay.jpg",
      "filename" : "farmhouse-stay.jpg"
    },
    "price" : 150,
    "location" : "Countryside",
    "country" : "Italy",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [12.4964, 41.9028]
    },
    "category" : "Farms"
  },
  {
    "title" : "Arctic Igloo Experience",
    "description" :
      "Experience the magic of the Arctic with a stay in a traditional igloo.",
    "image" : {
      "url" : "https://example.com/arctic-igloo.jpg",
      "filename" : "arctic-igloo.jpg"
    },
    "price" : 300,
    "location" : "Arctic Circle",
    "country" : "Norway",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Geodesic Dome Retreat",
    "description" :
      "Unique geodesic dome retreat offering panoramic views of the surrounding landscape.",
    "image" : {
      "url" : "https://example.com/dome-retreat.jpg",
      "filename" : "dome-retreat.jpg"
    },
    "price" : 250,
    "location" : "Forest",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.3656, 48.4284]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Experience",
    "description" :
      "Indulge in luxury aboard a private yacht, exploring exotic destinations in style.",
    "image" : {
      "url" : "https://example.com/luxury-yacht.jpg",
      "filename" : "luxury-yacht.jpg"
    },
    "price" : 2000,
    "location" : "International Waters",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-68.7081, -54.1737]
    },
    "category" : "Boats"
  },
  {
    "title" : "City View Studio Apartment",
    "description" :
      "Cozy studio apartment with a view of the city skyline, perfect for urban exploration.",
    "image" : {
      "url" : "https://example.com/city-view-apartment.jpg",
      "filename" : "city-view-apartment.jpg"
    },
    "price" : 150,
    "location" : "City Center",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-74.0059, 40.7128]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Historic Landmarks Tour",
    "description" :
      "Immerse yourself in the history of iconic landmarks with this guided tour package.",
    "image" : {
      "url" : "https://example.com/landmarks-tour.jpg",
      "filename" : "landmarks-tour.jpg"
    },
    "price" : 300,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Mountain Cabin Retreat",
    "description" :
      "Escape to the mountains and unwind in this charming cabin retreat surrounded by nature.",
    "image" : {
      "url" : "https://example.com/mountain-cabin-retreat.jpg",
      "filename" : "mountain-cabin-retreat.jpg"
    },
    "price" : 250,
    "location" : "Mountain Range",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.1207, 49.2827]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Fairytale Castle Stay",
    "description" :
      "Live out your fairytale dreams with a stay in this enchanting castle surrounded by picturesque landscapes.",
    "image" : {
      "url" : "https://example.com/fairytale-castle.jpg",
      "filename" : "fairytale-castle.jpg"
    },
    "price" : 800,
    "location" : "Countryside",
    "country" : "Germany",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [10.4515, 51.1657]
    },
    "category" : "Castles"
  },
  {
    "title" : "Infinity Pool Oasis",
    "description" :
      "Relax and rejuvenate in this luxurious oasis featuring a stunning infinity pool with panoramic views.",
    "image" : {
      "url" : "https://example.com/infinity-pool-oasis.jpg",
      "filename" : "infinity-pool-oasis.jpg"
    },
    "price" : 1200,
    "location" : "Tropical Paradise",
    "country" : "Indonesia",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [115.1889, -8.4095]
    },
    "category" : "Amazing Pools"
  },
  {
    "title" : "Glamping Adventure",
    "description" :
      "Experience luxury camping with this glamping adventure in the heart of nature.",
    "image" : {
      "url" : "https://example.com/glamping-adventure.jpg",
      "filename" : "glamping-adventure.jpg"
    },
    "price" : 200,
    "location" : "Wilderness",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-118.2437, 34.0522]
    },
    "category" : "Camping"
  },
  {
    "title" : "Rustic Farmhouse Stay",
    "description" :
      "Experience the charm of rural living with a stay at this rustic farmhouse surrounded by rolling fields.",
    "image" : {
      "url" : "https://example.com/rustic-farmhouse.jpg",
      "filename" : "rustic-farmhouse.jpg"
    },
    "price" : 180,
    "location" : "Countryside",
    "country" : "France",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [2.2137, 46.2276]
    },
    "category" : "Farms"
  },
  {
    "title" : "Arctic Adventure Lodge",
    "description" :
      "Embark on an Arctic adventure with a stay at this cozy lodge nestled in the snowy wilderness.",
    "image" : {
      "url" : "https://example.com/arctic-lodge.jpg",
      "filename" : "arctic-lodge.jpg"
    },
    "price" : 350,
    "location" : "Arctic Circle",
    "country" : "Norway",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Geodesic Dome Glamping",
    "description" :
      "Experience luxury camping in a unique geodesic dome, surrounded by nature's beauty.",
    "image" : {
      "url" : "https://example.com/dome-glamping.jpg",
      "filename" : "dome-glamping.jpg"
    },
    "price" : 300,
    "location" : "Forest",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.3656, 48.4284]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Charter",
    "description" :
      "Charter a luxury yacht for an unforgettable journey across the crystal-clear waters of the Mediterranean.",
    "image" : {
      "url" : "https://example.com/luxury-yacht-charter.jpg",
      "filename" : "luxury-yacht-charter.jpg"
    },
    "price" : 5000,
    "location" : "Mediterranean Sea",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Boats"
  },
  {
    "title" : "Skyline View Penthouse",
    "description" :
      "Experience luxury living in this penthouse with breathtaking views of the city skyline.",
    "image" : {
      "url" : "https://example.com/skyline-view-penthouse.jpg",
      "filename" : "skyline-view-penthouse.jpg"
    },
    "price" : 1500,
    "location" : "City Center",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-74.006, 40.7128]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Historical Landmarks Tour",
    "description" :
      "Explore the rich history of iconic landmarks with this guided tour package.",
    "image" : {
      "url" : "https://example.com/historical-landmarks-tour.jpg",
      "filename" : "historical-landmarks-tour.jpg"
    },
    "price" : 400,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Mountain Chalet Getaway",
    "description" :
      "Escape to the mountains and indulge in luxury at this cozy chalet retreat.",
    "image" : {
      "url" : "https://example.com/mountain-chalet.jpg",
      "filename" : "mountain-chalet.jpg"
    },
    "price" : 350,
    "location" : "Mountain Range",
    "country" : "Switzerland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [7.8496, 46.8379]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Medieval Castle Escape",
    "description" :
      "Step back in time with a stay in this medieval castle, surrounded by majestic landscapes.",
    "image" : {
      "url" : "https://example.com/medieval-castle-escape.jpg",
      "filename" : "medieval-castle-escape.jpg"
    },
    "price" : 900,
    "location" : "Countryside",
    "country" : "Scotland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-4.2026, 55.3781]
    },
    "category" : "Castles"
  },
  {
    "title" : "Private Island Paradise",
    "description" :
      "Experience ultimate luxury on your own private island paradise, surrounded by turquoise waters and white sandy beaches.",
    "image" : {
      "url" : "https://example.com/private-island.jpg",
      "filename" : "private-island.jpg"
    },
    "price" : 10000,
    "location" : "Tropical Paradise",
    "country" : "Maldives",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [73.2207, 3.2028]
    },
    "category" : "Boats"
  },
  {
    "title" : "Aurora Borealis Lodge",
    "description" :
      "Witness the mesmerizing beauty of the Northern Lights from this cozy lodge in the Arctic wilderness.",
    "image" : {
      "url" : "https://example.com/aurora-borealis-lodge.jpg",
      "filename" : "aurora-borealis-lodge.jpg"
    },
    "price" : 400,
    "location" : "Arctic Circle",
    "country" : "Norway",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Glass Dome Retreat",
    "description" :
      "Immerse yourself in nature with a stay in this unique glass dome retreat, offering panoramic views of the surrounding landscape.",
    "image" : {
      "url" : "https://example.com/glass-dome-retreat.jpg",
      "filename" : "glass-dome-retreat.jpg"
    },
    "price" : 300,
    "location" : "Forest",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.3656, 48.4284]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Party",
    "description" :
      "Host an unforgettable party aboard a luxury yacht, cruising along the azure waters of the Mediterranean.",
    "image" : {
      "url" : "https://example.com/luxury-yacht-party.jpg",
      "filename" : "luxury-yacht-party.jpg"
    },
    "price" : 8000,
    "location" : "Mediterranean Sea",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Boats"
  },
  {
    "title" : "City View Apartment",
    "description" :
      "Enjoy breathtaking views of the city skyline from this stylish apartment located in the heart of downtown.",
    "image" : {
      "url" : "https://example.com/city-view-apartment.jpg",
      "filename" : "city-view-apartment.jpg"
    },
    "price" : 200,
    "location" : "Metropolis",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-73.935242, 40.73061]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Historic City Tour",
    "description" :
      "Embark on a guided tour through the historic streets and landmarks of a renowned city.",
    "image" : {
      "url" : "https://example.com/historic-city-tour.jpg",
      "filename" : "historic-city-tour.jpg"
    },
    "price" : 100,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Mountain Lodge Retreat",
    "description" :
      "Escape to a cozy mountain lodge nestled amidst towering peaks and pristine wilderness.",
    "image" : {
      "url" : "https://example.com/mountain-lodge.jpg",
      "filename" : "mountain-lodge.jpg"
    },
    "price" : 300,
    "location" : "Mountain Range",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.1207, 49.2827]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Medieval Castle Retreat",
    "description" :
      "Experience the grandeur of medieval times with a stay in this beautifully preserved castle.",
    "image" : {
      "url" : "https://example.com/medieval-castle-retreat.jpg",
      "filename" : "medieval-castle-retreat.jpg"
    },
    "price" : 500,
    "location" : "Countryside",
    "country" : "France",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [2.2137, 46.2276]
    },
    "category" : "Castles"
  },
  {
    "title" : "Infinity Pool Paradise",
    "description" :
      "Indulge in luxury at this stunning paradise featuring an infinity pool overlooking the ocean.",
    "image" : {
      "url" : "https://example.com/infinity-pool-paradise.jpg",
      "filename" : "infinity-pool-paradise.jpg"
    },
    "price" : 1500,
    "location" : "Tropical Island",
    "country" : "Maldives",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [73.2207, 3.2028]
    },
    "category" : "Amazing Pools"
  },
  {
    "title" : "Wilderness Camping Adventure",
    "description" :
      "Embark on an unforgettable camping adventure amidst untamed wilderness and starlit skies.",
    "image" : {
      "url" : "https://example.com/wilderness-camping.jpg",
      "filename" : "wilderness-camping.jpg"
    },
    "price" : 50,
    "location" : "Remote Wilderness",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-115.1398, 36.1699]
    },
    "category" : "Camping"
  },
  {
    "title" : "Rustic Farm Cottage",
    "description" :
      "Experience the tranquility of farm life with a stay in this charming rustic cottage surrounded by rolling hills.",
    "image" : {
      "url" : "https://example.com/farm-cottage.jpg",
      "filename" : "farm-cottage.jpg"
    },
    "price" : 120,
    "location" : "Countryside",
    "country" : "United Kingdom",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-2.2426, 53.4808]
    },
    "category" : "Farms"
  },
  {
    "title" : "Arctic Wilderness Cabin",
    "description" :
      "Escape to the remote Arctic wilderness with a stay in this cozy cabin, surrounded by snow-capped peaks and icy landscapes.",
    "image" : {
      "url" : "https://example.com/arctic-cabin.jpg",
      "filename" : "arctic-cabin.jpg"
    },
    "price" : 400,
    "location" : "Arctic Circle",
    "country" : "Norway",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Geodesic Dome Eco-Retreat",
    "description" :
      "Immerse yourself in nature at this eco-friendly geodesic dome retreat, offering sustainable luxury amidst natural beauty.",
    "image" : {
      "url" : "https://example.com/dome-eco-retreat.jpg",
      "filename" : "dome-eco-retreat.jpg"
    },
    "price" : 250,
    "location" : "Forest",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.3656, 48.4284]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Escape",
    "description" :
      "Set sail on a luxurious yacht escape, exploring exotic destinations and pristine coastlines in style.",
    "image" : {
      "url" : "https://example.com/yacht-escape.jpg",
      "filename" : "yacht-escape.jpg"
    },
    "price" : 5000,
    "location" : "International Waters",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-68.7081, -54.1737]
    },
    "category" : "Boats"
  },
  {
    "title" : "Luxury City Apartment",
    "description" :
      "Experience urban luxury in this exquisite city apartment with modern amenities and stunning skyline views.",
    "image" : {
      "url" : "https://example.com/luxury-city-apartment.jpg",
      "filename" : "luxury-city-apartment.jpg"
    },
    "price" : 800,
    "location" : "City Center",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-74.006, 40.7128]
    },
    "category" : "Rooms"
  },
  {
    "title" : "City Landmarks Tour",
    "description" :
      "Discover the iconic landmarks and hidden gems of a vibrant city with this guided tour.",
    "image" : {
      "url" : "https://example.com/city-landmarks-tour.jpg",
      "filename" : "city-landmarks-tour.jpg"
    },
    "price" : 120,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Alpine Chalet Getaway",
    "description" :
      "Escape to the alpine wilderness and unwind in this cozy chalet nestled amidst snow-capped peaks.",
    "image" : {
      "url" : "https://example.com/alpine-chalet.jpg",
      "filename" : "alpine-chalet.jpg"
    },
    "price" : 400,
    "location" : "Alpine Region",
    "country" : "Switzerland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [8.2275, 46.8182]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Medieval Castle Stay",
    "description" :
      "Live like royalty in this meticulously restored medieval castle, surrounded by stunning countryside.",
    "image" : {
      "url" : "https://example.com/medieval-castle-stay.jpg",
      "filename" : "medieval-castle-stay.jpg"
    },
    "price" : 1000,
    "location" : "Countryside",
    "country" : "Ireland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-6.2603, 53.3498]
    },
    "category" : "Castles"
  },
  {
    "title" : "Luxury Private Island Retreat",
    "description" :
      "Experience unparalleled luxury on your own private island retreat, surrounded by pristine beaches and azure waters.",
    "image" : {
      "url" : "https://example.com/private-island-retreat.jpg",
      "filename" : "private-island-retreat.jpg"
    },
    "price" : 15000,
    "location" : "Tropical Paradise",
    "country" : "Bahamas",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-77.3963, 25.0343]
    },
    "category" : "Boats"
  },
  {
    "title" : "Northern Lights Adventure Lodge",
    "description" :
      "Embark on an unforgettable adventure to witness the mesmerizing spectacle of the Northern Lights from this cozy lodge.",
    "image" : {
      "url" : "https://example.com/northern-lights-lodge.jpg",
      "filename" : "northern-lights-lodge.jpg"
    },
    "price" : 600,
    "location" : "Arctic Circle",
    "country" : "Sweden",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Sustainable Dome Retreat",
    "description" :
      "Escape to this sustainable dome retreat and reconnect with nature while minimizing your environmental impact.",
    "image" : {
      "url" : "https://example.com/sustainable-dome-retreat.jpg",
      "filename" : "sustainable-dome-retreat.jpg"
    },
    "price" : 200,
    "location" : "Forest",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-121.4944, 38.5816]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Wedding",
    "description" :
      "Celebrate your special day aboard a luxurious yacht, surrounded by breathtaking ocean views and unparalleled luxury.",
    "image" : {
      "url" : "https://example.com/yacht-wedding.jpg",
      "filename" : "yacht-wedding.jpg"
    },
    "price" : 10000,
    "location" : "Mediterranean Sea",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Boats"
  },
  {
    "title" : "Luxury Urban Loft",
    "description" :
      "Experience modern luxury living in this spacious urban loft located in the heart of the city.",
    "image" : {
      "url" : "https://example.com/urban-loft.jpg",
      "filename" : "urban-loft.jpg"
    },
    "price" : 300,
    "location" : "Downtown",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-118.2437, 34.0522]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Cultural City Tour",
    "description" :
      "Immerse yourself in the rich cultural heritage of a vibrant city with this guided tour.",
    "image" : {
      "url" : "https://example.com/cultural-city-tour.jpg",
      "filename" : "cultural-city-tour.jpg"
    },
    "price" : 150,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Alpine Ski Chalet",
    "description" :
      "Enjoy world-class skiing and luxurious amenities in this charming alpine ski chalet nestled in the mountains.",
    "image" : {
      "url" : "https://example.com/alpine-ski-chalet.jpg",
      "filename" : "alpine-ski-chalet.jpg"
    },
    "price" : 500,
    "location" : "Mountain Resort",
    "country" : "Switzerland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [7.8496, 46.8379]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Castle Hotel Experience",
    "description" :
      "Live like royalty in this luxurious castle hotel featuring opulent suites and breathtaking views.",
    "image" : {
      "url" : "https://example.com/castle-hotel.jpg",
      "filename" : "castle-hotel.jpg"
    },
    "price" : 1000,
    "location" : "Countryside",
    "country" : "United Kingdom",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-2.2426, 53.4808]
    },
    "category" : "Castles"
  },
  {
    "title" : "Private Beachfront Villa",
    "description" :
      "Escape to paradise in this exclusive beachfront villa offering unparalleled luxury and privacy.",
    "image" : {
      "url" : "https://example.com/beachfront-villa.jpg",
      "filename" : "beachfront-villa.jpg"
    },
    "price" : 2000,
    "location" : "Tropical Paradise",
    "country" : "Maldives",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [73.2207, 3.2028]
    },
    "category" : "Amazing Pools"
  },
  {
    "title" : "Remote Wilderness Camping",
    "description" :
      "Embark on a rugged adventure and camp in the remote wilderness, far from the hustle and bustle of civilization.",
    "image" : {
      "url" : "https://example.com/wilderness-camping2.jpg",
      "filename" : "wilderness-camping2.jpg"
    },
    "price" : 100,
    "location" : "Remote Wilderness",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-115.1398, 36.1699]
    },
    "category" : "Camping"
  },
  {
    "title" : "Rustic Farmhouse Retreat",
    "description" :
      "Experience the charm of rural life in this cozy farmhouse retreat surrounded by picturesque farmland.",
    "image" : {
      "url" : "https://example.com/farmhouse-retreat.jpg",
      "filename" : "farmhouse-retreat.jpg"
    },
    "price" : 150,
    "location" : "Countryside",
    "country" : "France",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [2.2137, 46.2276]
    },
    "category" : "Farms"
  },
  {
    "title" : "Arctic Expedition",
    "description" :
      "Embark on an unforgettable Arctic expedition and witness the beauty of the polar landscapes.",
    "image" : {
      "url" : "https://example.com/arctic-expedition.jpg",
      "filename" : "arctic-expedition.jpg"
    },
    "price" : 800,
    "location" : "Arctic Circle",
    "country" : "Norway",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [20.9028, 69.6496]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Geodesic Dome Glamping Retreat",
    "description" :
      "Experience luxury glamping in a geodesic dome surrounded by the tranquility of nature.",
    "image" : {
      "url" : "https://example.com/dome-glamping2.jpg",
      "filename" : "dome-glamping2.jpg"
    },
    "price" : 250,
    "location" : "Forest",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-121.4944, 38.5816]
    },
    "category" : "Domes"
  },
  {
    "title" : "Yacht Party Experience",
    "description" :
      "Host an unforgettable party aboard a luxurious yacht, cruising along the coastline with friends and family.",
    "image" : {
      "url" : "https://example.com/yacht-party2.jpg",
      "filename" : "yacht-party2.jpg"
    },
    "price" : 12000,
    "location" : "Mediterranean Sea",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Boats"
  },
  {
    "title" : "City Penthouse Oasis",
    "description" :
      "Escape the hustle and bustle of the city in this luxurious penthouse oasis offering panoramic skyline views.",
    "image" : {
      "url" : "https://example.com/city-penthouse.jpg",
      "filename" : "city-penthouse.jpg"
    },
    "price" : 1000,
    "location" : "City Center",
    "country" : "United States",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-74.006, 40.7128]
    },
    "category" : "Rooms"
  },
  {
    "title" : "Architectural City Tour",
    "description" :
      "Discover the architectural wonders of a city with this guided tour showcasing iconic buildings and landmarks.",
    "image" : {
      "url" : "https://example.com/architectural-city-tour.jpg",
      "filename" : "architectural-city-tour.jpg"
    },
    "price" : 80,
    "location" : "Various",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Iconic Cities"
  },
  {
    "title" : "Ski-in/Ski-out Mountain Lodge",
    "description" :
      "Experience ultimate convenience and luxury with a stay in this ski-in/ski-out mountain lodge.",
    "image" : {
      "url" : "https://example.com/ski-lodge.jpg",
      "filename" : "ski-lodge.jpg"
    },
    "price" : 600,
    "location" : "Mountain Resort",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.1207, 49.2827]
    },
    "category" : "Mountains"
  },
  {
    "title" : "Fairytale Castle Retreat",
    "description" :
      "Step into a fairytale with a stay in this enchanting castle retreat surrounded by lush gardens and picturesque landscapes.",
    "image" : {
      "url" : "https://example.com/fairytale-castle.jpg",
      "filename" : "fairytale-castle.jpg"
    },
    "price" : 1200,
    "location" : "Countryside",
    "country" : "Germany",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [10.4515, 51.1657]
    },
    "category" : "Castles"
  },
  {
    "title" : "Exclusive Island Resort",
    "description" :
      "Experience luxury and seclusion at this exclusive island resort, offering pristine beaches and unparalleled service.",
    "image" : {
      "url" : "https://example.com/island-resort.jpg",
      "filename" : "island-resort.jpg"
    },
    "price" : 5000,
    "location" : "Tropical Paradise",
    "country" : "Fiji",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [177.1561, -17.7134]
    },
    "category" : "Boats"
  },
  {
    "title" : "Northern Lights Safari",
    "description" :
      "Embark on a thrilling safari adventure to witness the mesmerizing beauty of the Northern Lights.",
    "image" : {
      "url" : "https://example.com/northern-lights-safari.jpg",
      "filename" : "northern-lights-safari.jpg"
    },
    "price" : 1000,
    "location" : "Arctic Circle",
    "country" : "Finland",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [26.3564, 64.9631]
    },
    "category" : "Arctic"
  },
  {
    "title" : "Sustainable Geodesic Dome",
    "description" :
      "Stay in harmony with nature at this sustainable geodesic dome offering eco-friendly accommodations.",
    "image" : {
      "url" : "https://example.com/sustainable-dome.jpg",
      "filename" : "sustainable-dome.jpg"
    },
    "price" : 200,
    "location" : "Forest",
    "country" : "Canada",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [-123.3656, 48.4284]
    },
    "category" : "Domes"
  },
  {
    "title" : "Luxury Yacht Retreat",
    "description" :
      "Escape to paradise aboard a luxury yacht, exploring remote islands and hidden coves in style.",
    "image" : {
      "url" : "https://example.com/yacht-retreat.jpg",
      "filename" : "yacht-retreat.jpg"
    },
    "price" : 7000,
    "location" : "Caribbean Sea",
    "country" : "Various",
    "reviews" : [],
    "owner" : "665ea739271d443d3b9ffc56",
    "geometry" : {
      "type" : "Point",
      "coordinates" : [0, 0]
    },
    "category" : "Boats"
  }
]