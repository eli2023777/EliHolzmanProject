// const date = new Date();
// const ampm = "AM";
// const h = date.getHours();
// const m = date.getMinutes();
// const s = date.getSeconds();



// const countriesNames = ['israel', 'french', 'uk', 'usa', 'japan'];


// async function initStaticClocks() {
//     for (const countryName of countriesNames) {
//         const data = await timezoneObjs(countryName);
//         setInterval(() => { updateUI(data, countryName); }, 1000);
//         // debugger;
//     }
// }
// initStaticClocks();


// // MODEL
// async function timezoneObjs(countryName) {
//     if (countryName === '') {
//         countryName = document.getElementById('countryInput').value;
//     }

//     const gettimezoneObj = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     if (gettimezoneObj.ok) {
//         return gettimezoneObj.json();
//     }
// }


// // VIEW
// function updateUI(data, htmlElementName) {




//     let htmlContent = '';

//     for (let timezoneObj of data) {
//         // const countryUtc = timezoneObj.timezoneObjs[0];
//         const countryUtc = Array.isArray(timezoneObj.timezoneObjs) ? timezoneObj.timezoneObjs[0] : timezoneObj.timezoneObjs;

//         if (typeof countryUtc === 'string' && countryUtc.trim() !== '') {
//             try {

//                 console.log(timezoneObj.timezoneObjs[0]);
//                 const offsetArray = countryUtc.split(":");
//                 const hoursOffset = parseInt(offsetArray[0]);
//                 const minutesOffset = parseInt(offsetArray[1]);
//                 const totalOffsetMilliseconds = (hoursOffset * 60 + minutesOffset) * 60 * 1000;
//                 const curentUtc = new Date();
//                 const localTime = new Date(curentUtc.getTime() + totalOffsetMilliseconds);

//                 htmlContent += localTime.toLocaleTimeString();
//             } catch (error) {
//                 console.error('שגיאה בעת פירוק התאריך:', error);
//                 htmlContent += 'תאריך לא חוקי<br>';
//             }
//         } else {
//             console.error('תבנית לא חוקית של countryUtc:', countryUtc);
//             htmlContent += 'תאריך לא חוקי<br>';
//         }
//     }

//     document.getElementById(htmlElementName).innerHTML = `${htmlContent}`;
//     console.log(htmlContent);

// }

// // CONTROL
// async function main() {
//     const data = await timezoneObjs();
//     updateUI(data, 'output');
// }




// const date = new Date();
// const ampm = "AM";
// const h = date.getHours();
// const m = date.getMinutes();
// const s = date.getSeconds();

const countriesNames = ['israel', 'french', 'uk', 'usa', 'japan'];
let a = 0;
async function initStaticClocks() {
    for (const countryName of countriesNames) {
        const data = await timezoneObjs(countryName);
        setInterval(() => { updateUI(data, countryName); }, 1000);
        a++
    }
}

initStaticClocks();

// MODEL
async function timezoneObjs(countryName) {
    if (countryName === '') {
        countryName = document.getElementById('countryInput').value;
    }

    const gettimezoneObj = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (gettimezoneObj.ok) {
        return gettimezoneObj.json();
    }
}

// VIEW
function updateUI(data, htmlElementName) {
    let htmlContent = '';
    let seenKeys = {};

    for (let timezoneObj of data) {

        const timezoneObjsArr = timezoneObj.timezones;
        const countryUtc = timezoneObjsArr[0];
        if (!seenKeys[countryUtc]) {
            seenKeys[countryUtc] = true;

            // const countryUtc = timezoneObj.timezoneObjs[0];

            const sign = countryUtc[3] === '-' ? -1 : 1; // + או -
            const hoursOffset = sign * parseInt(countryUtc.substring(4, 6));
            const minutesOffset = sign * parseInt(countryUtc.substring(7, 9));

            const totalOffsetMilliseconds = (hoursOffset * 60 + minutesOffset) * 60 * 1000;

            const currentUtc = new Date();
            currentUtc.setHours(currentUtc.getHours() - 4);


            const localTime = new Date(currentUtc.getTime() + totalOffsetMilliseconds);

            const localTimeWithOffset = new Date(localTime.getTime() - localTime.gettimezoneObjOffset() * 60000);

            htmlContent += localTimeWithOffset.toLocaleTimeString('en-GB');
            // document.getElementById(htmlElementName).innerHTML = `${countriesNames[a]}`;
            document.getElementById(htmlElementName).innerHTML = `${htmlElementName}<br/><br/>${htmlContent}`;


        }
    }

}

// CONTROL
async function main() {
    const data = await timezoneObjs();
    setInterval(() => { updateUI(data, 'output'); }, 1000);
}





function time() {

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        ampm = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    // Israel clock




    const ILtime = h + ":" + m + ":" + s + " " + ampm;
    israel.innerHTML = "<h2>Israel</h2><br>" + ILtime;


    // paris clock

    // h -= 1;
    // if (h < 0) {
    //     h += 12;
    //     ampm = "AM";
    // }
    // h = (h < 10) ? "0" + h : h;
    // let parisTime = h + ":" + m + ":" + s + " " + ampm;

    const parisTime = date.toLocaleString("en-GB", { timezoneObj: "Europe/paris", hour: "numeric", minute: "numeric", second: "numeric", hour12: true, });
    paris.innerHTML = "<h2>Paris</h2><br>" + parisTime;


    // london clock

    const londonTime = date.toLocaleString("en-GB", { timezoneObj: "Europe/London", hour: "numeric", minute: "numeric", second: "numeric", hour12: true, });
    london.innerHTML = "<h2>London</h2><br>" + londonTime;


    // usa clcok

    // h -= 5;
    // if (h < 0) {
    //     h += 12;
    //     ampm = "AM";
    // }

    // h = (h < 10) ? "0" + h : h;
    // let USAtime = h + ":" + m + ":" + s + " " + ampm;

    const USAtime = date.toLocaleString("en-GB", { timezoneObj: "/London", hour: "numeric", minute: "numeric", second: "numeric", hour12: true, });
    usa.innerHTML = "<h2>USA</h2><br>" + USAtime;


    // japan clock
    h += 14;

    h = (h < 10) ? "0" + h : h;

    if (h > 12) {
        h -= 12;
        ampm = "PM";
    }

    const japanTime = h + ":" + m + ":" + s + " " + ampm;
    japan.innerHTML = "<h2>japan</h2><br>" + japanTime;

    setTimeout(Time, 1000);

    // test
    // const lt = date.toLocaleString("en-GB", { timezoneObj: "Europe/London" });
    // console.log(lt);



}

// time();









// --> let's try to do function to every revers code for each cuntry.










// function londonTime() {
//     let date = new Date();
//     let ampm = "AM";
//     let h = date.getHours() - 2;
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     let london = document.getElementById('london');

//     if (h == 0) {
//         h = 12;
//     }

//     if (h > 12) {
//         h -= 12;
//         ampm = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     let time = h + ":" + m + ":" + s + " " + ampm;

//     // London clock

//     setTimeout(londonTime, 1000);
// }

// londonTime();


// test(){
//     if (h == 0) {
//         h = 12;
//     }

//     if (h > 12) {
//         h -= 12;
//         ampm = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
