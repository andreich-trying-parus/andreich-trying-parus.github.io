var MY_MAPTYPE_ID = 'customstyle';
function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();

  var featureOpts = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

var mapOptions = {
    mapTypeId: 'roadmap',
  zoom: 2,
scrollwheel: false,
navigationControl: false,
mapTypeControl: false,
scaleControl: false,
    disableDefaultUI: false,
draggable: true,
/*draggable: false,*/
  center: new google.maps.LatLng(40.42,4),
mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
},
mapTypeId: MY_MAPTYPE_ID
};

  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

  var styledMapOptions = {
     name: 'customstyle'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType)

  var markers = [
    ['MiiBody La Moraleja Madrid', 40.5312564,-3.633631899999955],['Look Your Best Óbuda ', 47.5296251,19.038584899999933],['Mii Body Zaragoza ', 41.6410814,-0.9128378000000339],['Justfit Vigo ', 42.2353101,-8.721038799999974],['MIIBody Pontevedra ', 42.4286299,-8.64016079999999],['Justfit Moncada España', 39.54223,-0.40022989999999936],['Centro de Fisioterapia Biosalud Espana', 40.6270946,-3.160602400000016],['Justfit Technology Kft ', 47.483595,19.01519600000006],['Future Fit Torrelodones Madrid', 40.5765966,-3.931404400000019],['MiiBody Benidorm Alicante', 38.5410566,-0.12249369999994997],['Estudio Carlos Baltanas Madrid', 40.4892936,-3.6652151000000686],['Mii Body Getafe  Madrid', 40.30808409999999,-3.7357613000000356],['MIiBody Ortega y Gasset Madrid', 40.4300687,-3.6749706000000515],['MiiBody Barcelona Barcelona', 41.4006914,2.146065899999939],['Miibody Medina España', 41.3081627,-4.915476699999999],['Mes Imatge ', 41.6147743,2.66162410000004],['ZENTRO STUDIO España', 42.1385037,-0.4139688999999862],['Bodyfun by Justfit BURGOS españa', 42.34785129999999,-3.6792745000000195],['Justfit Abu Dhabi ', 25.3371443,55.36758789999999],['Justfit Israel ', 32.083066,34.8039119],['FitVision ', 39.56572,2.62841149999997],['Performance First ', 33.8367025,35.536370799999986],['Miguel Molina Blandin ', 40.2346967,-3.767080299999975],['Mii Body Murcia ', 37.97991409999999,-1.1315283999999792],['JustFit Polanco ', 19.416748,-99.16005510000002],['GYM HOUSE ', 4.8877568,-74.04249720000001],['Elieassaf ', 25.0601975,55.20935050000003],['Trainer Luxury ', 41.355457,2.111765500000047],['FITROOM ', 40.5148107,-3.6523661999999604],['mohamedhachem ', 33.7821928,35.53120369999999],['Gimnasio FORMA ', 42.8059987,-1.6746904000000313],['Spacefit ', 47.423658,8.501555899999971],['Homara CB ', 42.59837599999999,-5.57245690000002],['GYM HOUSE ', 4.64595,-74.12999000000002],['Sportiva nutricion&fitness ', 37.9922399,-1.1306544000000258],['Gym Fitness ', 41.6738931,-3.6844817999999577],['YTÍNERE  Entrenamiento personal ', 37.3457677,-6.066460699999993],['Noyafitness ', 41.4545852,2.256368699999939],['Mithra SPA ', 19.426722,-99.213189],['Bodyfun by Justfit II ', 42.3394239,-3.6875654000000395],['Pura Vida ', 40.3425616,-3.6742676000000074],['Bodyfun by Justfit ROVES ', 43.35745,-5.869210000000066],['Skygym by Jusfit ', 19.506875,-99.25839940000003],['Fast20 ', 21.0283961,-89.60443220000002],['Fast20 ', 20.9673702,-89.59258569999997],['Mega MX ', 19.4340199,-99.1956012],['Space Fit Deutschland GmbH ', ,],['EMS a Domocilio ', 19.4273733,-99.17683069999998],[' ', ,],['Dietdelights ', 33.9002964,35.57286829999998],['Justfit by Bodyfit ', 44.4601025,26.10486739999999],['TMT Electrofitness ', 36.9973699,-4.3674499999999625],['Spazio Pilates ', 43.3690863,-8.403097300000013],['BodyLab Fitness ', 52.2250043,20.94374360000006],['R2D2 Techno Fitness ', 53.9175307,27.523399400000017],['Maestros de los Pies SCP ', 41.3977741,2.150255399999992],['Home concept ', ,],['Justfit Technology Kft. ', -14.235004,-51.92527999999999],['Justfit 2 ', ,],['Fisyo León C.B. ', 42.60012649999999,-5.573415999999952],['Lumina gym ', ,],['GIMNASIO  TRIUNFO ', 37.185573,-3.6026507000000265],['INACUA MALAGA ', 36.7244126,-4.379650399999946],['centrum treningow personalnych Justfit ', 53.0246534,18.625586500000054],['Bodyfit Metalurgiei ', 47.1482208,27.620368900000017],['Bodyfit Constanta ', ,],['JustFit Art Studio ', 44.4271736,26.134027500000002],['Gimnasio Millenium - Instituto Medicina Integrativa ', 41.6526594,-0.8807107000000087],['real ems jamsil ', 37.5105909,127.08553299999994],['brogym ', 37.646881,126.67813649999994],['real ems jamsil ', 37.5105909,127.08553299999994],['BikeLife  ', -33.5416023,-70.62182890000003],['Electro&Go Fitness ', 42.0104328,-4.535257000000001],['Bodyfit Budapesta ', 44.4190571,26.10078479999993],['Sanitas Bienestar Chamartín - Ribera del Loira ', 40.4615558,-3.619967200000019],['BCBG ', -34.6144047,-58.63226259999999],['IDEALJFBODY STUDIO ', 44.1901729,28.64251730000001],['MIIBODY Gandía ', 38.971201,-0.18423189999998613],['Bodies and Minds ', 25.6559073,-100.36149979999999],['20mia1 ', 37.6136322,127.03107219999993],['20mia2 ', ,],['gymsoo ', 36.6938874,126.83316809999997],['jet ', 37.4982887,126.77416870000002],['Bodyactiv Leganes ', 40.3309739,-3.7557977000000164],['Bodyactive Logroño ', 42.4616877,-2.453511400000025],['GoXbody ', ,],['Musclecamp ', 37.7754566,127.4622339],['SPEEDGYM ', ,],['Fit on 20 ', 19.0406371,-98.25026509999998],['JustFit Samara ', 53.203027,50.156284899999946],['Bodyfit Berceni ', 44.391621,26.12386300000003],[' ', ,],[' ', ,],[' ', ,],['Body Factory Gran Via  ', 40.4210991,-3.7049699000000373],['Monday Studio ', 33.8800947,35.4865916],['clinique marleine hokayem ', 34.2498321,35.66429040000003],['SC Ligi Profi SRL ', 44.4254077,26.144628499999953],['SC Ligi Profi SRL ', 44.4254077,26.144628499999953],['20 BodyFit ', 36.5969235,-6.23995919999993],[' ', ,],['Elecube ', 37.5191872,126.89222760000007],['EASY EMS ', 36.7775614,126.44811170000003],['SMT ', 37.3142842,126.84037869999997],['Leon Gym ', 37.4944424,126.48925329999997],['GF Fitness ', 37.3032495,127.07965149999995],['damokdal ', 37.31001759999999,126.82902469999999],['EnergyBody ', -33.3870488,-70.56929980000001],['BodyLife Puerto Montt ', -41.4704708,-72.91525159999998],['20Donam ', 37.5937334,127.01643050000007],['Bionic Pulse ', 51.5251937,-0.19229189999998653],['VIP Fitness ', 37.8562836,127.738925],['Your Gym ', 37.5558225,126.93793470000003],['Your Gym Y ', 37.521919,126.92694660000006],['Your Gym I ', 37.40946479999999,126.67080959999998],['Islafran ', ,],['EnergyBody Coyhaique ', -45.5733152,-72.0631052],['+Sport ', -22.4543923,-68.92938190000001],[' ', ,],['20x ', 35.201806,129.08453009999994],['wgym ', 37.2965816,126.9831206],['spt ', 37.523218,126.97312779999993],['EnergyBody Puerto Varas ', -41.3167,-72.98329999999999],['COELLO Y MARRERO FITNESS S.L ', ,],['J fit Pilates ', 37.3307188,127.94885529999999],['. ', ,],['BM Fitness ', 36.8159967,128.62812540000004],['20Guwol ', 37.4527381,126.70906790000004],['Body Story ', 34.9406968,127.69588820000001],['Easy Pilates ', ,],['Balance Gym ', 36.8646422,127.45294280000007],['Energy Body Las Condes ', -33.4123607,-70.6007022],['ELECTRO-BODY10 ', 37.16567690000001,-4.145621699999992],[' ', ,],['U Fit ', 35.8341961,128.62427000000002],['Wolf Gym ', 37.4075188,126.7056],[' ', ,],['Gowoonmom ', 37.4914697,127.02996110000004],['Bodyfit4Friends ', ,],['GIMNOMAR ', 41.0670285,-8.639603800000032],['Apple Gym ', 37.4992302,127.06763189999992],['MirrorsSalon ', 44.43686049999999,26.109688399999982],['With us Gym ', 37.2527762,127.48954470000001],['BodyProFit ', 19.5595468,-99.26887850000003],['. ', 25.1896082,55.270703899999944],['Bodyfit Baia-Mare ', ,],['JS Gym ', 37.4803621,126.9520513],[' ', ,],['EnergyBody Nueva Costanera ', -33.3943381,-70.5969035],['justfit2.0 ', 45.4596988,9.188633600000003],['burgos ', ,],[' ', ,],['Energy Body Providencia ', -33.4282587,-70.6191609],['Hotyoga Sum ', 37.53958720000001,126.73726069999998],['Beaubody ', ,],['QuickFit Hasselt ', 50.919321,5.353549599999951],['Jumping ', 35.1083289,128.91516809999996],['Efitpro ', ,]];

  var infoWindow = new google.maps.InfoWindow(), marker, i;
  for( i = 0; i < markers.length; i++ ) {
  var image = 'img/location.svg';
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);

      marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[i][0],
          icon: image
      });
  }
}
