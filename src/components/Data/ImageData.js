// can't get to work without infinite loading
// function getImageSize(imgSrc) {
//   var imgLoader = new Image(); // create a new image object

//   var height;
//   var width;
//   imgLoader.onload = function () {
//     // assign onload handler
//     height = imgLoader.height;
//     width = imgLoader.width;
//   };

//   imgLoader.src = imgSrc; // set the image source
//   return [width, height];
// }

export const imagesGal = {
  postcards: [
    {
      src: "/postcards/Postcard 3.PNG",
      // width: getImageSize("/postcards/Postcard 3.PNG")[0],
      // height: getImageSize("/postcards/Postcard 3.PNG")[1],
      width: 3300,
      height: 5100,
    },
    {
      src: "/postcards/Postcard Maui.PNG",
      width: 5100,
      height: 3300,
    },
    {
      src: "/postcards/ACTUAL FINAL.PNG",
      width: 1452,
      height: 2244,
    },
    {
      src: "/postcards/Postcard 6.PNG",
      width: 5100,
      height: 3300,
    },
    // {
    //   src: "/postcards/Bernal Heights Postcard.PNG",
    //   width: 5100,
    //   height: 3300,
    // },
    // {
    //   src: "/postcards/PostcardBurger.PNG",
    //   width: 5100,
    //   height: 3300,
    // },
    {
      src: "/postcards/Postcard Space Needle.PNG",
      width: 3300,
      height: 5100,
    },
    {
      src: "/postcards/Wither.PNG",
      width: 5100,
      height: 3300,
    },
    {
      src: "/postcards/Postcard Duplicate 1.PNG",
      width: 3300,
      height: 5100,
    },
    {
      src: "/postcards/Postcard_Disney_Final.PNG",
      width: 3300,
      height: 5100,
    },
  ],
  food: [
    {
      src: "/food/alnico.png",
      width: 4800,
      height: 4800,
    },
    {
      src: "/food/biangbiangmian.png",
      width: 4800,
      height: 4800,
    },
    {
      src: "/food/mitchell.png",
      width: 4800,
      height: 4800,
    },
    {
      src: "/food/nue.png",
      width: 4800,
      height: 4800,
    },
  ],
  journ: [
    {
      src: "/journ/freedom_false.png",
      width: 1028,
      height: 1348,
    },
    {
      src: "/journ/anxietee-900x533.png",
      width: 900,
      height: 533,
    },
    {
      src: "/journ/After-a-Test-Edicartoon.png",
      width: 1501,
      height: 1072,
    },
    {
      src: "/journ/gender-neutral--900x750.png",
      width: 900,
      height: 750,
    },
    {
      src: "/journ/lowell.png",
      width: 3600,
      height: 3600,
    },
    {
      src: "/journ/swimming scedule.png",
      width: 720,
      height: 720,
    },
    {
      src: "/journ/lunch.png",
      width: 1526,
      height: 902,
    },
  ],
  lowell: [
    {
      src: "/lowell/12. science research program website header design (digital vector, 2019).png",
      width: 4005,
      height: 2254,
    },
    {
      src: "/lowell/bear.png",
      width: 2400,
      height: 1950,
    },
    {
      src: "/lowell/IMG_6764 3.PNG",
      width: 1334,
      height: 667,
    },
    {
      src: "/lowell/IMG_6763 3.PNG",
      width: 1334,
      height: 625,
    },
    {
      src: "/lowell/M&R' 2.PNG",
      width: 1750,
      height: 1750,
    },
  ],
  uncond: [
    {
      src: "/uncond_image/gen1.png",
      width: 434,
      height: 900,
    },
    {
      src: "/uncond_image/gen2.png",
      width: 414,
      height: 900,
    },
    {
      src: "/uncond_image/gen3.png",
      width: 438,
      height: 900,
    },
    {
      src: "/uncond_image/gen3.jpeg",
      width: 3547,
      height: 2674,
    },
    {
      src: "/uncond_image/gen4.jpeg",
      width: 3547,
      height: 2674,
    },
    {
      src: "/uncond_image/gen5.jpeg",
      width: 3547,
      height: 2674,
    },
  ],
};

export const images = {
  postcards: [
    {
      original: "/postcards/Postcard 3.PNG",
      thumbnail: "/postcards/Postcard 3.PNG",
    },
    {
      original: "/postcards/Postcard Maui.PNG",
      thumbnail: "/postcards/Postcard Maui.PNG",
    },
    {
      original: "/postcards/ACTUAL FINAL.PNG",
      thumbnail: "/postcards/ACTUAL FINAL.PNG",
    },
    {
      original: "/postcards/Postcard 6.PNG",
      thumbnail: "/postcards/Postcard 6.PNG",
    },
    {
      original: "/postcards/Bernal Heights Postcard.PNG",
      thumbnail: "/postcards/Bernal Heights Postcard.PNG",
    },
    {
      original: "/postcards/PostcardBurger.PNG",
      thumbnail: "/postcards/PostcardBurger.PNG",
    },
    {
      original: "/postcards/Postcard Space Needle.PNG",
      thumbnail: "/postcards/Postcard Space Needle.PNG",
    },
    {
      original: "/postcards/Wither.PNG",
      thumbnail: "/postcards/Wither.PNG",
    },
    {
      original: "/postcards/Postcard Duplicate 1.PNG",
      thumbnail: "/postcards/Postcard Duplicate 1.PNG",
    },
    {
      original: "/postcards/Postcard_Disney_Final.PNG",
      thumbnail: "/postcards/Postcard_Disney_Final.PNG",
    },
  ],
  melting_pot: Array.from({ length: 4 }, (_, index) => ({
    original: `/cultural_melting/identity${index + 1}.png`,
    thumbnail: `/cultural_melting/identity${index + 1}.png`,
  })),
  food: [
    {
      original: "/food/alnico.png",
      thumbnail: "/food/alnico.png",
    },
    {
      original: "/food/biangbiangmian.png",
      thumbnail: "/food/biangbiangmian.png",
    },
    {
      original: "/food/mitchell.png",
      thumbnail: "/food/mitchell.png",
    },
    {
      original: "/food/nue.png",
      thumbnail: "/food/nue.png",
    },
  ],
  journ: [
    {
      original: "/journ/freedom_false.png",
      thumbnail: "/journ/freedom_false.png",
    },
    {
      original: "/journ/anxietee-900x533.png",
      thumbnail: "/journ/anxietee-900x533.png",
    },
    {
      original: "/journ/After-a-Test-Edicartoon.png",
      thumbnail: "/journ/After-a-Test-Edicartoon.png",
    },
    {
      original: "/journ/gender-neutral--900x750.png",
      thumbnail: "/journ/gender-neutral--900x750.png",
    },
    {
      original: "/journ/lowell.png",
      thumbnail: "/journ/lowell.png",
    },
    {
      original: "/journ/swimming scedule.png",
      thumbnail: "/journ/swimming scedule.png",
    },
    {
      original: "/journ/lunch.png",
      thumbnail: "/journ/lunch.png",
    },
  ],
  lowell: [
    {
      original:
        "/lowell/12. science research program website header design (digital vector, 2019).png",
      thumbnail:
        "/lowell/12. science research program website header design (digital vector, 2019).png",
    },
    {
      original: "/lowell/bear.png",
      thumbnail: "/lowell/bear.png",
    },
    {
      original: "/lowell/IMG_6764 3.PNG",
      thumbnail: "/lowell/IMG_6764 3.PNG",
    },
    {
      original: "/lowell/IMG_6763 3.PNG",
      thumbnail: "/lowell/IMG_6763 3.PNG",
    },
    {
      original: "/lowell/M&R' 2.PNG",
      thumbnail: "/lowell/M&R' 2.PNG",
    },
  ],
  cage: Array.from({ length: 4 }, (_, index) => ({
    original: `/cage/cage${index + 1}.jpg`,
    thumbnail: `/cage/cage${index + 1}.jpg`,
  })),
  perceive: [
    {
      original: "/perceive/perceive.jpg",
      thumbnail: "/perceive/perceive.jpg",
    },
    {
      original: "/perceive/perceive.gif",
      thumbnail: "/perceive/perceive.gif",
    },
  ],
  net: [
    {
      original: "/net/net1.png",
      thumbnail: "/net/net1.png",
    },
    {
      original: "/net/net3.png",
      thumbnail: "/net/net3.png",
    },
    {
      original: "/net/net2.jpg",
      thumbnail: "/net/net2.jpg",
    },
    {
      original: "/net/net4.jpg",
      thumbnail: "/net/net4.jpg",
    },
    {
      original: "/net/net5.png",
      thumbnail: "/net/net5.png",
    },
  ],
  sellout: Array.from({ length: 14 }, (_, index) => ({
    original: `/sellout/sellout${index + 1}.jpg`,
    thumbnail: `/sellout/sellout${index + 1}.jpg`,
  })),
  sellout_comic: Array.from({ length: 7 }, (_, index) => ({
    original: `/sellout_comic/${index + 1}.png`,
    thumbnail: `/sellout_comic/${index + 1}.png`,
  })),
  uncond: Array.from({ length: 5 }, (_, index) => ({
    original: `/uncond_image/gen${index + 1}.png`,
    thumbnail: `/uncond_image/cage${index + 1}.png`,
  })),
};
