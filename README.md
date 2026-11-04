# AI Workshop Docs

The documentation site for the workshop "Build your own application with BDD and ChatGPT". Participants use behaviour-driven development, with ChatGPT as a coding assistant, to build a small application step by step. Most of the workshop content is in Dutch.

## Main technologies

- Docusaurus 2 (beta) with React for the static documentation site
- GitHub Actions to build and deploy the site
- Workshop tracks for Java (Maven, Cucumber, Micronaut) and Python

## Structure

- docs/java: the Java track. It has an introduction, the setup steps and three assignments, with screenshots.
- docs/python: the Python track, with the same layout as the Java track.
- src: the homepage, which has a start button for each track, and custom styling.
- static/img: logos, the favicon and other images.
- .github/workflows: workflows that build the site and deploy it.

## Status

This material was written for a workshop held in September 2023 and is no longer maintained.