import Notat from './notat.js';import Emne from './emne.js';import Universitet from './universitet.js';import Notatsystem from './notatsystem.js';
var notatsystem = new Notatsystem();
var universitet; var emne; var notat;
universitet = new Universitet('Universitetet i Oslo', 'UiO');
notatsystem.leggTilUniversitet(universitet);
emne = new Emne('English Phonetics and Intonation', 'ENG1103');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/drive/folders/1wsSA809HYVLgnYtPgy5pfaHEdWh7z9zC?usp=sharing', 'Intonation Notes (Recieved Pronunciation)', ['Silje Øksland Krohne'], '2021V', 'I have spent a lot of time studying for this course, and received an A after my examination. In preparing for my exam, these notes and my Phonetics Notes were my main tool. They are heavily influenced by the books on the curriculum.');
emne.leggTilNotat(notat);
notat = new Notat('https://drive.google.com/drive/folders/1s_0jKnjkXqOcl8qVnmttLheRsNJTlyV8?usp=sharing', 'Phonetics Notes (Recieved Pronunciation)', ['Silje Øksland Krohne'], '2021V', 'I have spent a lot of time studying for this course, and received an A after my examination. In preparing for my exam, these notes and my Intonation Notes were my main tool. They are heavily influenced by the books on the curriculum.');
emne.leggTilNotat(notat);
emne = new Emne('Introduksjon til objektorientert programmering', 'IN1000');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1ciQ_2sOwDm6-UpkNGEWTevt7Q1ba6FLT/view', 'Notater i IN1000 Introduksjon til objektorientert programmering', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Til sammen brukte jeg 70 timer på faget, og jeg fikk A på eksamen. Notatene er skrevet for hånd på en Onyx Boox Max 3.');
emne.leggTilNotat(notat);
emne = new Emne('Objektorientert programmering', 'IN1010');
universitet.leggTilEmne(emne);
notat = new Notat('https://www.notion.so/IN1010-9c36d74935e64bd49099b5022196dcd2', 'IN1010 i Notion (med kodesnutter)', ['Anton Lymarev'], '2021V', 'En strukturert oversikt av kurset med de viktigste begrepene og kodeeksempler (ikke kun tatt fra forelesninger). Det er noe forelesninger som er ikke notert, men det eksisterer redigerbare Notion-sider for dem, så disse kan utfylles av de som vil gjøre noe ekstra innsats.');
emne.leggTilNotat(notat);
notat = new Notat('https://drive.google.com/file/d/1RBte2SoyXeR_M-OvG4eJ3R18ucgZnl7y/view?usp=sharing', 'Notater i IN1010 Objektorientert programmering', ['Tobias Rade Evensen'], '2021V', 'Totalt brukte jeg 150 timer på emnet, og jeg fikk A på eksamen. Notatet er skrevet for hånd på en Onyx Boox Max 3.');
emne.leggTilNotat(notat);
emne = new Emne('Introduksjon til datateknologi', 'IN1020');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1dXCk0wC1LNjdeefXfBcXaXQk5E-py1T2/view?usp=sharing', 'Notater i IN1020 Introduksjon til datateknologi', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totatl brukte jeg 70 timer på emnet, og jeg fikk bestått på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Systemer, krav og konsekvenser', 'IN1030');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/10YeOk8o__kI5cY4ZZ1RF-nMJSk4KNVtE/view', 'Notater i IN1030 Systemer, krav og konsekvenser', ['Tobias Rade Evensen'], '2021V', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totalt brukte jeg 120 timer på emnet, og jeg fikk bestått på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Introduksjon til design, bruk, interaksjon', 'IN1050');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1aSAf6KPzMzDjBVBbJ1-oXalHEn9K7vfc/view?usp=sharing', 'Notater i IN1050 Introduksjon til design, bruk, interaksjon', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totalt brukte jeg 120 timer på emnet, og jeg fikk C på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Bruksorientert design', 'IN1060');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/drive/folders/1nmhNlQhdKjkt3VXAQXb6RoE2odcovAZE', 'Notater i IN1060 Bruksorientert design', ['Tobias Rade Evensen'], '2021V', 'Totalt brukte jeg 160 timer på emnet, og vi fikk en D på eksamen. Jeg har notert på pc til pensum, og for hånd til forelesninger.');
emne.leggTilNotat(notat);
emne = new Emne('Logiske metoder', 'IN1150');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/drive/folders/1eRkCH4GtmIo_fGwz1k7Q4fhbHOlsY044?usp=sharing', 'Definisjoner og eksempler', ['Eric Svebakk'], '2021V', 'En oversikt over viktige begrep med definisjoner og noen eksempler');
emne.leggTilNotat(notat);
notat = new Notat('https://www.notion.so/IN1150-2b75c381c45b455aabae0e4c7ac72bf5', 'IN1150 i Notion (med eksempler på TeX formler)', ['Anton Lymarev'], '2021V', 'Ganske nøye notater av (nesten) alle kapittler i boka. Notatene er basert på nettkurset. Hver notat inneholder en lenke til nettkurset og en lenke til den skannet versonen av boka på min Google Drive. Som i IN1010, tomme kapittel-sider kan redigeres og derfor utfylles av de som vil hjelpe med å dekke hele pensum.');
emne.leggTilNotat(notat);
emne = new Emne('Læring og Undervisning', 'PED1001');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/drive/folders/1CUS8cJzB5Megsnul-Cl1Tkb9CCG6o0J5?usp=sharing', 'Eksamensoppgaver H17 PED1001 og Notater i PED1001', ['Philip Lo'], '2017H', 'Dekker litt av Woolfolk, mye av Qvortrup & Widberg, Kvello og Gulbrandsen.');
emne.leggTilNotat(notat);
emne = new Emne('Privatrett 1', 'JUS1111');
universitet.leggTilEmne(emne);
notat = new Notat('https://succulent-quokka-656.notion.site/Notater-i-JUS1111-18744ef6cd8a4c929831c8c95473fa06', 'Notater i JUS1111', ['Tobias Rade Evensen'], '2021H', 'Jeg deler disse notatene mens jeg skriver dem. Ha derfor i tankene at alle kildehenvisninger og slikt ikke kommer til å være på plass før semesteret er over. Jeg er og klar over at alt stoffet ikke er "bra", men noe er bra nok, og det håper jeg kan komme andre til nytte. Hvis du vil melde og dele tanker rundt en god gjennomføring av dette faget, ta kontakt. (facebook.com/radeeven)');
emne.leggTilNotat(notat);
export default notatsystem;
