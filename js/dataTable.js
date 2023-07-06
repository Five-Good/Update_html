//dataTable filter icon
  $('table.dataTable thead>tr>th:before').addClass('fa-solid fa-angle-up');
  $('table.dataTable thead>tr>th:after').addClass('fa-regular fa-angle-down');
 
  $('#mediaList').DataTable({ 
        'columnDefs': [{
          'targets': [ 0, 3, 5, 8 ], // 第幾個欄位
          'orderable': false, // 隱藏篩選
        }],
        "language": {
          "lengthMenu": ' <select>' +
            '<option value="10">10/頁</option>' +
            '<option value="20">20/頁</option>' +
            '<option value="50">50/頁</option>' +
            '<option value="-1">100/頁</option>' +
            '</select> ',
            "paginate": {
              "previous": "",
              "next": ""
            },
            "info": "共 3",
            "infoEmpty": "尚無資料",
        },
      });

  $('#deviceList').DataTable({ 
      'columnDefs': [{
        'targets': [ 0, 5, 9 ], // 第幾個欄位
        'orderable': false, // 隱藏篩選
      }],
      "language": {
        "lengthMenu": ' <select>' +
          '<option value="10">10/頁</option>' +
          '<option value="20">20/頁</option>' +
          '<option value="50">50/頁</option>' +
          '<option value="-1">100/頁</option>' +
          '</select> ',
          "paginate": {
            "previous": "",
            "next": ""
          },
          "info": "共 3",
          "infoEmpty": "尚無資料",
      },
    });

  $('#playList').DataTable({ 
      'columnDefs': [{
        'targets': [ 0, 3, 5, 8 ], // 第幾個欄位
        'orderable': false, // 隱藏篩選
      }],
      "language": {
        "lengthMenu": ' <select>' +
          '<option value="10">10/頁</option>' +
          '<option value="20">20/頁</option>' +
          '<option value="50">50/頁</option>' +
          '<option value="-1">100/頁</option>' +
          '</select> ',
          "paginate": {
            "previous": "",
            "next": ""
          },
          "info": "共 3",
          "infoEmpty": "尚無資料",
      },
    });

  $('#play_mediaList').DataTable({ 
      'columnDefs': [{
        'targets': [2,4 ], // 第幾個欄位
        'orderable': false, // 隱藏篩選
      }],
      "lengthMenu": [ 20 ],
      "language": {
        "lengthChange": false,
          "paginate": {
            "previous": "",
            "next": ""
          },
          "info": "共 3",
          "infoEmpty": "尚無資料",
      },
    });

  $('#play_deviceList').DataTable({ 
    "lengthMenu": [ 20 ],
    "language": {
      "lengthChange": false,
        "paginate": {
          "previous": "",
          "next": ""
        },
        "info": "共 3",
        "infoEmpty": "尚無資料",
    },
    });