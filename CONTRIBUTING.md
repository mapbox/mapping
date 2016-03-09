

## Structure

### Categories

There are several folders in the root, these are categories.

To be a category, the folder must have:

* a lowercase folder name, replacing spaces with dashes
* an `index.md` file, with the following front matter keys:
  - title:
  - layout: category
  - order: (number to specify order)
* a `_posts/` folder filled with post files

```
becoming-a-power-mapper/
  _posts/
  index.md
```

### Posts

Posts are files that live in a category's `_post/` folder. Post must have:

* a file name following: `0000-01-01-title.md` pattern
* the following front matter keys:
  - title:

You can change the date in the file name to specify order.

```
becoming-a-power-mapper/
  _posts/
    0000-01-01-title.md
  index.md
```

### Category layout

Jekyll will change the layout of the category based on the number of posts the category has an if you've enabled sections.

* If a category only has 1 post, then when you visit the category page, you'll find the content for that post printed out.
* If a category has more than 1 post, then when you visit the category page, you'll find a list of posts with links to visit each post.
* If a category has more than 1 post and uses sections, then when you visit the category page, you'll find a list of posts sorted by section. See below for instructions on how to set that up:

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

1. Create a folder with the language abbreviation. For example, `fr/` for French `de/` for German.
2. Update `_config.yml` to add the new language to the `default scopes`. Follow the pattern of the English and Spanish scopes.
3. Update `swap.yml` and add a `fr:` to each dataset with the translation. If you don't add a translation, it will appear in English.

Follow the patterns mentioned above to start adding categories and posts.
