# FitPath

1. Extract the ZIP and open the FitPath folder in VS Code.
2. Use Node.js 20 or newer. In the VS Code terminal, run:
   ```bash
   npm ci
   npm start
   ```
3. Open http://localhost:5173. Keep the terminal running.

The archive also contains the built site in `dist/`. You can serve that directory
using VS Code Live Server without installing npm dependencies.

All routes mount through React. The home page is implemented in JSX in
`src/home.jsx`. Existing route templates and interactions are preserved through
a compatibility component in the same file. Editable HTML, CSS, application
logic, and assets are in `src/legacy/`. Bootstrap utilities complement the
existing styles. Run `npm run build` after editing.

Nova responses, authentication, and bookings are prototype flows. Voice support
depends on the browser. Existing remote images and Google Maps require Internet
access. Local data is stored separately for each browser origin.
