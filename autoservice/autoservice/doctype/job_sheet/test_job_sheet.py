# Copyright (c) 2022, Hashim and Contributors
# See license.txt
import * as markerjs2 from 'markerjs2';
let markerArea = new markerjs2.MarkerArea(document.getElementById('small.png'));
markerArea.addEventListener('render', event => {
  // we are setting the markup result to replace our original image on the page
  // but you can set a different image or upload it to your server
  document.getElementById('small.png').src = event.dataUrl;
});

// finally, call the show() method and marker.js UI opens
markerArea.show();

# import frappe
from frappe.tests.utils import FrappeTestCase


class TestJobSheet(FrappeTestCase):
	pass
