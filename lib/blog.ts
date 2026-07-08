export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

// Platshållarinlägg — ersätt eller ta bort när riktigt innehåll finns.
export const blogPosts: BlogPost[] = [
  {
    slug: "kommer-snart",
    title: "Bloggen är på gång",
    excerpt:
      "Vi samlar tips och insikter för hantverkare och byggfirmor om snabbare kundsvar, prissättning och offertarbete. Första artikeln kommer snart.",
    date: "2026-07-08",
    body: [
      "Det här är ett platshållarinlägg som visar hur en artikel kommer att se ut.",
      "Riktiga artiklar om förfrågningshantering, offertarbete och kundkommunikation för hantverkare och byggfirmor publiceras här inom kort.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
