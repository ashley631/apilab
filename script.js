"use strict";

$(document).ready(() => {

    $.get("https://www.reddit.com/r/aww/.json").then((response) => {
        const sweethangs = response.data.children
        //console.log(sweethangs.children);

        for (let i=0; i < sweethangs.length; i++) {
            console.log(sweethangs[i]);

            $("body").append(`
            <section>
            <h3>Title: ${sweethangs[i].data.title}
            </h3>
            <p class="p1">Author: ${sweethangs[i].data.author}</p>
            <p class="p2">Ups: ${sweethangs[i].data.ups}</p>
            <img src="${sweethangs[i].data.thumbnail}">
            <a href="https://www.reddit.com${sweethangs[i].data.permalink}">Link</a>
        

            </section>
            
            `)
        }

    });

});