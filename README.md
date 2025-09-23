# EDDI User Conference website

This repo is to hold the code for the website and related materials, [published at](https://eddi-conferences.github.io).

Pages are (mostly) written in Markdown. The site uses Jekyll, and is mostly data driven.

The site is built from the main branch, and undergoes a range of checks before deploying. This will catch all sorts of potential errors, it also uses Prettier to enforce style on files, so please check the GitHub actions so see that it has run correctly.

If you are updating via a commit from the command line, use this before you commit (you will thank us!):

```
npx prettier . --check
```

## Updating data drive pages

The past conferences pages are driven by adding a new entry in \_data/conferences.yml

```yaml
- title: EDDI 2024
  name: eddi-2024
  hostimage: "/assets/img/host-logos/fhgr.png"
  hosts: "Swiss Institute for Information Science, at the University of Applied Sciences of the Grisons (FHGR)"
  venue: "University of Applied Sciences of the Grisons, Chur, Switzerland"
  dates: "2 6 December 2024"
  delegates: "89"
  organisations: "44"
  presentations: "58"
  countries: "21"
  program: "/assets/pdf/eddi-2024-program.pdf"
  zenodo: https://zenodo.org/communities/eddi2024
```

and adding a new page in \_conferences (rename sequentially, copy over previous contents and amend text and references to hostimage etc

## Updating bibliography

Create a new file in /news, based on the last one, called announcement_x.md, (x) should be an increment from the previous file, change the date and add your text.

## Updating bibliography

Zenodo entries can be grabbed by issuing the following command

```

curl -H "Accept: application/x-bibtex"  "https://zenodo.org/api/records?communities=xxxxx"  > "eddixxxx.bib"

```

It will return in the following format:

```
@misc{gregory_2024_14825677,
  author       = {Gregory, Arofan},
  title        = {DDI-CDI Overview},
  month        = dec,
  year         = 2024,
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.14825677},
  url          = {https://doi.org/10.5281/zenodo.14825677},
}

```

Add a line to each record to indicate whether it is a Presentation, Poster, Tutorial etc

```
 abbr =  {Presentation},
```

and append to \_bibliography/papers.bib.
