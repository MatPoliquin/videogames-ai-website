---
layout: default
title:  "Blog"
permalink: /Blog
ads: False
comments: False
tags: [videogames, ai, machine learning, pytorch, tensorflow, cuda, rocm]
---


<h2>{{ site.data.samplelist.docs_list_title }}</h2>

<ul>
  {% for item in site.data.samplelist.docs %}
     <li><a href="{{ item.url }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>


<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h3><span class="date">{{ post.date | date_to_string | append: '          ' | truncate: 22}}
  </span><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <!--<p class="author">-->
    
  <!--</p>-->
  <!--<div class="content">
    {{ post.excerpt }}
  </div>-->
{% endfor %}

<!-- Pagination links -->
<!--<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">
      Previous
    </a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">
    Page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>-->




<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mailchimp">
<form action="https://videogames.us20.list-manage.com/subscribe/post?u=ba7ff206f13115075d97a514d&amp;id=80091eebf9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
  
  <!-- <label for="mce-EMAIL">Subscribe</label>-->
  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ba7ff206f13115075d97a514d_80091eebf9" tabindex="-1" value=""></div>
  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">

</form>
</div>
<!--End mc_embed_signup-->
