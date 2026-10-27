# Personal Website

## Updating portfolio content

Edit [`src/data.txt`](./src/data.txt) to update the profile, about text, skills,
education, experience, certificates, contact details, navigation, and social
links. The file uses JSON syntax even though it has a `.txt` extension:

- Keep property names and text values in double quotes.
- Separate entries in lists with commas.
- New about-page skills will use a generic icon unless an icon is added for
  them in `src/components/About.jsx`.

The data is included in the built site, so run `npm run dev` to preview edits
and rebuild/redeploy the site to publish them.

## Development

- `npm run dev` starts the development server.
- `npm run lint` checks the project with ESLint.
- `npm run build` creates the production build.
