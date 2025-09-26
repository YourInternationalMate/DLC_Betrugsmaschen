# DLC Betrugsmaschen

Eine moderne, responsive One-Page-Website in React zur Aufklärung und zum Schutz vor Betrugsmaschen.

![Website Screenshot](https://github.com/user-attachments/assets/bd522765-4358-4d00-a50e-b7155c269cde)

## 🚀 Features

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Moderne UI**: Professionelles Design mit Gradient-Hintergründen
- **Smooth Navigation**: Scroll-Navigation zu verschiedenen Sektionen
- **TypeScript**: Typsichere Entwicklung
- **Vite**: Schneller Build-Prozess und Hot Module Replacement

## 📋 Sektionen

- **Hero Section**: Willkommen und Call-to-Action
- **Über uns**: Information über die Mission und Werte
- **Services**: Drei Hauptbereiche (Online-, Telefon-, Investment-Betrug)
- **Kontakt**: Kontaktinformationen
- **Footer**: Copyright-Informationen

## 🛠️ Installation und Setup

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

1. Repository klonen:
```bash
git clone https://github.com/YourInternationalMate/DLC_Betrugsmaschen.git
cd DLC_Betrugsmaschen
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

Die Website ist dann unter `http://localhost:5173` erreichbar.

## 📦 Build

Für die Produktion builden:
```bash
npm run build
```

Build-Vorschau lokal anzeigen:
```bash
npm run preview
```

## 🏗️ Projektstruktur

```
DLC_Betrugsmaschen/
├── public/                 # Statische Assets
├── src/
│   ├── App.tsx            # Hauptkomponente
│   ├── App.css            # Styles für die Hauptkomponente
│   ├── index.css          # Globale Styles
│   └── main.tsx           # Entry Point
├── index.html             # HTML Template
├── package.json           # Abhängigkeiten und Scripts
├── tsconfig.json          # TypeScript Konfiguration
├── vite.config.ts         # Vite Konfiguration
└── README.md              # Diese Datei
```

## 🎨 Anpassungen

Die Website kann einfach angepasst werden:

- **Inhalte**: Text und Informationen in `src/App.tsx`
- **Styling**: CSS-Styles in `src/App.css`
- **Farben**: CSS-Variablen in `src/index.css`
- **Kontaktdaten**: Kontaktinformationen in der Kontakt-Sektion

## 🚀 Deployment

Die Website kann auf verschiedenen Plattformen deployed werden:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag & Drop des `dist/` Ordners
- **GitHub Pages**: Mit GitHub Actions

## 📱 Browser-Unterstützung

- Chrome (aktuell)
- Firefox (aktuell)
- Safari (aktuell)
- Edge (aktuell)

## 🤝 Beitragen

1. Fork des Repositories erstellen
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt steht unter der ISC Lizenz. Siehe die `package.json` Datei für Details.