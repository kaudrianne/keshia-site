---
title: Where Did Four Years Go?
summary: An interactive data story built from 7,000+ events in my own Google Calendar, from Northwestern classes to everything in between.
kind: personal
status: shipped
year: "2026"
tools: [R, ggplot2, ggiraph, Quarto, Python]
featured: false
order: 3
stats:
  - { value: "7,085", label: "calendar events" }
  - { value: "8,784", label: "hours scheduled" }
  - { value: "49", label: "courses" }
---

I've used Google Calendar religiously since before college: classes, club meetings, lunches, flights home to Jakarta. So I exported four calendars and asked what four years of them actually say about how I spent my time. Hover over any chart to see the details.

## My undergrad, as a transcript

<figure class="widget">
  <iframe src="/widgets/calendar/transcript.html" style="aspect-ratio: 7.2 / 5.6" loading="lazy" title="Courses per quarter, sized by lecture hours and colored by discipline"></iframe>
  <figcaption>49 courses over 12 quarters. Each segment is one course, sized by hours in lecture.</figcaption>
</figure>

Cognitive Science is famously a mix, and this is what my version of the mix looked like. Computing and data took about a third of my lecture time, with society and business, and mind and language, close behind. The heaviest quarter was Spring 2023: four courses and 142 hours in class.

## The classes that cost the most outside the classroom

<figure class="widget">
  <iframe src="/widgets/calendar/homework-per-lecture.html" style="aspect-ratio: 7.2 / 5" loading="lazy" title="Homework hours per lecture hour by department"></iframe>
  <figcaption>Homework and reading blocks matched to their department, divided by lecture hours.</figcaption>
</figure>

Lecture time says nothing about effort. Math cost me **2.1 hours of homework for every hour of lecture**, followed by Linguistics and Psychology at about 1.5, even though Math ranks only 13th by lecture time. My business minor sits near the bottom at 0.5. The departments that took the most time and the ones that took the most effort turned out to be different lists.

## Where it happened

<figure class="widget widget-narrow">
  <iframe src="/widgets/calendar/campus.html" style="aspect-ratio: 6.4 / 9.6" loading="lazy" title="Northwestern campus buildings shaded by hours spent in each"></iframe>
  <figcaption>Building outlines traced from the campus map, shaded by hours. Gray names are landmarks where I had nothing scheduled. * = approximate location.</figcaption>
</figure>

Campus split cleanly into where I was taught and where I worked. Tech held 24% of all my class hours. But more than half of everything I did on campus *outside* class (club meetings, study blocks, startup work at the Garage) happened in three buildings with almost no lectures: the University Library, Norris and the Garage.

## The calendar changed its job

<figure class="widget">
  <iframe src="/widgets/calendar/diary-to-forecast.html" style="aspect-ratio: 7.2 / 3.4" loading="lazy" title="Share of events logged after the fact versus planned ahead, by academic year"></iframe>
  <figcaption>Google records when each event was created. The gap between creating an event and the event itself shows how I used the calendar.</figcaption>
</figure>

This was the finding I didn't expect. Freshman year, **46% of my one-off events were created after they had already started**: I was using the calendar as a diary, writing down what I'd done. By senior year that dropped to 13%, and events planned a week or more ahead tripled, from 12% to 38%. Same app, opposite job.

The switch happened in a single quarter, and it reframed everything else. Lunch, dinner and shower blocks peaked during my busiest season, then nearly vanished that fall. I didn't stop because I got too busy. I stopped once the calendar became a planning tool instead of a log.

## A few more things the data said

- **Clubs didn't cost me grades; they cost me free time.** Quarters with more club hours were also heavier academic quarters (r = 0.62). What gave way was social time (r = −0.6).
- **Wednesday was my most fragmented day**: 6.6 events across 3.2 different kinds of activity on average, against 3.4 events on Sundays.
- **Church moved with community, not workload.** Faith events barely tracked how busy school was (r = −0.08), but tracked meals with people (r = 0.45).

## How I built it

- **Data:** four Google Calendar exports (.ics). A short Python step expands repeating events. Everything else is R.
- **Cleaning:** keyword rules sort 3,750 distinct event titles into categories, courses and buildings. A hand-built table of where I was on each date converts every event to local time (Jakarta, Evanston, or a trip).
- **Analysis and charts:** tidyverse and ggplot2, made interactive with ggiraph, published as a Quarto book with 13 chapters. These four charts are exported from it.
- **Privacy:** people appear only as initials in the full version, and the charts here show no event titles.
