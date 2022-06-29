---
layout: page
title:  "Search this site"
permalink: /Search
ads: False
comments: False
tags: [Search, machine learning]
searchtags:
    - 'cuda'
    - 'rocm'
    - 'pytorch'
    - 'AMD'
---

<script async src="https://cse.google.com/cse.js?cx=2fa5fa2bd7da89d66"></script>
<div class="gcse-search"></div>

<script>
function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}


  </script>
<html>

<p style="padding: 10px; border: 2px solid blue;">
tags:
    <a href onclick="filter('review'); return false;">Reviews</a>
    <a href onclick="filter('pytorch'); return false;">Pytorch</a>
    <a href onclick="filter('tensorflow'); return false;">Tensorflow</a>
    <a href onclick="filter('cuda'); return false;">Cuda</a>
    <a href onclick="filter('rocm'); return false;">ROCm</a>
    <a href onclick="filter('AMD'); return false;">AMD</a>

</p>
<br>
<br>
  {% assign test = "'cuda'|'rocm'|'AMD'" | split: "|" %}
  {% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
  <div class="blog-list-container hidden" id="{{ t }}-container">
  
      {% for post in posts %}
        {% if post.tags contains t %}
      
        <a href="{{ post.url }}">{{ post.title }}</a><br>
      
        {% endif %}
      {% endfor %}

      {% for page in site.pages %}
        {% if page.tags contains t %}
      
            <span class="blog-item-date">{{ page.date | date: "%d %b %Y" }}</span>
            <a href="{{ page.url }}">           {{ page.title }}</a><br>
      
        {% endif %}
      {% endfor %}
  </div>
{% endfor %}

</html>

