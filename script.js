var course_node;
var cc = 0;
var chgh = 0;
var week = document.querySelectorAll("#calendarregistraionstud > div > div > table > tbody > tr > td > div > div > div.fc-content-skeleton > table > tbody > tr > td");
var weeks_courses = [];
week.forEach((day_node) => { 
    if (chgh == 0)
    { 
        chgh++; 
    } 
    else 
    { 
        day_node_ref = day_node.querySelectorAll("div > div:nth-child(2) > a");
        var name_course = [];
        var time_course = [];
        var i=0;
        var dodo = "";
        var l;
        day_node_ref.forEach((Item) => {
            name_course[i] = ((Item.querySelector("div.fc-content > div.fc-title").textContent));
            dodo = ((Item.querySelector("div.fc-content > div.fc-time > span").textContent));
            l = dodo.indexOf("-");
            dodo = dodo.substring(0, l - 1);
            if(dodo[1] == ':'){
                dodo = "0"+dodo;
                l++;
            }
            time_course[i] = dodo.substring(0, l - 1);
            i++;
        })
        var day = [];
        var temp = [];

        for (let j = 0; j < i; j++) 
        {
            temp[1] = name_course[j];
            temp[0] = time_course[j];
            day.push([Array.from(temp)]);
        }
        weeks_courses.push(Array.from(day));
    } 
}
);

localStorage.setItem("monday", weeks_courses[0]);

chrome.storage.local.set({ "M": weeks_courses[0]});
chrome.storage.local.set({ "T": weeks_courses[1]});
chrome.storage.local.set({ "W": weeks_courses[2]});
chrome.storage.local.set({ "Th": weeks_courses[3]});
chrome.storage.local.set({ "F": weeks_courses[4]});

chrome.storage.sync.set({'Ms' :  weeks_courses[0]}, function() {
    console.log('Saved', weeks_courses[0]);
});
chrome.storage.sync.set({'Ts' :  weeks_courses[1]}, function() {
    console.log('Saved', weeks_courses[1]);
});
chrome.storage.sync.set({'Ws' :  weeks_courses[2]}, function() {
    console.log('Saved', weeks_courses[2]);
});
chrome.storage.sync.set({'Ths' :  weeks_courses[3]}, function() {
    console.log('Saved', weeks_courses[3]);
});
chrome.storage.sync.set({'Fs' :  weeks_courses[4]}, function() {
    console.log('Saved', weeks_courses[4]);
});

