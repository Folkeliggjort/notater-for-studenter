from notat import Notat

class Emne:
    def __init__(self, navn, emnekode):
        self._navn = navn #str
        self._emnekode = emnekode #str
        self._notater = [] #list , kan bruke dict om jeg vil kunne hente spesifikke notater

    def hentNavn(self):
        return self._navn

    def hentEmnekode(self):
        return self._emnekode

    def hentNotater(self):
        return self._notater

    def hentNotat(self, link):
        for notat in self._notater:
            if notat.hentLink() == link:
                return notat

    def leggTilNotat(self, notat):
        self._notater.append(notat)

    def sjekkOmNotatFinnes(self, linkNotat):
        for notat in self._notater:
            if linkNotat == notat.hentLink():
                return True
        return False

    def lastUt(self):
        return self._navn + ";" + self._emnekode + ";"

    def __str__(self):
        return self._emnekode + ": " + self._navn
