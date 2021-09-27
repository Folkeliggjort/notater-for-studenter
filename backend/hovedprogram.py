from shutil import copyfile
from notatsystem import Notatsystem
from universitet import Universitet
from emne import Emne
from notat import Notat

def meny(alternativer, kommandoer):
    def printAlternativer():
        print("\nAlternativer:")
        for i in range(len(alternativer)):
            print(str(i) + ": " + alternativer[i])
        print("q: gå ut")
    kommando = ""
    while kommando != "q":
        printAlternativer()
        kommando = input("Ditt valg: ").strip().lower()
        for i in range(len(alternativer)):
            if kommando == str(i):
                kommandoer[i]()
                kommando = "resatt"
    print("går ut")
def gjør1():
    notatsystem.skrivUtJavascript("./jsInput.js")
def lagAlleKlasser():
    #filer som skal slås sammen
    notat = open("notat.js", "r", encoding="utf-8")
    emne = open("emne.js", "r", encoding="utf-8")
    universitet = open("universitet.js", "r", encoding="utf-8")
    notatsystem = open("notatsystem.js", "r", encoding="utf-8")
    #utfil
    utfil = open("./alleKlasser.js", "w", encoding="utf-8")
    for linje in notat:
        utfil.write(linje)
    teller = 0
    for linje in emne:
        if teller in range(2): teller += 1
        else: utfil.write(linje)
    teller = 0
    for linje in universitet:
        if teller in range(2): teller += 1
        else: utfil.write(linje)
    teller = 0
    for linje in notatsystem:
        if teller in range(4): teller += 1
        else: utfil.write(linje)
    notat.close()
    emne.close()
    universitet.close()
    notatsystem.close()
    utfil.close()
def backup():
    dato = input("Skriv inn dagens dato: ")
    copyfile(".../backend, .../backup/backend")
        


notatsystem = Notatsystem("./notatsystem.txt")

alternativer = [
    "legg til notater",
    "endre notater",
    "skriv ut javascript",
    "lag 'alle klasser'-dokument",
    "skriv ut implementasjon"
]
kommandoer = [
    notatsystem.skrivInnNotater,
    notatsystem.endreNotater,
    gjør1,
    lagAlleKlasser,
    notatsystem.skrivUtImplementasjon
]
#^^Dette kan gjøre bedre ved hjelp av objekter, det gidder jeg ikke
print("laster inn system")
notatsystem.lastInnSystem()
print("notatsystem lastet inn")
meny(alternativer, kommandoer)
print("laster ut systemet")
notatsystem.lastUtSystem()
print("notatsystem lastet ut")
