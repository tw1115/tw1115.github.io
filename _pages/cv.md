---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 1
description: Curriculum Vitae
---

<div class="pdf-container">
    <div id="loading" class="loading">Loading CV...</div>
    <iframe 
        src="{{ '/pdfjs/web/viewer.html' | relative_url }}" 
        width="100%" 
        height="100vh" 
        style="border: none; min-height: 800px;" 
        onload="document.getElementById('loading').style.display='none';">
    </iframe>
</div>

<style>
.pdf-container {
    position: relative;
    width: 100%;
    background: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
}

.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    color: #666;
}
</style>