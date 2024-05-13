
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/roll-to-win-dice-challenge/id6502562852";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/01/7e/e5/017ee514-46fc-ca07-3f22-9c5c8381797d/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/pic1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/pic2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/pic3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/pic4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/pic5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0a/03/d9/0a03d9d7-99c9-e9a8-5240-3a494d29fc31/aecc9048-96f0-447c-b730-87ba892e1c85_1.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3d/ad/1f/3dad1f92-27b7-f3e1-e732-53c0afe14bbe/8b01d120-f564-4a80-bf40-5cab76c51b50_2.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/33/f0/c1/33f0c134-6c73-fd8b-4408-762b51c2a506/2943c076-38d2-4671-8d98-56fe42635e9f_3.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

