# Deploying viraj412.github.io

Four steps. Takes about 10 minutes.

---

## Step 1 — Create the GitHub repo

1. Go to https://github.com/new
2. Repository name: **viraj412.github.io** (must be exact)
3. Set it to **Public**
4. Don't add a README or .gitignore
5. Click **Create repository**

---

## Step 2 — Push this folder to GitHub

Open Terminal, navigate to where you saved this folder, and run:

```bash
cd path/to/viraj412.github.io

git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/viraj412/viraj412.github.io.git
git push -u origin main
```

---

## Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click Save

Your site will be live at **https://viraj412.github.io** within ~2 minutes.

---

## Step 4 — Add your resume

Drop your resume PDF into the `docs/` folder, name it `resume.pdf`, and push:

```bash
git add docs/resume.pdf
git commit -m "Add resume"
git push
```

---

## Writing a new blog post

Create a file in `_posts/` named: `YYYY-MM-DD-your-post-title.md`

Example — `_posts/2026-05-10-on-running-and-problem-solving.md`:

```markdown
---
layout: post
title: "On Running and Problem Solving"
date: 2026-05-10
---

Your post content here, written in Markdown.
```

Commit and push — it appears on the site automatically.

---

## Adding a profile photo

Replace the initials avatar with a real photo:

1. Add your photo to `assets/` — e.g. `assets/viraj.jpg`
2. In `index.html`, replace:
   ```html
   <div class="hero-avatar-placeholder">VR</div>
   ```
   with:
   ```html
   <img src="/assets/viraj.jpg" alt="Viraj Ravi" class="hero-avatar" />
   ```

---

## Running locally (optional)

If you want to preview changes before pushing:

```bash
# Install Ruby + Jekyll (one-time)
gem install bundler jekyll

# In the site folder
bundle install
bundle exec jekyll serve

# Open http://localhost:4000
```
