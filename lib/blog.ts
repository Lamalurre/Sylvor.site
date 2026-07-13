export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "snabbare-svar-vinner-jobbet",
    title: "Varför den som svarar snabbast vinner jobbet",
    excerpt:
      "Kunder hör sig för hos flera företag samtidigt — och de allra flesta väljer den som hör av sig först. Så påverkar svarstid faktiskt din vinstprocent.",
    date: "2026-06-02",
    body: [
      "När en kund skickar en förfrågan om till exempel golvläggning eller flytthjälp gör de sällan bara ett val. De hör sig för hos tre, fyra, kanske fem företag samtidigt och väljer sedan den som svarar först med ett tydligt, seriöst svar.",
      "Det handlar inte om att den snabbaste alltid har bäst pris eller mest erfarenhet — det handlar om att kunden vill ha en lösning på sitt problem så fort som möjligt, och det första svaret sätter tonen för hela relationen.",
      "Problemet är att de flesta småföretag inte kan bemanna en inkorg dygnet runt. Förfrågningar som kommer in på kvällen, under ett annat jobb eller på helgen blir liggande — ibland i timmar, ibland i dagar.",
      "Ett enkelt, säkert autosvar direkt när förfrågan kommer in — även innan du hunnit läsa den ordentligt — gör en stor skillnad. Kunden vet att de blivit sedda, och du får tid att svara på riktigt utan att tappa affären under tiden.",
      "Det är precis det Sylvor löser: ett säkert första svar går ut automatiskt, och ett fullständigt svarsförslag väntar på ditt godkännande så fort du har tid.",
    ],
  },
  {
    slug: "prissatta-offert-pa-en-minut",
    title: "Så prissätter du en offert på under en minut",
    excerpt:
      "Manuell prisberäkning för varje ny förfrågan är den vanligaste tidstjuven för hantverkare. Så automatiserar du det utan att tappa kontrollen över priset.",
    date: "2026-06-08",
    body: [
      "De flesta hantverksfirmor har en prislista — kronor per kvadratmeter golv, kronor per timme snickeri, minimipris för utryckning. Ändå räknas varje offert ofta ut för hand, ibland i huvudet, ibland i ett kalkylark man letar upp mitt i en annan syssla.",
      "Det är inte bara tidskrävande — det är en risk. Ett snabbt huvudräknat pris under stress blir lätt fel, antingen för lågt (du tappar marginal) eller för högt (du tappar jobbet).",
      "Lösningen är inte att sluta ha koll på priset — tvärtom. Det är att låta ett system räkna ut det åt dig, deterministiskt, utifrån exakt den prislista du redan har, på samma sätt varje gång.",
      "I Sylvor matar du in din prislista en gång. Därefter räknas priset fram automatiskt för varje ny förfrågan utifrån vad kunden faktiskt bett om — aldrig en AI-gissning, alltid samma uträkning som du själv skulle gjort, bara snabbare.",
      "Du ser alltid det uträknade priset innan något skickas, och kan justera det om något särskilt gör just det jobbet dyrare eller billigare. Automatiken sparar tiden, du behåller sista ordet.",
    ],
  },
  {
    slug: "tecken-pa-att-du-tappar-leads",
    title: "5 tecken på att du tappar leads i inkorgen",
    excerpt:
      "De flesta missade affärer syns aldrig som en förlorad offert — bara som ett mejl som aldrig fick svar. Så känner du igen mönstret innan det kostar dig för mycket.",
    date: "2026-06-13",
    body: [
      "1. Du hittar förfrågningar från förra veckan du glömt bort. Händer det mer än en gång i månaden har du sannolikt redan förlorat jobb utan att veta om det.",
      "2. Du svarar olika snabbt beroende på hur stressad dagen är. Kunder som hör av sig en lugn måndag får snabbt svar — de som hör av sig en hektisk fredag väntar till helgen är över.",
      "3. Du har ingen samlad bild av vad som kommit in via mejl, formulär och sociala medier. När förfrågningar sprids över flera kanaler är det nästan omöjligt att hålla ordning manuellt.",
      "4. Du kommer inte ihåg vad en kund redan sagt när de svarar tillbaka, och ber om samma information igen — vilket känns oprofessionellt och gör att kunden tappar förtroende.",
      "5. Du vet inte hur många förfrågningar du faktiskt fick förra månaden, eller hur många som blev jobb. Utan den siffran är det omöjligt att veta hur mycket som läcker ut genom långsamma svar.",
    ],
  },
  {
    slug: "hantverkare-offertarbete-per-yrke",
    title: "Golvläggning, badrum eller målning — så skiljer sig offertarbetet",
    excerpt:
      "Alla hantverksjobb prissätts inte likadant. Så ser skillnaden ut mellan de vanligaste jobbtyperna — och vad det betyder för hur snabbt du kan svara.",
    date: "2026-06-18",
    body: [
      "Golvläggning prissätts oftast per kvadratmeter, med ett relativt förutsägbart spann beroende på materialval. Det gör det till en av de enklaste jobbtyperna att prissätta direkt utifrån en förfrågan, om kunden bara anger yta.",
      "Badrumsrenovering är motsatsen — priset beror på så många faktorer (rivning, VVS, kakel, tidsplan) att en riktig offert nästan alltid kräver ett platsbesök. Här handlar snabbt svar mer om att boka in besöket snabbt än att ange ett exakt pris direkt.",
      "Målning ligger någonstans mittemellan — yta och antal strykningar ger en bra uppskattning, men underlaget (nytt eller gammalt, in- eller utomhus) påverkar priset tillräckligt mycket för att ett spann ofta är ärligare än ett fast pris.",
      "Poängen är att ett bra system inte behandlar alla jobb likadant. Det ska känna igen när ett exakt pris går att räkna direkt, och när svaret istället ska handla om att snabbt boka in ett besök.",
      "Det är precis så Sylvor resonerar: direkt pris när underlaget räcker, förslag på platsbesök när det inte gör det — aldrig ett påhittat pris bara för att verka snabb.",
    ],
  },
  {
    slug: "flyttfirmor-svarstid-viktigare-an-pris",
    title: "Flyttfirmor: därför är svarstid viktigare än pris",
    excerpt:
      "Flyttkunder bokar ofta med kort varsel och jämför flera firmor samtidigt. Den som svarar snabbast får jobbet — oftare än den som har lägst pris.",
    date: "2026-06-23",
    body: [
      "En flytt planeras sällan långt i förväg. Många kunder hör av sig till tre–fyra flyttfirmor samma dag, och bokar med den som återkommer snabbast med ett rimligt pris — inte nödvändigtvis det absolut lägsta.",
      "Det gör svarstid till en konkurrensfördel som är lättare att äga än pris. Du behöver inte vara billigast — du behöver bara vara snabbast med ett tydligt svar.",
      "Priset för en flytt beror på flera faktorer: antal rum, våningsplan, hiss eller inte, avstånd. En riktig offert kräver ofta lite mer information än vad en förfrågan innehåller från början.",
      "Ett bra system flaggar direkt vad som saknas — våningsplan, exakt datum — istället för att kunden ska behöva svara på en lång rad frågor i efterhand, vilket bara förlänger tiden till bokning.",
      "Sylvor läser varje förfrågan, ser vad som saknas för att kunna prissätta rätt, och har ett svarsförslag redo innan du ens hunnit sätta dig vid datorn.",
    ],
  },
  {
    slug: "stadfirmor-engangsstad-vs-aterkommande",
    title: "Städfirmor: engångsstäd vs. återkommande — så hanterar du båda i samma inkorg",
    excerpt:
      "De två vanligaste typerna av städuppdrag kräver helt olika uppföljning. Så ser du snabbt skillnaden och prissätter rätt från start.",
    date: "2026-06-27",
    body: [
      "Engångsstäd — flyttstäd, storstäd inför fest, byggstäd — prissätts oftast per kvadratmeter och är en enskild transaktion. Återkommande hemstädning är istället ett löpande avtal där kunden förväntar sig samma pris och kvalitet varje gång.",
      "Blandar man ihop de två i samma flöde är risken att återkommande kunder behandlas som engångsjobb, eller tvärtom — vilket gör uppföljningen rörig och priset fel.",
      "En bra förfrågan säger ofta redan vilken typ det handlar om ('varannan vecka' är återkommande, 'innan helgen' är oftast engångsstäd) — men om det inte framgår är det första frågan att ställa, inte kvadratmeter.",
      "Kvadratmeter, antal rum och badrum påverkar tidsåtgången oavsett typ, så det är alltid relevant att fråga om det saknas — men det ska inte vara den enda frågan när kunden redan varit tydlig med annat.",
      "Sylvor läser vad kunden faktiskt redan sagt och flaggar bara det som genuint saknas, så du slipper ställa en fråga kunden redan besvarat.",
    ],
  },
  {
    slug: "ai-kundservice-utan-att-tappa-kontrollen",
    title: "Så funkar AI-assisterad kundservice utan att tappa den mänskliga kontrollen",
    excerpt:
      "Den vanligaste oron med AI i kundkontakt är att något skickas fel — ett löfte som inte hålls, ett pris som inte stämmer. Så är Sylvor byggt för att aldrig hamna där.",
    date: "2026-07-01",
    body: [
      "Den vanligaste invändningen mot AI i kundservice är rimlig: vad händer om AI:n lovar något som inte stämmer, eller skickar ett meddelande i mitt namn som jag inte står bakom?",
      "Svaret är att automation och mänsklig kontroll inte behöver vara motsatser. Ett system kan göra det tunga jobbet — läsa, sammanfatta, räkna pris, skriva utkast — utan att någonsin trycka på skicka-knappen själv.",
      "I Sylvor skickas bara en enda sak helt automatiskt: ett säkert första mottagningsbesked, alltid samma trygga formulering, aldrig ett löfte om pris eller leveranstid. Allt annat — offert, pris, uppföljning — är ett utkast som väntar på ditt godkännande.",
      "Det betyder att du får hastigheten av automation utan att ge upp ansvaret för vad som faktiskt går ut till kunden. Du läser, justerar om det behövs, och godkänner — precis som om du skrivit det själv, fast snabbare.",
      "Människogranskat från grunden, inte som en eftertanke.",
    ],
  },
  {
    slug: "vad-kostar-en-missad-forfragan",
    title: "Vad kostar en missad förfrågan egentligen?",
    excerpt:
      "Det känns aldrig som en förlorad affär — bara ett mejl som aldrig fick svar. Så räknar du ut vad det faktiskt kostar dig varje månad.",
    date: "2026-07-04",
    body: [
      "Ingen skriver \"förlorade 45 000 kr denna månad\" i sin bokföring. Missade förfrågningar syns aldrig som en kostnad — de syns bara som frånvaro av intäkt, vilket gör dem lätta att ignorera.",
      "Räkna själv: hur många förfrågningar missar eller besvarar du sent per månad? Multiplicera med ert genomsnittliga projektvärde, och med hur stor andel av de missade som faktiskt hade blivit jobb om ni svarat snabbt.",
      "För de flesta småföretag landar den siffran förvånansvärt högt — ofta betydligt mer än vad automatiserad kundhantering hade kostat att sätta upp.",
      "Det är precis den uträkningen vår ROI-kalkylator på hemsidan gör — fyll i era egna siffror och se den potentiella extra intäkten, både per månad och per år.",
      "Poängen är inte att skrämmas med siffror, utan att göra ett osynligt problem synligt nog att faktiskt göra något åt.",
    ],
  },
  {
    slug: "epost-eller-formular-vilken-leadkalla",
    title: "E-post eller formulär — vilken leadkälla ska du satsa på?",
    excerpt:
      "De flesta småföretag tar emot förfrågningar via flera kanaler samtidigt utan att egentligen ha valt det. Så ser du vilken som faktiskt levererar.",
    date: "2026-07-08",
    body: [
      "De flesta hantverkare, städfirmor och flyttfirmor får förfrågningar via en blandning av hemsideformulär, direktmejl och ibland sociala medier — sällan ett aktivt val, snarare något som växt fram av sig själv.",
      "Formulär på hemsidan har fördelen att de tvingar fram viktig information direkt (vad, var, när) — men kräver att kunden faktiskt hittar och orkar fylla i formuläret istället för att bara skicka ett mejl.",
      "Direktmejl är den lägsta tröskeln för kunden, men ger ofta mindre struktur — \"Hej, kan ni hjälpa oss?\" utan mer detaljer är vanligare än ett ifyllt formulär.",
      "Du behöver oftast inte välja — de flesta system, Sylvor inkluderat, hanterar båda genom samma inkorg: vidarebefordra formulärnotiser och direktmejl till samma adress, så blir båda automatiskt ett lead oavsett väg in.",
      "Det som faktiskt spelar roll är inte vilken kanal som är \"bäst\", utan att ingen av dem blir liggande obesvarad bara för att den kom in på ett annat sätt än vanligt.",
    ],
  },
  {
    slug: "fran-forfragan-till-godkant-svar",
    title: "Från förfrågan till godkänt svar: en genomgång av Sylvors flöde",
    excerpt:
      "Vad händer egentligen mellan att en kund skickar en förfrågan och att du klickar godkänn? Här är hela kedjan, steg för steg.",
    date: "2026-07-12",
    body: [
      "Steg ett: förfrågan kommer in, precis som vanligt — via formulär, vidarebefordrat mejl eller DM. Ett säkert autosvar går ut direkt, så kunden vet att de blivit sedda innan du ens hunnit läsa förfrågan.",
      "Steg två: texten läses och sammanfattas. Sylvor plockar ut vad kunden faktiskt frågar efter, flaggar vad som saknas för att kunna svara fullständigt, och prioriterar förfrågan utifrån hur brådskande den verkar.",
      "Steg tre: priset räknas fram utifrån din egen prislista — deterministiskt, aldrig en gissning — och ett svarsförslag skrivs i din ton, utifrån den ursprungliga förfrågan.",
      "Steg fyra: du granskar. Justera priset om något avviker, ändra formuleringen om du vill, eller skicka som det är. Inget når kunden utan att du sagt ja.",
      "Svarar kunden tillbaka börjar samma kedja om, fast nu med hela den tidigare konversationen som kontext — så Sylvor aldrig frågar om något kunden redan svarat på. Det är hela poängen: samma snabbhet som automation, samma kontroll som att skriva det själv.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
