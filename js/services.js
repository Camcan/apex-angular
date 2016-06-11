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
    Body: [
      {
        title: 'Circular Henna',
        desc: '',
        imgs: ['img/art/body/circle-henna.jpg'],
        med: 'Traditional Arabic Henna Ink',
      },
      {
        title: 'Ghostly',
        desc: '',
        imgs: ['img/art/body/ghostly-x4.jpg', 'img/art/body/ghostly.jpg'],
        med: 'Body Paint',
      },
      {
        title: 'Wings',
        desc: '',
        imgs: ['img/art/body/wings-1.jpg'],
        med: 'Body Paint',
      },
      {
        title: 'One Halloween',
        desc: '',
        imgs: ['img/art/body/old-face.jpg', 'img/art/body/lethal.jpg'],
        med: 'Body Paint',
      }
    ],
    Commission: [
      {
        title: "EyeGum Poster",
        desc: '',
        imgs: ['img/art/commission/eyegum-poster.jpg'],
        med: 'Digital Art'
      },
      {
        title: 'Massive Cover: Smoking',
        desc: '',
        imgs: ['img/art/commission/MASSIVE-smoking.jpg'],
        med: 'Mixed-Media; Magazine Print',
      },
      {
        title: 'Eek',
        desc: '',
        imgs: ['img/art/commission/framed-eek.jpg'],
        med: 'What is dees',
      },
      {
        title: 'Erk',
        desc: '',
        imgs: ['img/art/commission/framed-erk.jpg'],
        med: 'What is dees',
      },
      {
        title: 'Early Framed Pieces',
        desc: '',
        imgs: [
        'img/art/commission/framed-1.jpg', 
        'img/art/commission/framed-2.jpg', 
        'img/art/commission/framed-drmorsetattoo.jpg'],
        med: 'What is dees',
      },
      {
        title: "M-E-O-W",
        desc: '',
        imgs: ['img/art/commission/meow.jpg'],
        med: 'Oil on Canvas'
      },
      {
        title: 'Spiraling Deck',
        desc: '',
        imgs: [
        'img/art/commission/board-b&w.jpg', 
        'img/art/commission/board-b&w-1.jpg'],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Cityscape Deck',
        desc: '',
        imgs: ['img/art/commission/board-cityscape.jpg'],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Fucking Radical Deck',
        desc: '',
        imgs: ['img/art/commission/board-fucking-radical.jpg'],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Woman-ly Deck',
        desc: '',
        imgs: ['img/art/commission/board-woman.jpg'],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Spiraling Longboard',
        desc: '',
        imgs: [
        'img/art/commission/longboard-blue-waves.jpg', 
        'img/art/commission/longboard-blue-waves-1.jpg', 
        'img/art/commission/longboard-blue-waves-2.jpg'
        ],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Green Pintail Longboard',
        desc: '',
        imgs: [
        'img/art/commission/longboard-green-waves.jpg', 
        'img/art/commission/longboard-green-waves-1.jpg'
        ],
        med: 'Oil Paint & Varnish on Canadian Maple',
      },
      {
        title: 'Old Longboards',
        desc: '',
        imgs: [
        'img/art/commission/longboards.jpg', 
        'img/art/commission/longboard-giraffe-1.jpg'
        ],
        med: 'Oil Paint & Varnish on Canadian Maple'
      },

      {
        title: 'Mural: Tasman St',
        desc: '',
        imgs: [
        'img/art/commission/mural-tasman-st.jpg', 
        'img/art/commission/mural-tasman-st-1.jpg', 
        'img/art/commission/mural-tasman-st-2.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'Mural: Wrath',
        desc: '',
        imgs: [
        'img/art/commission/mural-tiger-diamonds.jpg', 
        'img/art/commission/mural-tiger-diamonds-2.jpg', 
        'img/art/commission/mural-tiger-diamonds-4.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'Mural: Lips',
        desc: '',
        imgs: [
        'img/art/commission/mural-lips.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'Mural: Day-Dream',
        desc: '',
        imgs: [
        'img/art/commission/mural-daydream.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'Mural: Bear',
        desc: '',
        imgs: [
        'img/art/commission/mural-bear.jpg'
        ],
        med: 'Spray Paint; Concrete',
      },
      {
        title: 'Inner Calm',
        desc: '',
        imgs: [
        'img/art/commission/purple-lady.jpg', 
        'img/art/commission/purple-lady-1.jpg'
        ],
        med: 'Spray & Oil Paint; Canvas',
      },
      {
        title: "Mascara's a Bitch",
        desc: '',
        imgs: ['img/art/commission/spray-eyes.jpg'],
        med: 'Spray & Oil Paint: Canvas'
      },
      {
        title: 'Tattoo Design: Bird',
        desc: '',
        imgs: [
        'img/art/commission/tattoo-bird.jpg'
        ],
        med: 'Pencil on Paper',
      },
    ],
    Digital: [
      {
        title: "Sweetness",
        desc: '',
        imgs: ['img/art/digital/donut-vector.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Eyes",
        desc: '',
        imgs: ['img/art/digital/eyes.png'],
        med: 'Digital Art'
      },
      {
        title: "",
        desc: '',
        imgs: ['img/art/digital/lazers.jpg'],
        med: 'Mixed Media'
      },
      {
        title: "Angelina #1",
        desc: '',
        imgs: ['img/art/digital/digital-angelina2.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Angelina #2",
        desc: '',
        imgs: ['img/art/digital/digital-angelina.jpg'],
        med: 'Digital Art'
      },
      {
        title: "MIA",
        desc: '',
        imgs: ['img/art/digital/mia.png'],
        med: 'Digital Art'
      },
      {
        title: "Eye Roll",
        desc: '',
        imgs: ['img/art/digital/digital-eye-roll.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Mother Mary",
        desc: '',
        imgs: ['img/art/digital/mother-mary.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Digital Bear",
        desc: '',
        imgs: ['img/art/digital/digital-bear.jpg'],
        med: 'Digital Art'
      },
      {
        title: "Haphazard Beehive",
        desc: '',
        imgs: ['img/art/digital/squiggly-beehive.jpg'],
        med: 'Digital Art'
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