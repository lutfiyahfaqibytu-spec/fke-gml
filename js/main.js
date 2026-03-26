      const names = [
    "Aiden", "James", "Liam", "Noah", "Oliver", "Elijah", "Lucas", "Mason", "Logan", "Alexander",
    "Ethan", "Jacob", "Michael", "Daniel", "Henry", "Sebastian", "Jack", "Matthew", "Joseph", "Samuel",
    "David", "Wyatt", "John", "Owen", "Dylan", "Luke", "Gabriel", "Isaac", "Andrew", "Leo",
    "Julian", "Christopher", "Grayson", "Anthony", "Jaxon", "Joshua", "Nathan", "Aaron", "Adam", "Caleb",
    "Eli", "Zachary", "Carter", "Hunter", "Charles", "Thomas", "Levi", "Christian", "Lincoln", "Jeremiah",
    "Asher", "Hudson", "Evan", "Connor", "Isaiah", "Nolan", "Austin", "Maverick", "Jace", "Riley",
    "Samuel", "David", "Thomas", "Isaac", "Miles", "Elijah", "Gavin", "Jordan", "Xavier", "Jesse",
    "Avery", "Camden", "Wyatt", "Landon", "Brooklyn", "Grayson", "Bryce", "Myles", "Gage", "Ryan",
    "Maxwell", "Leonardo", "Jasper", "Weston", "Zane", "Calvin", "Harrison", "Wesley", "Aidan", "Bryan",
    "Vincent", "Blake", "Adam", "Miles", "Aidan", "Jackson", "Tyler", "Gavin", "Ethan", "Caden",
    "Vaughn", "Aaron", "George", "Christopher", "Tristan", "Santiago", "Colton", "Giovanni", "Mason",
    "Theo", "Brody", "Parker", "Cole", "Seth", "Cooper", "Max", "Finley", "Leo", "Zane",
    "Liam", "Aiden", "Hudson", "Jordan", "Ezra", "Nico", "Ryder", "Sawyer", "Xander", "Milo",
    "Jace", "Zion", "Travis", "Antonio", "Bennett", "Roman", "Victor", "Sebastian", "Elijah", "Damian",
    "Kai", "Avery", "Elliot", "Sawyer", "Tobias", "Dominic", "Elliott", "Rory", "Declan", "Emmett",
    "Owen", "Damian", "Victor", "Landon", "Eli", "Emmanuel", "Harrison", "Reed", "Beau", "Aaron",
    "Jackson", "Ethan", "Gabriel", "Ryder", "Seth", "Weston", "Carter", "Mason", "Santiago", "Mackenzie",
    "Benjamin", "Cole", "Hunter", "Everett", "George", "Julian", "Isaac", "Gage", "Colin", "Finley"
]
const last_names = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Roberts",
    "Lee", "Walker", "Hall", "Allen", "Young", "King", "Scott", "Green", "Baker", "Adams",
    "Nelson", "Carter", "Mitchell", "Perez", "Robinson", "Gonzalez", "Hernandez", "Lopez", "Hill", "Ramirez",
    "Graham", "Sanchez", "Clark", "Wright", "Lopez", "Hill", "Green", "Evans", "Carter", "Collins",
    "Stewart", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera",
    "Cooper", "Richardson", "Wood", "James", "Bennett", "Barnes", "Ross", "Henderson", "Gonzales", "Coleman",
    "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons",
    "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford",
    "Hamilton", "Gibson", "Gonzalez", "Burns", "Sullivan", "Wallace", "Woods", "West", "Jordan", "Reynolds",
    "Fisher", "Craig", "Curtis", "Spencer", "Bryan", "Mills", "Richardson", "Chavez", "Charles", "Freeman",
    "Webb", "Hunter", "Harrison", "Graham", "Kim", "Douglas", "Williamson", "Schmidt", "Gibson", "Cameron",
    "Carson", "Stevens", "Wells", "Cameron", "Todd", "Sullivan", "King", "Meyer", "George", "Shaw",
    "Stanley", "Wagner", "Burke", "Hanson", "Vasquez", "Duncan", "McDonald", "Carr", "Cameron", "Lynch",
    "Matthews", "Hayes", "Chapman", "Patel", "Jameson", "Wright", "Kim", "Kelley", "Pearson", "Hudson",
    "Harper", "George", "Barker", "Murray", "Lane", "Chavez", "Carlson", "Wilkins", "Richards", "Austin",
    "Stevenson", "Stephens", "Gordon", "Williamson", "Pope", "Zimmerman", "Carlson", "Stephens", "Hudson",
    "Snyder", "Bishop", "Knight", "Curtis", "Dixon", "Ford", "Chang", "Hansen", "Wallace", "Perry",
    "Harrison", "Jordan", "Patterson", "Rice", "Hunter", "Nichols", "Davis", "Kim", "Cameron", "Bates",
    "Austin", "Fox", "Perry", "Marshall", "Freeman", "West", "Knight", "Wood", "Baker", "Mason"
]
function repeatRandomly(body){
    result = '';
    for (let char in body){
        repeat = Math.random() > 0.8 ? 2 : 1;
        result += body[char].repeat(repeat);
    }
    return result;
  }
const MatSize = 199;
function createGmails() {
  let rand1 = Math.floor(names.length * Math.random());
  let rand2 = Math.floor(names.length * Math.random());
  body = names[rand1].toLowerCase() +
         last_names[rand2].toLowerCase()
  body = repeatRandomly(body);

  return {
    gmail:
      body+
      "@gmail.com",
    fname: names[rand1],
    lname: last_names[rand2],
  };
}   
 function getPackage(b){
    let pack = '';
    for (let i = 0 ; i < 10 ;i++){
        let temp = createGmails();
        pack += `${temp.fname}\n${temp.lname}\n${temp.gmail}\n\n`
    }
    navigator.clipboard.writeText(pack);
}
// area 

let area = document.getElementById('area');
let pattern = /[a-zA-Z0-9^\s]{6,}@gmail.com/;

function collectEmails(a) {
  let emails;
  let arr = a.value.split("\n");
  emails = arr.filter((e) => pattern.test(e));
  return emails;
}
document.querySelector("#collect").addEventListener("click", function () {
  let emails = collectEmails(area);
  let content = "";
  for (let i = 1; i < emails.length + 1; i++) {
    content += `${emails[i - 1]}\n`;
  }
  area.value = content;
});
document.querySelector("#clear").addEventListener("click", function () {
  area.value = '';
});
document.querySelector("#copy").addEventListener("click", function () {
  navigator.clipboard.writeText(area.value)
});
