var list = [
    {
         "id": "1",
         "name": "系统管理",
         "menuType": 0,
         "children": [
             {
                 "id": "1.1",
                 "name": "菜单管理",
                 "menuType": 2,
                 "children": [
                     {
                         "id": "1.1.1",
                         "name": "新增",
                         "menuType": 1
                     },
                     {
                         "id": "1.1.2",
                         "name": "修改",
                         "menuType": 1
                     }
                  ]
               }
        ]
   },
   {
         "id": "2",
         "name": "设备管理",
         "menuType": 0,
         "children": [
              {
                  "id": "2.1",
                  "name": "新增",
                  "menuType": 1
              },
              {
                  "id": "2.2",
                  "name": "修改",
                  "menuType": 1
              }
        ]
   }
];

function fn (list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
        if (list[i].children) {
            fn(list[i].children);
        }
    }
}

fn(list);

function fabonacci (n) {
    if (n == 1) return 0;
    else if (n == 2) return 1;
    else return fabonacci(n-1) + fabonacci(n-2);
}
