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
      // {
      //   title: 'Floral Lips',
      //   desc: '',
      //   imgs: ['img/art/fine/lips.jpg', 'img/art/fine/lips-1.jpg'],
      //   med: 'Felt Pen; Sketchbook',
      // },
      // {
      //   title: 'Melting Face',
      //   desc: '',
      //   imgs: ['img/art/fine/melty-face.jpg'],
      //   med: 'Felt Pen; Sketchbook',
      // },
      //  {
      //   title: "My Heart is Screaming",
      //   desc: '',
      //   imgs: ['img/art/fine/screaming-heart.jpg'],
      //   med: 'Oil & Watercolor on Parchment',
      // },
       {
        title: 'Wish You Were Here',
        desc: '',
        imgs: ['img/art/fine/green-tears.jpg'],
        med: 'Watercolor on Parchment',
      },
      //   {
      //   title: 'Bad Thoughts Creep',
      //   desc: '',
      //   imgs: ['img/art/fine/bad-thoughts-creep.jpg'],
      //   med: 'Felt Pen; Sketchbook',
      // },
      // {
      //   title: 'Bars',
      //   desc: '',
      //   imgs: ['img/art/fine/bars.jpg'],
      //   med: 'Watercolor on Parchment',
      // },
      //  {
      //   title: 'Betty',
      //   desc: '',
      //   imgs: ['img/art/fine/betty.jpg'],
      //   med: 'Felt Pen; Sketchbook',
      // },
       {
        title: 'Decay',
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
    Body: [
      {
        title: 'Henna Stencil',
        desc: '',
        imgs: ['img/art/body/circle-henna.jpg'],
        med: 'Traditional Arabic Henna Ink',
      },
      {
        title: 'Ghostly',
        desc: '',
        imgs: ['img/art/body/ghostly-x4.jpg', 'img/art/body/ghostly.jpg'],
        med: 'Edited Photograph; Body Paint',
      },
      {
        title: 'Winged',
        desc: '',
        imgs: ['img/art/body/wings-1.jpg'],
        med: 'Body Paint',
      },
      {
        title: 'Anatomical Body Paint',
        desc: '',
        imgs: ['img/art/body/old-face.jpg', 'img/art/body/lethal.jpg'],
        med: 'Edited Photograph; Body Paint',
      }
    ],
    Commission: [
      {
        title: "EyeGum Poster",
        desc: '',
        imgs: ['img/art/commission/eyegum-poster.jpg'],
        med: 'Pro Marker & Photoshop'
      },
      {
        title: 'Massive Cover: Smoking',
        desc: '',
        imgs: ['img/art/commission/MASSIVE-smoking.jpg'],
        med: 'Mixed-Media; Magazine Print',
      },
      {
        title: 'Eanie',
        desc: '',
        imgs: ['img/art/commission/framed-eek.jpg'],
        med: 'Black Ink & Acrylic',
      },
      {
        title: 'Meanie',
        desc: '',
        imgs: ['img/art/commission/framed-erk.jpg'],
        med: 'Black Ink & Acrylic',
      },
      {
        title: 'Early Framed Pieces',
        desc: '',
        imgs: [
        'img/art/commission/framed-1.jpg', 
        'img/art/commission/framed-2.jpg', 
        'img/art/commission/framed-drmorsetattoo.jpg'],
        med: '',
      },
      // {
      //   title: "M-E-O-W",
      //   desc: '',
      //   imgs: ['img/art/commission/meow.jpg'],
      //   med: 'Oil on Canvas'
      // },
      {
        title: 'Papatuanuku',
        desc: '',
        imgs: [
        'img/art/commission/board-b&w.jpg', 
        'img/art/commission/board-b&w-1.jpg'],
        med: 'Black Gesso & Ink on Canadian Maple',
      },
      // {
      //   title: 'Cityscape Deck',
      //   desc: '',
      //   imgs: ['img/art/commission/board-cityscape.jpg'],
      //   med: 'Oil Paint & Varnish on Canadian Maple',
      // },
      // {
      //   title: 'Fucking Radical Deck',
      //   desc: '',
      //   imgs: ['img/art/commission/board-fucking-radical.jpg'],
      //   med: 'Oil Paint & Varnish on Canadian Maple',
      // },
      {
        title: 'Adonis',
        desc: '',
        imgs: ['img/art/commission/board-woman.jpg'],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Rome',
        desc: '',
        imgs: [
        'img/art/commission/longboard-blue-waves.jpg', 
        'img/art/commission/longboard-blue-waves-1.jpg', 
        'img/art/commission/longboard-blue-waves-2.jpg'
        ],
        med: 'Acrylic Paint & Ink on Canadian Maple',
      },
      {
        title: 'For Taz',
        desc: '',
        imgs: [
        'img/art/commission/longboard-green-waves.jpg', 
        'img/art/commission/longboard-green-waves-1.jpg'
        ],
        med: 'Acrylic Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Our Boards',
        desc: '',
        imgs: [
        'img/art/commission/longboards.jpg', 
        'img/art/commission/longboard-giraffe-1.jpg'
        ],
        med: 'Acrylic, Spray Paint, Ink & Felt Pen on Canadian Maple'
      },

      {
        title: 'Koi Fish (Wellington Electrity)',
        desc: '',
        imgs: [
        'img/art/commission/mural-tasman-st.jpg', 
        'img/art/commission/mural-tasman-st-1.jpg', 
        'img/art/commission/mural-tasman-st-2.jpg'
        ],
        med: 'Spray Paint',
      },
      {
        title: 'Roar (Wellington Electricity)',
        desc: '',
        imgs: [
        'img/art/commission/mural-tiger-diamonds.jpg', 
        'img/art/commission/mural-tiger-diamonds-2.jpg', 
        'img/art/commission/mural-tiger-diamonds-4.jpg'
        ],
        med: 'Spray Paint',
      },
      // {
      //   title: 'Mural: Lips',
      //   desc: '',
      //   imgs: [
      //   'img/art/commission/mural-lips.jpg'
      //   ],
      //   med: 'Spray Paint',
      // },
      // {
      //   title: 'Mural: Day-Dream',
      //   desc: '',
      //   imgs: [
      //   'img/art/commission/mural-daydream.jpg'
      //   ],
      //   med: 'Spray Paint; Concrete',
      // },
      {
        title: 'Halloween',
        desc: 'Mural commissioned by Wellington Electricity',
        imgs: [
        'img/art/commission/mural-bear.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'The Creature',
        desc: 'Mural commissioned by the late Fast Eddies',
        imgs: [
        'img/art/commission/purple-lady.jpg', 
        'img/art/commission/purple-lady-1.jpg'
        ],
        med: 'Spray & Oil Paint; Canvas',
      }
      // {
      //   title: "Mascara's a Bitch",
      //   desc: '',
      //   imgs: ['img/art/commission/spray-eyes.jpg'],
      //   med: 'Spray & Oil Paint: Canvas'
      // },
      // {
      //   title: 'Tattoo Design: Bird',
      //   desc: '',
      //   imgs: [
      //   'img/art/commission/tattoo-bird.jpg'
      //   ],
      //   med: 'Pencil on Paper',
      // },
    ],
    Digital: [
      {
        title: "Twins",
        desc: '',
        imgs: ['img/art/digital/twins.jpg']
      },
      {
        title: "Apex Predator",
        desc: '',
        imgs: ['img/art/digital/donut-vector.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Angelina Zombie",
        desc: '',
        imgs: ['img/art/digital/digital-angelina2.jpg','img/art/digital/digital-angelina.jpg'],
        med: 'Digital Art'
      },
      {
        title: "MIA",
        desc: '',
        imgs: ['img/art/digital/mia.png'],
        med: 'Digital Art'
      },
      {
        title: "Shred 'til ur Dead",
        desc: '',
        imgs: ['img/art/digital/digital-eye-roll.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Mother Mary",
        desc: '',
        imgs: ['img/art/digital/mother-mary.jpg']
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