const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
];

//Added 5 songs using the push method
songs.push([
  { title: "Roses", artist: "chain smokers", genre: "Pop" },
  { title: "Believer", artist: "Imagine dragons", genre: "Rock" },
  { title: "Hero", artist: "Extreme music", genre: "Rock" },
  { title: "Let it roll", artist: "Extreme music", genre: "Rock" },
  { title: "Space junk", artist: "More giraffes", genre: "Pop" },
]);

// Object containing each Guardian's preferred genre
const guardians = {
  StarLord: "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Rock",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  return Object.entries(guardians).map(([name, genre]) => {
    const playlist = songs.filter((song) => song.genre === genre);
    return { name, playlist };
  });
}

const playlists = generatePlaylist(guardians, songs);

generatePlaylist(guardians, songs);

// Display playlist function
const displayPlaylist = function (guardian) {
  const playlistElement = document.createElement("ul");
  const currentGuardianName = guardian.name;
  for (let i = 0; i < guardian.playlist.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${currentGuardianName}'s song ${i + 1}: ${
      guardian.playlist[i].title
    } by ${guardian.playlist[i].artist}`;
    playlistElement.appendChild(listItem);
  }
  return playlistElement;
};

// Display playlists on the webpage
playlists.forEach((guardian) => {
  const playlistContainer = document.createElement("div");
  playlistContainer.appendChild(displayPlaylist(guardian));
  document.body.appendChild(playlistContainer);
});

const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "index.css"; // Replace 'styles.css' with the path to your CSS file
document.head.appendChild(linkElement);
