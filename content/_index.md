---
title: Hack Kosice
date: 2020-07-06T11:46:13+00:00
description: "This is meta description"
use_sections: true

homepage_banner:
  bgImage: images/bg/background-triangle.png
  subtitle: "250 Hackers. 24 Hours. 1 Spirit."
  title : "Hack Kosice 2020"
  content : "Come and build your wildest ideas in 24 hours, surrounded with great designers, <br/>entrepreneurs, ideators and free food."
  button:
    enable : true
    label : "Apply"
    link : "https://apply.hackkosice.com/"
homepage_features:
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
  background: images/bg/background2.png
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

general_sponsors:
  title : "General Partner"
  color: white
  sponsors :
    - id : upjs

public_sponsors:
  title : "Public Partners"
  color: white
  sponsors :
    - id : vucke
    - id : kosice

platinum_sponsors:
  title : "Platinum Sponsors"
  color: light-grey
  sponsors :
    - id : vse

gold_sponsors:
  title : "Gold Sponsors"
  color: gold
  sponsors :
    - id : tatra_banka
    - id : vsl
    - id : telekom
    - id : visma
    - id : siemens

silver_sponsors:
  title : "Silver Sponsors"
  color: silver
  sponsors :
    - id : software_ag
    - id : global_logic
    - id : storyous
    - id : thermo_fisher

bronze_sponsors:
  title : "Bronze Sponsors"
  color: orange
  sponsors :
    - id : 46elks
    - id : google
    - id : matsuko

---

{{< section type="banner" config="homepage_banner" / >}}

{{< section type="bannerFeature" config="homepage_features" / >}}

{{< section type="cta" config="homepage_cta" / >}}

{{< section type="project" config="homepage_portfolio" / >}}

{{< section type="counter" config="homepage_numbers" / >}}

{{< section type="basic" style="padding-bottom:0px">}}
# Our Sponsors
A hackathon can't happen without sponsors. Currently, these companies Sponsor us.
{{< /section >}}

{{< section type="clients" config="general_sponsors" / >}}
{{< section type="clients" config="public_sponsors" / >}}
{{< section type="clients" config="platinum_sponsors" / >}}
{{< section type="clients" config="gold_sponsors" / >}}
{{< section type="clients" config="silver_sponsors" / >}}
{{< section type="clients" config="bronze_sponsors" / >}}
{{< section type="clients" config="medial_sponsors" / >}}
{{< section type="clients" config="partners_sponsors" / >}}