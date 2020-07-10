---
title: Simple sections
date: 2020-07-06T11:46:13+00:00
bgImage: "images/bg/background.jpg"
menu:
  main:
    parent: examples
use_sections: true

counter1:
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
---

{{< section >}}

# A basic section

This is a `basic` section and you can use [Markdown](https://www.markdownguide.org/basic-syntax/) here.

{{< /section >}}

{{< section type="counter" config="counter1" / >}}
