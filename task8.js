let cities = new Map();
cities.set('Moscow', 'Russia');
cities.set('Berlin', 'Germany');
cities.set('Helsinki', 'Finland');
cities.set('Paris', 'France');

for (let city of cities.keys()){
    console.log(`Ключ — ${city}, значение — ${cities.get(city)}`);
}