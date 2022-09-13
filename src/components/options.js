import React from "react";

const options = () => {
  return ideje[between(0, ideje.length)];
};

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const ideje = [
  "Jetrca v omaki, pire krompir in solata.",
  "Zelenjavna rižota in solata",
  "Rižev narastek in kompot.",
  "Kislo repo in ajdove žgance",
  "Gosto zelenjavno juho, zreven pa spekla sojine zrezke, pa naredila dve vrsti sol.",
  "Segedin golaž s pire krompirjem.",
  "Rižota z bučkami, porom in piščancem.",
  "Solata s tuno, fižolom, česnom in parmezanom.",
  "Brancin v soli, kuhan krompir in sveža špinača.",
  "Zelena solata, zelena paprika, paradižnik, popečen kruhek s česnom.",
  "Na kockice narezan popečen piščanec.",
  "Jota s klobaso.",
  "Hlebčki iz faširanega mesa, tenstan krompir, solata.",
  "Svinjsko meso, prepraženo z papriko, porom, čebulo in drugo zelenjavo.",
  "Rižota s špargeljni in gamberami.",
  "Puranji zrezki s sirovo omako in pire krompir.",
  "Gosta zelenjavna juha s piščančjim mesom.",
  "Rezine govedine položene na rukolo, poterseno z parmezanom.",
  "Žrebičkov biftek z zelenjavno prilogo (por in bučke prepražene na olju in česnu).",
  "zelenjavna juha, skutne palačinke in čaj.",
  "ričet, svinjski vrat in krompirjeva solata.",
  "makaronovo meso in zelena solata.",
  "pizza",
  "včeraj pečene ribe, pire krompir ,sladko rdeče zelje in solata",
  "kuhana krača in prežen krompir in solata",
  "pečenka, pečen krompir, kuhana zelenjava in solata",
  "sobota široki rezanci s piščancem, in vso zelenjavo ki jo najdem doma in seveda solata",
  "špinača, pire iz vrečke, jajček na oko,",
  "zelenjavna rižota, solata,",
  "pečene hrenovke, grška solata,",
  "špageti z bučkami,",
  "špageti z morskimi sadeži,",
  "pečen krompir, zelenjavna priloga,",
  "koruzna juha, navihančki,",
  "čebulna juha, popečeni česnovi kruhki,",
  "pečene ribe, slan krompir,",
  "nabodalca, pečen krompir.",
  "blitva, krompir v kosih in riba.",
  "fižolova juha in klobasa.",
  "brstični ohrovt na maslu in belo meso – piščanec.",
  "polnjeni kalamari in brokoli (ne vem na kakšen način)",
  "piščanec s kokosom in riž.",
  "Solate različne – od pese do kitajskega zelja.",
  "piščančji file, bučke in paradižnik, prepražene s česnom in peteršiljem",
  "polnozrnate testenine z brokolijem in porom",
  "bučke, polnjene z zelenjavo, pečene v pečici, z malo nemastnega sira",
  "piščančji file z cvetačnim pirejem",
  "zelenjavni ražnjiči (bučke, čebula, paprika, melancani…) ali v kombinaciji z mesom",
  "zelenjavna rižota z neprečiščenim rižem",
  "solate",
  "zelenjavne juhe",
  "piščanec v voku z zelenjavo in sojino omako",
  "dušen piščanec s papriko",
  "polnozrnate testenine z zeljem",
  "krompir pečen v pečici",
  "špinača s česnom in riba, pečena v pečici",
  "zraven vsega pa vedno skleda solate, magar samo s kančkom olivnega olja in limoninim sokom",
  "Popečene bučke narezane na lističe, vmes pa feta sir da dobiš zelenjavno lazanjico, avokado na kockice narezan s tuno- dodaš malo kisa in soli, rukola-nanjo naložiš par ostružkov parmezana in pokapaš z olivnim oljem, paradižnik z mocarelo in baziliko: ta točka (9) je mišljena kot več različnih jedi na enem krožniku, vendar mora biti vsake jedi zares malo. Iz polnozrnatega kruha izreži z modelčki kruhke in jih tudi malo pokapaj z olivnim oljem…",
  "solata, francoski krompir, juha",
  "jaz – sadje, mož – rižoto z zelenjavo in gobicami, solata",
  "puranove kocke z začimbami, kuhan peteršiljev krompir, endivijo v solati in kakšno juho",
  "svinjski zrezki popečeni z zelenjavo in sirom v pečici",
  "recimo, da se jim reče mesne kocke – mleto meso (ostanki), zmešano z jajcem, sirom, popečeno čebulo, začimbami – naloženo v pekač, na vrhu koščki pelatov in sir, prelito z bešamelom – vse to bo naš bolnik dal v pečico",
  "pražen krompir, dušeno rdeče zelje",
  "brancin s koromačem v pečici, velika skleda mešane solate",
  "sojin golaž, popečena polenta, solata",
  "gobova juha, palačinke s skuto",
  "zelenjavna juha, tortelini s špinačo in sirom (seveda kupljeni)-preliti samo z maslom in potreseni s sirom, solata",
  "juha iz vrečke, goveji zrezki v omaki, polenta z brokolijem",
  "Riž, kuhana zelenjava, pariški zrezek, solata (Radič motovilec, zelena, koruza, fižol), kompot",
  "goveja juha * krompirjeva musaka * solata",
  "brokolijeva juha * pečen piščanec v pečici, položen na mešanico stročnic * zdrobovi cmočki (za otroke) * solata",
  "Ribja juha s spinacno kasico,moli na”lesso”,krompir z blitvo po dalmatinsko,",
  "pecena nadevana jabolka",
  "porova juha, sirove palačinke, jabolčna čežana ali kompot.",
  "boranija, vodni vrabčki, zelena solata… sladica",
  "Zelenjavna juhica, peresniki v omakci z rakci (se lepo rima, not pa je so še pelati, pa grška feta), zeleno solato s koruzo, muffins za sladico",
  "kotlet na žaru , pečen krompir z začimbami, solata (fižol, koruza).",
  "sarme (iz zamrzovalnika) in kruh",
  "juha(iz vrečke), pečene piščančje krače z marinado po ptujsko ter pomfri pečen v pečici ter zelena solata",
  "pizza",
  "danes krompirjeva juha s hrenovkami, veeelika masana solata, rizev narastek",
  "francoski zrezki ,zelje v omaki,pire,solata",
  "piščančji zrezki v smetanovi omaki s sirom, riž s cvetačo, zelena solata z jajcem;",
  "ražnjiče in “rdečo pašto”…tako jaz namreč rečem pašti s paradižnikovo omako",
  "Grahova juha s krompirjem, mesne kocke, ocvrt krompir, zelena solata, sladica od včeraj.",
  "Goveji zrezki v omaki z grahom, cmoki iz paljenega testa, zelena solata z jajcem in snežene kepe v vanilijevem pudingu",
  "Juha z rezanci,domaca krvavica s kislim zeljem in pitulicami samo s skutinim nadevom (namesto prazenega krompirja)",
  "marinirane piščančje krače z limono, zlato zapečene v pečici, zraven popečen krompir s peteršiljem, zelena in vložena solata, goveja juha s cmoki in školjkicami, za sladico pa domače napolitanke",
  "porova juha * ocvrti kaneloni s palačinko * pire * solata",
  "lečina juha * piščančji file * riž * popečena zelenjava z gobami * solata",
  "juha z zdrobovimi žličniki, pečen piščančji hrbet, dušeno rdeče zelje in pire kromp",
  "korenčkova juha (recept iz Kulinarika.net) in široki rezanci z mletim mesom, bučkami in paradižnikom.",
  "kaula (fižol, koleraba in korenje) in palačinke",
  "Tavče na gravče (fižol s pločevinke, že poleti prepražena čebula, paprika, paradižnik, česen in peteršilj – vse zmešano ter popečeno pečic",
  "puranje zrezke v sirovi omaki, skutine cmoke in motovilec",
  "dimljenega lososa v smetanovi omaki in motovilec",
  "pražena mlada goveja jetrca s čebulo, veliko skledo zelene solate s fižolom",
  "puranji zrezki (z bedrc) namazani z dijonsko gorčico, popečeni v ponvi, nato zaliti z belim vinom in na koncu s kislo smetano, krompir, kuhan na sopari, solata",
  "jetrca v omaki, pire krompir, zelena solata",
  "goveja juha, pitulice nadevane z mletim mesom in šampinjoni, zelena solata",
  "juha, golaž iz mletega mesa in zelenjave ter testenine, solata iz kitajkega zelja",
  "fižolova juha z rižem in zreven makaroni z prepraženimi drobtinicami. Na koncu pa še motovilec z jajčkom",
  "lazanja in solata",
  "zelenjavno juho, rižoto s piščancem in peso",
  "krompirjeve blazinice s skuto in paradižnikovo omako s tuno",
  "piščančji paprikaš in za prilogo riž, popečeni jajčevci v solati in zelena solata za otroke. Za sladico tortica z jagodami, vanilijevo kremo in jagodno smetano",
  "goveja juha,skutin zavitek z zelenjavo,solata.",
  "piscancja obara,krompirjevi zganci.",
  "piščančji kroketi in zelena solata",
  "Piščančji paprikaš, flancati.",
  "Špageti s tunino in zelenjavo pa solatka zraven z mlado čebulo",
  "Sveza repa v omaki, popečena polenta, radič",
  "slan rižev narastek z brokolijem, zeleno solato z jajcem in za sladico Panna Cotto z jagodnim prelivom",
  "špageti s polivko iz puranje šunke, graha in paradižnika, mešana solata (zelena, kumare, paradižnik, koruza…",
  "puranje zrezke v sirovi omaki, skutine cmoke in motovilec",
  "paradižnikova juha z rižem, skutni štruklji in jabolčni kompot s svežim mangom",
  "puranji zrezek v zelenjavni omaki in riž",
  "zelenjavno juhico, pečenega piščanca, zdrobove krokete in zeleno solato z jajcem",
  "Piščančji paprikaš, kruhovi cmoki",
  "goveji golaž in vodni vrabčki, mešana solata (paradižnik, paprika, kumara, koruza) in za sladico sem morala ponoviti biskvitno rolado s smetano in mandarinami",
  "zelenjavna omaka s koščki piščančjega fileja, riž",
  "špinačno juho z rižem in puding, ko ni bilo časa za kuho",
  "domača pica s tuno ter rolada s kislo smetano in marmelado",
  "goveja juha, goveji rezanci v zelenjavni omaki ter jasmin riž, solata, sladica- jogurtovo pecivo s čokolado",
  "pire krompir in smetanova – šampijonova omaka",
  "juho, pečena piščančja bedra, pečen krompir, rdečo peso in tortico;",
  "Kuhani skutini struklji z belusi in belusevo prilogo,v zar posodi pecen zrezek,radic s paradižnikom",
  "Smo pa včeraj izkoristili še zadnji lep večer – na vrtu smo si s prijatelji priredili “pastirsko” večerjo – vsak svojo palico in na njej “pasjo radost”, ki si jo je spekel vsak, kakor si želel. Otroci so imeli svoj ogenjček, ta veliki pa svojega. Super je bilo!",
  "Ajdova kaša z gobami",
  "Porova rižota",
  "Piščanec + zelenjava (sladki krompir, paprika, šampinjoni …) v pečici",
  "File brancina + blitva",
  "Tortilje",
  "Mineštra/bučna juha + palačinke/šmorn",
  "Testenine (carbonara, bolognese, paradiznik, tuna …)",
  "Domača pica",
  "Domač burger",
  "Goveji zrezki v čebulni omaki",
  "Goveja juha + meso iz juhe",
  "Zeljanica/sirnica/mesni burek",
  "Meso (rebrca) + solata",
  "Solata z vsem (zelena, paradižnik, bučke, koruza, pirina kaša, piščančji trakci …)",
  "Školjke na buzaro",
  "Kari s kozicami + riž",
  "Praženi kitajski rezanci",
  "Fižolova enolončnica",
  "Ričet, zelje, repa s klobaso ali narezano hrenovko",
  "Omleta z zelenjavo, gobami, parmezanom",
  "Špinačna rižota",
  "Paniran sir, njoki v smetanovi omaki, cmoki",
  "Tortelini z pestom in razne solate",
  "Kumare v omaki in pire",
  "Ribca z krompirjem z maslom in zelišči",
  "Široki rezanci z morskimi sadeži",
  "Gratinirane polnjene paprike, malancani",
  "Bučke iz pečice",
  "Kislo zelje ali repa",
  "Matevž, pečenice",
  "Piščančja obara",
  "Rižota z morskimi sadeži",
  "Solata + čufte v paradižnikovi omaki",
  "Pire krompir, solata",
  "Zelenjavna enolončnica, skutine palačinke gratinirane in pečene v pečici",
  "Fižolova enolončnica, sladko proso z jabolki",
  "Golaž in kruhovi cmoki, solata",
  "Pirini njoki z rukolo, solata",
  "Tartufata, solata",
  "File osliča v omaki z belo polento, solata",
  "Testenine z golažem ali s kakšno drugo omako",
  "Vse vrste zelenjave (trenutno jemo v glavnem repo in zelje, ker drugega na vrtu ni)",
  "Krompir (tenstan, pire,)",
  "Enolončnice – zelenjavne mineštre, ričet, pašta – fižol, jota in kot priloge: palačinke,",
  "frtalja, rižev narastek",
  "Njoki z golažem ali z sirovo omako (gorgonzola)",
  "Rižot z mesom ali z zelenjavo",
  "Polenta z brodetom",
  "Riba (največkrat jih ocvrem)",
  "Krompirjev golaž",
  "Špageti z domačim pestom + solata",
  "Brodet iz hobotnice",
  "Krompirjeva kremna juha s hrenovkami",
  "Jajčna pita z več siri/s špinačo in šampinjoni",
  "Kus kus, zraven pa navaden goveji golaž.",
  "polenta s skuto in parmezanom, zraven zelena solata. Odlična jed, zadnje čase jo naredimo zelo velikokrat.",
  "pražena jetrca, pire krompir, vasrspacli, zelena solata.",
  "piščančja juha z grahom, krpicami in jetrnimi cmoki(pripravljeno vnaprej), pomfri v pečici, zelena solata in na hitro opečene perutničke v ponvi z začimbami in limono. Sladica: hitro pecivo z jogurtom in gozdnimi sadeži",
  "ocvrta jajca, kruh, radič s fižolom",
  "riž, zelenjavna omaka, zelena solata s koruzo",
  "popečen zrezek, pečen koromač, sojini rezanci, smetanova omaka, zelena solata",
  "grahova juha, palačinka-kaneloni s šunko in sirom, gobova omaka, pire krompir,",
  "zelena solata, marelična lahka torta",
  "postrv in mesni polpeti v pečici, brokoli, riž, zelena solata, višnjev zavitek",
  "juha, pravi testeninski kaneloni (pol mesni, pol zelenjavni), solata",
  "hrenovke, kajmak in se nekaj podobnih sirčkov, ajvar, zenf, stoletni kruh in solata.",
  "zdrobovi ocvrti češpljevi cmoki in sladka sadna omakca",
  "matevž s kislim zeljem in krvavico",
  "makaronovo meso, solata",
  "Kisla repa s prekajenimi vršički, zraven ajdina kasa,zabeljena z na olivnem olju prepraženo čebulo. H temu se je prilegel se jabolčni zavitek z veliko cimeta.",
  "rižota z nekaj koščki mesa in grahom ter kristalka s česnom",
  "juha, pečena piščančja bedra, dušeno rdeče zelje in pire krompir",
  "špageti s paradižnikom, tuno in popečenimi bučkami, zelena solata z jajcem in za sladico marinirane breskve (sladkor, limona) s smetano",
  "fižolova juha (no, ne čisto fižolova, ker sem dodala še eno bučko in nasekljano papriko – ampak prevladuje okus po fižolu), testenine svedrčki z omakico iz bučk in česna",
  "riž s smetanovo omako iz bučk piščanca cvetače in podobne zelenjave",
  "sardoni; blitva s krompirjem; orehova rulada s smetanovo jagodnim",
  "nadevom.",
  "Krapi; iz ajdove moke, polnjeni s kašo in skuto.",
  "juha iz piščančjih kosti z zdrobovimi žličniki in krpicami, piščančji file s sirom in šunko, pomfri iz pečice, veliko zelene solate in makove kocke.",
  "kosilo z žara.. piščančji fileji in svinjski kotleti, bučke s sirom in paradiznikom,",
  "zeleni šparglji oviti v slanino, pečen krompir, zelena solata",
  "juha, puranja nabodala, kruh",
  "makaroni v paradižnikovi omaki s sirom",
  "goveja juha, kuhan mlad krompir, ocvrti svinjski zrezki(po dolgem času) ter zeljna",
  "solata, sladica – skutino pecivo z borovnicami",
  "piščančji žur (fileji, pečeni v smetani v pečici; recept v bazi na kulinariki), pečen",
  "mlad krompirček, zelena solata, malinovi mafini",
  "fižolova juha, krompirjeva musaka, zelena solata z redkvico, princeske",
  "Piščančji fileji v smetanovi omaki, dušeni riž s korenčkom, zelena solata s koruzo in za sladico sirov in jabolčni zavitek.",
  "beluševa kremna juha s krompirjem, sirove palačinke, breskova “bovla” z jabolčnim sokom",
  "goveji golaž, krompirjevi svaljki, zelena solata z jajcem",
  "testenine s paradižniki, jajčevci in sirom, zeljnata solata s krompirjem, puding",
  "dušeni piščanec s paradižnikom in kislo smetano, zdrobovi cmoki, zelena solata s koruzo, Panna Cotta z jagodnim prelivom",
  "njoki z mesno omako, solata iz tune ,koruze ,sojinih kalčkov in zelene solate",
  "sardele z rožmarinom v pečici, krompirjeva solata",
  "omleta z beluši, zelena solata",
  "rižota z morskimi sadeži, pečena paprika v solati",
  "špargljeva kremna juha s kruhovimi kockami, marmeladni cmoki in breskova “bovla” z jabolčnim sokom.",
  "testenine s piščančjimi jetrci, paradižnikom in bučkami, zeleno solato z jajcem in za sladico puding;",
  "juha, piščančji fileji popečeni v pečici s paradižnikom, sirom in preliti s kislo smetano, zdrobovi kroketi, zelena solata s koruzo.",
  "Torej… jaz sem v namaščeno posodo zložila piščančje fileje, če so zelo debeli jih lahko vodoravno razpoloviš, premazala s soljo in malo stisnjenega česna (česen po želji) in pokrila z rezinami paradižnika, ter najprej to pekla cca. pol ure. Potem sem vse skupaj pokrila z rezinami sira in prelila s kislo smetano z jajcem. Pečeš še toliko, da se lepo zapeče",
  "piščanec/postrv v pečici, pečen koromač, mlad krompirček, zelena solata",
  "porova juha, pravi kaneloni s testenimi cevkami, malo mesni, malo skutni s porom, zelena solata",
  "puranji fileji in svinjski kotleti, bučke s sirom in paradižnikom, riž z zelenjavo na žaru",
  "krompirjeva solata ter ocvrti fileji osliča",
  "goveja juha, pečene krače piščanca in puranji file, zraven pečen mlad krompir, jasmin riž, pečene bučke na žaru ter paradižnikova in zelena solata ter pitulice",
  "polnjene paprike s krompirjem in sirom",
  "pečene sardelice, zelena solata, ocvrte krompirjeve kocke, zelenjavna juha, sladoled.",
  "prebranac, zelenjavna juha za najmlajše in eno pecivo,verjetno kar skutine ledene kocke ali pa kvašeni štruklji",
  "čufti, in kruh",
  "pizzo, breskova tortica s smetano pa se že hladi",
  "juho s porom, cvetačo in vlivanci, pečena piščančja bedra, pečen krompir po Jamie-vo (v kosih skuhan krompir, ki ga odcedi in v posodi pretrese, da se malo “spacka”, pretrese v pekač in zapeče – njamska, tista skorjica) in zelena solata s koruzo.",
  "chili con carne, polenta, zelena solata",
  "pražen riž z jajcem, bučke s kislo smetano",
  "postrv, polnjena s timijanom, krompirjeva solata",
  "piščančji koščki z zelenjavo in sladko smetano v omaki, riž in zelena solata",
  "čufte v paradižnikovi omaki, pire krompir, zeljnata solata z jajcem",
  "piščančji fileji z gobami in smetano, dušeni riž, zelena solata s koruzo in za sladico čokoladna smetana;",
  "grahova juha, špecli s sirom, zelena solata s koruzo",
  "pečen cel piščanec, ostanek špeclov, ocvrt krompirček, brokoli in korenček, zelena solata",
  "Cmoki polnjeni s čokolado (na žalost kupljeni, ampak dooobriii – njami!) in višnjev kompot.",
  "piščančja obara z veliko zelenjave in sirov zavitek",
  "Bučke in krompir sem res na tanko nalistala(na multipraktik – 1-2mm rezine), najprej sem nekaj minut dušila krompir, nato pa sem dodala še bučke, začinila in po ene 10ih minutah je bilo pripravljeno. Lahko dodaš še kislo smetano, preizkušeno dobro!",
  "Boranija z govejim mesom, drobni žličniki, paradižnikova solata s papriko in koruzo in za sladico rolada z banano in kakavovo smetano.",
  "gobova juhica iz svežih jurčkov, piščančji zrezki v lastnem soku, domači široki",
  "rezanci (iz domačih jajčk so takooo rumeni), omakca iz bučk in paradižnika z veliiiiiko česna in sveže bazilike, zelena solata.",
  "lazanja z bučkami, gobicami in sirom, solata",
  "zelenjavna juha, goveji zrezki z gobicami (čez vikend smo nabrali veliko jurčkov in lisičk), ostanek lazanje za prilogo, paradižnikova solata, jagode iz domačega balkona (letos sem sadila v korita namesto okrasnega cvetja kar viseče jagode – zelo so dobre in bogato rodijo). Za obisk in popoldanski prigrizek pa pitulice, ki so goste zelo navdušile (v en zvitek sem dala bučke, popečene na domači slanini, začinjene s česnom in baziliko, v drugega pa na žaru popečeno papriko in mlad sirček).",
  "svinjski zrezki v gobovi omaki z gorgonzolo, njoki, solata.",
  "piščančji pohani zrezki, pečen krompir, rdeča pesa (domač pridelek), paradižnikova",
  "solata, jagodna pita",
  "dobri stari segedin",
  "sladko kosilo… rižev narastek, seveda pa ni manjkala juha… špargljeva kremna s krompirjem in popečenimi kruhovimi kockami",
  "spet boranijo, tokrat s polento, paradižnikovo solato in za sladico puding.",
  "njoki z drobtinami ali s smetanovo omako (kisla smetana in lahki zelenjavni tamar) ter zelena solata",
  "goveja juha, mlad pečen krompir, svinjska pečenka, endivija s krompirjem ter",
  "skutin zavitek s češnjami ali borovnicami",
  "pečeni in pohani škrapenini fileji (vsak si vzame po želji),velik pekač v pečici pečene",
  "zelenjave (mlad krompirček, čebulice, koromač, korenček, bučke…..), obvezna",
  "zelena solata, tokrat z jajcem, posladek pa ananasov kompot ter korneti (kupljeni)",
  "polpeti, pire in sladka korenčkova omaka (skuhaš korenček, odliješ in prihraniš vodo, na maslu prepražiš malo sladkorja, dodaš moko pa odcejeno korenje, pomešaš in počasi dolivaš vodo od kuhanja – toliko, da nastane gosta omaka, mnammmi",
  "pečen kifelčar, meso (še ne vem kateri zrezki – nagibam se k kotletom), juha, solata",
  "pečen ostriž in cel pekač v pečici pečene zelenjave (mlad krompirček, korenje v lističih, bučke, koromač, …..), zelena solata in tržaška omaka, za sladico je bila tista rumena krema za kremšnite z rumom v skodelicah, čez na grobo nastrgana čokolada (je “izpuhtelo” v hipu 🙂",
  "Še po morju dišeče sardele na žaru. Zraven kuhan mlad krompirček, v skledici tržaska omaka. Potem si vsak doda h krompirju in sardelam – eni malo več, drugi skoraj nič.",
  "Skleda mešane solate in višnjev zavitek. Po visnjah sem posula se malo na grobo nasekljanih mandeljnov – ta kombinacija je imenitna. Enako naredim tudi za višnjevo pito s krhkim testom.",
  "kosilo bolj na hitro: testenine s tuno in paradižnikom, zelena solata s koruzo in za sladico Panna Cotta s svežim mangom;",
  "goveji zrezki v omaki, kruhovi cmoki, mešana solata in za sladico morda sadna kupa",
  "Polnjeni lignji na žaru. Lignje polniš klasično (drobtine, peteršilj, česen ali pa s pršutom in sirom), jih popečeš na žaru (ali ponvi). na krožnik lepo razporediš rukolo, na njo položiš lignje in lovke in pokapljaš s tržaško omako ali pa samo z olivnim oljem. Pa s tržaško ne bi pretiravala, da ne prekrije okusa lignjev. v bistvu, če jih bom polnila z drobtinami, česnom in peteršiljem, bom kasneje pokapljala samo z olivnim oljem. čisto enostavno, pa takooo dobro :). zelo dobro je tudi, če niso polnjeni, ampak samo popečeni na žaru in na rukoli.",
  "piščančji file (ki ga zdajle pacam v mešanici olivnega olja, gorčice, hrena, česna, rožmarina, timijana), paprike polnjene z bučkami, skuto in sirom in solato iz paradižnika, kumar in bele čebule.",
  "musaka iz krompirja in bučk (recept je iz zadnje knjige sestre Vendeline), zraven pa paradižnikova solata.",
  "Paradižnikova juha, piščančji fileji po dunajsko, krompirjeva solata s kumarami.",
  "mlad krompir v pečici z veliko kumine in peteršilja, zraven zrezek (svinjski), pečen kar zraven v pečici in zelena solata z domačega vrta. Malo dela, veliko veselja.",
  "Skuto večkrat zamešam med ostale sestavine za omako. Tudi s samo skuto zabelim široke rezance. Nam je vsem všeč. Gledam le, da skuta ni prekisla.",
  "haše, ampak bom dala malo mesa, pa veliko zelenjave – zeleno in rdečo papriko, svež paradižnik, čili, korenček. pa seveda skleda zelene solate z rumeno papriko.",
  "Bučke na omako in žitni polpeti",
  "Pečen krompir; bučke s papriko in paradižnikom v omaki",
  "dunajski zrezki, mlad pečen krompir, zelena solata s paradižnikom",
  "gobova juhca, kmečka rižota (kupljena zmes), jajčevci na žaru",
  "juha iz zmečkanega krompirja s česnom in kruhovimi kockami, pečen piščanec z",
  "zelenjavo in pečen krompir (kar v pečici s piščanem s peteršiljem)",
  "bučkine polpete in riž z ingverjem, čilijem, parmezanom in bučkami (res ful dobro)",
  "mešano solato s koščki piščančjega fileja popečenega na žaru (rukola, paradižnik,",
  "rumena in zelena papika, popečene bučke, bela čebula, mozarella, olivno olje in kis).",
  "pašto z omako iz bučk, paprike in paradižnika",
  "zelenjavna kremna juha ter palačinke z jagodnim džemom ali evrokremom",
  "pečeno puranje bedro, za prilogo je bil riž, solata, sladica pa pecivo s češnjami",
  "koromačeva juha s krompirčkom in smetano (zame brez), pečen maldi krompirček v pečici, dušene bučke, paprika in mlad korenček (že z domačega vrta), paradižnikova solata z domačim svežim sirom in baziliko, zelena solata, za moški del pa še polpeti iz jelenjega mesa",
  "sladica: italijanski rogljički, milka, kavica, piškotki…..znajdi se 😉",
  "pečenka in mladi krompir iz pečice, solata, rulada s smetano in jagodami",
  "goveja juha, lazanja z mletim mesom in korenčkom, zelena solata, malo prirejene skutine ledene kocke",
  "porova juha s krompirjem, palačinke, jabočno-marelični kompot",
  "špinačna juha z jajcem, pečena piščančja bedra, pečen krompir, zelena solata",
  "omaka iz mletega mesa in zraven njoki s sirom ter rdeča pesa",
  "“šnicli” s krompirjem ter veliko zelene solate",
  "golaž, polenta in solata",
  "jajčevce po parmsko (domače, take, ki malo pikajo), mož zrezek na žaru in skleda radiča z rukolo. Sladoled z višnjevim prelivom .",
  "Jajčevci po parmsko: Ocvrte panirane rezine jajčevcev zvečer zložim v plasteh v pekaček tako: plast jajčevcev, malo paradižnikove omake,parmezan in nacufana bazilika- ponovim dve ali tri plasti.Na vrhu omaka in kar veliko sira. Pustim čez noč. Potem 20 minut priblizno v pecico.",
  "Zelo preprosto, nič bešamela in pršuta kot delam pasticcio. Je dobro, osvezilno. Seveda mi je mož včeraj ukradel nekaj hrustljavih rezin, preden sem jih dala v omako.",
  "tunin steak s koriandrom, popečene bučke, melancane in paprika",
  "limonov riž, stročji fižol v pikantni paradižnikovi omaki",
  "polnjene bučke, paradižnikova solat",
  "Narastek iz bučk in krompirja, s feta sirom, smetano in ovčjim sirom. Odlično 🙂",
  "voku puranji koščki, popečena hrustljava razna zelenjava, jasminov riž, zelena solata s fižolom, Zalino tribarvno pecivo z ribezom in marelicami",
  "puranji zvitki s sirovo palačinko ala Babi, zdrobovi cmočki, grah, zelena solata in gotovo bo ostalo še nekaj peciva",
  "pikantna zelenjavna juha bučkini polpeti, paradižnikova solata.",
  "sirovi štruklji in solata (zelena ali paradižnik)",
  "sirovi štruklji z drobnjakom, mešana solata mogoče kakšna juhica, za posladek pa Rafaelo kocke",
  "postrv, polnjena z limoninim timijanom, zelena solata s paradižnikom",
  "solata iz stročjega fižola, paradižnika, tune in jajc, po želji pitulice",
  "popečena polenta z gorgonzolo, paradižnikova omaka z olivami, solata",
  "juha iz domače zelenjave – korenček, grah, krompir in zdrobovi žličniki ter rižev narastek",
  "brokolijeva juha, telečja pečenka, popečen koromač, kuskus, zelena solata, jagodna torta",
  "“popravljena” brokolijeva juha, narastek iz širokih rezancev s sirom in ostankom",
  "pečenke, zelena solata s paradižnikom, torta",
  "puranji golaž s polento in zeleno solato",
  "juhica, polpeti iz bučk ter solata iz stročjega fižola",
  "goveja juha, puranja rulada (file polnjen s kruhovim nadevom, korenčkom in sirom), pečene piščančje krače, riž, gobovo-sirova omaka in endivija s čičeriko, sladica",
  "Piščanec z ananasom in curryem; priloga riž ali kuhana zelenjava, zelena solata.",
  "Sladica: ribezova pita",
  "Ravioli (skuta,spinaca) s pestom, solata: rdeca pesa, fizol v strocju, paradiznik in malo mozzarelle, visnjeva pita",
  "Polenta s skuto; zelenjavna omaka iz paradižnika, paprike, bučk, korenja in graha.",
  "Paradižnikova solata. Pa posladek pa jagode 🙂",
  "haše, ampak bom dala malo mesa, pa veliko zelenjave – zeleno in rdečo papriko,",
  "svež paradižnik, čili, korenček. pa seveda skleda zelene solate z rumeno papriko.",
  "Bučke na omako in žitni polpeti.",
  "Pečen krompir; bučke s papriko in paradižnikom v omaki.",
  "dunajski zrezki, mlad pečen krompir, zelena solata s paradižnikom",
  "gobova juhca, kmečka rižota (kupljena zmes), jajčevci na žaru",
  "juha iz zmečkanega krompirja s česnom in kruhovimi kockami, pečen piščanec z",
  "zelenjavo in pečen krompir (kar v pečici s piščancem s peteršiljem)",
  "bučkine polpete in riž z ingverjem, čilijem, parmezanom in bučkami",
  "mešano solato s koščki piščančjega fileja popečenega na žaru (rukola, paradižnik,",
  "rumena in zelena paprika, popečene bučke, bela čebula, mozarella, olivno olje in kis).",
  "zelenjavna kremna juha ter palačinke z jagodnim džemom ali evrokremom",
];
export default options;