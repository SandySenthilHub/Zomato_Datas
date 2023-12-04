const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./datas.json');
const middlewares = jsonServer.defaults();

const port = 9000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        '/api/states/overall': '/states/overall',

        // bengaluru
        '/api/bengaluru/:chandapura': '/:chandapura',
        '/api/bengaluru/:chandapura/barChart': '/:chandapura/barChart',
        '/api/bengaluru/:chandapura/lineChart': '/:chandapura/lineChart',

        '/api/bengaluru/:chikkabanavara': '/:chikkabanavara',
        '/api/bengaluru/:chikkabanavara/barChart': '/:chikkabanavara/barChart',
        '/api/bengaluru/:chikkabanavara/lineChart': '/:chikkabanavara/lineChart',

        '/api/bengaluru/:koramangala': '/:koramangala',
        '/api/bengaluru/:koramangala/barChart': '/:koramangala/barChart',
        '/api/bengaluru/:koramangala/lineChart': '/:koramangala/lineChart',

        '/api/bengaluru/:thavarekere': '/:thavarekere',
        '/api/bengaluru/:thavarekere/barChart': '/:thavarekere/barChart',
        '/api/bengaluru/:thavarekere/lineChart': '/:thavarekere/lineChart',

        '/api/bengaluru/:whitefield': '/:whitefield',
        '/api/bengaluru/:whitefield/barChart': '/:whitefield/barChart',
        '/api/bengaluru/:whitefield/lineChart': '/:whitefield/lineChart',

        '/api/bengaluru/:overall': '/:overall',


        //delhi
        '/api/delhi/:cd': '/:cd',
        '/api/delhi/:cd/barChart': '/:cd/barChart',
        '/api/delhi/:cd/lineChart': '/:cd/lineChart',

        '/api/delhi/:ed': '/:ed',
        '/api/delhi/:ed/barChart': '/:ed/barChart',
        '/api/delhi/:ed/lineChart': '/:ed/lineChart',

        '/api/delhi/:nd': '/:nd',
        '/api/delhi/:nd/barChart': '/:nd/barChart',
        '/api/delhi/:nd/lineChart': '/:nd/lineChart',

        '/api/delhi/:new': '/:new',
        '/api/delhi/:new/barChart': '/:new/barChart',
        '/api/delhi/:new/lineChart': '/:new/lineChart',

        '/api/delhi/:shahdara': '/:shahdara',
        '/api/delhi/:shahdara/barChart': '/:shahdara/barChart',
        '/api/delhi/:shahdara/lineChart': '/:shahdara/lineChart',

        '/api/delhi/:overall': '/:overall',

        //hydrabad

        '/api/hydrabad/:bandlaguda': '/:bandlaguda',
        '/api/hydrabad/:bandlaguda/barChart': '/:bandlaguda/barChart',
        '/api/hydrabad/:bandlaguda/lineChart': '/:bandlaguda/lineChart',

        '/api/hydrabad/:golconda': '/:golconda',
        '/api/hydrabad/:golconda/barChart': '/:golconda/barChart',
        '/api/hydrabad/:golconda/lineChart': '/:golconda/lineChart',

        '/api/hydrabad/:namoally': '/:namoally',
        '/api/hydrabad/:namoally/barChart': '/:namoally/barChart',
        '/api/hydrabad/:namoally/lineChart': '/:namoally/lineChart',

        '/api/hydrabad/:saidabad': '/:saidabad',
        '/api/hydrabad/:saidabad/barChart': '/:saidabad/barChart',
        '/api/hydrabad/:saidabad/lineChart': '/:saidabad/lineChart',

        '/api/hydrabad/:shaikpet': '/:shaikpet',
        '/api/hydrabad/:shaikpet/barChart': '/:shaikpet/barChart',
        '/api/hydrabad/:shaikpet/lineChart': '/:shaikpet/lineChart',

        '/api/hydrabad/:overall': '/:overall',

        //mumbai

        '/api/mumbai/:palghar': '/:palghar',
        '/api/mumbai/:palghar/barChart': '/:palghar/barChart',
        '/api/mumbai/:palghar/lineChart': '/:palghar/lineChart',

        '/api/mumbai/:raigad': '/:raigad',
        '/api/mumbai/:raigad/barChart': '/:raigad/barChart',
        '/api/mumbai/:raigad/lineChart': '/:raigad/lineChart',

        '/api/mumbai/:ratnagiri': '/:ratnagiri',
        '/api/mumbai/:ratnagiri/barChart': '/:ratnagiri/barChart',
        '/api/mumbai/:ratnagiri/lineChart': '/:ratnagiri/lineChart',

        '/api/mumbai/:sindhudurg': '/:sindhudurg',
        '/api/mumbai/:sindhudurg/barChart': '/:sindhudurg/barChart',
        '/api/mumbai/:sindhudurg/lineChart': '/:sindhudurg/lineChart',

        '/api/mumbai/:thane': '/:thane',
        '/api/mumbai/:thane/barChart': '/:thane/barChart',
        '/api/mumbai/:thane/lineChart': '/:thane/lineChart',

        '/api/mumbai/:overall': '/:overall',

        //tamilnadutamilnadu

        '/api/tamilnadu/:coimbatore': '/:coimbatore',
        '/api/tamilnadu/:coimbatore/barChart': '/:coimbatore/barChart',
        '/api/tamilnadu/:coimbatore/lineChart': '/:coimbatore/lineChart',

        '/api/tamilnadu/:chennai': '/:chennai',
        '/api/tamilnadu/:chennai/barChart': '/:chennai/barChart',
        '/api/tamilnadu/:chennai/lineChart': '/:chennai/lineChart',

        '/api/tamilnadu/:kancheepuram': '/:kancheepuram',
        '/api/tamilnadu/:kancheepuram/barChart': '/:kancheepuram/barChart',
        '/api/tamilnadu/:kancheepuram/lineChart': '/:kancheepuram/lineChart',

        '/api/tamilnadu/:madurai': '/:madurai',
        '/api/tamilnadu/:madurai/barChart': '/:madurai/barChart',
        '/api/tamilnadu/:madurai/lineChart': '/:madurai/lineChart',

        '/api/tamilnadu/:thiruvallur': '/:thiruvallur',
        '/api/tamilnadu/:thiruvallur/barChart': '/:thiruvallur/barChart',
        '/api/tamilnadu/:thiruvallur/lineChart': '/:thiruvallur/lineChart',

        '/api/tamilnadu/:overall': '/:overall',

    })
)
server.use(router);
server.listen(port,()=>{
console.log("Listining at", port)
})