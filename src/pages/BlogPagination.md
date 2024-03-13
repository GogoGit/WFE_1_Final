---
pageTitle: BlogPagination
navTitle: BlogPagination
pageClass: BlogPagination
---

## Blog List by Title

<ul>
	{% for blog in blogsData %}
		<li><a href="/blog/{{blog.id | slug}}">{{blog.title}}</a></li>
	{% endfor %}
</ul>