
The mapping guides are hosted on the `mb-pages` branch of this repo only. Please make pull requests from `mb-pages`.

Please read through this contributing guide to learn how /mapping is built.

## Structure

### Categories

There are several folders in the root, these are categories.

```
becoming-a-power-mapper/
getting-started
mapping-common-features/
mapping-with-josm/
osm-data-model/
sources/
```

To be a category, the folder must have:

* a lowercase name, replacing spaces with dashes
* an `index.md` file, with the following front matter keys:
  - title:
  - layout: category
  - order: (number to specify order)
* a `_posts/` folder containing post files

```
becoming-a-power-mapper/
  _posts/
  index.md
```

### Posts

Posts are files that live in a category's `_post/` folder. Posts must have:

* a lowecase file name following: `0000-01-01-title.md` pattern.
* the following front matter:
  - title:

You can change the date in the file name to specify order.

```
becoming-a-power-mapper/
  _posts/
    0000-01-01-title.md
    0000-01-02-another-title.md
  index.md
```

To keep us consistent please follow these guidelines:

* Use headlines for hierarchy. Always start at h2 (`##`) and use headlines in order. h2 and h3 will automatically appear in the table of contents on the right of the page.
* All images should have alternative text to describe the image.
* Link text should be descriptive. Avoid: Click [here](#) for more information.
* Optimize images to keep our pages fast: [ImageOptim](https://imageoptim.com/mac), https://compressor.io/


### Category layout

Jekyll will automatically change the layout of the category based on the number of posts the category has and if you've enabled sections (more about sections below).

* If a category only has 1 post, then when you visit the category page, you'll find the content for that post printed out.
* If a category has more than 1 post, then when you visit the category page, you'll find a list of posts with links to visit each post.
* If a category has more than 1 post and uses sections, then when you visit the category page, you'll find a list of posts sorted by section. (See below for instructions on how to set sections up.)

### Grouping posts into sections - enabling sections

You can group posts in a category into section, by:

1. Creating a subfolders in `_posts/` and placing each post into the subfolder:
```
becoming-a-power-mapper/
  _posts/
    josm/
      0000-01-01-title.md
      0000-01-02-title.md
    mapping/
      0000-01-01-title.md
      0000-01-02-title.md
    reference/
      0000-01-01-title.md
      0000-01-02-title.md
```
2. Adding a list of the folder names in the category's front matter, under a sections key (the folder names must match, but these aren't case sensitive):
```
sections:
- Mapping
- JSOM
- Reference
```

Once you do both steps, Jekyll will automatically group the list of blog posts for that category and display them by section.

### Spanish

The guides are also offered in Spanish. All files are found under the `es/` folder. Think of the folder as a clone of the English version. Inside the `es/` folder are the category folders that follow the same patterns as the files and folders of the English version.

### Adding another language

1. Create a folder with the language abbreviation. For example, `fr/` for French and `de/` for German.
2. Update `_config.yml` to add the new language to the `defaults`. Follow the pattern of the English and Spanish scopes.
3. Update `translations.yml` and add to each set of words the new translation using the language abbreviation from step 1. If you don't add a translation, it will appear in English.
4. Add the new language abbreviation and name of language to `languages` in `_config.yml`.

Follow the patterns mentioned above in creating categories and posts.
