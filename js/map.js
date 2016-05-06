	    window.onload = function () {
	    // Создает экземпляр карты и привязывает его к созданному контейнеру
	        var map = new YMaps.Map(document.getElementById("YMapsID"));
	    
	        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
	        map.setCenter(new YMaps.GeoPoint(30.32939868, 59.93933100), 16);
	        map.addControl(new YMaps.Zoom());			        

			var s = new YMaps.Style();
			s.balloonContentStyle = new YMaps.BalloonContentStyle(
			    new YMaps.Template("<b style='color: #000'>$[name]</b><div style='color: #000'>$[description]</div>")
			);

			s.iconStyle = new YMaps.IconStyle();
			s.iconStyle.href = "img/marker.svg";
			s.iconStyle.size = new YMaps.Point(79, 142);
			s.iconStyle.offset = new YMaps.Point(-37, -139);
			s.iconStyle.shadow = new YMaps.IconShadowStyle();
			s.iconStyle.shadow.href = "img/marker_shadow.png";
			s.iconStyle.shadow.size = new YMaps.Point(182, 110);
			s.iconStyle.shadow.offset = new YMaps.Point(0, -110);		        

	        // Создает метку в центре Москвы
			var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.323055,59.938631), {style: s});

			placemark.name = "GllacyShop";
			placemark.description = "Торговля мороженным ООО 'Gllacy Shop'";				

			// Добавляет метку на карту
			map.addOverlay(placemark); 
	    };