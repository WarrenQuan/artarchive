function getImageSize(imgSrc) {
  var imgLoader = new Image(); // create a new image object

  var height;
  var width;
  imgLoader.onload = function () {
    // assign onload handler
    height = imgLoader.height;
    width = imgLoader.width;
  };

  imgLoader.src = imgSrc; // set the image source
  return [width, height];
}

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
  melting_pot: [
    {
      src: "/cultural_melting/identity1.png",
    },
    {
      src: "/cultural_melting/identity1.png",
    },
    {
      src: "/cultural_melting/identity1.png",
    },
    {
      src: "/cultural_melting/identity1.png",
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
  ],  uncond: [
    {
      src: "/uncond_image/gen1.png",
      width: 434,
      height: 900,
    },
    {
      src: "/uncond_image/gen2.png",
      width: 414,
      height: 900,
    },  {
      src: "/uncond_image/gen3.png",
      width: 438,
      height: 900,
    },  {
      src: "/uncond_image/gen3.jpeg",
      width:3547,
      height: 2674,
    },
    {
      src: "/uncond_image/gen4.jpeg",
      width:3547,
      height: 2674,
    },    {
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
  melting_pot: [
    {
      original:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-1.PNG",
      thumbnail:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-1.PNG",
    },
    {
      original:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-2.PNG",
      thumbnail:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-2.PNG",
    },
    {
      original:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-3.PNG",
      thumbnail:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-3.PNG",
    },
    {
      original:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-4.PNG",
      thumbnail:
        "/cultural_melting/Warren Quan Cultural Identity Project (1)-4.PNG",
    },
  ],
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
  cage: [
    {
      original: "/cage/cage1.jpg",
      thumbnail: "/cage/cage1.jpg",
    },
    {
      original: "/cage/cage2.jpg",
      thumbnail: "/cage/cage2.jpg",
    },
    {
      original: "/cage/cage3.jpg",
      thumbnail: "/cage/cage3.jpg",
    },
    {
      original: "/cage/cage4.jpg",
      thumbnail: "/cage/cage4.jpg",
    },
  ],
  perceive: [
    {
      original: "/perceive/perceive.jpg",
      thumbnail: "/perceive/perceive.jpg",
    },
    {
      original: "/perceive/perceive.gif",
      thumbnail: "/perceive/perceive.gif",
    },
  ], net: [
    {
      original: "/net/net1.png",
      thumbnail: "/net/net1.png",
    },
   {
      original: "/net/net3.png",
      thumbnail: "/net/net3.png",
    },  {
      original: "/net/net2.jpg",
      thumbnail: "/net/net2.jpg",
    },{
      original: "/net/net4.jpg",
      thumbnail: "/net/net4.jpg",
    }, {
      original: "/net/net5.png",
      thumbnail: "/net/net5.png",
    },
  ],sellout: [
    {
      original: "/sellout/sellout1.jpg",
      thumbnail: "/sellout/sellout1.jpg",
    },
    {
      original: "/sellout/sellout2.jpg",
      thumbnail: "/sellout/sellout2.jpg",
    },  {
      original: "/sellout/sellout3.png",
      thumbnail: "/sellout/sellout3.png",
    }, {
      original: "/sellout/sellout4.jpg",
      thumbnail: "/sellout/sellout4.jpg",
    },  {
      original: "/sellout/sellout5.jpg",
      thumbnail: "/sellout/sellout5.jpg",
    }, {
      original: "/sellout/sellout6.jpg",
      thumbnail: "/sellout/sellout6.jpg",
    }, {
      original: "/sellout/sellout7.jpeg",
      thumbnail: "/sellout/sellout7.jpeg",
    }, {
      original: "/sellout/sellout8.jpeg",
      thumbnail: "/sellout/sellout8.jpeg",
    }, {
      original: "/sellout/sellout9.jpeg",
      thumbnail: "/sellout/sellout9.jpeg",
    }, {
      original: "/sellout/sellout10.jpeg",
      thumbnail: "/sellout/sellout10.jpeg",
    }, {
      original: "/sellout/sellout11.jpg",
      thumbnail: "/sellout/sellout11.jpg",
    }, {
      original: "/sellout/sellout12.jpg",
      thumbnail: "/sellout/sellout12.jpg",
    }, {
      original: "/sellout/sellout13.jpg",
      thumbnail: "/sellout/sellout13.jpg",
    }, {
      original: "/sellout/sellout14.jpeg",
      thumbnail: "/sellout/sellout14.jpeg",
    },
  ],sellout_comic: [
    {
      original: "/sellout_comic/1.png",
      thumbnail: "/sellout_comic/1.png",
    },
    {
      original: "/sellout_comic/2.png",
      thumbnail: "/sellout_comic/2.png",
    },  {
      original: "/sellout_comic/3.png",
      thumbnail: "/sellout_comic/3.png",
    },  {
      original: "/sellout_comic/4.png",
      thumbnail: "/sellout_comic/4.png",
    },  {
      original: "/sellout_comic/5.png",
      thumbnail: "/sellout_comic/5.png",
    },  {
      original: "/sellout_comic/6.png",
      thumbnail: "/sellout_comic/6.png",
    },  {
      original: "/sellout_comic/7.png",
      thumbnail: "/sellout_comic/7.png",
    },
  ],
    uncond: [
      {
        original: "/uncond_image/gen1.png",
        thumbnail: "/uncond_image/gen1.png",
      },
      {
        original: "/uncond_image/gen2.png",
        thumbnail: "/uncond_image/gen2.png",
      },  {
        original: "/uncond_image/gen3.png",
        thumbnail: "/uncond_image/gen3.png",
      },  {
        original: "/uncond_image/gen4.png",
        thumbnail: "/uncond_image/gen4.png",
      },  {
        original: "/uncond_image/gen5.png",
        thumbnail: "/uncond_image/gen5.png",
      }, 
  ],
};
