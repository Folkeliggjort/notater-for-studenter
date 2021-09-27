from universitet import Universitet
from emne import Emne
from notat import Notat

class Notatsystem:
    def __init__(self, filnavn):
        self._universiteter = {} #forkortelse nøkkel, Universitet-objekt innhold
        self._filnavn = filnavn #str

    def hentUniversiteter(self):
        return self._universiteter

    def hentUniversitet(self, forkortelse):
        return self._universiteter[forkortelse]

    def leggTilUniversitet(self, universitet):
        self._universiteter[universitet.hentForkortelse()] = universitet

    def lastInnSystem(self):
        #format: navn universitet;forkortelse universitet;navn emne; forkortelse emne;link;tittel notat;forfatter1,forfatter2,forfatterN;semester
        fil = open(self._filnavn, "r", encoding="utf-8")
        for linje in fil:
            #variabler for data
            data = linje.strip().split(";")
            navnUniversitet = data[0]
            forkortelseUniversitet = data[1]
            navnEmne = data[2]
            kodeEmne = data[3]
            link = data[4]
            tittelNotat = data[5]
            forfatterNotat = data[6].split(",")
            semesterNotat = data[7]
            privatLink = data[8] == "True"
            beskrivelse = data[9]
            #universitet
            if forkortelseUniversitet not in self._universiteter:
                self._universiteter[forkortelseUniversitet] = Universitet(navnUniversitet, forkortelseUniversitet)
            universitet = self._universiteter[forkortelseUniversitet]
            #emne
            if kodeEmne not in universitet.hentEmner():
                universitet.leggTilEmne(Emne(navnEmne, kodeEmne))
            emne = universitet.hentEmne(kodeEmne)
            #notat
            notat = Notat(link, tittelNotat, forfatterNotat, semesterNotat, privatLink, beskrivelse)
            if notat not in emne.hentNotater():
                emne.leggTilNotat(notat)
        fil.close()

    def lastUtSystem(self):
        fil = open(self._filnavn, "w", encoding="utf-8")
        universiteter = self._universiteter
        for forkortelse in sorted(universiteter):
            universitet = universiteter[forkortelse]
            emner = universitet.hentEmner()
            for emnekode in sorted(emner):
                emne = emner[emnekode]
                notater = emne.hentNotater()
                for notat in sorted(notater):
                    fil.write(universitet.lastUt() + emne.lastUt() + notat.lastUt() + "\n")
        fil.close()

    def skrivInnNotater(self):
        #universiteter
        print("Vi har notater fra følgende universiteter:")
        for forkortelse in self._universiteter:
            print(self._universiteter[forkortelse])
        kommando = input("\nSkriv inn forkortelsen til et universitet: ")
        if kommando not in self._universiteter:
            nyKommando = input(kommando + " finnes ikke. Vil du legge det til? (ja/nei) : ")
            while nyKommando != "ja":
                if nyKommando == "nei":
                    print("notatet ble ikke lagt til")
                    return
                else:
                    nyKommando = input("forsøk igjen. (ja/nei) : ")
            navn = input("Skriv inn navnet til universitetet: ")
            self.leggTilUniversitet(Universitet(navn, kommando))
        universitet = self.hentUniversitet(kommando)
        #emner
        print("Vi har notater fra følgende emner ved dette universitetet: ")
        for emnekode in universitet.hentEmner():
            print(universitet.hentEmne(emnekode))
        kommando = input("\nSkriv inn forkortelsen til emnet: ")
        if kommando not in universitet.hentEmner():
            nyKommando = input(kommando + " finnes ikke. Vil du legge det til? (ja/nei) : ")
            while nyKommando != "ja":
                if nyKommando == "nei":
                    print("notatet ble ikke lagt til")
                    return
                else:
                    nyKommando = input("forsøk igjen. (ja/nei) : ")
            navn = input("Skriv inn navnet til emnet: ")
            universitet.leggTilEmne(Emne(navn, kommando))
        emne = universitet.hentEmne(kommando)
        #notater
        print("\nVi har følgende notater i dette emnet: ")
        for notat in emne.hentNotater():
            print(notat)
        link = input("Skriv inn linken til notatet: ")
        if emne.sjekkOmNotatFinnes(link) == True:
            print("notatet ble ikke lagt til")
            return
        tittel = input("Skriv inn tittelen til notatet: ")
        forfatter = input("Skriv inn forfatterne av notatet, skilt av ','").split(",")
        for x in forfatter:
            x = x.lstrip()
            x = x.rstrip()
        semester = input("Skriv inn semesteret notatet ble skrevet: ")
        kommando = input("Har notatet en privat link? (dvs. en link som ikke leder til Folkeliggjort sin Google Drive) (ja/nei): ")
        while kommando != "ja" and kommando != "nei":
            kommando = input("Forsøk igjen (ja/nei): ")
        if kommando =="ja":
            privatLink = True
        else:
            privatLink = False
        beskrivelse = input("Skriv inn beskrivelsen av notatet: (trykk enter om ingen beskrivelse)")
        notat = Notat(link, tittel, forfatter, semester, privatLink, beskrivelse)
        if notat not in emne.hentNotater():
            emne.leggTilNotat(notat)
            print("notatet ble lagt til")
        else:
            print("notatet finnes allerede")
            print("notatet ble ikke lagt til")

    def test(self):
        universitet = self.hentUniversitet("UiO")
        print(universitet)
        emne = universitet.hentEmne("IN1000")
        print(emne)
        print(emne.hentNotater())
        notat = Notat("https://test.no/1234", "Notater i IN1000", "Tobias Rade Evensen,Person nr 2,Person nr 3".split(","), "2020H", False, "")
        print(notat)

    def skrivUtJavascript(self, utskriftslokasjon):
        fil = open(utskriftslokasjon, "w", encoding="utf-8")
        #importerer klasser
        fil.write("import Notat from './notat.js';import Emne from './emne.js';import Universitet from './universitet.js';import Notatsystem from './notatsystem.js';\n")
        #lager notatsystem-objekt
        fil.write("var notatsystem = new Notatsystem();\n")
        #gjør klar variablene
        fil.write("var universitet; var emne; var notat;\n")
        #mellomlagring
        kode = ""
        #universiteter
        universiteter = self.hentUniversiteter()
        for forkortelse in universiteter:
            universitet = universiteter[forkortelse]
            kode += "universitet = new Universitet('" + universitet.hentNavn() + "', '" + universitet.hentForkortelse() + "');\n"
            kode += "notatsystem.leggTilUniversitet(universitet);\n"
            #emner
            emner = universitet.hentEmner()
            for emnekode in emner:
                emne = emner[emnekode]
                kode += "emne = new Emne('" + emne.hentNavn() + "', '" + emne.hentEmnekode() + "');\n"
                kode += "universitet.leggTilEmne(emne);\n"
                #notater
                notater = emne.hentNotater()
                for notat in notater:
                    kode += "notat = new Notat('"
                    kode += notat.hentLink() + "', '"
                    kode += notat.hentTittel() + "', "
                    kode += str(notat.hentForfatter()) + ", '"
                    kode += notat.hentSemester() + "', '" #!!!!!!!!!!!!!!!!!!!!!!!
                    kode += notat.hentBeskrivelse() + "');\n"
                    kode += "emne.leggTilNotat(notat);\n"
        kode += "export default notatsystem;\n"
        fil.write(kode)
        print("Javascript ble skrevet ut")
        fil.close()

    def meny(self):
        self.lastInnSystem()
        valgmuligheter = "\nvalgmuligheter:\n1: Legg til notat\n2: Skriv ut Javascript\n3: Skriv ut for implementasjon\n4: endre notat\nq: Avslutt"
        print(valgmuligheter)
        kommando = input("Ditt valg: ").strip().lower()
        while kommando != "q":
            if kommando == "1":
                self.skrivInnNotater()
                kommando = "resatt"
            elif kommando =="2":
                self.skrivUtJavascript("../javascript/jsInput.js")
                kommando = "resatt"
            elif kommando == "3":
                self.skrivUtImplementasjon()
                kommando = "resatt"
            elif kommando == "4":
                self.endreNotater()
                kommando = "resatt"
            else:
                print(valgmuligheter)
                kommando = input("Ditt valg: ")
        self.lastUtSystem()
        print("Notatsystemet ble avsluttet")

    def skrivUtImplementasjon(self):
        #filer som skal slås sammen
        filAlleKlasser = open("./alleKlasser.js","r", encoding="utf-8")
        filJsInput = open("./jsInput.js","r", encoding="utf-8")
        filHovedprogram = open("./hovedprogram.js","r", encoding="utf-8")
        #output
        filOutput = open("../output/notatsystem.js", "w", encoding="utf-8")
        #let's gooo!
        for linje in filAlleKlasser:
            filOutput.write(linje)
        teller = 0
        antallLinjer = len(filJsInput.readlines())
        filJsInput.seek(0)
        for linje in filJsInput:
            if teller < 1:
                pass
            elif teller == antallLinjer - 1:
                pass
            else:
                filOutput.write(linje)
            teller +=1
        teller = 0
        for linje in filHovedprogram:
            if teller < 6:
                teller += 1
            else:
                filOutput.write(linje)
        #lukker
        filAlleKlasser.close()
        filJsInput.close()
        filHovedprogram.close()
        filOutput.close()
        print("programmet er skrevet ut for implementasjon på nettsiden")

    def endreNotater(self):
        #universiteter
        print("Vi har notater fra følgende universiteter:")
        for forkortelse in self._universiteter:
            print(self._universiteter[forkortelse])
        kommando = input("\nSkriv inn forkortelsen til et universitet: ")
        if kommando not in self._universiteter:
            nyKommando = input(kommando + " finnes ikke.")
            return
        universitet = self.hentUniversitet(kommando)
        #emner
        print("Vi har notater fra følgende emner ved dette universitetet: ")
        for emnekode in universitet.hentEmner():
            print(universitet.hentEmne(emnekode))
        kommando = input("\nSkriv inn forkortelsen til emnet: ")
        if kommando not in universitet.hentEmner():
            nyKommando = input(kommando + " finnes ikke. Vil du legge det til? (ja/nei) : ")
            return
        emne = universitet.hentEmne(kommando)
        #notater
        print("\nVi har følgende notater i dette emnet: ")
        for notat in emne.hentNotater():
            print(notat)
        link = input("Skriv inn linken til notatet: ")
        if emne.sjekkOmNotatFinnes(link) == True:
            notat = emne.hentNotat(link)
            while kommando != "q":
                print("\nVelg hva du vil endre:")
                nyeValgmuligheter = []
                nyeValgmuligheter.append("link: " + notat.hentLink())
                nyeValgmuligheter.append("tittel: " + notat.hentTittel())
                nyeValgmuligheter.append("forfatter(e): " + str(notat.hentForfatter()))
                nyeValgmuligheter.append("semester: " + notat.hentSemester())
                nyeValgmuligheter.append("har privet link?: " + str(notat.hentPrivatLink()))
                nyeValgmuligheter.append("beskrivelse: " + notat.hentBeskrivelse())
                for i in range(len(nyeValgmuligheter)):
                    print("\n" + str(i) + ": " + nyeValgmuligheter[i])
                kommando = input("Ditt valg: ").strip().lower()
                #endre link
                if kommando == "0":
                    nyKommando = input("Skriv inn ny verdi: ").strip()
                    notat.endreLink(nyKommando)
                #endre tittel
                elif kommando == "1":
                    nyKommando = input("Skriv inn ny verd: ")
                    notat.endreTittel(nyKommando)
                #endre forfatter
                elif kommando == "2":
                    nyKommando = input("Skriv inn nye forfattere, adskilt av komma: ")
                    nyKommando.split(",")
                    for forfatter in nyKommando:
                        forfatter.rstrip()
                        forfatter.lstrip()
                    notat.endreForfatter(nyKommando)
                #endre semester
                elif kommando == "3":
                    nyKommando = input("Skriv inn ny verdi: ").strip().upper()
                    notat.endreSemester(nyKommando)
                #endre privatLink
                elif kommando =="4":
                    nyKommando = input("Skriv 1 for true, eller 0 for false: ").strip().lower()
                    if nyKommando == "1":
                        notat.endrePrivatLink(True)
                    elif nyKommando == "0":
                        notat.endrePrivatLink(False)
                #endre beskrivelse
                elif kommando == "5":
                    nyKommando = input("Skriv inn ny verdi: ").lstrip().rstrip()
                    notat.endreBeskrivelse(nyKommando)



#notatsystem.skrivUtJavascript("../jsInput.js")
