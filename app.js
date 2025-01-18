import teamData from "./teamData.js";

function getYear() {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get("year");
}

const selectedYear = getYear();
const yearTitle = document.getElementById("year-title");
const yearTitle2 = document.getElementById("year-title-2");
yearTitle.innerHTML = "Men's Team " + selectedYear;
yearTitle2.innerHTML = "Women's Team " + selectedYear;

console.log("Selected Year from the params: " + selectedYear);
console.log(teamData);

function createPlayerCard(player) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "max-w-sm bg-white rounded-lg";

  const link1 = document.createElement("a");
  link1.href = "#";
  const image = document.createElement("img");
  image.className = "rounded-t-lg";
  image.src = player.img;
  image.alt = "";
  link1.appendChild(image);

  const contentDiv = document.createElement("div");
  contentDiv.className = "p-5 text-center";

  const link2 = document.createElement("a");
  link2.href = "#";
  const heading = document.createElement("h5");
  heading.className =
    "mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center";
  heading.textContent = player.name;
  link2.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.className =
    "mb-3 font-normal text-gray-700 dark:text-gray-400 text-center";
  paragraph.textContent = player.position;

  contentDiv.appendChild(link2);
  contentDiv.appendChild(paragraph);

  cardDiv.appendChild(link1);
  cardDiv.appendChild(contentDiv);

  return cardDiv;
}

function appendPlayers(teamData) {
  const womenContainer = document.getElementById("women-players-container"); // Ensure there's a container with this ID
  const menContainer = document.getElementById("men-players-container"); // Ensure there's a container with this ID

  const seasonData = teamData[selectedYear];
  if (!seasonData) {
    console.error(`No data found for season: ${selectedYear}`);
    return;
  }

  for (const [gender, team] of Object.entries(seasonData)) {
    team.players.forEach((player, index) => {
      const playerCard = createPlayerCard(player);
      playerCard.id = `${gender.toLowerCase()}-player-${index + 1}`;
      if (gender == "Men") {
        menContainer.appendChild(playerCard);
      }
      else {
        womenContainer.appendChild(playerCard)
      }
    });
  }
}

appendPlayers(teamData);

// if (selectedYear && teamData[selectedYear]) {
//   yearTitle.textContent = "Men's Team " + selectedYear;
//   console.log("year updated");

//   const players = teamData[selectedYear]["Men"].players;

//   players.forEach((player, index) => {
//     // Dynamically change the player data based on the index
//     const playerName = document.getElementById(`player-${index + 1}-name`);
//     const playerImg = document.getElementById(`player-${index + 1}-img`);
//     const playerPosition = document.getElementById(
//       `player-${index + 1}-position`
//     );

//     if (playerName && playerImg && playerPosition) {
//       console.log(playerName, playerImg, playerPosition);
//       playerName.textContent = player.name;
//       playerImg.src = player.img;
//       playerPosition.textContent = `Position: ${player.position}`;
//     }
//   });
// }

// // Create the main container div
// const mainDiv = document.createElement("div");

// // Create the card container
// const cardDiv = document.createElement("div");
// cardDiv.className = "max-w-sm bg-white rounded-lg shadow";

// // Create the link and image
// const link1 = document.createElement("a");
// link1.href = "#";
// const image = document.createElement("img");
// image.id = "player-1-img";
// image.className = "rounded-t-lg";
// image.src = "/assets/pic-1.jpg";
// image.alt = "";
// link1.appendChild(image);

// // Create the content container
// const contentDiv = document.createElement("div");
// contentDiv.className = "p-5 text-center";

// // Create the heading link and title
// const link2 = document.createElement("a");
// link2.href = "#";
// const heading = document.createElement("h5");
// heading.id = "player-1-name";
// heading.className =
//   "mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center";
// heading.textContent = "Vladimir Putin";
// link2.appendChild(heading);

// // Create the paragraph for the position
// const paragraph = document.createElement("p");
// paragraph.id = "player-1-position";
// paragraph.className =
//   "mb-3 font-normal text-gray-700 dark:text-gray-400 text-center";
// paragraph.textContent = "Visionary President of Russia";

// // Append the elements together
// contentDiv.appendChild(link2);
// contentDiv.appendChild(paragraph);
// cardDiv.appendChild(link1);
// cardDiv.appendChild(contentDiv);
// mainDiv.appendChild(cardDiv);

// // Append the main container to the body or another element
// document.body.appendChild(mainDiv);
