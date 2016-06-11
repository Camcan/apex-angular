apex.service('PortfolioSelection', function() {
 var section = {}
 var item = {}
 var title = ""
 function setSection(data) {
   section = data
 }
 function getSection() {
  return section
 }
 function setItem(data) {
   item = data
 }
 function getItem() {
  return item
 }
 function setTitle(data) {
   title = data
 }
 function getTitle() {
  return title
 }
 return {
  setSection: setSection,
  section: getSection,
  setItem: setItem,
  item: getItem,
  setTitle: setTitle,
  title: getTitle
 }
})

apex.service('ImageDatabase', function() {
  var art = {
    Fine: [
      {
        title: 'Floral Lips',
        desc: '',
        imgs: ['img/art/fine/lips.jpg', 'img/art/fine/lips-1.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Melting Face',
        desc: '',
        imgs: ['img/art/fine/melty-face.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
       {
        title: "My Heart is Screaming",
        desc: '',
        imgs: ['img/art/fine/screaming-heart.jpg'],
        med: 'Oil & Watercolor on Parchment',
      },
       {
        title: 'Tears',
        desc: '',
        imgs: ['img/art/fine/green-tears.jpg'],
        med: 'Watercolor on Parchment',
      },
        {
        title: 'Bad Thoughts Creep',
        desc: '',
        imgs: ['img/art/fine/bad-thoughts-creep.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Bars',
        desc: '',
        imgs: ['img/art/fine/bars.jpg'],
        med: 'Watercolor on Parchment',
      },
       {
        title: 'Betty',
        desc: '',
        imgs: ['img/art/fine/betty.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
       {
        title: '',
        desc: '',
        imgs: ['img/art/fine/diamond-lashes.jpg', 'img/art/fine/diamond-lashes-1.jpg', 'img/art/fine/diamond-lashes-2.jpg'],
        med: 'Oil & Spray on Canvas/Felt Pen in Sketchbook',
      },
      {
        title: 'Pierced',
        desc: '',
        imgs: ['img/art/fine/pierced.jpg', 'img/art/fine/pierced-1.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Anxiety',
        desc: '',
        imgs: ['img/art/fine/sketch-anxiety.jpg'],
        med: 'Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Aqua Eyes',
        desc: '',
        imgs: ['img/art/fine/sketch-aqua-eyes.jpg'],
        med: 'Felt Pen & Pencil; Sketchbook',
      },
      {
        title: 'Brains',
        desc: '',
        imgs: ['img/art/fine/sketch-brains.jpg'],
        med: 'Felt Pen in Sketchbook',
      },
      {
        title: 'Kitty',
        desc: '',
        imgs: ['img/art/fine/sketch-cat-growl-1.jpg', 'img/art/fine/sketch-cat-growl-2.jpg'],
        med: 'Felt Pen in Sketchbook',
      },
      {
        title: 'Catwoman',
        desc: '',
        imgs: ['img/art/fine/sketch-catwoman-apex.jpg'],
        med: 'Felt Pen in Sketchbook',
      },
      {
        title: 'Elf',
        desc: '',
        imgs: ['img/art/fine/sketch-elf-girl.jpg'],
        med: 'Felt Pen in Sketchbook',
      },
      {
        title: 'The Face',
        desc: '',
        imgs: ['img/art/fine/sketch-faces.jpg'],
        med: 'Oil & Felt Pen in Sketchbook',
      },
      {
        title: 'Floral',
        desc: '',
        imgs: ['img/art/fine/sketch-flower-face.jpg'],
        med: 'Pencil, Sketchbook',
      },
      {
        title: 'Smile!',
        desc: '',
        imgs: ['img/art/fine/sketch-graf-smile.jpg'],
        med: 'Felt & Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Guts',
        desc: '',
        imgs: ['img/art/fine/sketch-guts.jpg'],
        med: 'Felt Pen in Sketchbook',
      },
      {
        title: 'Happy Buns',
        desc: '',
        imgs: ['img/art/fine/sketch-happy-buns.jpg'],
        med: 'Felt & Ball-Point Pen; Sketchbook',
      },
      {
        title: 'King Mickey(The Late)',
        desc: '',
        imgs: ['img/art/fine/sketch-king-mickey.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Nay Meth',
        desc: '',
        imgs: ['img/art/fine/sketch-nay-meth.jpg'],
        med: 'Pencil & Ball-Point Pen; Sketchbook',
      },
      {
        title: '"I am not an object"',
        desc: '',
        imgs: ['img/art/fine/sketch-non-object-silks.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Outrun the Reaper',
        desc: '',
        imgs: ['img/art/fine/sketch-outrun-the-reaper.jpg'],
        med: 'Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Owl #1',
        desc: '',
        imgs: ['img/art/fine/sketch-owl.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Owl #2',
        desc: '',
        imgs: ['img/art/fine/sketch-owl-half-color.jpg'],
        med: 'Felt & Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Bloom',
        desc: '',
        imgs: ['img/art/fine/sketch-project-bloom.jpg'],
        med: 'Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Punk Baby',
        desc: '',
        imgs: ['img/art/fine/sketch-punk-baby.jpg', 'img/art/fine/sketch-punk-baby-1.jpg'],
        med: 'Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Radical; the reaper',
        desc: '',
        imgs: ['img/art/fine/sketch-radical-reaper.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Fungi Sketch',
        desc: '',
        imgs: ['img/art/fine/sketch-shroom.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Smudged Mascara Sketch',
        desc: '',
        imgs: ['img/art/fine/sketch-smudged-mascara.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Spider Woman',
        desc: '',
        imgs: ['img/art/fine/sketch-spider-woman.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Floral Stag',
        desc: '',
        imgs: ['img/art/fine/sketch-stag-floral.jpg'],
        med: 'Felt Pen; Sketchbook',
      },
      {
        title: 'Tree of Life',
        desc: '',
        imgs: ['img/art/fine/sketch-tree.jpg'],
        med: 'Felt & Ball-Point Pen; Sketchbook',
      },
      {
        title: 'One Wise Man',
        desc: '',
        imgs: ['img/art/fine/sketch-wise-man.jpg'],
        med: 'Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Problem Child',
        desc: '',
        imgs: ['img/art/fine/skull-boy-1.jpg'],
        med: 'Felt & Ball-Point Pen; Sketchbook',
      },
      {
        title: 'Stickers',
        desc: '',
        imgs: ['img/art/fine/stickers.jpg', 'img/art/fine/stickers-2.jpg', 'img/art/fine/stickers-3.jpg'],
        med: 'Mixed Media; Vinyl',
      },
      
      
      
      
      
      
      
    ],
    Digital: [
      {
        img: "img/art/eye-roll.jpg"
      },
      {
        img: "img/art/mia.png"
      },
      {
        img: "img/art/donut-vector.jpg"
      },
      {
        img: "img/art/eyes.png"
      },
      {
        img: "img/art/angelina2.jpg"
      },
      {
        img: "img/art/angelina.jpg"
      }


    ],
    Commission: [
      {
        img: 'img/art/eyegum-poster.jpg',
        med: 'Digital Art',
        tags: [
          'digital',
          'poster'
        ],
      },
      {
        img: 'img/art/b&w-deck.jpg',
        med: 'Oil on Canadian Maple',
        tags: [
          'Oil',
          'skate-deck'
        ],
      },
      {
        img: 'img/art/longboard-swirls.jpg',
        med: 'Oil on Canadian Maple',
        tags: [
          'Oil',
          'skate-deck'
        ],
      },
      {
        img: 'img/art/longboards.jpg',
        med: 'Oil on Canadian Maple',
        tags: [
          'Oil',
          'skate-deck'
        ],
      }
    ],
    Mural: [
      {
        img: 'img/art/mural-bear.jpg',
        med: 'Spray/Concrete',
        tags: [
          'commission', 
          'streetart'
        ],
      },
      {
        img: 'img/art/tiger-mural.jpg',
        med: 'Spray/Concrete',
        tags: [
          'commission', 
          'streetart'
        ],
      },
      {
        img: 'img/art/tasman-st-mural.jpg',
        med: 'Spray/Concrete',
        tags: [
          'commission', 
          'streetart'
        ],
      }
    ]
  }
  var getArt = function(){
    return art
  }
  return {
    art: getArt
  }
})