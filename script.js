const years = ["2022", "2023", "2024", "2025", "2026"];

const timelineData = {
  "2022": [
    {
      date: "November 20, 2022",
      title: "The Beginning",
      type: "Beginning / daily ritual",
      quote: "The relationship begins through ordinary time spent together.",
      detail:
        "This is the earliest point in the exported conversation. The earliest conversations already revolve heavily around playing games together, Valorant, calls, music, and spending time talking. The important thing about this period is that the relationship begins through ordinary time spent together. It isn't one enormous event. It's the beginning of a pattern: talking → playing → calling → talking again.",
      featured: false,
    },
  ],
  "2023": [
    {
      date: "July 8, 2023",
      title: "Hello Kitty Cafe",
      type: "Gaming / shared memory",
      quote: '"allat to play hello kitty cafe on roblox"',
      detail:
        "This is one of the early examples of them trying something silly and new together. It represents the recurring theme of 'Let's play something together.'",
      featured: false,
    },
    {
      date: "September 2023",
      title: "Shared humor begins",
      type: "Inside jokes / shared language",
      quote: '"chat is this real"',
      detail:
        "Messages include 'chat is this real', 'i love 'chat is this real'', and 'i love my little rat sister'. This period represents the development of their own shared humor and vocabulary. The important idea is that they weren't only talking about external things anymore — they were beginning to create jokes and phrases that belonged specifically to their relationship.",
      featured: false,
    },
  ],
  "2024": [
    {
      date: "April 14, 2024",
      title: "Among Us",
      type: "Gaming / shared time",
      quote: '"among us code"',
      detail:
        "Another example of trying different games together.",
      featured: false,
    },
    {
      date: "April 28, 2024",
      title: "Minecraft world",
      type: "Shared adventure / memory",
      quote: '"Minecraft coords: Starting village: 27 68 77 Beds: 96 63 159 Pillager tower: 619 69 -265 Crystals: 108 12 407 Crystals (with diamonds): -49 10 273"',
      detail:
        "This should be treated as an important memory because it represents an actual shared Minecraft world/adventure rather than simply mentioning the game.",
      featured: true,
    },
    {
      date: "May 23, 2024 · 2:40 AM",
      title: "i like you",
      type: "Romantic milestone",
      quote: '"i like you"',
      detail:
        "This is one of the most important individual messages in the entire timeline. It marks the explicit transition from ordinary closeness into openly acknowledged romantic feelings.",
      featured: true,
    },
    {
      date: "June 21, 2024 · approximately 4:24–4:25 AM",
      title: "I love you",
      type: "Romantic milestone",
      quote: '"I tried saying I like you without saying if outright"<br><br>"I failed!"<br><br>"i love you"',
      detail:
        "The progression is clear: I like you → trying to say it indirectly → 'I failed!' → i love you.",
      featured: true,
    },
    {
      date: "August 6, 2024",
      title: "Mutual love",
      type: "Romantic milestone",
      quote: '"and i love you"<br><br>"I love you most"',
      detail:
        "This represents the point where 'I love you' becomes openly mutual and part of their normal communication.",
      featured: true,
    },
    {
      date: "September 19, 2024 · approximately 10:05 PM",
      title: "WE'RE ALMOST MATCHING",
      type: "Shared identity / cute memory",
      quote: '"WE\'RE ALMOST MATCHING"',
      detail:
        "A small moment, but it matters because it represents the growing tendency to do things together and have matching/shared identity elements.",
      featured: false,
    },
    {
      date: "October 7, 2024",
      title: "i genuinely love you so much",
      type: "Romantic / affection",
      quote: '"i genuinely love you so much nina"<br><br>"i love youuuuu..."<br><br>"ilym princess"',
      detail:
        "This is important because 'princess' becomes one of the recurring affectionate names used between them.",
      featured: false,
    },
    {
      date: "December 19, 2024 · approximately 2:12 AM",
      title: "I miss you",
      type: "Affection / distance",
      quote: '"I miss you so much nina"',
      detail:
        "This is an important emotional memory. It shows that by the end of 2024, missing each other and expressing that affection had become a normal part of their relationship.",
      featured: false,
    },
  ],
  "2025": [
    {
      date: "January 1, 2025",
      title: "New Year, same feeling",
      type: "New Year / affection",
      quote: '"I miss you so much baby"<br><br>"entire day I\'ve been thinking about you my love"',
      detail:
        "This marks the continuation of their relationship into a new year. Important recurring pet names around this period include baby, my love, and princess.",
      featured: false,
    },
    {
      date: "February 7, 2025 · approximately 9:16 PM",
      title: "Almost a year together",
      type: "Relationship milestone",
      quote: '"almost a year together"',
      detail:
        "This represents the point where their shared history had become substantial enough to be measured in nearly a year.",
      featured: true,
    },
    {
      date: "February 22, 2025",
      title: "Inside jokes",
      type: "Inside jokes / shared history",
      quote: '"inside jokes"',
      detail:
        "This is important because by this point they had accumulated a collection of jokes, phrases, references, nicknames, and memories that were specifically meaningful to them.",
      featured: false,
    },
    {
      date: "March 7, 2025",
      title: "Nicknames / Panina",
      type: "Inside joke / nickname",
      quote: '"do i give her nicknames"<br><br>"do i give him nicknames?"<br><br>"wonder how you get the nickname panina for your other account"',
      detail:
        "This is another example of their shared language developing into personalized nicknames.",
      featured: false,
    },
    {
      date: "April 12, 2025 · approximately 4:04 PM",
      title: "First ever relationship",
      type: "Relationship milestone",
      quote: '"first ever relationship of my life"',
      detail:
        "This is an important milestone and should be prominently displayed as part of the relationship being explicitly defined.",
      featured: true,
    },
    {
      date: "April 13, 2025",
      title: "Supermarket together reference",
      type: "Inside joke / shared memory",
      quote: '"?!?!?!?!? supermarket together reference???"',
      detail:
        "This should be presented as an inside-joke card. The fact that it is a reference meaningful to them is the important part.",
      featured: false,
    },
    {
      date: "May 9, 2025 · approximately 9:04 PM",
      title: "Girlfriend / future wife",
      type: "Relationship milestone",
      quote: '"I thought you were my girlfriend"<br><br>"my future wife"',
      detail:
        "This is one of the clearest points where their relationship is explicitly described using long-term romantic language.",
      featured: true,
    },
    {
      date: "May 13, 2025 · approximately 4:55 PM",
      title: "Thats why i wanted to date u",
      type: "Relationship milestone",
      quote: '"Thats why i wanted to date u"',
      detail:
        "This is another extremely important message because it directly states the intention behind the relationship.",
      featured: true,
    },
    {
      date: "August 30, 2025 · approximately 3:03 AM",
      title: "Forehead kisses",
      type: "Affection / physical affection",
      quote: '"forehead kisses toooooooooo"',
      detail:
        "This represents the relationship becoming comfortable with openly affectionate physical imagery.",
      featured: false,
    },
  ],
  "2026": [
    {
      date: "February 16, 2026 · approximately 5:05 PM",
      title: "Valentine's chocolates",
      type: "Gift / Valentine's Day",
      quote: '"comes from the person who got me chocolates on valentines day"',
      detail:
        "This is an important real-world gesture. It should be presented as a Valentine's memory — a reminder that the relationship wasn't only happening through messages and games, but through tangible gestures outside the chat as well.",
      featured: true,
    },
    {
      date: "May 8, 2026",
      title: "You are my girlfriend",
      type: "Relationship milestone",
      quote: '"you can either be my girlfriend"<br><br>"or my ex"<br><br>"you are my girlfriend"',
      detail:
        "This demonstrates that the girlfriend terminology and relationship identity continued well into 2026. The meaningful relationship statement is: 'you are my girlfriend'.",
      featured: true,
    },
  ],
};

function renderYear(year) {
  const container = document.getElementById(`timeline-${year}`);
  if (!container) return;

  container.innerHTML = "";

  const events = timelineData[year] || [];
  events.forEach((event, index) => {
    const card = document.createElement("article");
    card.className = `memory-card ${event.featured ? "featured" : ""}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", event.featured ? "true" : "false");

    const detailText = event.detail || "";

    card.innerHTML = `
      <div class="card-top">
        <span class="card-type">${event.type}</span>
        <span class="memory-date">${event.date}</span>
      </div>
      <h3>${event.title}</h3>
      <p class="memory-quote">${event.quote}</p>
      <div class="memory-detail">
        <p>${detailText}</p>
      </div>
    `;

    if (index === 0 || event.featured) {
      card.classList.add("expanded");
      card.setAttribute("aria-expanded", "true");
    }

    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", String(isOpen));
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const isOpen = card.classList.toggle("expanded");
        card.setAttribute("aria-expanded", String(isOpen));
      }
    });

    container.appendChild(card);
  });
}

years.forEach(renderYear);

const navLinks = [...document.querySelectorAll(".year-pill")];
const sections = [...document.querySelectorAll(".year-section")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const year = entry.target.dataset.year;
        const matchingLink = navLinks.find((link) => link.getAttribute("href") === `#year-${year}`);
        if (matchingLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          matchingLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));

const progressBar = document.getElementById("reading-progress");

function updateProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
