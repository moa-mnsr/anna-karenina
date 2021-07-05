function makeMarquee() {
    const title = `This site is under construction`
    const marqueeText = new Array(300).fill(title).join(' â€” ')
    const marquee = document.querySelector('main div.banner h1')
    marquee.innerHTML = marqueeText
}

makeMarquee()