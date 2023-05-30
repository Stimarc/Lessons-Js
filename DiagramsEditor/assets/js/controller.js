export class Controller {
    // Props:
    names = [];                      // - масив іен кандидатів 
    results = [];                    // - масив результатів кожного кандидату  
    context = null;                  // - вміст графічної панелі canvas
    source = 'server/data.json';     // -  шлях до разташування файлу із даними
    colors = [                       // - масив кольорів для зафарбування діаграм
        'red', 'green','blue', 'purple','orange', 'gray',
        'darkcyan', 'bisque', 'silver', 'lavander' ,'navy'
    ];

     // Конструктор об'єктів:
     constructor() {
        console.log('Controller - OK');
     }

     //Метод завантаження даних із JSON-файлу:
     loadData() {
        // ...
     }
}