# Culture Summerside AR Project (powered by AR.js)
* This is currently indev, the final product will not be on GitHub. Snippets below in case you need them. Line 20 of index.html is where the fun begins.

# Markers:
*Image-based marker
*<a-marker type="pattern" preset="custom" *url="assets/marker.patt">
*    <!--OVERLAY-->
*</a-marker>
*Location-based marker
*<a-entity gps-entity-place="latitude: LATITUDE; longitude: LONGITUDE">
*    OVERLAY
*</a-entity>

# Overlays:
<!--Image overlay-->
<a-image src="assets/...YOUR IMAGE FILE..." scale="1 1 1" class="clickable" rotation="-90 0 0" gesture-handler></a-image>
<!--Video overlay-->
<a-video src="assets/...YOUR VIDEO FILE..." autoplay="true" loop="true"></a-video>
<!--Shape overlay-->
<a-cylinder color="green" height="2" radius="1"></a-cylinder>
