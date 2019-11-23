var DEFAULT_TIME = 20 * 60; // Constante pour gérer le temps de la réservation

var slideshow = {
	prev: document.getElementById("prev"),
	next: document.getElementById("next"),
	slideIndex: 1,

	showSlides: function (n) {
		var i;
		var slides = document.querySelectorAll(".mySlides");

		if (n > slides.length) {
			slideshow.slideIndex = 1;
		}
		if (n < 1) {
			slideshow.slideIndex = slides.length;
		}
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		var index = slideshow.slideIndex;

		slides[index -1].style.display = "block"; 		
	},

	init: function () {
		this.showSlides(this.slideIndex);

		this.events();
	},

	events: function () {
		this.prev.addEventListener("click", function () {
			n = -1;
			slideshow.showSlides(slideshow.slideIndex += n);
		});
		this.next.addEventListener("click", function () {
			n = +1;
			slideshow.showSlides(slideshow.slideIndex += n);
		});
		document.addEventListener('keydown', function(event) {
		    if(event.keyCode === 37) {
				n = -1;
				slideshow.showSlides(slideshow.slideIndex += n);
			} else if(event.keyCode === 39) {
				n = +1;
				slideshow.showSlides(slideshow.slideIndex += n);
			};
		});
	}
};

var app = {

	map: {
		option: {
			zoom: 11,
			center: {
				lat: 48.85625, //latitude paris
				lng: 2.34375 // longitude paris
			},
			styles: [
					  {
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#1d2c4d"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#8ec3b9"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#1a3646"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.country",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#4b6878"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.land_parcel",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#64779e"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.province",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#4b6878"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape.man_made",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#334e87"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape.natural",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#023e58"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#283d6a"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#6f9ba5"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#1d2c4d"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#023e58"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#3C7680"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#304a7d"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#98a5be"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#1d2c4d"
					      }
					    ]
					  },
					  {
					    "featureType": "road.arterial",
					    "elementType": "labels",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#2c6675"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#255763"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "labels",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#b0d5ce"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#023e58"
					      }
					    ]
					  },
					  {
					    "featureType": "road.local",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "transit",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#98a5be"
					      }
					    ]
					  },
					  {
					    "featureType": "transit",
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#1d2c4d"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.line",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#283d6a"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.station",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#3a4762"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#0e1626"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#4e6d70"
					      }
					    ]
					  }
					]
		}
	},

	stations: {
		markers: [],
		oMarker: "",
		stationAddress: document.getElementById("station_address"), // Détail de la station - adresse
		stationAvailable: document.getElementById("station_available"), // " " " " - station dispo
		bikeAvailable: document.getElementById("bike_available"), // " " " " - vélo dispo

		init: function () {
			ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=21046543565b54c9cc44952a3a4cd95331a086a0", function (reponse) {
				var listeStations = JSON.parse(reponse);

				for (var i = 0; i < listeStations.length; i++) {
					oMarker = new google.maps.Marker({
				      	numero: i,           // ici on sauve la valeur de i
				      	position: new google.maps.LatLng(listeStations[i].position.lat, listeStations[i].position.lng),
				      	map: app.map,
				      	title: listeStations[i].name,
				      	address: listeStations[i].address,
				      	bikeAv: listeStations[i].available_bikes,
				      	stationAv: listeStations[i].available_bike_stands
				    });

				    app.stations.markers.push(oMarker);

				    google.maps.event.addListener(oMarker, "click", app.stations.setMarkerEvent);
				    google.maps.event.addListener(oMarker, "click", app.stations.setAdresseReservation);
				}

				var markerCluster = new MarkerClusterer(app.map, app.stations.markers, {imagePath: "images/m"});
			})
		},

		setMarkerEvent: function () {
			nouvelleAdresse = document.createTextNode(this.address);
			stationDispo = document.createTextNode(this.stationAv);
			veloDispo = document.createTextNode(this.bikeAv);
			verifAdresse = app.stations.stationAddress.firstChild;
			verifStation = app.stations.stationAvailable.firstChild;
			verifVelo = app.stations.bikeAvailable.firstChild;

			if (verifAdresse != null || verifStation != null || verifVelo != null) {
				app.stations.stationAddress.removeChild(verifAdresse);
				app.stations.stationAvailable.removeChild(verifStation);
				app.stations.bikeAvailable.removeChild(verifVelo);	
			}
			app.stations.stationAddress.appendChild(nouvelleAdresse);
			app.stations.stationAvailable.appendChild(stationDispo);
			app.stations.bikeAvailable.appendChild(veloDispo);			
		},

		openCanvas: function () {
			if (document.getElementById("bike_available").innerHTML > 0) {
				if (app.reservation.check === true || localStorage.getItem("dateFinResa") != null || localStorage.getItem("adresseResaStorage") != null) {
					alert("Attention, cette réservation va annuler la précédente !");
					app.signature.canvasWindow.className = "class_block";
				} else {
					app.signature.canvasWindow.className = "class_block";
				}
			} else {
				alert("Il n'y a pas de vélo disponible à cette station");
			}
		},

		setAdresseReservation: function () {
				app.reservation.adresseResaStorage = this.address;
				var tiret = /\s*-/;
				var nomCouper = this.title;
				var nom = nomCouper.split(tiret);
				nom.splice(0, 1);
				app.reservation.nomResaStorage = nom;
		}	
	},

	signature: {
		canvas: document.querySelector("canvas"),
		clearCanvas: document.getElementById("clear_canvas"),
		buttonOpenTimer: document.getElementById("valid_canvas"),
		canvasWindow: document.getElementById("canvas_win"),
		buttonOpenCanvas: document.getElementById("resa_velo"),
		closeCanvas: document.getElementById("close_canvas"),
		adresseResa: document.getElementById("adresse_resa"),
		nomResa: document.getElementById("nom_resa"),

		openTimer: function () {
			if (app.signaturePad.isEmpty() === false) {
				app.timer.stopTimer();
				app.timer.timerBlock.className = "class_block";
				app.timer.goTimer();
				app.signature.canvasWindow.className = "class_none";
				app.reservation.setDateReservation();
				app.signature.adresseResa.innerHTML = localStorage.getItem("adresseResaStorage");
				app.signature.nomResa.innerHTML = localStorage.getItem("nomResaStorage");	
			} else {
				alert("Signature obligatoire !");
			}
		},

		effacer: function () {
			app.signaturePad.clear();	
		},

		fermer: function () {
			app.signature.canvasWindow.className = "class_none";
		}
	},	

	timer: {
		time: DEFAULT_TIME,
		timerBlock: document.getElementById("temps_restant"),
		secondes: document.getElementById("compteur_sec"),
		minutes: document.getElementById("compteur_min"),
		annuler: document.getElementById("annuler_resa"),
		clearTimer: null,

		init: function () {
			if (localStorage.getItem("dateFinResa") != null || localStorage.getItem("adresseResaStorage") != null) {
				if (localStorage.getItem("dateFinResa") > (Date.now() / 1000)) {
					app.timer.timerBlock.className = "class_block";
					app.signature.adresseResa.innerHTML = localStorage.getItem("adresseResaStorage");
					app.signature.nomResa.innerHTML = localStorage.getItem("nomResaStorage");
					app.timer.time = Math.round(localStorage.getItem("dateFinResa") - (Date.now() / 1000));
					app.timer.goTimer();
				} else {
					alert("Votre temps de réservation est écoulé, votre réservation est annulée !");
					app.timer.stopTimer();
				}
			}
		},

		goTimer: function () {
			if (--app.timer.time > 0) {
				app.timer.clearTimer = setTimeout(app.timer.goTimer, 1000);
			} else {
				alert("Réservation annulée !");
				app.timer.stopTimer();
			}
			app.timer.secondes.innerHTML = app.timer.time % 60;
			app.timer.minutes.innerHTML = Math.floor(app.timer.time / 60);
		},

		stopTimer: function () {
			clearTimeout(app.timer.clearTimer);
			app.timer.timerBlock.className = "class_none";
			app.timer.time = DEFAULT_TIME;
			localStorage.removeItem("dateFinResa");
			localStorage.removeItem("adresseResaStorage");
			localStorage.removeItem("nomResaStorage");
			app.reservation.check = false;
		}
	},

	reservation: {
		dateResa: null,
		dateFinResa: null,
		adresseResaStorage: null,
		nomResaStorage: null,
		check: null,

		setDateReservation: function () {
			app.reservation.dateResa = (Date.now() / 1000);
			app.reservation.dateFinResa = app.reservation.dateResa + DEFAULT_TIME;
			app.reservation.check = true;
			localStorage.setItem("dateFinResa", app.reservation.dateFinResa);
			localStorage.setItem("adresseResaStorage", app.reservation.adresseResaStorage);
			localStorage.setItem("nomResaStorage", app.reservation.nomResaStorage);
		},	
	},

	init: function () {
		this.map = new google.maps.Map(document.getElementById("map"), this.map.option);
		this.stations.init();
		this.signaturePad = new SignaturePad(canvas);
		this.timer.init();

		this.events();
	},

	events: function () {			
		this.timer.annuler.addEventListener("click", this.timer.stopTimer);
		this.signature.buttonOpenCanvas.addEventListener("click", this.stations.openCanvas);
		this.signature.buttonOpenTimer.addEventListener("click", this.signature.openTimer);
		this.signature.buttonOpenTimer.addEventListener("click", this.signature.effacer);
		this.signature.clearCanvas.addEventListener("click", this.signature.effacer);
		this.signature.closeCanvas.addEventListener("click", this.signature.fermer);
	}
};

window.addEventListener("load", function() {
	slideshow.init();
	app.init();
});