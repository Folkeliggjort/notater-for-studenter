from emne import Emne

class Universitet:
    def __init__(self, navn, forkortelse):
        self._navn = navn #str
        self._forkortelse = forkortelse #str
        self._emner = {} #emnekode nøkkel, Emne-objekt innhold

    def hentNavn(self):
        return self._navn

    def hentForkortelse(self):
        return self._forkortelse

    def hentEmne(self, emnekode):
        return self._emner[emnekode]

    def hentEmner(self):
        return self._emner

    def leggTilEmne(self, emne):
        self._emner[emne.hentEmnekode()] = emne

    def lastUt(self):
        return self._navn + ";" + self._forkortelse + ";"

    def __str__(self):
        return self._forkortelse + ": " + self._navn
