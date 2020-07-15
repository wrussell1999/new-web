---
title: Test page
bgImage: "images/bg/background.jpg"
menu:
  main:
    parent: examples
    weight: 100
use_sections: true

nase_cenove_baliky:
  title : "Pricing packages that we offer"
  content : "Some description"
  pricingTable:
    - name : "Basic package 😀"
      price : "One big smile"
      duration : "Yearly"
      serviceList:
        - listItem : "We will like you"
      button:
        label: "I like this plan!"
        link : "http://hackkosice.com/"
    - name : "Standard"
      price : "$49.99"
      duration : "Yearly"
      serviceList:
        - listItem : "50 gb Hosting"
        - listItem : "Business Analysis"
        - listItem : "24 Hours Support"
        - listItem : "Customer Management"
      button:
        label: "Choose plan"
        link : "#"
---

{{< section >}}

# A basic section

This is a `basic` section and you can use [Markdown](https://www.markdownguide.org/basic-syntax/) here.

{{< /section >}}

{{< section type="pricing" config="nase_cenove_baliky" / >}}
