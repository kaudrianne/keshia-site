# keshia-site

Personal website built with [Astro](https://astro.build). Free to host, and most updates are one text file.

## Run it on your Mac

```bash
npm install        # first time only
npm run dev        # opens at http://localhost:4321, updates live as you edit
```

## Where everything lives

| To change… | Edit this |
|---|---|
| Email, LinkedIn, tagline | `src/data/site.ts` |
| Work timeline (the transit map) | `src/data/journey.ts` |
| Food numbers and favorite spots | `src/data/food.ts` |
| A project / case study | `src/content/projects/<name>.md` |
| Street photos | `src/content/photos/` + `photos.json` |
| Brew log | `src/content/brews.json` |
| Colors and fonts | top of `src/styles/global.css` |
| Résumé PDF | replace `public/Keshia_Gunawan_Resume.pdf` (keep the same name) |

Search the project for `TODO` to find every spot waiting for your words.

## Common updates

**Add an espresso shot.** Copy the last block in `src/content/brews.json`, paste it at the end, give it the next `id` (`"09"`, `"10"`…), and edit it. `dose_g` is the ground coffee in, `yield_g` is the espresso out; the site works out the ratio. Leave out any field you didn't measure (only `roastery`, `dose_g` and `yield_g` are required).

**Add a photo.** Drop the image (JPG straight from your phone or camera is fine, Astro shrinks it) into `src/content/photos/`, then add an entry to `photos.json`:

```json
{ "id": "soho-rain", "image": "./soho-rain.jpg", "caption": "Rain on Spring St", "place": "New York", "year": "2026" }
```

The first photo in the list is the one on the home page. Delete the placeholder images and entries when you add your own.

**Add a project.** Copy any file in `src/content/projects/`, rename it (the file name becomes the URL), and edit the top section. Set `featured: true` to show it on the home page (keep it to 3), and `status: building` for works in progress.

**Add a Kopee update.** Open `kopee.md` and add a new `###` heading in the Build log.

## Embedding the Google Calendar charts

Export each chart from R as its own small file:

```r
htmlwidgets::saveWidget(my_plot, "chart1.html", selfcontained = TRUE)
```

Put the file in `public/widgets/calendar/`, then in `calendar-story.md` point the iframe at it:

```html
<iframe src="/widgets/calendar/chart1.html" height="400" loading="lazy" title="Describe the chart"></iframe>
```

Adjust `height` until the chart fits without a scrollbar. Delete `example.html` when you're done.

## Put it online (free)

1. Create a GitHub repository and upload this folder (GitHub Desktop is the easiest way).
2. Sign up at [netlify.com](https://netlify.com), choose **Add new site → Import from Git**, and pick the repository.
3. Netlify detects Astro automatically (build command `npm run build`, publish folder `dist`). Click Deploy.

After that, every time you save changes to GitHub, the site rebuilds on its own in about a minute.

**Custom domain (optional, ~$10–15/year):** buy one (e.g. at Cloudflare or Namecheap), add it in Netlify under Domain settings, and update `site` in `astro.config.mjs`.

## The loader

The camera-aperture animation (`src/components/ApertureLoader.astro`) plays once per visit, not on every page, and is skipped for anyone with "reduce motion" turned on.
