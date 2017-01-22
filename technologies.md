---
layout: page
title: Supported Technologies
---

## Bindings and Other Add-ons

---

Every technology or device, social network or cloud platform integrated into openHAB is supported by a specific add-on. Those add-ons are optional and pluggable, i.e. they can be added to your openHAB installation as soon as you need them.

Bindings provide integration with different home automation technologies and devices while there are other types of add-ons that provide integration and communication with social networks, instant messaging, cloud IoT platforms and much more.

See below for a selection of supported technologies. To see a complete list of available add-ons, please [see the openHAB documentation](http://docs.openhab.org/addons/index.html).

{% assign addons = "" | split: "|" %}
{% assign infos = site.data.oh1addons_infos %}

{% for binding in site.data.bindings %}{% assign addons = addons | push: binding %}{% endfor %}
{% for addon in site.data.oh1addons %}{% assign addons = addons | push: addon %}{% endfor %}
{% for addon in site.data.othertech %}{% assign addons = addons | push: addon %}{% endfor %}
{% assign sorted_addons = addons | sort: "label" %}

<div class="span12">
{% for addon in sorted_addons %}
{% if addon.icon == 'true' %}{% assign url = addon.url %}{% for info in infos %}{% if info.label == addon.label %}{% assign url = info.wiki_url %}{% endif %}{% endfor %}
<div class="span2">
<article>
{% if url == nil %}<a href="http://docs.openhab.org/addons/bindings/{{ addon.id }}/readme.html">{% else %}<a href="{{ url }}">{% endif %}
<section class="techInfo"><span class="imgHelper"></span><img class="techInfoImg" alt="{{ addon.label }}" src="/assets/images/tech/{{ addon.id }}.png" /></section></a>
</article>
</div>
{% endif %}{% endfor %}
</div>
.


---

All logos are trademarks of the respective companies.
