angular.module("travelApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("common/footer.html",
    "<!-- FOOTER -->\n" +
    "\n" +
    "<div class=\"footerbg\">\n" +
    "  <div class=\"container\">\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"ftitle\">Let's socialize</span>\n" +
    "\n" +
    "      <div class=\"scont\">\n" +
    "        <a href=\"#\" class=\"social1b\"><img src=\"img/icon-facebook.png\" alt=\"\"/></a>\n" +
    "        <a href=\"#\" class=\"social2b\"><img src=\"img/icon-twitter.png\" alt=\"\"/></a>\n" +
    "        <a href=\"#\" class=\"social3b\"><img src=\"img/icon-gplus.png\" alt=\"\"/></a>\n" +
    "        <a href=\"#\" class=\"social4b\"><img src=\"img/icon-youtube.png\" alt=\"\"/></a>\n" +
    "        <br/><br/><br/>\n" +
    "        <img src=\"img/logosmal.png\" alt=\"\"/><br/>\n" +
    "        &copy; 2013 | <a href=\"#\">Privacy Policy</a><br/>\n" +
    "        All Rights Reserved\n" +
    "        <br/><br/>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of column 1-->\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"ftitle\">Travel Specialists</span>\n" +
    "      <br/><br/>\n" +
    "      <ul class=\"footerlist\">\n" +
    "        <li><a href=\"#\">Golf Vacations</a></li>\n" +
    "        <li><a href=\"#\">Ski & Snowboarding</a></li>\n" +
    "        <li><a href=\"#\">Disney Parks Vacations</a></li>\n" +
    "        <li><a href=\"#\">Disneyland Vacations</a></li>\n" +
    "        <li><a href=\"#\">Disney World Vacations</a></li>\n" +
    "        <li><a href=\"#\">Vacations As Advertised</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <!-- End of column 2-->\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"ftitle\">Travel Specialists</span>\n" +
    "      <br/><br/>\n" +
    "      <ul class=\"footerlist\">\n" +
    "        <li><a href=\"#\">Weddings</a></li>\n" +
    "        <li><a href=\"#\">Accessible Travel</a></li>\n" +
    "        <li><a href=\"#\">Disney Parks</a></li>\n" +
    "        <li><a href=\"#\">Cruises</a></li>\n" +
    "        <li><a href=\"#\">Round the World</a></li>\n" +
    "        <li><a href=\"#\">First Class Flights</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <!-- End of column 3-->\n" +
    "\n" +
    "    <div class=\"col-md-3 grey\">\n" +
    "      <span class=\"ftitle\">Newsletter</span>\n" +
    "\n" +
    "      <div class=\"relative\">\n" +
    "        <input type=\"email\" class=\"form-control fccustom2\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n" +
    "        <button type=\"submit\" class=\"btn btn-default btncustom\">Submit<img src=\"img/arrow.png\" alt=\"\"/></button>\n" +
    "      </div>\n" +
    "      <br/><br/>\n" +
    "      <span class=\"ftitle\">Customer support</span><br/>\n" +
    "      <span class=\"pnr\">1-866-599-6674</span><br/>\n" +
    "      office@travel.com\n" +
    "    </div>\n" +
    "    <!-- End of column 4-->\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"footerbg3\">\n" +
    "  <div class=\"container center grey\">\n" +
    "    <a href=\"#\">Home</a> |\n" +
    "    <a href=\"#\">About</a> |\n" +
    "    <a href=\"#\">Last minute</a> |\n" +
    "    <a href=\"#\">Early booking</a> |\n" +
    "    <a href=\"#\">Special offers</a> |\n" +
    "    <a href=\"#\">Blog</a> |\n" +
    "    <a href=\"#\">Contact</a>\n" +
    "    <a href=\"#top\" class=\"gotop scroll\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("common/header.html",
    "<!-- Top wrapper -->\n" +
    "<div class=\"navbar-wrapper2 navbar-fixed-top\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar mtnav\">\n" +
    "\n" +
    "      <div class=\"container offset-3\">\n" +
    "        <!-- Navigation-->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button data-target=\".navbar-collapse\" data-toggle=\"collapse\" class=\"navbar-toggle\" type=\"button\">\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a href=\"index.html\" class=\"navbar-brand\"><img src=\"img/logo.png\" alt=\"Travel Agency Logo\" class=\"logo\"/></a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li class=\"dropdown active\">\n" +
    "              <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"index.html\">Home<b class=\"lightcaret mt-2\"></b></a>\n" +
    "              <ul class=\"dropdown-menu posright-0\">\n" +
    "                <li>\n" +
    "                  <div class=\"row dropwidth01\">\n" +
    "                    <ul class=\"droplist col-md-4\">\n" +
    "                      <li class=\"dropdown-header\">Homepages</li>\n" +
    "                      <li><a href=\"index.html\">Home 1 minimal</a></li>\n" +
    "                      <li><a href=\"index2.html\">Home 2 offers</a></li>\n" +
    "                      <li><a href=\"index3.html\">Home 3 full search</a></li>\n" +
    "                      <li><a href=\"index4.html\">Home 4 presentation</a></li>\n" +
    "                      <li><a href=\"index5.html\">Home 5 footer2</a></li>\n" +
    "                      <li><a href=\"index6.html\">Home 6 full</a></li>\n" +
    "                      <li><a href=\"index7.html\">Home 7 </a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"droplist col-md-4\">\n" +
    "                      <li class=\"dropdown-header\">Intro pages</li>\n" +
    "                      <li><a href=\"intro.html\">Intro 1</a></li>\n" +
    "                      <li><a href=\"intro2.html\">Intro 2 - slides</a></li>\n" +
    "                      <li><a href=\"intro3.html\">Intro 3 - slides2</a> <span class=\"green\">new</span></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"droplist col-md-4\">\n" +
    "                      <li class=\"dropdown-header\">Colors</li>\n" +
    "                      <li><a href=\"#\">Blue</a></li>\n" +
    "                      <li><a href=\"../green/index.html\">Green</a> <span class=\"green\">new</span></li>\n" +
    "                      <li><a href=\"../orange/index.html\">Orange</a> <span class=\"green\">new</span></li>\n" +
    "                      <li><a href=\"../cyan/index.html\">Cyan</a> <span class=\"green\">new</span></li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">Pages<b class=\"lightcaret mt-2\"></b></a>\n" +
    "              <ul class=\"dropdown-menu posright-0\">\n" +
    "                <li>\n" +
    "                  <div class=\"row dropwidth02\">\n" +
    "                    <ul class=\"droplist col-md-6\">\n" +
    "                      <li class=\"dropdown-header\">Inner pages</li>\n" +
    "                      <li><a href=\"../list/list.html\">List page 1</a></li>\n" +
    "                      <li><a href=\"../list/list2.html\">List page 2</a></li>\n" +
    "                      <li><a href=\"../list/list3.html\">List page 3</a></li>\n" +
    "                      <li><a href=\"../list/list4.html\">List page 4</a></li>\n" +
    "                      <li><a href=\"details.html\">Details page</a></li>\n" +
    "                      <li><a href=\"../../main/views/payment.html\">Payment</a></li>\n" +
    "                      <li><a href=\"contact.html\">Contact</a> <span class=\"green\">new</span></li>\n" +
    "                      <li><a href=\"../../main/views/profile.html\">User Profile</a></li>\n" +
    "                      <li><a href=\"../../main/views/login.html\">Login</a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"droplist col-md-6\">\n" +
    "                      <li class=\"dropdown-header\">Bootstrap Shortcodes</li>\n" +
    "                      <li><a href=\"http://getbootstrap.com/components/\" target=\"_blank\">Components</a></li>\n" +
    "                      <li><a href=\"http://getbootstrap.com/javascript/\" target=\"_blank\">Javascript</a></li>\n" +
    "                      <li><a href=\"http://getbootstrap.com/css/\" target=\"_blank\">Css</a></li>\n" +
    "                      <li class=\"dropdown-header\">Comming soon</li>\n" +
    "                      <li class=\"inactive\"><a href=\"#\">About</a></li>\n" +
    "                      <li class=\"inactive\"><a href=\"#\">Blog page</a></li>\n" +
    "                      <li class=\"inactive\"><a href=\"#\">Dashboard</a></li>\n" +
    "                      <li class=\"inactive\"><a href=\"#\">New Home page</a></li>\n" +
    "                      <li class=\"inactive\"><a href=\"#\">Elements</a></li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "            <li><a href=\"#\">Hotels</a></li>\n" +
    "            <li><a href=\"#\">Flights</a></li>\n" +
    "            <li><a href=\"#\">Vacations</a></li>\n" +
    "            <li><a href=\"#\">Cars</a></li>\n" +
    "            <li><a href=\"#\">Cruises</a></li>\n" +
    "            <li><a href=\"#\">Things to do</a></li>\n" +
    "            <li><a href=\"#\">Last minute</a></li>\n" +
    "            <li><a href=\"#\">Early booking</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">Deals<b class=\"lightcaret mt-2\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li class=\"dropdown-header\">Aligned Right Dropdown</li>\n" +
    "                <li><a href=\"#\">Sample Link 1</a></li>\n" +
    "                <li><a href=\"#\">Sample Link 2</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!-- /Navigation-->\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<!-- / Top wrapper -->"
  );

  $templateCache.put("home/banner.html",
    "<div id=\"dajy\" class=\"fullscreen-container mtslide sliderbg fixed\">\n" +
    "  <div class=\"fullscreenbanner\">\n" +
    "    <carousel interval=\"myInterval\">\n" +
    "      <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "        <img ng-src=\"{{slide.image}}\" style=\"margin:auto;\">\n" +
    "        <div class=\"carousel-caption\">\n" +
    "          <div class=\"sboxpurple textcenter\">\n" +
    "            <span class=\"lato size28 slim caps white\">{{ slide.country }}</span><br/><br/><br/>\n" +
    "            <span class=\"lato size100 slim caps white\">{{ slide.city }}</span><br/>\n" +
    "            <span class=\"lato size20 normal caps white\">from</span><br/><br/>\n" +
    "            <span class=\"lato size48 slim uppercase yellow\">{{ slide.price }}</span><br/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </slide>\n" +
    "    </carousel>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );

  $templateCache.put("home/home.html",
    "<!-- WRAP -->\n" +
    "<div ui-view=\"banner\"></div>\n" +
    "<div class=\"wrap cstyle03\">\n" +
    "  <div ui-view=\"search\"></div>\n" +
    "  <div ui-view=\"lastminutelarge\"></div>\n" +
    "  <div ui-view=\"lastminutesmall\"></div>\n" +
    "  <div ui-view=\"topdeals\"></div>\n" +
    "</div>\n" +
    "<!-- / WRAP -->\n" +
    "\n"
  );

  $templateCache.put("home/lastminutelarge.html",
    "<div class=\"deals3\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <span class=\"dtitle\">Last Minute</span>\n" +
    "\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Diana Hotel</a></p>\n" +
    "            <img src=\"img/smallrating-4.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$35</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Village Inn Studios & Family Apartments</a></p>\n" +
    "            <img src=\"img/smallrating-3.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$49</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Palatino Hotel</a></p>\n" +
    "            <img src=\"img/smallrating-4.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$90</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End of first row-->\n" +
    "\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <span class=\"dtitle\">Early Booking</span>\n" +
    "\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Comfort Suites Paradise Island</a></p>\n" +
    "            <img src=\"img/smallrating-4.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Bahamas</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$29</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Barcelo Malaga</a></p>\n" +
    "            <img src=\"img/smallrating-3.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Spain</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$32</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Palatino Hotel</a></p>\n" +
    "            <img src=\"img/smallrating-3.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$90</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End of first row-->\n" +
    "\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <span class=\"dtitle\">Hot Deals</span>\n" +
    "\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Parayso Hotel And Spa</a></p>\n" +
    "            <img src=\"img/smallrating-4.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$49</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Village Inn Studios & Family Apartments</a></p>\n" +
    "            <img src=\"img/smallrating-3.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$79</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"deal\">\n" +
    "          <a href=\"details.html\"><img src=\"img/thumb-img.jpg\" alt=\"\" class=\"dealthumb\"/></a>\n" +
    "\n" +
    "          <div class=\"dealtitle\">\n" +
    "            <p><a href=\"details.html\" class=\"dark\">Diana Hotel</a></p>\n" +
    "            <img src=\"img/smallrating-3.png\" alt=\"\" class=\"mt-10\"/><span class=\"size13 grey mt-9\">Zakynthos</span>\n" +
    "          </div>\n" +
    "          <div class=\"dealprice\">\n" +
    "            <p class=\"size12 grey lh2\">from<span class=\"price\">$299</span><br/>per night</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End of first row-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("home/lastminutesmall.html",
    "<div class=\"lastminute3\">\n" +
    "  <div class=\"container\">\n" +
    "    <img src=\"img/rating-4.png\" alt=\"\"/><br/>\n" +
    "    LAST MINUTE: <b>Barcelona</b> - 2 nights - Flight+4* Hotel, Dep 27h Aug from $209/person<br/>\n" +
    "\n" +
    "    <form action=\"details.html\">\n" +
    "      <button class=\"btn iosbtn\" type=\"submit\">Read more</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("home/search.html",
    "\n" +
    "<div class=\"search-form container mt-200 z-index100\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"bs-example bs-example-tabs cstyle04\">\n" +
    "        <form novalidate class=\"css-form\">\n" +
    "          <div class=\"tab-content3\" id=\"myTabContent\">\n" +
    "\n" +
    "            <div id=\"hotel\" ng-style=\"{'height': formContentHeight + 'px'}\" class=\"tab-pane\">\n" +
    "\n" +
    "              <!--Typeahead-->\n" +
    "              <span class=\"opensans size18\">Where do you want to go?</span>\n" +
    "              <input type=\"text\" ng-model=\"search.location\" typeahead-min-length=\"3\" placeholder=\"Greece\"\n" +
    "                     typeahead=\"locations as locations.label for locations in getLocation($viewValue)\" class=\"form-control\">\n" +
    "              <i ng-show=\"loadingLocations\" class=\"glyphicon glyphicon-refresh\"></i>\n" +
    "              <br/>\n" +
    "\n" +
    "              <div class=\"w50percent\">\n" +
    "                <div class=\"wh90percent textleft\">\n" +
    "                  <span class=\"opensans size13\"><b>Check in date</b></span>\n" +
    "                  <!--Checkin Date Calendar-->\n" +
    "                  <input class=\"form-control mySelectCalendar\" ng-click=\"openCheckIn($event)\" type=\"text\"\n" +
    "                         datepicker-popup=\"{{format}}\" ng-model=\"search.checkinDt\" is-open=\"checkInOpened\" min=\"minDate\"\n" +
    "                         max=\"'2015-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\"\n" +
    "                         ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"w50percentlast\">\n" +
    "                <div class=\"wh90percent textleft right\">\n" +
    "                  <!--Checkout Date Calendar-->\n" +
    "                  <span class=\"opensans size13\"><b>Check out date</b></span>\n" +
    "                  <input class=\"form-control mySelectCalendar\" ng-click=\"openCheckOut($event)\" type=\"text\"\n" +
    "                         datepicker-popup=\"{{format}}\" ng-model=\"search.checkoutDt\" is-open=\"checkOutOpened\"\n" +
    "                         min=\"minDate\" max=\"'2015-06-22'\" datepicker-options=\"dateOptions\"\n" +
    "                         date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <!--Rooms-->\n" +
    "              <div ng-repeat=\"room in search.rooms\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <div class=\"room1 margtop15\">\n" +
    "                  <div class=\"w50percent\">\n" +
    "                    <div class=\"wh90percent textleft\">\n" +
    "                      <span class=\"opensans size13\"><b>ROOM {{$index + 1}}</b></span><br/>\n" +
    "\n" +
    "                      <div class=\"addroom1 block\"><a href=\"#\" ng-click=\"addRoom()\" class=\"grey\">+ Add room</a></div>\n" +
    "                      <div ng-show=\"$index > 0\" class=\"addroom1 block\"><a href=\"#\" ng-click=\"removeRoom($index)\"\n" +
    "                                                                          class=\"grey\">- Remove room</a></div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"w50percentlast\">\n" +
    "                    <div class=\"wh90percent textleft right ohidden\">\n" +
    "                      <div class=\"w50percent\">\n" +
    "                        <div class=\"wh90percent textleft left\">\n" +
    "                          <!--Add Adult-->\n" +
    "                          <span class=\"opensans size13\"><b>Adult</b></span>\n" +
    "                          <select ng-model=\"room.numberOfAdults\" class=\"form-control\">\n" +
    "                            <option>1</option>\n" +
    "                            <option selected>2</option>\n" +
    "                            <option>3</option>\n" +
    "                            <option>4</option>\n" +
    "                            <option>5</option>\n" +
    "                          </select>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"w50percentlast\">\n" +
    "                        <div class=\"wh90percent textleft right ohidden\">\n" +
    "                          <!--Add Child-->\n" +
    "                          <span class=\"opensans size13\"><b>Child</b></span>\n" +
    "                          <select ng-change=\"childrenAges()\" ng-model=\"room.numberOfChildren\" class=\"form-control\">\n" +
    "                            <option>0</option>\n" +
    "                            <option selected>1</option>\n" +
    "                            <option>2</option>\n" +
    "                            <option>3</option>\n" +
    "                            <option>4</option>\n" +
    "                            <option>5</option>\n" +
    "                          </select>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <!--Child Ages-->\n" +
    "                  <div class=\"w100percentlast\" ng-if=\"room.showChildrenAges\">\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <hr/>\n" +
    "                    <div ng-class=\"{'w33percent': $index != 2,  'w34percentlast':  $index == 2}\" ng-repeat=\"age in room.ages\">\n" +
    "                      <div class=\"wh32percent child-age-marg textleft left ohidden\">\n" +
    "                        <!--Add Child-->\n" +
    "                        <span class=\"opensans size13\"><b>Child {{ $index + 1 }} Age</b></span>\n" +
    "                        <select ng-model=\"age\" class=\"form-control\">\n" +
    "                          <option>Age</option>\n" +
    "                          <option selected> > 1</option>\n" +
    "                          <option>2</option>\n" +
    "                          <option>3</option>\n" +
    "                          <option>4</option>\n" +
    "                          <option>5</option>\n" +
    "                          <option>6</option>\n" +
    "                          <option>7</option>\n" +
    "                          <option>8</option>\n" +
    "                          <option>9</option>\n" +
    "                          <option>10</option>\n" +
    "                          <option>11</option>\n" +
    "                          <option>12</option>\n" +
    "                          <option>13</option>\n" +
    "                          <option>14</option>\n" +
    "                          <option>15</option>\n" +
    "                          <option>16</option>\n" +
    "                          <option>17</option>\n" +
    "                        </select>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"searchbg\" ng-style=\"{'top': formFooterHeight + 'px'}\">\n" +
    "            <button type=\"submit\" class=\"btn-search\">Search</button>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"shadow cstyle05\">\n" +
    "        <div class=\"fwi one\"><img src=\"img/rome.jpg\" alt=\"\"/>\n" +
    "\n" +
    "          <div class=\"mhover none\">\n" +
    "        <span class=\"icon\">\n" +
    "        <a href=\"../list/list4.html\">\n" +
    "          <img src=\"img/spacer.png\" alt=\"\"/>\n" +
    "        </a>\n" +
    "      </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"ctitle\">Rome\n" +
    "          <a href=\"../list/list4.html\">\n" +
    "            <img src=\"img/spacer.png\" alt=\"\"/>\n" +
    "          </a>\n" +
    "          <span>$59.99</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"shadow cstyle05\">\n" +
    "        <div class=\"fwi one\"><img src=\"img/surfer.jpg\" alt=\"\"/>\n" +
    "\n" +
    "          <div class=\"mhover none\">\n" +
    "            <span class=\"icon\"><a href=\"../list/list4.html\"><img src=\"img/spacer.png\" alt=\"\"/></a></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"ctitle\">Cote d'azur<a href=\"../list/list4.html\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "          <span>$59.99</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("home/topdeals.html",
    "<div class=\"container cstyle06\">\n" +
    "\n" +
    "  <div class=\"row anim2\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <h2>Today's Top<br/>Deals</h2><br/>\n" +
    "      Start your search with a look at the best rates on our site.\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "\n" +
    "\n" +
    "      <!-- Carousel -->\n" +
    "      <div class=\"wrapper\">\n" +
    "        <div class=\"list_carousel\">\n" +
    "          <ul id=\"foo\">\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-hawaii.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Visit the Hawaii Beaches</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-santorini.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Santorini - Greece</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-dubai.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Dubai</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-hawaii.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Visit the Hawaii Beaches</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-santorini.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Santorini - Greece</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list4.html\"><img src=\"img/thumb-dubai.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Dubai</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <div class=\"clearfix\"></div>\n" +
    "          <a id=\"prev_btn\" class=\"prev\" href=\"#\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "          <a id=\"next_btn\" class=\"next\" href=\"#\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <hr class=\"featurette-divider2\">\n" +
    "\n" +
    "  <div class=\"row anim3\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <h2>Featured<br/>Offers</h2><br/>\n" +
    "      Start your search with a look at the best rates on our site.\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "\n" +
    "      <!-- Carousel -->\n" +
    "      <div class=\"wrapper\">\n" +
    "        <div class=\"list_carousel\">\n" +
    "          <ul id=\"foo2\">\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-africa.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>South Africa Adventures</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-egipt.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Egipt</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-machupicchu.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Machu Picchu</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-africa.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>South Africa Adventures</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-egipt.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Egipt</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a href=\"../list/list3.html\"><img src=\"img/thumb-machupicchu.jpg\" alt=\"\"/></a>\n" +
    "\n" +
    "              <div class=\"m1\">\n" +
    "                <h6 class=\"lh1 dark\"><b>Machu Picchu</b></h6>\n" +
    "                <h6 class=\"lh1 green\">Save up to 30%</h6>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <div class=\"clearfix\"></div>\n" +
    "          <a id=\"prev_btn2\" class=\"prev\" href=\"#\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "          <a id=\"next_btn2\" class=\"next\" href=\"#\"><img src=\"img/spacer.png\" alt=\"\"/></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("hotels/breadcrumb.html",
    "<div class=\"container breadcrub\">\n" +
    "  <div>\n" +
    "    <a class=\"homebtn left\" href=\"#\"></a>\n" +
    "    <div class=\"left\">\n" +
    "      <ul class=\"bcrumbs\">\n" +
    "        <li>/</li>\n" +
    "        <li><a href=\"#\">Hotels</a></li>\n" +
    "        <li>/</li>\n" +
    "        <li><a href=\"#\">U.S.A.</a></li>\n" +
    "        <li>/</li>\n" +
    "        <li><a href=\"#\" class=\"active\">New York</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <a class=\"backbtn right\" href=\"#\"></a>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <div class=\"brlines\"></div>\n" +
    "</div>"
  );

  $templateCache.put("hotels/columns.html",
    "<!-- LIST CONTENT-->\n" +
    "<div class=\"rightcontent col-md-9 offset-0\">\n" +
    "\t\t\t\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <!-- Top filters -->\n" +
    "    <div class=\"topsortby\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "\n" +
    "          <div class=\"left mt7\"><b>Sort by:</b></div>\n" +
    "\n" +
    "          <div class=\"right wh70percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Guest rating</option>\n" +
    "              <option>5 stars</option>\n" +
    "              <option>4 stars</option>\n" +
    "              <option>3 stars</option>\n" +
    "              <option>2 stars</option>\n" +
    "              <option>1 stars</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Name</option>\n" +
    "              <option>A to Z</option>\n" +
    "              <option>Z to A</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Price</option>\n" +
    "              <option>Ascending</option>\n" +
    "              <option>Descending</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <button class=\"popularbtn left\">Most Popular</button>\n" +
    "        <div class=\"right\">\n" +
    "          <button class=\"gridbtn\" onClick=\"window.open('list2.html','_self');\">&nbsp;</button>\n" +
    "          <button class=\"listbtn\" onClick=\"window.open('list4.html','_self');\">&nbsp;</button>\n" +
    "          <button class=\"grid2btn active\">&nbsp;</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of topfilters-->\n" +
    "  </div>\n" +
    "  <!-- End of padding -->\n" +
    "\n" +
    "  <br/><br/>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"itemscontainer offset-1\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item1.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item2.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item3.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item4.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item5.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item6.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item7.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item8.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item9.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel2\">\n" +
    "        <div class=\"labelright\">\n" +
    "          <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "          <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "          <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "          <span class=\"green size18\"><b>$16.00</b></span><br/>\n" +
    "          <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "          <button class=\"bookbtn mt1\">Book</button>\n" +
    "        </div>\n" +
    "        <div class=\"labelleft\">\n" +
    "          <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "          <p class=\"grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>\n" +
    "          Vestibulum vel risus at lectus rhoncus mattis. Sed id enim eu orci rhoncus malesuada.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- End of offset1-->\n" +
    "\n" +
    "  <div class=\"hpadding20\">\n" +
    "\n" +
    "    <ul class=\"pagination right paddingbtm20\">\n" +
    "      <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "      <li><a href=\"#\">1</a></li>\n" +
    "      <li><a href=\"#\">2</a></li>\n" +
    "      <li><a href=\"#\">3</a></li>\n" +
    "      <li><a href=\"#\">4</a></li>\n" +
    "      <li><a href=\"#\">5</a></li>\n" +
    "      <li><a href=\"#\">&raquo;</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "<!-- END OF LIST CONTENT-->"
  );

  $templateCache.put("hotels/filters.html",
    "<!-- FILTERS -->\n" +
    "<div class=\"col-md-3 filters offset-0\">\n" +
    "<!-- TOP TIP -->\n" +
    "<div class=\"filtertip\">\n" +
    "  <div class=\"padding20\">\n" +
    "    <p class=\"size13\"><span class=\"size18 bold counthotel\">53</span> Hotels starting at</p>\n" +
    "\n" +
    "    <p class=\"size30 bold\">$<span class=\"countprice\"></span></p>\n" +
    "\n" +
    "    <p class=\"size13\">Narrow results or <a href=\"#\">view all</a></p>\n" +
    "  </div>\n" +
    "  <div class=\"tip-arrow\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"bookfilters hpadding20\">\n" +
    "\n" +
    "\n" +
    "<div class=\"w50percent\">\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked>\n" +
    "      <span class=\"hotel-ico\"></span> Hotels\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n" +
    "      <span class=\"flight-ico\"></span> Flights\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\">\n" +
    "      <span class=\"suitcase-ico\"></span> Vacations\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios4\" value=\"option4\">\n" +
    "      <span class=\"car-ico\"></span> Cars\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios5\" value=\"option5\">\n" +
    "      <span class=\"cruise-ico\"></span>Cruises\n" +
    "    </label>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"w50percentlast\">\n" +
    "  <p class=\"cstyle08\">Packages:</p>\n" +
    "\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios6\" value=\"option6\">\n" +
    "      Flight+Hotel+Car\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios7\" value=\"option7\">\n" +
    "      Flight+Hotel\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios8\" value=\"option8\">\n" +
    "      Flight+Car\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label>\n" +
    "      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios9\" value=\"option9\">\n" +
    "      Hotel+Car\n" +
    "    </label>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"clearfix\"></div>\n" +
    "<br/>\n" +
    "\n" +
    "<!-- HOTELS TAB -->\n" +
    "<div class=\"hotelstab2 none\">\n" +
    "  <span class=\"opensans size13\">Where do you want to go?</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Greece\">\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker2\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 1</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom1 block\"><a onclick=\"addroom2()\" class=\"grey cpointer\">+ Add room</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right ohidden\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option selected>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right ohidden\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>0</option>\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room2 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 2</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom2 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom2()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option selected>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room3 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 3</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom3 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom3()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF HOTELS TAB -->\n" +
    "\n" +
    "<!-- FLIGHTS TAB -->\n" +
    "<div class=\"flightstab2 none\">\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Flying from</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">To</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Departing</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker3\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Returning</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker4\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\">Adult</span>\n" +
    "        <select class=\"form-control mySelectBoxClass\">\n" +
    "          <option>1</option>\n" +
    "          <option selected>2</option>\n" +
    "          <option>3</option>\n" +
    "          <option>4</option>\n" +
    "          <option>5</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <span class=\"opensans size13\">Child</span>\n" +
    "        <select class=\"form-control mySelectBoxClass\">\n" +
    "          <option>0</option>\n" +
    "          <option selected>1</option>\n" +
    "          <option>2</option>\n" +
    "          <option>3</option>\n" +
    "          <option>4</option>\n" +
    "          <option>5</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF FLIGHTS TAB -->\n" +
    "\n" +
    "<!-- VACATIONS TAB -->\n" +
    "<div class=\"vacationstab2 none\">\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Flying from</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\"><b>To</b></span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker7\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker8\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 1</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom1 block\"><a onclick=\"addroom2()\" class=\"grey cpointer\">+ Add room</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option selected>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>0</option>\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room2 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 2</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom2 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom2()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option selected>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room3 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 3</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom3 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom3()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF VACATIONS TAB -->\n" +
    "\n" +
    "<!-- CARS TAB -->\n" +
    "<div class=\"carstab2 none\">\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Picking up</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Airport, address\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Dropping off</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Airport, address\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Pick up date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker5\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Hour</span>\n" +
    "      <select class=\"form-control mySelectBoxClass\">\n" +
    "        <option>12:00 AM</option>\n" +
    "        <option>12:30 AM</option>\n" +
    "        <option>01:00 AM</option>\n" +
    "        <option>01:30 AM</option>\n" +
    "        <option>02:00 AM</option>\n" +
    "        <option>02:30 AM</option>\n" +
    "        <option>03:00 AM</option>\n" +
    "        <option>03:30 AM</option>\n" +
    "        <option>04:00 AM</option>\n" +
    "        <option>04:30 AM</option>\n" +
    "        <option>05:00 AM</option>\n" +
    "        <option>05:30 AM</option>\n" +
    "        <option>06:00 AM</option>\n" +
    "        <option>06:30 AM</option>\n" +
    "        <option>07:00 AM</option>\n" +
    "        <option>07:30 AM</option>\n" +
    "        <option>08:00 AM</option>\n" +
    "        <option>08:30 AM</option>\n" +
    "        <option>09:00 AM</option>\n" +
    "        <option>09:30 AM</option>\n" +
    "        <option>10:00 AM</option>\n" +
    "        <option selected>10:30 AM</option>\n" +
    "        <option>11:00 AM</option>\n" +
    "        <option>11:30 AM</option>\n" +
    "        <option>12:00 PM</option>\n" +
    "        <option>12:30 PM</option>\n" +
    "        <option>01:00 PM</option>\n" +
    "        <option>01:30 PM</option>\n" +
    "        <option>02:00 PM</option>\n" +
    "        <option>02:30 PM</option>\n" +
    "        <option>03:00 PM</option>\n" +
    "        <option>03:30 PM</option>\n" +
    "        <option>04:00 PM</option>\n" +
    "        <option>04:30 PM</option>\n" +
    "        <option>05:00 PM</option>\n" +
    "        <option>05:30 PM</option>\n" +
    "        <option>06:00 PM</option>\n" +
    "        <option>06:30 PM</option>\n" +
    "        <option>07:00 PM</option>\n" +
    "        <option>07:30 PM</option>\n" +
    "        <option>08:00 PM</option>\n" +
    "        <option>08:30 PM</option>\n" +
    "        <option>09:00 PM</option>\n" +
    "        <option>09:30 PM</option>\n" +
    "        <option>10:00 PM</option>\n" +
    "        <option>10:30 PM</option>\n" +
    "        <option>11:00 PM</option>\n" +
    "        <option>11:30 PM</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\">Drop off date</span>\n" +
    "        <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker6\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <span class=\"opensans size13\">Hour</span>\n" +
    "        <select class=\"form-control mySelectBoxClass\">\n" +
    "          <option>12:00 AM</option>\n" +
    "          <option>12:30 AM</option>\n" +
    "          <option>01:00 AM</option>\n" +
    "          <option>01:30 AM</option>\n" +
    "          <option>02:00 AM</option>\n" +
    "          <option>02:30 AM</option>\n" +
    "          <option>03:00 AM</option>\n" +
    "          <option>03:30 AM</option>\n" +
    "          <option>04:00 AM</option>\n" +
    "          <option>04:30 AM</option>\n" +
    "          <option>05:00 AM</option>\n" +
    "          <option>05:30 AM</option>\n" +
    "          <option>06:00 AM</option>\n" +
    "          <option>06:30 AM</option>\n" +
    "          <option>07:00 AM</option>\n" +
    "          <option>07:30 AM</option>\n" +
    "          <option>08:00 AM</option>\n" +
    "          <option>08:30 AM</option>\n" +
    "          <option>09:00 AM</option>\n" +
    "          <option>09:30 AM</option>\n" +
    "          <option>10:00 AM</option>\n" +
    "          <option selected>10:30 AM</option>\n" +
    "          <option>11:00 AM</option>\n" +
    "          <option>11:30 AM</option>\n" +
    "          <option>12:00 PM</option>\n" +
    "          <option>12:30 PM</option>\n" +
    "          <option>01:00 PM</option>\n" +
    "          <option>01:30 PM</option>\n" +
    "          <option>02:00 PM</option>\n" +
    "          <option>02:30 PM</option>\n" +
    "          <option>03:00 PM</option>\n" +
    "          <option>03:30 PM</option>\n" +
    "          <option>04:00 PM</option>\n" +
    "          <option>04:30 PM</option>\n" +
    "          <option>05:00 PM</option>\n" +
    "          <option>05:30 PM</option>\n" +
    "          <option>06:00 PM</option>\n" +
    "          <option>06:30 PM</option>\n" +
    "          <option>07:00 PM</option>\n" +
    "          <option>07:30 PM</option>\n" +
    "          <option>08:00 PM</option>\n" +
    "          <option>08:30 PM</option>\n" +
    "          <option>09:00 PM</option>\n" +
    "          <option>09:30 PM</option>\n" +
    "          <option>10:00 PM</option>\n" +
    "          <option>10:30 PM</option>\n" +
    "          <option>11:00 PM</option>\n" +
    "          <option>11:30 PM</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF CARS TAB -->\n" +
    "\n" +
    "<!-- CRUISE TAB -->\n" +
    "<div class=\"cruisestab2 none\">\n" +
    "  <div class=\"fullwidth\">\n" +
    "    <span class=\"opensans size13\">Going to</span>\n" +
    "    <select class=\"form-control mySelectBoxClass\">\n" +
    "      <option selected>Show all</option>\n" +
    "      <optgroup label=\"Most Popular\">\n" +
    "        <option>Caribbean</option>\n" +
    "        <option>Bahamas</option>\n" +
    "        <option>Mexico</option>\n" +
    "        <option>Alaska</option>\n" +
    "        <option>Europe</option>\n" +
    "        <option>Bermuda</option>\n" +
    "        <option>Hawaii</option>\n" +
    "      </optgroup>\n" +
    "      <optgroup label=\"Other Destinations\">\n" +
    "        <option>Africa</option>\n" +
    "        <option>Arctic/Antartctic</option>\n" +
    "        <option>Asia</option>\n" +
    "        <option>Australia/New Zealand</option>\n" +
    "        <option>Central America</option>\n" +
    "        <option>Cruise to Nowhere</option>\n" +
    "        <option>Galapagos</option>\n" +
    "        <option>Greenland/Iceland</option>\n" +
    "        <option>Middle East</option>\n" +
    "        <option>Pacific Coastal</option>\n" +
    "        <option>Panama Canal</option>\n" +
    "        <option>South Africa</option>\n" +
    "        <option>South Pacific</option>\n" +
    "        <option>Tahiti</option>\n" +
    "        <option>Transatlantic</option>\n" +
    "        <option>World Cruises</option>\n" +
    "      </optgroup>\n" +
    "    </select>\n" +
    "\n" +
    "    <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "    <span class=\"opensans size13\">Departure</span>\n" +
    "    <select class=\"form-control mySelectBoxClass\">\n" +
    "      <option selected>Show all</option>\n" +
    "      <option>October 2013</option>\n" +
    "      <option>November 2013</option>\n" +
    "      <option>December 2013</option>\n" +
    "      <option>January 2014</option>\n" +
    "      <option>February 2014</option>\n" +
    "      <option>March 2014</option>\n" +
    "      <option>April 2014</option>\n" +
    "      <option>May 2014</option>\n" +
    "      <option>June 2014</option>\n" +
    "      <option>July 2014</option>\n" +
    "      <option>August 2014</option>\n" +
    "      <option>September 2014</option>\n" +
    "      <option>October 2014</option>\n" +
    "      <option>November 2014</option>\n" +
    "      <option>December 2014</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF CRUISE TAB -->\n" +
    "\n" +
    "\n" +
    "<!-- FLIGHT+HOTEL+CAR TAB -->\n" +
    "<div class=\"flighthotelcartab2 none\">\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Flying from</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">To</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Departing</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker13\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Returning</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker14\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 1</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom1 block\"><a onclick=\"addroom2()\" class=\"grey cpointer\">+ Add room</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right ohidden\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option selected>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right ohidden\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>0</option>\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room2 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 2</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom2 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom2()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option selected>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room3 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 3</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom3 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom3()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <div class=\"center size10 ca03\">! An economy car will be added to your search. (You may change your car options\n" +
    "    later.)\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF FLIGHT+HOTE+CAR TAB -->\n" +
    "\n" +
    "\n" +
    "<!-- FLIGHT+HOTEL TAB -->\n" +
    "<div class=\"flighthoteltab2 none\">\n" +
    "\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Flying from</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">To</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Departing</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker10\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Returning</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker9\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 1</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom1 block\"><a onclick=\"addroom2()\" class=\"grey cpointer\">+ Add room</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right ohidden\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option selected>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right ohidden\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>0</option>\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room2 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 2</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom2 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom2()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option selected>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room3 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 3</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom3 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom3()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF FLIGHT+HOTE TAB -->\n" +
    "\n" +
    "<!-- FLIGHT+CAR TAB -->\n" +
    "<div class=\"flightcartab2 none\">\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Flying from</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">To</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"City or airport\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Departing</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker11\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Returning</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker12\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"center size10 ca03\">! An economy car will be added to your search. (You may change your car options\n" +
    "    later.)\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF FLIGHT+CAR TAB -->\n" +
    "\n" +
    "<!-- HOTEL+CAR TAB -->\n" +
    "<div class=\"hotelcartab2 none\">\n" +
    "\n" +
    "  <span class=\"opensans size13\">Where do you want to go?</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Greece\">\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"w50percent\">\n" +
    "    <div class=\"wh90percent textleft\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker15\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"w50percentlast\">\n" +
    "    <div class=\"wh90percent textleft right\">\n" +
    "      <span class=\"opensans size13\">Check in date</span>\n" +
    "      <input type=\"text\" class=\"form-control mySelectCalendar\" id=\"datepicker16\" placeholder=\"mm/dd/yyyy\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"clearfix pbottom15\"></div>\n" +
    "\n" +
    "  <div class=\"room1\">\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 1</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom1 block\"><a onclick=\"addroom2()\" class=\"grey cpointer\">+ Add room</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right ohidden\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option selected>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right ohidden\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>0</option>\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room2 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 2</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom2 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom2()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option selected>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"room3 none\">\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"line1\"></div>\n" +
    "    <div class=\"w50percent\">\n" +
    "      <div class=\"wh90percent textleft\">\n" +
    "        <span class=\"opensans size13\"><b>ROOM 3</b></span><br/>\n" +
    "\n" +
    "        <div class=\"addroom3 block grey\"><a onclick=\"addroom3()\" class=\"grey cpointer\">+ Add room</a> | <a\n" +
    "            onclick=\"removeroom3()\" class=\"orange cpointer\"><img src=\"images/delete.png\" alt=\"delete\"/></a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"w50percentlast\">\n" +
    "      <div class=\"wh90percent textleft right\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent textleft left\">\n" +
    "            <span class=\"opensans size13\">Adult</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent textleft right\">\n" +
    "            <span class=\"opensans size13\">Child</span>\n" +
    "            <select class=\"form-control mySelectBoxClass\">\n" +
    "              <option selected>0</option>\n" +
    "              <option>1</option>\n" +
    "              <option>2</option>\n" +
    "              <option>3</option>\n" +
    "              <option>4</option>\n" +
    "              <option>5</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "  <br/>\n" +
    "\n" +
    "  <div class=\"center size10 ca03\">! An economy car will be added to your search. (You may change your car options\n" +
    "    later.)\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn-search3\">Search</button>\n" +
    "</div>\n" +
    "<!-- END OF HOTEL+CAR TAB -->\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<!-- END OF BOOK FILTERS -->\n" +
    "\n" +
    "<div class=\"line2\"></div>\n" +
    "<div class=\"padding20title\"><h3 class=\"opensans dark\">Filter by</h3></div>\n" +
    "<div class=\"line2\"></div>\n" +
    "\n" +
    "<!-- Star ratings -->\n" +
    "<button type=\"button\" class=\"collapsebtn\" data-toggle=\"collapse\" data-target=\"#collapse1\">\n" +
    "  Star rating <span class=\"collapsearrow\"></span>\n" +
    "</button>\n" +
    "<div id=\"collapse1\" class=\"collapse in\">\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"><img src=\"images/filter-rating-5.png\" class=\"imgpos1\" alt=\"\"/> 5 Stars\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"><img src=\"images/filter-rating-4.png\" class=\"imgpos1\" alt=\"\"/> 4 Stars\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"><img src=\"images/filter-rating-3.png\" class=\"imgpos1\" alt=\"\"/> 3 Stars\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"><img src=\"images/filter-rating-2.png\" class=\"imgpos1\" alt=\"\"/> 2 Stars\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"><img src=\"images/filter-rating-1.png\" class=\"imgpos1\" alt=\"\"/> 1 Star\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "</div>\n" +
    "<!-- End of Star ratings -->\n" +
    "<div class=\"line2\"></div>\n" +
    "<!-- Price range -->\n" +
    "<button type=\"button\" class=\"collapsebtn\" data-toggle=\"collapse\" data-target=\"#collapse2\">\n" +
    "  Price range <span class=\"collapsearrow\"></span>\n" +
    "</button>\n" +
    "<div id=\"collapse2\" class=\"collapse in\">\n" +
    "  <div class=\"padding20\">\n" +
    "    <div class=\"layout-slider wh100percent\">\n" +
    "      <span class=\"cstyle09\"><input id=\"Slider1\" type=\"slider\" name=\"price\" value=\"400;700\"/></span>\n" +
    "    </div>\n" +
    "    <script type=\"text/javascript\">\n" +
    "      jQuery(\"#Slider1\").slider({ from: 100, to: 1000, step: 5, smooth: true, round: 0, dimension: \"&nbsp;$\", skin: \"round\" });\n" +
    "    </script>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<!-- End of Price range -->\n" +
    "<div class=\"line2\"></div>\n" +
    "<!-- Acomodations -->\n" +
    "<button type=\"button\" class=\"collapsebtn\" data-toggle=\"collapse\" data-target=\"#collapse3\">\n" +
    "  Acomodation type <span class=\"collapsearrow\"></span>\n" +
    "</button>\n" +
    "<div id=\"collapse3\" class=\"collapse in\">\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation1\" value=\"option1\" checked>\n" +
    "        All\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation2\" value=\"option2\">\n" +
    "        Hotel\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation3\" value=\"option3\">\n" +
    "        Bed & Breakfast\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation4\" value=\"option4\">\n" +
    "        Apartment\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation5\" value=\"option5\">\n" +
    "        Condo\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"radio\">\n" +
    "      <label>\n" +
    "        <input type=\"radio\" name=\"optionsRadios2\" id=\"Acomodation6\" value=\"option6\">\n" +
    "        All-Inclusive Resort\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "</div>\n" +
    "<!-- End of Acomodations -->\n" +
    "<div class=\"line2\"></div>\n" +
    "\n" +
    "<!-- Hotel Preferences -->\n" +
    "<button type=\"button\" class=\"collapsebtn last\" data-toggle=\"collapse\" data-target=\"#collapse4\">\n" +
    "  Hotel Preferences <span class=\"collapsearrow\"></span>\n" +
    "</button>\n" +
    "<div id=\"collapse4\" class=\"collapse in\">\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">High-speed Internet (41)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Air conditioning (52)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Swimming pool (55)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Childcare (12)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Fitness equipment (49)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Free breakfast (14)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Free parking (11)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Hair dryer (48)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Pets allowed (16)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Restaurant in hotel (47)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Room service (38)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\">Spa services on site (57)\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "</div>\n" +
    "<!-- End of Hotel Preferences -->\n" +
    "\n" +
    "<div class=\"line2\"></div>\n" +
    "<div class=\"clearfix\"></div>\n" +
    "<br/>\n" +
    "<br/>\n" +
    "<br/>\n" +
    "</div>\n" +
    "<!-- END OF FILTERS -->"
  );

  $templateCache.put("hotels/grid.html",
    "<!-- LIST CONTENT-->\n" +
    "<div class=\"rightcontent col-md-9 offset-0\">\n" +
    "\t\t\t\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <!-- Top filters -->\n" +
    "    <div class=\"topsortby\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "\n" +
    "          <div class=\"left mt7\"><b>Sort by:</b></div>\n" +
    "\n" +
    "          <div class=\"right wh70percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Guest rating</option>\n" +
    "              <option>5 stars</option>\n" +
    "              <option>4 stars</option>\n" +
    "              <option>3 stars</option>\n" +
    "              <option>2 stars</option>\n" +
    "              <option>1 stars</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Name</option>\n" +
    "              <option>A to Z</option>\n" +
    "              <option>Z to A</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Price</option>\n" +
    "              <option>Ascending</option>\n" +
    "              <option>Descending</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <button class=\"popularbtn left\">Most Popular</button>\n" +
    "        <div class=\"right\">\n" +
    "          <button class=\"gridbtn active\">&nbsp;</button>\n" +
    "          <button class=\"listbtn\" onClick=\"window.open('list4.html','_self');\">&nbsp;</button>\n" +
    "          <button class=\"grid2btn\" onClick=\"window.open('list3.html','_self');\">&nbsp;</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of topfilters-->\n" +
    "  </div>\n" +
    "  <!-- End of padding -->\n" +
    "\n" +
    "  <br/><br/>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"itemscontainer offset-1\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item1.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$36.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item2.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$37.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item3.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$37.50</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item4.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$41.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item5.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$45.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item6.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$45.50</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item7.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$45.90</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item8.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$50.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item9.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$55.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item10.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$55.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item11.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$59.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"listitem\">\n" +
    "        <img src=\"images/items/item12.jpg\" alt=\"\"/>\n" +
    "        <div class=\"liover\"></div>\n" +
    "        <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "        <a class=\"book-icon\" href=\"#\"></a>\n" +
    "      </div>\n" +
    "      <div class=\"itemlabel\">\n" +
    "        <button class=\"bookbtn right mt1\">Book</button>\n" +
    "        <b>Mabely Grand Hotel</b><br/>\n" +
    "        <p class=\"lightgrey\"><span class=\"green size14\"><b>$61.00</b></span> avg/night</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- End of offset1-->\n" +
    "\n" +
    "  <div class=\"hpadding20\">\n" +
    "\n" +
    "    <ul class=\"pagination right paddingbtm20\">\n" +
    "      <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "      <li><a href=\"#\">1</a></li>\n" +
    "      <li><a href=\"#\">2</a></li>\n" +
    "      <li><a href=\"#\">3</a></li>\n" +
    "      <li><a href=\"#\">4</a></li>\n" +
    "      <li><a href=\"#\">5</a></li>\n" +
    "      <li><a href=\"#\">&raquo;</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "<!-- END OF LIST CONTENT-->"
  );

  $templateCache.put("hotels/hotels.html",
    "<div ui-view=\"breadcrumbs\"></div>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"container pagecontainer offset-0\">\n" +
    "    <div ui-view=\"filters\"></div>\n" +
    "    <div ui-view=\"list\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("hotels/rows.html",
    "<!-- LIST CONTENT-->\n" +
    "<div class=\"rightcontent col-md-9 offset-0\">\n" +
    "\n" +
    "  <div class=\"hpadding20\">\n" +
    "    <!-- Top filters -->\n" +
    "    <div class=\"topsortby\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "\n" +
    "          <div class=\"left mt7\"><b>Sort by:</b></div>\n" +
    "\n" +
    "          <div class=\"right wh70percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Guest rating</option>\n" +
    "              <option>5 stars</option>\n" +
    "              <option>4 stars</option>\n" +
    "              <option>3 stars</option>\n" +
    "              <option>2 stars</option>\n" +
    "              <option>1 stars</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <div class=\"w50percent\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Name</option>\n" +
    "              <option>A to Z</option>\n" +
    "              <option>Z to A</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"w50percentlast\">\n" +
    "          <div class=\"wh90percent\">\n" +
    "            <select class=\"form-control mySelectBoxClass \">\n" +
    "              <option selected>Price</option>\n" +
    "              <option>Ascending</option>\n" +
    "              <option>Descending</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <button class=\"popularbtn left\">Most Popular</button>\n" +
    "        <div class=\"right\">\n" +
    "          <button class=\"gridbtn\" onClick=\"window.open('list2.html','_self');\">&nbsp;</button>\n" +
    "          <button class=\"listbtn active\">&nbsp;</button>\n" +
    "          <button class=\"grid2btn\" onClick=\"window.open('list3.html','_self');\">&nbsp;</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of topfilters-->\n" +
    "  </div>\n" +
    "  <!-- End of padding -->\n" +
    "\n" +
    "  <br/><br/>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"itemscontainer offset-1\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"offset-2\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <div class=\"listitem2\">\n" +
    "          <a href=\"images/items/item7.jpg\" data-footer=\"A custom footer text\" data-title=\"A random title\" data-gallery=\"multiimages\" data-toggle=\"lightbox\"><img src=\"images/items/item7.jpg\" alt=\"\"/></a>\n" +
    "          <div class=\"liover\"></div>\n" +
    "          <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "          <a class=\"book-icon\" href=\"details.html\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-8 offset-0\">\n" +
    "        <div class=\"itemlabel3\">\n" +
    "          <div class=\"labelright\">\n" +
    "            <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "            <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "            <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "            <span class=\"green size18\"><b>$36.00</b></span><br/>\n" +
    "            <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "            <form action=\"details.html\">\n" +
    "             <button class=\"bookbtn mt1\" type=\"submit\">Book</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"labelleft2\">\n" +
    "            <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "            <p class=\"grey\">\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.\n" +
    "            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>\n" +
    "            <ul class=\"hotelpreferences\">\n" +
    "              <li class=\"icohp-internet\"></li>\n" +
    "              <li class=\"icohp-air\"></li>\n" +
    "              <li class=\"icohp-pool\"></li>\n" +
    "              <li class=\"icohp-childcare\"></li>\n" +
    "              <li class=\"icohp-fitness\"></li>\n" +
    "              <li class=\"icohp-breakfast\"></li>\n" +
    "              <li class=\"icohp-parking\"></li>\n" +
    "              <li class=\"icohp-pets\"></li>\n" +
    "              <li class=\"icohp-spa\"></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"offset-2\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <div class=\"listitem2\">\n" +
    "          <a href=\"images/items/item11.jpg\" data-footer=\"A custom footer text\" data-title=\"A random title\" data-gallery=\"multiimages\" data-toggle=\"lightbox\"><img src=\"images/items/item11.jpg\" alt=\"\"/></a>\n" +
    "          <div class=\"liover\"></div>\n" +
    "          <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "          <a class=\"book-icon\" href=\"details.html\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-8 offset-0\">\n" +
    "        <div class=\"itemlabel3\">\n" +
    "          <div class=\"labelright\">\n" +
    "            <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "            <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "            <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "            <span class=\"green size18\"><b>$39.00</b></span><br/>\n" +
    "            <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "            <form action=\"details.html\">\n" +
    "             <button class=\"bookbtn mt1\" type=\"submit\">Book</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"labelleft2\">\n" +
    "            <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "            <p class=\"grey\">\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.\n" +
    "            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>\n" +
    "            <ul class=\"hotelpreferences\">\n" +
    "              <li class=\"icohp-hairdryer\"></li>\n" +
    "              <li class=\"icohp-garden\"></li>\n" +
    "              <li class=\"icohp-grill\"></li>\n" +
    "              <li class=\"icohp-kitchen\"></li>\n" +
    "              <li class=\"icohp-bar\"></li>\n" +
    "              <li class=\"icohp-living\"></li>\n" +
    "              <li class=\"icohp-tv\"></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"offset-2\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <div class=\"listitem2\">\n" +
    "          <a href=\"images/items/item1.jpg\" data-footer=\"A custom footer text\" data-title=\"A random title\" data-gallery=\"multiimages\" data-toggle=\"lightbox\"><img src=\"images/items/item1.jpg\" alt=\"\"/></a>\n" +
    "          <div class=\"liover\"></div>\n" +
    "          <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "          <a class=\"book-icon\" href=\"details.html\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-8 offset-0\">\n" +
    "        <div class=\"itemlabel3\">\n" +
    "          <div class=\"labelright\">\n" +
    "            <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "            <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "            <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "            <span class=\"green size18\"><b>$45.00</b></span><br/>\n" +
    "            <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "            <form action=\"details.html\">\n" +
    "             <button class=\"bookbtn mt1\" type=\"submit\">Book</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"labelleft2\">\n" +
    "            <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "            <p class=\"grey\">\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.\n" +
    "            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>\n" +
    "            <ul class=\"hotelpreferences\">\n" +
    "              <li class=\"icohp-fridge\"></li>\n" +
    "              <li class=\"icohp-microwave\"></li>\n" +
    "              <li class=\"icohp-washing\"></li>\n" +
    "              <li class=\"icohp-roomservice\"></li>\n" +
    "              <li class=\"icohp-safe\"></li>\n" +
    "              <li class=\"icohp-playground\"></li>\n" +
    "              <li class=\"icohp-conferenceroom\"></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"offset-2\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <div class=\"listitem2\">\n" +
    "          <a href=\"images/items/item5.jpg\" data-footer=\"A custom footer text\" data-title=\"A random title\" data-gallery=\"multiimages\" data-toggle=\"lightbox\"><img src=\"images/items/item5.jpg\" alt=\"\"/></a>\n" +
    "          <div class=\"liover\"></div>\n" +
    "          <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "          <a class=\"book-icon\" href=\"details.html\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-8 offset-0\">\n" +
    "        <div class=\"itemlabel3\">\n" +
    "          <div class=\"labelright\">\n" +
    "            <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "            <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "            <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "            <span class=\"green size18\"><b>$49.00</b></span><br/>\n" +
    "            <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "            <form action=\"details.html\">\n" +
    "             <button class=\"bookbtn mt1\" type=\"submit\">Book</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"labelleft2\">\n" +
    "            <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "            <p class=\"grey\">\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.\n" +
    "            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>\n" +
    "            <ul class=\"hotelpreferences\">\n" +
    "              <li class=\"icohp-internet\"></li>\n" +
    "              <li class=\"icohp-air\"></li>\n" +
    "              <li class=\"icohp-pool\"></li>\n" +
    "              <li class=\"icohp-childcare\"></li>\n" +
    "              <li class=\"icohp-fitness\"></li>\n" +
    "              <li class=\"icohp-breakfast\"></li>\n" +
    "              <li class=\"icohp-parking\"></li>\n" +
    "              <li class=\"icohp-pets\"></li>\n" +
    "              <li class=\"icohp-spa\"></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "    <div class=\"offset-2\">\n" +
    "      <div class=\"col-md-4 offset-0\">\n" +
    "        <div class=\"listitem2\">\n" +
    "          <a href=\"images/items/item2.jpg\" data-footer=\"A custom footer text\" data-title=\"A random title\" data-gallery=\"multiimages\" data-toggle=\"lightbox\"><img src=\"images/items/item2.jpg\" alt=\"\"/></a>\n" +
    "          <div class=\"liover\"></div>\n" +
    "          <a class=\"fav-icon\" href=\"#\"></a>\n" +
    "          <a class=\"book-icon\" href=\"details.html\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-8 offset-0\">\n" +
    "        <div class=\"itemlabel3\">\n" +
    "          <div class=\"labelright\">\n" +
    "            <img src=\"images/filter-rating-5.png\" width=\"60\" alt=\"\"/><br/><br/><br/>\n" +
    "            <img src=\"images/user-rating-5.png\" width=\"60\" alt=\"\"/><br/>\n" +
    "            <span class=\"size11 grey\">18 Reviews</span><br/><br/>\n" +
    "            <span class=\"green size18\"><b>$49.00</b></span><br/>\n" +
    "            <span class=\"size11 grey\">avg/night</span><br/><br/><br/>\n" +
    "            <form action=\"details.html\">\n" +
    "             <button class=\"bookbtn mt1\" type=\"submit\">Book</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"labelleft2\">\n" +
    "            <b>Mabely Grand Hotel</b><br/><br/><br/>\n" +
    "            <p class=\"grey\">\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.\n" +
    "            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>\n" +
    "            <ul class=\"hotelpreferences\">\n" +
    "              <li class=\"icohp-fridge\"></li>\n" +
    "              <li class=\"icohp-microwave\"></li>\n" +
    "              <li class=\"icohp-washing\"></li>\n" +
    "              <li class=\"icohp-roomservice\"></li>\n" +
    "              <li class=\"icohp-safe\"></li>\n" +
    "              <li class=\"icohp-playground\"></li>\n" +
    "              <li class=\"icohp-conferenceroom\"></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"offset-2\"><hr class=\"featurette-divider3\"></div>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- End of offset1-->\n" +
    "\n" +
    "  <div class=\"hpadding20\">\n" +
    "\n" +
    "    <ul class=\"pagination right paddingbtm20\">\n" +
    "      <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "      <li><a href=\"#\">1</a></li>\n" +
    "      <li><a href=\"#\">2</a></li>\n" +
    "      <li><a href=\"#\">3</a></li>\n" +
    "      <li><a href=\"#\">4</a></li>\n" +
    "      <li><a href=\"#\">5</a></li>\n" +
    "      <li><a href=\"#\">&raquo;</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- END OF LIST CONTENT-->"
  );

}]);
