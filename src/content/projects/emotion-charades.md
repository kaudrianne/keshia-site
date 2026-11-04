---
title: Emotion Charades
summary: A browser game where you act out an emotion and a machine-learning model guesses it from your webcam, in real time.
kind: school
status: shipped
year: "2025"
tools: [Python, MediaPipe, OpenFace 3.0, scikit-learn, ONNX Runtime Web, React]
order: 4
featured: true
stats:
  - { value: "82%", label: "test accuracy" }
  - { value: "280", label: "videos recorded" }
  - { value: "3.09 MB", label: "model, runs in browser" }
---

*Built in a senior machine learning course (COMP_SCI 396) with Emma Baumgardner, Grant Miranda, and Fai Poungpeth. I was the only cognitive science major in the class.*

## The game

Think Heads Up, but your laptop is the one guessing. You get a target emotion, make the face, and the model guesses what you're showing. One minute, as many correct guesses as you can, then your score goes on a leaderboard. It's a party game, but also practice for anyone working on being more expressive: actors, public speakers, kids learning to read faces.

![Emotion Charades start screen and round-complete screen with a score of 351](./img/ec-game.jpg)

<p class="caption">Start screen and end-of-round results. <a href="https://youtu.be/XA4t2SvBqOE" target="_blank" rel="noopener">Watch the demo video →</a></p>

## How we built it

**Data.** Each of us recorded 10 clips for each of 7 emotions (happy, sad, angry, disgust, neutral, fear, surprise): 280 videos and over 63,000 frames.

**Features.** From every frame we pulled facial measurements with Google MediaPipe (52 "blendshapes," like how far an eyebrow is lowered, plus head angle) and OpenFace (muscle movements and eye gaze). We tested 13 feature combinations and kept 25 of the original 65: only about 2% less accurate, with far fewer inputs to compute live.

**Smoothing.** Frame-by-frame predictions jittered, and long windows lagged. A 15-frame rolling window was the sweet spot.

**Models.** We compared four models on the same data split:

<div class="bars">
  <div><span>Random Forest</span><span class="track"><span style="width:82%"></span></span><b>0.82</b></div>
  <div><span>Gradient Boosting</span><span class="track"><span style="width:77%"></span></span><b>0.77</b></div>
  <div><span>SVM</span><span class="track"><span style="width:73%"></span></span><b>0.73</b></div>
  <div><span>Neural network (MLP)</span><span class="track"><span style="width:66%"></span></span><b>0.66</b></div>
</div>
<p class="caption">Test accuracy on 15-frame windows.</p>

Random Forest won on accuracy, stayed stable on a small dataset, and was light enough (3.09 MB) to run entirely in the browser, so no video ever leaves the player's laptop.

## The demo-day bug

A professor scored high, came back later to see if anyone had beaten him, and found the leaderboard hadn't saved a single score. The teammate who'd merged the front and back end couldn't find the cause. Another teammate and I skimmed the code for about seven minutes and traced it to one mismatched variable in the leaderboard function.

## What I learned

AI coding tools got our environment and interface running fast, but the bug that almost sank the demo was the kind a careful human read catches. Speed from AI, review from people.
