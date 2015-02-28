# Casetext

The challenge: implement and reimagine Casetext's heatmap.

We are providing you with the HTML of a single United States Supreme Court case, Buckley v. Valeo, and a JSON file. The JSON file maps page numbers, which are indicated in the HTML by &lt;span class="page_number" data-page="N"&gt; for some N, to the number of times that page has been cited by other opinions. The more often a given page is cited, the more important it is to pay close attention, so we want to make sure our readers know which pages have been cited most as they read.

Your job is to synthesize these two data sources and build a heatmap so that a reader can see:

- the text of the document itself, and
- an indication of how often the current page has been cited relative to the rest of the document.

If you visit our site's active version of Buckley v. Valeo at https://casetext.com/case/buckley-v-valeo, you'll see the current implementation of the heatmap on the left-hand side. It's fine to emulate the current heatmap for your project, but if you can think of any way you might improve the user experience, we'd love to see it!

The final version of the challenge should be a complete code repository that we can run and see the result. You can use any platform you're comfortable with: Python and Flask, Ruby on Rails, or any other toolset in any other language. For the client-side code, our only requirement is that you use Javascript (not Coffeescript or Typescript); you can (but are not required to) use any JavaScript frameworks you think appropriate. We're likely to be impressed by responses that:

- look cool,
- run fast, and
- use correct, elegant code
