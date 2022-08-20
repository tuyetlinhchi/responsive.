function backgroundImage() {
  const clientId = "IVthfAva4lrxc3pXDhrXcvSnuANpGTbUOghwEInK60o";
  let image;

  fetch(
    "https://api.unsplash.com/photos/random/?client_id=" +
      clientId +
      "&query=wallpapers"
  )
    .then((response) => response.json())
    .then((data) => {
      return (image = data.urls.full), console.log(image);
    })
    .then(() => {
      document.body.style.background =
        "url(" + image + ")" + "no-repeat  center";
      document.body.style.backgroundSize = "cover";
    });
}
backgroundImage();
