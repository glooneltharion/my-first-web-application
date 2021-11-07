 var data01 = {
    photo: 'img/01.png',
    title: 'Cookie 01',
    description: 'Cotton candy chocolate cake gingerbread lollipop cake pudding caramels. Ice cream pastry cake cupcake muffin apple pie lemon drops. Cupcake pudding liquorice gingerbread jelly. Brownie chocolate cake toffee gummi bears cheesecake topping.'
  };

  var data02 = {
    photo: 'img/02.png',
    title: 'Cookie 02',
    description: 'Pie tart biscuit icing gingerbread bear claw. Candy canes apple pie sugar plum sweet roll dessert sugar plum. Jelly cotton candy wafer lollipop macaroon cake ice cream cookie gummies.'
  };

  var data03 = {
    photo: 'img/03.png',
    title: 'Cookie 03',
    description: 'Jelly-o cotton candy apple pie candy chocolate. Fruitcake fruitcake cake tart brownie sweet. Candy canes chocolate cake cake jujubes halvah carrot cake. Candy canes sesame snaps lemon drops pie halvah.'
  };

  var data04 = {
    photo: 'img/04.png',
    title: 'Cookie 04',
    description: 'Candy croissant toffee sugar plum donut cotton candy bonbon. Jelly-o pastry tiramisu biscuit bonbon liquorice marzipan dragée powder. Jelly beans cake cheesecake carrot cake croissant dessert candy. Marshmallow cheesecake danish cookie jelly-o lemon drops bonbon carrot cake.'
  };

  var data05 = {
    photo: 'img/05.png',
    title: 'Donut 01',
    description: 'Carrot cake candy toffee jelly beans powder. Sweet brownie sweet roll candy canes marshmallow. Shortbread halvah candy donut toffee sugar plum jelly soufflé lemon drops.'
  };

  var data06 = {
    photo: 'img/06.png',
    title: 'Donut 02',
    description: 'Liquorice gummies chocolate bar muffin gummi bears liquorice macaroon icing chocolate cake. Jelly beans sesame snaps macaroon bonbon soufflé oat cake sugar plum. Fruitcake tiramisu danish dessert sugar plum. Jelly beans candy candy candy sesame snaps jelly-o carrot cake cake.'
  };

  var data07 = {
    photo: 'img/07.png',
    title: 'Donut 03',
    description: 'Muffin marzipan gummies donut tootsie roll apple pie chocolate cake tootsie roll. Pudding marzipan biscuit cookie cotton candy pastry oat cake donut croissant. Cake cake powder cookie candy canes brownie. Bear claw chocolate bar gingerbread pie powder.'
  };

  var data08 = {
    photo: 'img/08.png',
    title: 'Donut 04',
    description: 'Tart apple pie chocolate bar jelly-o chocolate bar. Brownie candy bonbon cupcake jelly beans. Bonbon lemon drops bear claw jelly beans chupa chups danish jujubes chocolate cake cookie. Cake topping candy dessert dragée ice cream candy canes tiramisu apple pie.'
  };

  var currentPhoto = 0;
  var imagesData = [data01, data02, data03, data04, data05, data06, data07, data08];
  var imagesPhoto = [data01.photo, data02.photo, data03.photo, data04.photo, data05.photo, data06.photo, data07.photo, data08.photo];
  var imageCount = imagesData.length;
  
  $('#photo').attr('src', imagesData[currentPhoto].photo);
  $('#photo-title').text(imagesData[currentPhoto].title);
  $('#photo-description').text(imagesData[currentPhoto].description);

  var loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
  };

  loadPhoto(currentPhoto);
  
  $('#right-arrow').click(() => {
    if( currentPhoto < imageCount ){
        currentPhoto++;
        loadPhoto(currentPhoto);
      } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
      }
  });

  $('#left-arrow').click(() => {
    if( currentPhoto > 0 ){
        currentPhoto--;
        loadPhoto(currentPhoto);
      } else {
        currentPhoto = imageCount;
        loadPhoto(currentPhoto);
      }
  });







