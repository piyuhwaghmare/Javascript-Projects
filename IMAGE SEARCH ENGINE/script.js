const accesskey = "aUrHUJEz_JcSanoZEItm5jxT_rnZI7j7Aa_aUfOA138";
let page = 1;
let keyword = "";

const searchButton = document.querySelector(".btn");
searchButton.addEventListener("click", searchImages);
const imageContainer = document.querySelector(".image");

function displayImages(images) {
  imageContainer.innerHTML = "";

  images.forEach(image => {
    const imageGallery = document.querySelector(".images");
   imageGallery.innerHTML = "";

  images.forEach(image => {
    
    const imageItem = document.createElement("li");
    imageItem.classList.add("image");


    const imgElement = document.createElement("img");
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description || "Image from Unsplash";
    imgElement.classList.add("image-item");

    
    const detailElement = document.createElement("div");
    detailElement.classList.add("details");

    const userElement = document.createElement("div");
    userElement.classList.add("user");
    const userImage = document.createElement("img");
    userImage.src = image.user.profile_image.small;
    userImage.alt = image.user.name || "User Image";
    const userName = document.createElement("span");
    userName.textContent = image.user.name || "Unknown User";
    userElement.appendChild(userImage);
    userElement.appendChild(userName);

    
    const downloadElement = document.createElement("div");
    downloadElement.classList.add("download");
    downloadElement.innerHTML = `<img src="download.svg" alt="download">`;

    downloadElement.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = image.links.download;
      link.download = `image-${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
 );
    detailElement.appendChild(userElement);
    detailElement.appendChild(downloadElement);

    
    imageItem.appendChild(imgElement);
    imageItem.appendChild(detailElement);

    
    imageGallery.appendChild(imageItem);
  });
 });
}

async function searchImages() {
  keyword = searchInput.value;
  if (keyword === "") {
    alert("Please enter a keyword to search.");
    return;
  }
  
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayImages(data.results);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
const searchInput = document.querySelector(".search-box input");

let downloadButton = document.querySelector(".download");

downloadButton.addEventListener("click", function(event) {
  
});