<section data-background="images/bg.jpg"><!--
Background attribution:

The background for this page was derived from an original image
(http://www.flickr.com/photos/sackerman519/4251310991/)
by Sarah Ackerman (http://www.flickr.com/photos/sackerman519/) and is used
under her Some Rights Reserved licence
(http://creativecommons.org/licenses/by/2.0/).
-->
<div class="title-page-box">
  <h1>
    AORRA
    <small>Automating Reef Report Cards<small>
  </h1>
</div>
<aside class="notes" data-markdown="">
My name is Tim Dettrick, and I'm a software engineer on the AORRA project.

The goal of the AORRA project is to improve the delivery of annual reports
relating to the health of the Great Barrier Reef. By automating repetitive
manual steps required for their creation, we hope to reduce the delays and
improve their quality.
</aside>
</section>

---

## What is a “Reef Report Card”?

<p style="font-size: 10em">?</p>

Note:
So, a quick background on what these reef report cards are...

Water pollution is currently a threat to the Great Barrier Reef. It has a
catchment area of more than four hundred thousand square kilometres, and many
of the waterways in the catchment area contain significant sediment and
chemical run-off from farming and grazing. This pollution is detrimental
in a number of ways, from interfering with coral development to increasing the
outbreaks of coral eating starfish.


### 2009 - Reef Water Quality Protection Plan

Long term goal:
> **To ensure that by 2020 the quality of water entering the reef from
broadscale land use has no detrimental impact on the health and resilience of
the Great Barrier Reef.**

Sets water quality and land management targets required to meet the long-term
goal.

Note:
The Reef Water Quality Protection Plan is a collaborative program designed to
improve the quality of the Great Barrier Reef through improved land management
practices in reef catchments. It is a joint commitment between the Australian
and Queensland Governments.

The long term goal is to ensure that by 2020 the quality of water entering the
the reef has no detrimental impact on its health. It sets specific actions and
deliverables to be completed by 2018.


### Reef Report Card

Reports on progress towards those targets, using measurements taken on a
(mostly) annual basis.

![Reef Plan](images/reef-plan-13-thumb-a.jpg)
<span style="vertical-align: 1.5em"> → </span>
![Reef Report Card](images/reef-report-card-2011.jpg)

Note:
Reef report cards are issued for each calendar year, tracking progress against
the 2009 baseline measurements. Metrics include:

 - % of farmers who have adopted best practice land management
 - % coverage of groundcover and riparian vegetation
 - catchment pollution loads
 - marine coral health, sea-grass abundance and water quality

The report cards provide a scientific basis for assessing the effectiveness of
the protection plan.


### Released so far

*Baseline* 2009 → Released August 2011

*2nd* 2010 → Released April 2013

*3rd* 2011 → Released July 2013

Note:
To provide the most useful feedback into how the plan should be implemented,
report cards should closely follow the completion of data collection. However,
analysis of the raw data by relevant agencies takes considerable time, as does
collation and publishing.

Media coverage (and resulting public engagement) also benefits from timely
delivery of new report cards. The "current" health of the reef will generally
be of more public interest than its "historical" health. As demonstrated by
the 2011 report, extreme weather events impact water quality a great deal,
making data collected prior to them decidedly less "current".

---

## Why automate?

 - Produce reports faster

 - Reduce data-entry errors

Note:
So, we want to automate the process of creating reef report cards.

The central reason is that we believe if we can reduce the number of manual,
repetitive steps involved, then the reports can be produced faster. This is a
fairly straight-forward proposition, though we obviously need to be careful
that the system doesn't introduce more work than it saves.

There's another good reason to automate some of these steps though. Every time
you manually copy data from one document to another, you raise the possiblity
of incorrectly re-entering it. During our initial prototyping, we automated
the generation of key charts in the reports and used a simple web-based form
to populate them. As we increased the data points in the charts, we noticed
that it became increasingly difficult to produce charts without transposing
or miscopying values.

Programmers can always use the wrong data fields, but at least our mistakes
lead to consistent (and more easily detectable) errors in the output.

---

## Our work so far



### Data Input Formats

Excel spreadsheets, not machine-friendly XML

![Progress Table Source](images/progress_table_source.png)


Chart generation & data extraction from those formats

![Progress Table](images/progress_table.svg)


### Not another workflow system

System assists the process, rather than changing it.

<img src="images/reef_report_card_process.svg"
  style="height: 15em; background: white"/>


### Constraints

<img class="borderless medium" src="images/ie8.png"/>

(among others!)


## Tech we're using

<img class="borderless square"
  src="images/scala_logo.svg"/>
+
<img class="borderless square"
  src="images/play_framework_logo.svg"/>
+
<img class="borderless square"
  src="images/apache_jackrabbit_logo.svg"/>

... and quite a bit more.  

