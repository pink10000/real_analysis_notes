# MATH 140 A/B - Real Analysis Notes

Welcome! These are my course notes for Real Analysis (MATH 140A and 140B), primarily following Walter Rudin's "Principles of Mathematical Analysis", 3rd Edition.

Use the navigation below, the file explorer sidebar (if available), or the search bar to find specific topics.

## Content Navigation

### By Lecture Set

* [[140A_lectures/|MATH 140A Lectures]]
* [[140B_lectures/|MATH 140B Lectures]]

### By Chapter (Rudin)

* [[ch1/|Chapter 1: The Real and Complex Number Systems]]
* [[ch2/|Chapter 2: Basic Topology]]
* [[ch3/|Chapter 3: Numerical Sequences and Series]]
* [[ch4/|Chapter 4: Continuity]]
* [[ch5/|Chapter 5: Differentiation]]

# System Overview: Astro Site + Quartz Notes

This setup integrates a collection of notes managed with Quartz into a subdirectory (`/140a/`) of a main website built with Astro. Both parts are deployed automatically via GitHub Actions to GitHub Pages.

## Repositories

1.  **Notes Repository (`MATH 140A` / `real_analysis_notes`)**
    * Contains the source Markdown notes (`.md` files) organized in folders (`140A_lectures/`, `ch1/`, etc.) located in the repository **root**.
    * Includes a crucial `index.md` file in the **root** to serve as the landing page content for the notes section.
    * Contains the `quartz` subfolder with the Quartz library files, `package.json`, and configuration.
    * **`quartz/quartz.config.ts`:**
        * Configured with `baseUrl: "140a"` so generated links work correctly under the `/140a/` path.
        * Uses `ignorePatterns` to prevent Quartz from processing non-content files/folders found in the root (like `.git`, `.github`, `README.md`, the `quartz` folder itself, etc.).
    * **`quartz/content/` Directory:** Contains **symbolic links** (created using `ln -s ../<folder> <folder>` etc.) pointing to the actual notes folders and the `index.md` file located in the repository root (`../`). These symlinks are committed to Git.
    * **GitHub Actions (`.github/workflows/deploy.yml`):**
        * Triggers on push to the `main` branch.
        * Checks out code, sets up Node, installs/builds Quartz (primarily verifying build integrity).
        * Uses `peter-evans/repository-dispatch` to send a `deploy-notes` event trigger to the Astro repository, authenticating with a `DISPATCH_PAT` secret (Personal Access Token with `repo` scope).

2.  **Astro Site Repository (`pink10000/pink10000.github.io`)**
    * Contains the source code for the main Astro website.
    * Includes a `.nojekyll` file in the root to prevent default GitHub Pages Jekyll processing.
    * **GitHub Pages Settings:** Configured to deploy using the **`GitHub Actions`** source.
    * **GitHub Actions (`.github/workflows/deploy-astro.yml` or similar):**
        * Triggers on push to `main` OR on receiving the `repository_dispatch` event (type `deploy-notes`) from the Notes Repository.
        * **Build Job:**
            1.  Checks out the Astro site code.
            2.  Checks out the Notes repository code into a subfolder (e.g., `./external/math140a`), using a `NOTES_DEPLOY_KEY` secret (SSH private key for a Deploy Key setup on the Notes repo). This checkout includes the symlinks within `external/math140a/quartz/content/`.
            3.  Sets up Node.js.
            4.  **Builds Quartz:** Runs `npm install` and `npx quartz build` within the `./external/math140a/quartz` directory. Quartz follows the checked-out symlinks to find the content in `./external/math140a/` and builds the static notes site into `./external/math140a/quartz/public/`.
            5.  **Builds Astro:** Installs Astro dependencies and runs `astro build`, generating the main site into `./dist`.
            6.  **Combines Sites:** Creates a `./dist/140a` directory and copies the contents of the built Quartz site (`./external/math140a/quartz/public/*`) into it.
            7.  **Uploads Artifact:** Uses `actions/upload-pages-artifact` to upload the entire `./dist` folder (now containing both the Astro site files and the `/140a` notes subdirectory) as the `github-pages` artifact.
        * **Deploy Job:**
            1.  Uses `actions/deploy-pages` to take the `github-pages` artifact uploaded by the `build` job and deploy it to the GitHub Pages environment.

## Local Preview (Notes Repository)

1.  Navigate to the repository root locally.
2.  Ensure the symlinks exist inside `quartz/content/` pointing to `../<folder>`.
3.  Navigate into the `quartz` directory (`cd quartz`).
4.  Run `npm install` (if needed).
5.  Run `npx quartz create` (or `npx quartz build --serve`).
6.  Open `http://localhost:8080` in a browser.
7.  Quartz uses the symlinks to find content in the root, and hot-reloading works when editing the original notes files.

## Result

* The main Astro website is available at `https://pink10000.github.io/`.
* The published Quartz notes are available under `https://pink10000.github.io/140a/`.
* Updates pushed to the `main` branch of the Notes repository automatically trigger a rebuild and deployment of both the notes and the main Astro site.


---

*Last updated: {{ date }}*