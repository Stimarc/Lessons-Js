$(document).ready(()=>{

   // 1
   console.log('Slider1 -> OK' );

   // 2
   const manager = new Manager();
   manager.fillCollection('collection1','p', 10);

   // 3
   let targetCollection = manager._collection;
   console.log(`targetCollection: ${targetCollection}`);

   // 4
   const slider = new Slider('slider','800px','450px',targetCollection,500);
   slider.loadCollection(0, targetCollection);

   //5 Activator
   slider.activateArrowHover();
   slider.activateRightArrow();
   slider.activateLeftArrow();

});