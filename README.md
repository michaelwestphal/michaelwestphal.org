# `michaelwestphal.org`

**Problem:** The vast majority of the work I have done over the last roughly 14 years has been on proprietary systems. How do I begin to give a picture of my capabilities and interests?

**Solution:** Create an example project using the tools and techniques that I am interested in pursuing. This repository for my tiny personal website (online résumé) will give an iterative *glimpse* into my capabilities.

## Tools and Technologies Chosen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

* [Angular](https://angular.io)
* [Material Design](https://material.io/) via [Angular Material](https://material.angular.io/)
    * Please see the [Getting started](https://material.angular.io/guide/getting-started) guide. (Hint: Basically as easy as running `ng add @angular/material`)

## Iteration plan

A high-level iteration plan of the details I hope to achieve in this project.

- [ ] Create bare-bones markup of my résumé.
- [x] Add [Angular Material](https://material.angular.io/) for theming and components.
- [ ] Configure and push to [Firebase hosting](https://firebase.google.com/docs/hosting/)
- [ ] Automate push to Firebase hosting on push to `master`
- [ ] Add [NgRx](https://ngrx.io/)
    - [ ] Retrieve résumé content from a [`Store`](https://ngrx.io/guide/store)
    - [ ] Make résumé sections editable and utilize `ngrx` for state management  
        - [ ] "click to edit" components
        - [ ] "drag-n-drop" reordering of content
- [ ] Store résumé content in [Cloud Firestore](https://firebase.google.com/docs/firestore/)
    - [ ] Write security rule to make the data read-only
    - [ ] Populate initial `ngrx` store state from Firestore.
    - [ ] Keep json form of résumé for population of Firestore.
- [ ] Write tests for "complicated enough" components (utilize [Jest](https://jestjs.io/))

### Stretch Goals

- [ ] Create truly modifiable résumé experience.
    - [ ] Add basic authentication using Google Authentication provider in Firebase
    - [ ] Utilize Firebase function to clone résumé content unique to logged in user
    - [ ] Incorporate Firestore into the `ngrx` state changes (via [Effects](https://ngrx.io/guide/effects) I believe)
- [ ] Further "beautification" - Styling is not my strong suit.
    - [ ] Create "light/dark" theme toggle component/functionality. 
- [ ] End-to-end test suite with [Cypress](https://www.cypress.io/)
- [ ] Implement a search component which "live shows content related to the search and hides the rest" within my résumé.

## Acknowledgements

*This will be the location where I acknowledge "prior work" that 
will have inspired various solutions to the problems solved above.*
