//contains all the api interactions

const key = '6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6';

 async function getSport(sport){ 

    const base = 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5'

    //const query = `&apiKey=${key}&q=${sport}`;
    
    const settings =  {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "6ecb70d40bmsh6e5782f07713658p17f146jsn581f137859e6"
        }
    }
    const data= await fetch(base, settings).then( r=>r.json() )


    let city = document.querySelector("#loci").value; 

    const offsetApi = await fetch( 
        'https://api.ipgeolocation.io/timezone?apiKey=0ac1774f52d842aeb0cf8aa70fc7925e&location='+city).then( r=>r.json() )

        
    
    const offsetMinutes = offsetApi.timezone_offset*60

    //make sure tableBody is empty
    $("#tableBody").empty();

    // let matches = data.matchList.matches.map(function(match){
    //     return {series: match.series, date: match.startDateTime}
    // });

    console.log(data.matchList);


    data.matchList.matches.forEach(function(match){
        const timeUTC = match.startDateTime
        const timeToronto = moment.utc(timeUTC).utcOffset(offsetMinutes).format('YYYY/MM/DD HH:mm:ss')
        //create the html to add to the DOM
        const html = `<tr>
            <td>${match.series.name}</td>
            <td>${timeUTC}</td>
            <td>${timeToronto}</td>
        </tr>`

        //add html to DOM
        $("#tableBody").append(html);
    })
};



getSport('cricket')
.then(data => console.log(data));


