# Alisa Korsak — portfolio

Single-page portfolio built with React, TypeScript and Vite from Figma frame `6388:3` in file `HjKbcLN4Ith22OYZyu5G1R`.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm run preview
```

Production files are generated in `dist/`. The application uses local fonts and local graphics exported from the supplied Figma file; it does not depend on temporary Figma asset URLs.

The layout scales proportionally from the 1200px Figma reference to the available viewport width, including typography, graphics and spacing. The sidebar stays sticky and fills the viewport height independently of the scale. Below 768px the canvas retains a minimum width of 768px with horizontal scrolling until the separate mobile design is supplied.

The sidebar stays on screen and fills the viewport height. At the top of the page, the first project row and the sidebar end 10 screen pixels above the viewport bottom; the second row starts below the fold. Project previews animate on hover and keyboard focus, with Learn More replacing and following the mouse cursor and no project-page navigation yet. Navigation scrolls to page sections, CONTACT opens email, the footer email copies to clipboard with a status message, and Telegram opens the supplied profile. Clipboard copying requires HTTPS or localhost. The footer clock follows Europe/Lisbon time, updates automatically, and accounts for daylight saving time.

PP Telegraf Ultrabold and Regular are supplied by the project owner. Section numbers use Regular; headings use Ultrabold. Roboto Mono uses Light for the former Regular text, with Regular for the labels that previously used Medium. Roboto Mono is bundled with its license in `public/fonts/`.
