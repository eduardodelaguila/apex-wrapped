# Apex Charts Wrapped

> This repo was bootstrapped using [TSDX](<[https://link](https://github.com/formium/tsdx)>).

This repo is a POC to try to have a custom wrapper where certain options of the charts are predefined.

## Commands

The library is scaffolded inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

```bash
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

### Playground

To run the example use:

```bash
cd example
yarn # To install dependencies
yarn start
```

### Date formatting

DayJS has been added to support date formatting and localization, all format supported can be found [here](https://day.js.org/docs/en/display/format) and localization support can be found [here](<[https://link](https://day.js.org/docs/en/i18n/i18n)>)

## WIP

The features missing in the POC are:

- More types of charts
- Docs and dynamic examples on storybook
