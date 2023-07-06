 //date 
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
   
    let dp_i18n = {
      zh: {
        cancel: "取消",
        clear: "清除",
        done: "完成",
        previousMonth: "‹",
        nextMonth: "›",
        months: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdays:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysShort: ["週日","週一", "週二", "週三", "週四", "週五", "週六"],
        weekdaysAbbrev: ['日', '一', '二', '三', '四', '五', '六'],
      },
    };
    let dp_options = {
      autoClose: true,
      format: "yyyy/mm/dd",
      setDefaultDate: true,
      firstDay: 1,
      i18n: dp_i18n.zh
    };

   $("#startdate").datepicker(
      $.extend({}, dp_options, {
        defaultDate: new Date(),
        onClose: function (e) {
          var dpEndDate = M.Datepicker.getInstance($("#enddate"));
          if (dpEndDate.date < this.date) {
            $("#enddate").val($("#startdate").val());
          }
        }
      })
    );
    $("#startDate").datepicker(
      $.extend({}, dp_options, {
        onClose: function (e) {
          var dpEndDate = M.Datepicker.getInstance($("#endDate"));
          if (dpEndDate.date < this.date) {
            $("#endDate").val($("#startDate").val());
          }
        }
      })
    );

    let dayNow = new Date();
    let nextYear = new Date(dayNow);
    nextYear.setFullYear(nextYear.getFullYear()+1);
    nextYear.setDate(nextYear.getDate()-1);

    $("#enddate").datepicker(
      $.extend({}, dp_options, {
        defaultDate: nextYear,
        i18n: dp_i18n.zh,
        onOpen:function(){
          let dayNow = new Date();
          let nextYear = new Date(dayNow);
          nextYear.setFullYear(nextYear.getFullYear()+1);
          nextYear.setDate(nextYear.getDate()-1);
        },
        onClose: function (e) {
          var dpStartDate = M.Datepicker.getInstance($("#startdate"));
          if (dpStartDate.date > this.date) {
            $("#startdate").val($("#enddate").val());
          }
        }
      })
    );
    
    $("#endDate").datepicker(
      $.extend({}, dp_options, {
        i18n: dp_i18n.zh,
        onClose: function (e) {
          var dpStartDate = M.Datepicker.getInstance($("#startDate"));
          if (dpStartDate.date > this.date) {
            $("#startDate").val($("#endDate").val());
          }
        }
      })
    );

    $("#mediadate").datepicker(
      $.extend({}, dp_options, {
        i18n: dp_i18n.zh,
      })
    );

    //time
    let time_i18n = {
      zh: {
        cancel: "取消",
        clear: "清除",
        done: "完成",}
      };

    let time_options = {
      autoClose: true,
      format: "HH:mm",
      defaultTime: 'now',
      twelveHour: true,
      vibrate:true,
      i18n: time_i18n.zh
    };

    $('#starttime').timepicker(
      $.extend({}, time_options, )
    );
    $('#endtime').timepicker(
      $.extend({}, time_options, )
    );