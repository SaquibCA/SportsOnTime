//contains all the api interactions

const key = '6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6';

const getSport = async (sport) => {

    const base = 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5"'

    const query = `&apiKey=${key}&q=${sport}`;
    
    const settings = {"headers": {
		"x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
		"x-rapidapi-key": "6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6"
    }}

    const data= await fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
		"x-rapidapi-key": "6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6"
	}
})
.then(response => {
    return response.json();

 })

//     const response = await fetch(base + query, settings);
    
//         const data = await response.json();

    console.log(data.matchList.matches);
let matches = data.matchList.matches;

    for (let i=0; i < matches.length; i++ ) {
        //let startTime = matches[i].startDateTime;
       // console.log('start time: ', startTime);

        //let fromZoneName = data.matchList.matches.series.getElementByTagName('startDateTime') ;
let fromZoneName =  matches[i].startDateTime;

        let toZoneName = 'UTC -04:00'; //hardcoded for now
        
         const timeZoneConvert = async ()=>{
        let query = `https://api.ipgeolocation.io/timezone?apiKey=0ac1774f52d842aeb0cf8aa70fc7925e&location=Toronto`;
 

    
fetch(query).then(response =>response.json().then(res=>{
    let offset = res.timezone_offset;
    
}))

        //     // http://api.timezonedb.com/v2.1/convert-time-zone?key=YOUR_API_KEY&format=json&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200


        //     const base2 = 'https://api.timezonedb.com/v2.1/convert-time-zone'
        
        //     const query = `?key=${key2}&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200`;
        
        //     const response = await fetch(base2 + query);
            
        //     console.log(response);
        
        };
        timeZoneConvert();
        // const timeZoneConvert = aysnc() => {
        
        //     const base2 = 'http://api.timezonedb.com/v2.1/convert-time-zone'
        
        //     const query = `&apiKey=${key2}&q=${fromZoneName}`;
        
        //     const response = await fetch(toZoneName);
            
        //     console.log(response);
        // };

    }
};

getSport('cricket')
.then(data => console.log(data));


// //API call for timezone conversion

// const key2 = '635GDFGAGG0L';

// let fromZoneName = data.matchList.matches.series.getElementByTagName('startDateTime') ;

// let toZoneName = 'UTC-4'; //hardcoded for now

// const timeZoneConvert = async ()=>{

//     const base2 = 'http://api.timezonedb.com/v2.1/convert-time-zone'

//     const query = `&apiKey=${key2}&q=${fromZoneName}`;

//     const response = await fetch(toZoneName);
    
//     console.log(response);

// };

// const timeZoneConvert = aysnc() => {

//     const base2 = 'http://api.timezonedb.com/v2.1/convert-time-zone'

//     const query = `&apiKey=${key2}&q=${fromZoneName}`;

//     const response = await fetch(toZoneName);
    
//     console.log(response);
// };