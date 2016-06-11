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