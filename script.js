		// Słownik zawierający nazwy części i ich ceny
		var cennik = {
            'brak': 0,
            'ECU_V1': 5250,
            'ECU_V2': 9000,
            'ECU_V3': 15000,
			'ECU_V4': 20000,
            'Turbo_V1': 7500,
            'Turbo_V2': 12500,
            'Turbo_V3': 20000,
            'Turbo_V4': 25000,
			'Turbo_V5': 30000,
            'LPG_25L': 20000,
            'LPG_50L': 25000,
            'LPG_75L': 35000,
            'Zestaw.U': 25000,
            'Zestaw.W': 50000,
            'Zestaw.D': 75000,
            'Zestaw.T': 125000,
            'C.F.I_V1': 62500,
            'C.F.I_V2': 75000,
            'C.F.I_V3': 87500,
            'C.F.I_V4': 112500,
            'C.F.I_V5': 125000,
            'RWD': 30000,
            'AWD': 50000,
            'FWD': 20000,
            'MZN': 37500,
            'Bak_100L': 45000,
            'Bak_125L': 55000,
            'Bak_150L': 65000,
            'Radio': 250,
            'CB': 750,
            'Ogranicznik': 1000,
            'Wykrywacz_Fotoradarów': 1250,
            'ABS': 7500,
            'GZ': 16250,
            'Hydra': 22500,
            's1000': 3500,
            's1001': 4500,
            's1002': 3000,
            's1003': 5000,
            's1014': 2700,
            's1015': 2000,
            's1016': 2000,
            's1023': 4250,
            's1049': 2000,
            's1050': 1600,
            's1058': 1900,
            's1060': 2750,
            's1138': 4350,
            's1139': 4750,
            's1146': 3900,
            's1147': 3750,
            's1158': 3000,
            's1162': 2800,
            's1163': 5750,
            'p1007': 1050,
            'p1026': 1100,
            'p1030': 1250,
            'p1036': 1600,
            'p1039': 1800,
            'p1042': 800,
            'p1047': 1350,
            'p1048': 1150,
            'p1056': 1050,
            'p1057': 900,
            'p1069': 1550,
            'p1090': 1350,
            'p1093': 1200,
            'p1101': 1600,
            'p1102': 1150,
            'p1106': 1250,
            'p1107': 1050,
            'p1118': 1400,
            'p1119': 1650,
            'p1134': 750,
            'w1018': 600,
            'w1019': 400,
            'w1020': 300,
            'w1021': 200,
            'w1022': 100,
            'w1028': 700,
            'w1029': 550,
            'w1034': 800,
            'w1037': 700,
            'w1043': 450,
            'w1044': 200,
            'w1045': 450,
            'w1046': 350,
            'w1059': 450,
            'w1064': 375,
            'w1065': 450,
            'w1066': 650,
            'w1089': 750,
            'w1092': 600,
            'w1104': 1400,
            'w1105': 1600,
            'w1113': 1150,
            'w1114': 2050,
            'w1126': 1150,
            'w1127': 1250,
            'w1129': 1400,
            'w1132': 1700,
            'w1135': 1000,
            'w1136': 1250,
            'w': 0,
		};

		// Funkcja obliczająca łączną cenę pojazdu
        function obliczCene(cena_pojazdu) {
    var wybrane_czesci = [];
    var ecu_radios = document.getElementsByName('czesci_ecu');
    var turbo_radios = document.getElementsByName('czesci_turbo');
    var lpg_radios = document.getElementsByName('czesci_lpg');
    var zestaw_radios = document.getElementsByName('czesci_zestaw');
    var cfi_radios = document.getElementsByName('czesci_cfi');
    var naped_radios = document.getElementsByName('czesci_naped');
    var bak_radios = document.getElementsByName('czesci_bak');
    var pozostale_radios = document.getElementsByName('czesci_pozostale');
    var spoilery_radios = document.getElementsByName('czesci_spoilery');
    var progi_radios = document.getElementsByName('czesci_progi');
    var wydechy_radios = document.getElementsByName('czesci_wydechy');
    var zderzaktyl_radios = document.getElementsByName('czesci_zderzaktyl');
    var zderzakprzod_radios = document.getElementsByName('czesci_zderzakprzod');
    var dach_radios = document.getElementsByName('czesci_dach');
    var maska_radios = document.getElementsByName('czesci_maska');
    var lampytyl_radios = document.getElementsByName('czesci_lampytyl');
    var lampyprzod_radios = document.getElementsByName('czesci_lampyprzod');
    var reflektory_radios = document.getElementsByName('czesci_reflektory');
    var wenty_radios = document.getElementsByName('czesci_wenty');
    // Sprawdzenie, który radio button został wybrany w kategorii ECU
    for (var i = 0; i < ecu_radios.length; i++) {
        if (ecu_radios[i].checked) {
            wybrane_czesci.push(ecu_radios[i].value);
            break;
        }
    }
    
    // Sprawdzenie, który radio button został wybrany w kategorii Turbo
    for (var i = 0; i < turbo_radios.length; i++) {
        if (turbo_radios[i].checked) {
            wybrane_czesci.push(turbo_radios[i].value);
            break;
				}
			}
    // Sprawdzenie, który radio button został wybrany w kategorii LPG
    for (var i = 0; i < lpg_radios.length; i++) {
        if (lpg_radios[i].checked) {
            wybrane_czesci.push(lpg_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii Zestawy
    for (var i = 0; i < zestaw_radios.length; i++) {
        if (zestaw_radios[i].checked) {
            wybrane_czesci.push(zestaw_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii C.F.I
                for (var i = 0; i < cfi_radios.length; i++) {
        if (cfi_radios[i].checked) {
            wybrane_czesci.push(cfi_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii Napęd
                for (var i = 0; i < naped_radios.length; i++) {
                    if (naped_radios[i].checked) {
                        wybrane_czesci.push(naped_radios[i].value);
                        break;
                            }
                        }
                // Sprawdzenie, który radio button został wybrany w kategorii Bak
                for (var i = 0; i < bak_radios.length; i++) {
                    if (bak_radios[i].checked) {
                        wybrane_czesci.push(bak_radios[i].value);
                        break;
                            }
                        }
                            // Sprawdzenie, który radio button został wybrany w kategorii Pozostałe
                            for (var i = 0; i < pozostale_radios.length; i++) {
        if (pozostale_radios[i].checked) {
            wybrane_czesci.push(pozostale_radios[i].value);
            break;
				}
			}
                                        // Sprawdzenie, który radio button został wybrany w kategorii Spoilery
                                        for (var i = 0; i < spoilery_radios.length; i++) {
        if (spoilery_radios[i].checked) {
            wybrane_czesci.push(spoilery_radios[i].value);
            break;
				}
			}
                                       // Sprawdzenie, który radio button został wybrany w kategorii Progi
                                       for (var i = 0; i < progi_radios.length; i++) {
        if (progi_radios[i].checked) {
            wybrane_czesci.push(progi_radios[i].value);
            break;
				}
			}
                                       // Sprawdzenie, który radio button został wybrany w kategorii Wydechy
                                       for (var i = 0; i < wydechy_radios.length; i++) {
                                        if (wydechy_radios[i].checked) {
                                            wybrane_czesci.push(wydechy_radios[i].value);
                                            break;
                                                }
                                            }
                                       // Sprawdzenie, który radio button został wybrany w kategorii Tylny zderzak
                                       for (var i = 0; i < zderzaktyl_radios.length; i++) {
                                        if (zderzaktyl_radios[i].checked) {
                                            wybrane_czesci.push(zderzaktyl_radios[i].value);
                                            break;
                                                }
                                            }
                                       // Sprawdzenie, który radio button został wybrany w kategorii Przedni zderzak
                                       for (var i = 0; i < zderzakprzod_radios.length; i++) {
                                        if (zderzakprzod_radios[i].checked) {
                                            wybrane_czesci.push(zderzakprzod_radios[i].value);
                                            break;
                                                }
                                            }
                                        // Sprawdzenie, który radio button został wybrany w kategorii Dach
                                        for (var i = 0; i < dach_radios.length; i++) {
                                            if (dach_radios[i].checked) {
                                                wybrane_czesci.push(dach_radios[i].value);
                                                break;
                                                    }
                                                }                                           
                                        // Sprawdzenie, który radio button został wybrany w kategorii Maska
                                        for (var i = 0; i < maska_radios.length; i++) {
                                            if (maska_radios[i].checked) {
                                                wybrane_czesci.push(maska_radios[i].value);
                                                break;
                                                    }
                                                }           
                                        // Sprawdzenie, który radio button został wybrany w kategorii Tylnie lampy
                                        for (var i = 0; i < lampytyl_radios.length; i++) {
                                            if (lampytyl_radios[i].checked) {
                                                wybrane_czesci.push(lampytyl_radios[i].value);
                                                break;
                                                    }
                                                }       
                                        // Sprawdzenie, który radio button został wybrany w kategorii Przednie lampy
                                        for (var i = 0; i < lampyprzod_radios.length; i++) {
                                            if (lampyprzod_radios[i].checked) {
                                                wybrane_czesci.push(lampyprzod_radios[i].value);
                                                break;
                                                    }
                                                }      
                                        // Sprawdzenie, który radio button został wybrany w kategorii Reflektory
                                        for (var i = 0; i < reflektory_radios.length; i++) {
                                            if (reflektory_radios[i].checked) {
                                                wybrane_czesci.push(reflektory_radios[i].value);
                                                break;
                                                    }
                                                }      
                                        // Sprawdzenie, który radio button został wybrany w kategorii Wenty
                                        for (var i = 0; i < wenty_radios.length; i++) {
                                            if (wenty_radios[i].checked) {
                                                wybrane_czesci.push(wenty_radios[i].value);
                                                break;
                                                    }
                                                }      
                                                


            // Kalkulator
			var lacznacena = 0;
			for (var j = 0; j < wybrane_czesci.length; j++) {
				lacznacena += cennik[wybrane_czesci[j]];
			}
			lacznacena += parseFloat(cena_pojazdu);
			document.getElementById('cena').innerHTML = lacznacena + ' $';
		}