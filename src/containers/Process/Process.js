import React from 'react';
import Modal from '../../components/Modal/Modal'
const process = props => {
    {
        const usAmericanExpress = ["370264", "370265", "379030", "379031", "349010", "349011", "349012", "349013", "349014", "349015"]
        const usDiscover = ["601100", "601101", "601102", "601103", "601105", "601109", "601120", "601121", "601126", "601129"]
        const usVisa = ["401783", "406549", "406822", "406823", "406824", "406825", "406829", "406830", "406835", "406839"];
        const usMastercard = ["542341", "545554", "542407", "546036", "534382", "536020", "550464", "532598", "530757", "532852"]

        const caAmericanExpress = ["373290","373291","373292","373293","373294","373295","373296","373297","373298","373299"]
        const caDiscover = ["404237","410021","410022","410023","410024","410025","415897","415898","432211","432212"]
        const caMastercard = ["553240","553265","555077","555258","555259","556785","556797","555053","555097","555102"]
        const caVisa = ["440846","421021","421022","443894","443895","443896","456090","456091","471512","480868"]

        const euAmericanExpress = ["374726","374727","374787","374788","375400","375446","375456","375466","375448","375438"]
        const euVisa = ["402960","406573","483058","429973","456740","456741","456742","471530","445190","465939"]
        const euMastercard = ["543483","549629","535448","537441","531932","544501","544521","556295","529916","557435"]
        const euDiscover = ["402960","406573","483058","429973","456740","456741","456742","471530","445190","465939"]

        const auAmericanExpress = ["376060","376061","376062","376063","376064","376065","376066","376067","376068","376069"]
        const auMastercard = ["524983","524984","548847","519765","524445","553193","555165","555301","555301","533927"]
        const auVisa = ["408967","409208","423913","423918","429535","423937","423946","423952","450715","450713"]
        const auDiscover = ["408967","409208","423913","423918","429535","423937","423946","423952","450715","450713"]
        
        const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        const year = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"]

        var makeDate = () => {
            const monthRandom = Math.floor(Math.random() * month.length)
            const yearRandom = Math.floor(Math.random() * year.length)
            return month[monthRandom] + "/" + year[yearRandom]
        }
        var makeCvv = () => {
            return Math.floor(Math.random() * (999 - 100 + 1) + 100)
        }

        // CC MAKER

        function generateValidCard(bin, length) {
            var cardNumber = generate(bin, length),
                luhnValid = luhnChk(cardNumber),
                limit = 20,
                counter = 0;

            while (!luhnValid) {
                cardNumber = generate(bin, length);
                luhnValid = luhnChk(cardNumber);
                counter++;

                if (counter === limit) {
                    cardNumber = (luhnValid) ? cardNumber : makeCc()
                    break;
                }
            }

            return cardNumber;
        }

        function generate(bin, length) {
            var cardNumber = bin,
                randomNumberLength = length - (bin.length + 1);

            for (var i = 0; i < randomNumberLength; i++) {
                var digit = Math.floor((Math.random() * 9) + 0);
                cardNumber += digit;
            }

            var checkDigit = getCheckDigit(cardNumber);

            cardNumber += String(checkDigit);

            return cardNumber;
        }

        function getCheckDigit(number) {
            var sum = 0,
                module,
                checkDigit;

            for (var i = 0; i < number.length; i++) {

                var digit = parseInt(number.substring(i, (i + 1)));

                if ((i % 2) == 0) {
                    digit = digit * 2;
                    if (digit > 9) {
                        digit = (digit / 10) + (digit % 10);
                    }
                }
                sum += digit;
            }

            module = parseInt(sum) % 10;
            checkDigit = ((module === 0) ? 0 : 10 - module);

            return checkDigit;
        }

        var luhnChk = (function (arr) {
            return function (ccNum) {
                var
                    len = ccNum.length,
                    bit = 1,
                    sum = 0,
                    val;

                while (len) {
                    val = parseInt(ccNum.charAt(--len), 10);
                    sum += (bit ^= 1) ? arr[val] : val;
                }

                return sum && sum % 10 === 0;
            };
        }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

        // CC MAKER

        var makeBin = (bin) => {
            const binRandom = Math.floor(Math.random() * 10)
            return bin[binRandom]
        }

        var makeBinLength = (brand) => {
            if (brand === "AE") {
                return "15"
            } else if (brand === "D") {
                return "16"
            } else if (brand === "V") {
                return "16"
            } else if (brand === "MC") {
                return "16"
            }
        }

        var makeCc = () => {
            if ( props.ccDetails[0].cardDetail === "AE" && props.ccDetails[0].region === "US" ) {
                let cardNumber = generateValidCard(makeBin(usAmericanExpress),makeBinLength("AE"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "MC" && props.ccDetails[0].region === "US") {
                let cardNumber = generateValidCard(makeBin(usMastercard),makeBinLength("MC"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "V" && props.ccDetails[0].region === "US") {
                let cardNumber = generateValidCard(makeBin(usVisa),makeBinLength("V"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "D" && props.ccDetails[0].region === "US") {
                let cardNumber = generateValidCard(makeBin(usDiscover),makeBinLength("D"))
                return cardNumber
            }
            else if ( props.ccDetails[0].cardDetail === "AE" && props.ccDetails[0].region === "CA" ) {
                let cardNumber = generateValidCard(makeBin(caAmericanExpress),makeBinLength("AE"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "MC" && props.ccDetails[0].region === "CA") {
                let cardNumber = generateValidCard(makeBin(caMastercard),makeBinLength("MC"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "V" && props.ccDetails[0].region === "CA") {
                let cardNumber = generateValidCard(makeBin(caVisa),makeBinLength("V"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "D" && props.ccDetails[0].region === "CA") {
                let cardNumber = generateValidCard(makeBin(caDiscover),makeBinLength("D"))
                return cardNumber
            }
            else if ( props.ccDetails[0].cardDetail === "AE" && props.ccDetails[0].region === "EU" ) {
                let cardNumber = generateValidCard(makeBin(caAmericanExpress),makeBinLength("AE"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "MC" && props.ccDetails[0].region === "EU") {
                let cardNumber = generateValidCard(makeBin(caMastercard),makeBinLength("MC"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "V" && props.ccDetails[0].region === "EU") {
                let cardNumber = generateValidCard(makeBin(caVisa),makeBinLength("V"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "D" && props.ccDetails[0].region === "EU") {
                let cardNumber = generateValidCard(makeBin(caDiscover),makeBinLength("D"))
                return cardNumber
            }
            else if ( props.ccDetails[0].cardDetail === "AE" && props.ccDetails[0].region === "AU" ) {
                let cardNumber = generateValidCard(makeBin(auAmericanExpress),makeBinLength("AE"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "MC" && props.ccDetails[0].region === "AU") {
                let cardNumber = generateValidCard(makeBin(auMastercard),makeBinLength("MC"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "V" && props.ccDetails[0].region === "AU") {
                let cardNumber = generateValidCard(makeBin(auVisa),makeBinLength("V"))
                return cardNumber
            }else if (props.ccDetails[0].cardDetail === "D" && props.ccDetails[0].region === "AU") {
                let cardNumber = generateValidCard(makeBin(auDiscover),makeBinLength("D"))
                return cardNumber
            }
        }

    }
    return (
        <Modal card={makeCc()} date={makeDate()} cvv={makeCvv()} close={props.closeBtn} show={props.show} ccDetails={props.ccDetails} />
    );
}

export default process;