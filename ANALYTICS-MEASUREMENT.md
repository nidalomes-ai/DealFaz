# DINAVO – Reichweitenmessung deaktiviert

Stand: 01.09.2026

Die aktuelle DINAVO-Beta lädt kein eigenes Analytics-, Werbe- oder Marketing-Skript. Das frühere Supabase-Pixel wurde aus dem Laufzeitcode entfernt und wird durch die Content-Security-Policy nicht zugelassen.

Damit werden von DINAVO aktuell keine Pageviews, Marktplatzklicks, UTM-Parameter, Produktnamen, Preisangaben oder dauerhaften Besucherkennungen an ein eigenes Messsystem gesendet. Technisch erforderliche Hosting- und Sicherheitsprotokolle von Cloudflare sind davon getrennt.

Die Datei `analytics.js` bleibt als leere Kompatibilitäts-URL vorhanden, wird von der Seite aber nicht geladen. Eine spätere Messung darf erst nach technischer und datenschutzrechtlicher Prüfung sowie einer Anpassung der öffentlichen Datenschutzhinweise aktiviert werden.

Aus früheren aggregierten Requests dürfen keine eindeutigen Besucher oder verifizierten Menschen abgeleitet werden.
