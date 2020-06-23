//contains all the api interactions

const key = '6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6';

const getSport = async (sport) => {

    const base = 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5"'

    const query = `&apiKey=${key}&q=${sport}`;
    
    const settings = {"headers": {
		"x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
		"x-rapidapi-key": "6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6"
    }}

    const data= await fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5", 
    {
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
};

getSport('cricket')
.then(data => console.log(data));
