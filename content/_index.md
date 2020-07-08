---
title: Hack Kosice
date: 2020-07-06T11:46:13+00:00
description: "This is meta description"
use_rows: true

homepage_banner:
  enable: true
  bgImage : "images/bg/background.png"
  subtitle : "250 Hackers. 24 Hours. 1 Spirit."
  title : "Hack Kosice 2020"
  content : "Come and build your wildest ideas in 24 hours, surrounded with great designers, <br/>entrepreneurs, ideators and free food."
  button:
    enable : true
    label : "Apply"
    link : "https://apply.hackkosice.com/"
homepage_features:
  enable : true
  title : "More than a hackathon!"
  featureItem:
    - icon : "ti-light-bulb" # here we use themify icon pack : https://themify.me/themify-icons
      title : "Lectures in Schools"
      content : "We teach tech-related topics in high-schools. Learn more."
    - icon : "ti-panel" # here we use themify icon pack : https://themify.me/themify-icons
      title : "Local Events"
      content : "We host seasonal MLH Localhost hackathons and workshops."
    - icon : "ti-headphone-alt" # here we use themify icon pack : https://themify.me/themify-icons
      title : "Podcast"
      content : "Listen to the Hack Kosice podcast on Spotify. We discuss tech and interview motivating entrepreneurs."
homepage_cta:
  title : "What is a hackathon?"
  content : "A hackathon is a focused 24-hour event where students come together in small teams to share ideas and build something new and exciting, alongside a whole bunch of like-minded people. You learn immensely with the help of mentors, interact with companies and have fun! Hackathons are very beginner friendly!"
  button:
    enable: true
    label : "Read more"
    link : "about"
homepage_portfolio:
  title : "More than a hackathon!"
  content : "Events, podcasts, lectures, startups..."
homepage_numbers:
  counterItem :
    - title : "Sponsors"
      count : "37"
      unit : "+"
    - title : "Events"
      count : "15"
      unit : ""
    - title : "Countries"
      count : "39"
      unit : ""
    - title : "Students"
      count : "1350"
      unit : ""
sponsors:
  title : "Our Sponsors"
  content : "A hackathon can't happen without sponsors. Currently, these companies Sponsor us."
  logos:
    - logo : "images/about/02.png"
    - logo : "images/about/03.png"
    - logo : "images/about/04.png"
    - logo : "images/about/05.png"
    - logo : "images/about/06.png"
    - logo : "images/about/07.png"
---

{{< row type="banner" config="homepage_banner" / >}}

{{< row type="bannerFeature" config="homepage_features" / >}}

{{< row type="cta" config="homepage_cta" / >}}

{{< row type="project" config="homepage_portfolio" / >}}

{{< row type="counter" config="homepage_numbers" / >}}

{{< row type="clients" config="sponsors" / >}}
