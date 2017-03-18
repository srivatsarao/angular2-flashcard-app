import { Injectable } from '@angular/core'

@Injectable()
export class FlashCardService{
    getQnAns(){
        return [{
                    'qn': 'What elements are in hydroxyapatite, Ca5(PO4)3OH, a major compound in human bones and teeth?',
                    'ans': 'calcium, phosphorus, oxygen, hydrogen',
                    'isActive': true
                },
                {
                    'qn': 'Absolute zero is',
                    'ans': 'the coldest temperature possible',
                    'isActive': false
                },
                {
                    'qn': 'The measurement 0.0000043 m, expressed correctly using scientific notation, is',
                    'ans': '4.3 x 10^-6m',
                    'isActive': false
                },
                {
                    'qn': 'Which of the following is a measurement of mass in the metric system?',
                    'ans': 'kilogram',
                    'isActive': false
                },
                {
                    'qn': 'A value of 25 degrees C is a measurement of',
                    'ans': 'temperature',
                    'isActive': false
                }
            ]
        }
}