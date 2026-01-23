# DLC_Betrugsmaschen

Willkommen im **DLC_Betrugsmaschen** Repository!

## Inhaltsverzeichnis

- [Überblick](#überblick)
- [Erste Schritte](#erste-schritte)
  - [Installation](#installation)
  - [Entwicklungsumgebung](#entwicklungsumgebung)

---

## Überblick

Das DLC_Betrugsmaschen-Projekt zielt darauf ab, eine interaktive Webplattform bereitzustellen. Das Ziel dieser Plattform ist es Menschen zu befähigen, digitale Betrugsmaschen zu erkennen und sich davor zu schützen.

## Erste Schritte

### Installation

1. **Repository klonen**:
   ```bash
   git clone https://github.com/YourInternationalMate/DLC_Betrugsmaschen.git
   cd DLC_Betrugsmaschen
   ```

2. **Abhängigkeiten installieren**:
   Stellen Sie sicher, dass [Node.js](https://nodejs.org/) installiert ist, und führen Sie dann folgenden Befehl aus:
   ```bash
   npm install
   ```

### Entwicklungsumgebung

Um den Entwicklungsserver zu starten:
```bash
npm start
```

Hierdurch wird die Anwendung unter `http://localhost:3000` oder einem anderen verfügbaren Port gestartet.

### Vorschau & Build

- Um einen Produktions-Build zu erstellen:
  ```bash
  npm run build
  ```

- Um den Produktions-Build lokal bereitzustellen:
  Installieren Sie `serve`, falls nicht vorhanden:
  ```bash
  npm install -g serve
  ```
  Dann ausführen:
  ```bash
  serve -s build
  ```
