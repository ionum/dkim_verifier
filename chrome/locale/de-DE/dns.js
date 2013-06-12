var EXPORTED_SYMBOLS = ["DNS_STRINGS"];
var DNS_STRINGS = new Object();
DNS_STRINGS.TOO_MANY_HOPS = "Zu viele Server-Spr�nge.";
DNS_STRINGS.CONNECTION_REFUSED = function(server) { return "DNS Server " + server + " verweigert eine TCP Verbindung."; };
DNS_STRINGS.TIMED_OUT = function(server) { return "DNS Server " + server + " hat Zeitlimit f�r eine TCP Verbindung �berschritten."; };
DNS_STRINGS.SERVER_ERROR = function(server) { return "Fehler bei der Verbindung zum DNS-Server " + server + "."; };
DNS_STRINGS.INCOMPLETE_RESPONSE = function(server) { return "Unvollst�ndige Antwort von " + server + "."; };
