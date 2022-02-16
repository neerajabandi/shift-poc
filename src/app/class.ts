

// class
// variable(string, number, boolean, number-array, string-array, objects)
// funxtions(with parameters, without parameters, with return types, without return types)

class StudentDetails {

    studentName: string = 'John';
    studentId: number = 10;
    status: boolean = true;
    studentIds: number[] = [10, 11, 70, 34, 89];
    //studentIds[2] = 70
    //studentIds.length = 5
    studentNames: string[] = ['tom', 'john', 'kevin'];
    //studentNames[1] = 'john'
    //studnetNmaes.length = 3
    student: any = { name: 'John', age: 24, email: 'john@gmail.com', course: 'CS' };
    //student.name - 'john'
    //student.course - 'CS'
    product: any = {
        pName: 'xbox', 
        pPrice: 500, 
        pId: '17xb', 
        shippingAvailable: true,  
        shippingAvailableCountrys: ['India', 'USA', 'Canada']
    };
    //product.shippingAddress - true
    //product.shippingAvailableCountrys[1] - 'USA'

    customer: any = {
        cName: 'John',
        cId: 'ct717t1',
        products: [
            { 
                pId: 'xb125', 
                pName: 'xbox', 
                price: 500, 
                shipAddress: {
                    stNo:'123 lee hwy', 
                    state: 'va', 
                    zip: '223456'
                }, 
                billAddress: {
                    stNo:'123 lee hwy', 
                    state: 'va', 
                    zip: '223456'
                } 
            },
            { 
                pId: 'ps30i', 
                pName: 'Play Station', 
                price: 600, 
                shipAddress: {
                    stNo:'123 lee hwy', 
                    state: 'va', 
                    zip: '223456'
                }, 
                billAddress: {
                    stNo:'123 lee hwy', 
                    state: 'va', 
                    zip: '223456'
                } 
            },
            { 
                pId: 'vr569', 
                pName: 'VR', 
                price: 400, 
                shipAddress: {
                    stNo:'123 lee hwy', 
                    state: 'va', 
                    zip: '223456'
                }, 
                billAddress: {
                    stNo:'123 old lee', 
                    state: 'va', 
                    zip: '223456'
                } 
            }
        ]
    };


    pnames: string[] = ['xbox', 'ps4', 'vr'];


    employees: any = [
        { id: 1, name: 'john', workingStatus: true },
        { id: 2, name: 'john sena', workingStatus: false },
        { id: 3, name: 'Mike', workingStatus: true },
        { id: 7, name: 'Mike', workingStatus: true }
    ];

    // customer.product2.pName = 'Play Station'
    // customer.products[1].pName - Play Station
    //{pId: 'ps30i', pName: 'Play Station', price: 600}

    //customer.cAddress - '9467 old leehwy fairfax va 22031'
    // customer.state - 'va'
    // cutomer.shippingAddress.state - 'va'
    // customer.billingAddress.city - 'Dallas'

    getAllStudents() {
        
    }

    getStudentById(id: number) {

    }

}





