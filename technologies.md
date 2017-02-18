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
{% assign ids = array[1] %}
{% for addon in site.data.tech %}
    {% unless ids contains addon.id %}
        {% capture ids %}{{ ids }}|{{ addon.id }}{% endcapture %}
		{% assign addons = addons | push: addon %}
    {% endunless %}
{% endfor %}

{% assign sorted_addons = addons | sort: "sortlabel" %}

<div class="span12">
{% for addon in sorted_addons %}
<div class="span2">
<article>
<a href="{{ addon.url }}">
<section class="techInfo"><span class="imgHelper"></span><img class="techInfoImg" alt="{{ addon.label }}" src="http://docs.openhab.org/images/addons/{{ addon.id }}.png" /></section></a>
</article>
</div>
{% endfor %}
</div>
.


---

All logos are trademarks of the respective companies.
