apex.service('PortfolioSelection', function() {
 var section = {}
 var item = {}
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
 return {
  setSection: setSection,
  section: getSection,
  setItem: setItem,
  item: getItem
 }
})