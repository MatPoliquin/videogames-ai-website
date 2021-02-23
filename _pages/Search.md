---
layout: page
title:  "Search"
permalink: /Search
tags: [Search, machine learning]
searchtags:
    - 'cuda'
    - 'rocm'
    - 'pytorch'
    - 'AMD'
---

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

*work in progress*

<html>
tags:
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      {% assign t = tag | first %}
      {% assign posts = tag | last %}
      {% if t contains "pytorch" or t contains "AMD" or t contains "review" or t contains "rocm" or t contains "cuda" or t contains "python" or t contains "tensorflow" %}

        <a href onclick="filter('{{ t }}'); return false;">{{ t }}</a>

        {{page.searchtags}}

      {% endif %}
    {% endfor %}


<a href onclick="filter('cuda'); return false;">cuda</a>
<br>
<br>
  {% assign test = "cuda|rocm|AMD" | split: "|" %}
  {% for tag in test %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
  <div class="blog-list-container hidden" id="{{ t }}-container">
  
      {% for post in posts %}
        {% if post.tags contains t %}
      
            <span class="blog-item-date">{{ post.date | date: "%d %b %Y" }}</span>
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