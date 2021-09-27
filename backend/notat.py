class Notat:
    def __init__(self, link, tittel, forfatter, semester, privatLink, beskrivelse):
        self._link = link #str
        self._tittel = tittel #str
        self._forfatter = forfatter #list
        self._semester = semester #str
        self._privatLink = privatLink #boolean
        self._beskrivelse = beskrivelse #str, kan ikke inneholde ";"

    def hentLink(self):
        return self._link
    def endreLink(self, link):
        self._link = link

    def hentTittel(self):
        return self._tittel
    def endreTittel(self, tittel):
        self._tittel = tittel

    def hentForfatter(self):
        return self._forfatter
    def endreForfatter(self, forfatter):
        self._forfatter = forfatter

    def hentSemester(self):
        return self._semester
    def endreSemester(self, semester):
        self._semester = semester

    def hentPrivatLink(self):
        return self._privatLink
    def endrePrivatLink(self, privatLink):
        self._privatLink = privatLink

    def hentBeskrivelse(self):
        return self._beskrivelse
    def endreBeskrivelse(self, beskrivelse):
        self._beskrivelse = beskrivelse

    def lastUt(self):
        mellomlagring = self._link + ";" + self._tittel + ";"
        i = 0
        while i < len(self._forfatter):
            mellomlagring += self._forfatter[i]
            if i < len(self._forfatter) - 1:
                mellomlagring += ","
            i += 1
        mellomlagring += ";" + self._semester + ";" + str(self._privatLink) + ";" + self._beskrivelse
        return mellomlagring

    def __str__(self):
        forfatter = self._forfatter[0]
        if len(self._forfatter) > 1:
            forfatter += " m.f."
        return self._tittel + ", av " + forfatter + ", skrevet " + self._semester + ", link: " + self._link

    def __eq__(self, other):
        return self._link == other._link

    def __lt__(self, other):
        return str(self) < str(other)
