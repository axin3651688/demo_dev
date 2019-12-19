/* eslint-disable */

/** 
* @desc    : 验证是否是一个有效的日期
* @eg      : ("2019-11-19") => true
* @author  : 
* @date    : 2019/11/19
* @param   {String/Date} d 日期，格式yyyy-mm-dd和yyyy/mm/dd，且只能精确到day
* @return  {Boolean} 判断值
* @update   by   
*/
Date.isValidDate = function (d) {
  if (d instanceof Date) {
    return true
  } else if (typeof d == 'string') {
    var array = []
    if (/^\d{4}\-\d\d?\-\d\d?/.test(d)) {
      array = d.replace(/\-0/g, "-").split("-");
    }
    if (/^\d{4}\/\d\d?\/\d\d?/.test(d)) {
      array = d.replace(/\/0/g, "/").split("/");
    }
    if (array.length == 0) {
      return false
    }
    var year = parseInt(array[0]);
    var month = parseInt(array[1]) - 1;
    var day = parseInt(array[2]);
    var date = new Date(year, month, day);
    return (date.getFullYear() == year &&
      date.getMonth() == month &&
      date.getDate() == day);
  } else {
    return false
  }

}

/** 
* @desc    : 获取日期对象或日期格式字符串中的年份
* @eg      : ("2019-11-19") => 2019
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 获取的年份
* @update   by   
*/
Date.year = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getFullYear()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取日期对象或日期格式字符串中的月份
* @eg      : ("2019-11-19") => 11
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的月份
* @update   by   
*/
Date.month = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getMonth() + 1
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取日期对象或日期格式字符串中的天数
* @eg      : ("2019-11-19") => 19
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的天数
* @update   by   
*/
Date.day = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getDate()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取日期对象或日期格式字符串中的时点
* @eg      : ("2019-11-19 12:00:30") => 12
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的时点
* @update   by   
*/
Date.hour = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getHours()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取日期对象或日期格式字符串中的分钟
* @eg      : ("2019-11-19 12:00:30") => 0
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的分钟
* @update   by   
*/
Date.minute = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getMinutes()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取日期对象或日期格式字符串中的秒钟
* @eg      : ("2019-11-19 12:00:30") => 30
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的秒钟
* @update   by   
*/
Date.second = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getSeconds()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 计算指定日期增加若干年后的年份
* @eg      : ("2019-11-19 12:00:30",2) => 2021
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} y 日期对象或日期格式字符串 必传
* @param   {Number} num 年份数值 必传
* @return  {Number} 返回修改后的年份
* @update   by   
*/
Date.year_add = function (y, num) {
  return Date.year(y) + num
}

/** 
* @desc    : 计算指定日期增加若干年后的年份
* @eg      : ("2019-11-19 12:00:30",2) => 2017
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} y 日期对象或日期格式字符串 必传
* @param   {Number} num 年份数值 必传
* @return  {Number} 返回修改后的年份
* @update   by   
*/
Date.year_sub = function (y, num) {
  return Date.year(y) - num
}

/** 
* @desc    : 计算指定日期增加若干月后的年月
* @eg      : ("2019-11-19 12:00:30",4) => 2020/3
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} m 日期对象或日期格式字符串 必传
* @param   {Number} num 月份数值 必传
* @return  {String} 返回修改后的年月
* @update   by   
*/
Date.month_add = function (m, num) {
  var _m = Date.month(m) + num
  var _y = Date.year(m)
  var md = _m % 12
  var bs = Math.floor(_m / 12)
  if (bs > 0) {
    if (md == 0) {
      _y = _y + bs - 1
      _m = 12
    } else {
      _y = _y + bs
      _m = md
    }
  }
  return _y + '/' + _m
}

/** 
* @desc    : 计算指定日期减少若干月后的年月
* @eg      : ("2019-11-19 12:00:30",13) => 2018/10
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} m 日期对象或日期格式字符串 必传
* @param   {Number} num 月份数值 必传
* @return  {String} 返回修改后的年月
* @update   by   
*/
Date.month_sub = function (m, num) {
  var _m = Date.month(m) - num
  var _y = Date.year(m)
  if (_m <= 0) {
    _m = -_m
    bs = Math.floor(_m / 12)
    md = _m % 12
    if (md == 0) {
      _y = _y - bs - 1
      _m = 12
    } else {
      _y = _y - bs - 1
      _m = 12 - md
    }
  }
  return _y + '/' + _m
}

/** 
* @desc    : 计算指定日期增加若干天后的日期
* @eg      : ("2019-11-19 12:00:30",13) => 2019/12/2
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @param   {Number} num 日期数值 必传
* @return  {String} 返回修改后的日期
* @update   by   
*/
Date.day_add = function (d, num) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    var res = new Date((_d / 1000 + (86400 * num)) * 1000); //增加n天后的日期
    return res.getFullYear() + "/" + (res.getMonth() + 1) + "/" + (res.getDate());
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 计算指定日期减少若干天后的日期
* @eg      : ("2019-11-19 12:00:30",23) => 2019/10/27
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @param   {Number} num 日期数值 必传
* @return  {String} 返回修改后的日期
* @update   by   
*/
Date.day_sub = function (d, num) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    var res = new Date((_d / 1000 - (86400 * num)) * 1000); //减少n天后的日期
    return res.getFullYear() + "/" + (res.getMonth() + 1) + "/" + (res.getDate());
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 计算两个日期相差年数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 4
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的年数 
* @update   by   
*/
Date.year_diff = function (s, e) {
  var sy = Date.year(s)
  var ey = Date.year(e)
  return Math.abs(sy - ey)
}

/** 
* @desc    : 计算两个日期相差月数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 49
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的月数
* @update   by   
*/
Date.month_diff = function (s, e) {
  var suby = Date.year(e) - Date.year(s)
  var subm = Date.month(e) - Date.month(s)
  return Math.abs(12 * suby + subm)
}

/** 
* @desc    : 计算两个日期相差天数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 1495
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的天数
* @update   by   
*/
Date.day_diff = function (s, e) {
  if (Date.isValidDate(s) && Date.isValidDate(e)) {
    if (typeof s == 'string') {
      s = new Date(s)
    }
    if (typeof e == 'string') {
      e = new Date(e)
    }
    var st = s.getTime();
    var et = e.getTime();
    var dt = 1000 * 60 * 60 * 24;
    return Math.abs(Math.floor((st - et) / dt));
  } else {
    console.error('不是有效的日期')
    return
  }
}

/** 
* @desc    : 计算两个日期时间相差小时数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 35892
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的小时数
* @update   by   
*/
Date.hour_diff = function (s, e) {
  if (Date.isValidDate(s) && Date.isValidDate(e)) {
    if (typeof s == 'string') {
      s = new Date(s)
    }
    if (typeof e == 'string') {
      e = new Date(e)
    }
    var st = s.getTime();
    var et = e.getTime();
    var ht = 1000 * 60 * 60;
    return Math.abs(Math.floor((st - et) / ht));
  } else {
    console.error('不是有效的日期')
    return
  }
}

/** 
* @desc    : 计算两个日期时间相差分钟数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 2153529
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的分钟数
* @update   by   
*/
Date.minute_diff = function (s, e) {
  if (Date.isValidDate(s) && Date.isValidDate(e)) {
    if (typeof s == 'string') {
      s = new Date(s)
    }
    if (typeof e == 'string') {
      e = new Date(e)
    }
    var st = s.getTime();
    var et = e.getTime();
    var mt = 1000 * 60;
    return Math.abs(Math.floor((st - et) / mt));
  } else {
    console.error('不是有效的日期')
    return
  }
}

/** 
* @desc    : 计算两个日期时间相差秒数
* @eg      : ("2019-11-19 12:00:30","2015-10-15 23:50:45") => 129211785
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} s 起始日期对象或日期格式字符串 必传
* @param   {Date/String} e 结束日期对象或日期格式字符串 必传
* @return  {Number} 返回相差的秒数
* @update   by   
*/
Date.second_diff = function (s, e) {
  if (Date.isValidDate(s) && Date.isValidDate(e)) {
    if (typeof s == 'string') {
      s = new Date(s)
    }
    if (typeof e == 'string') {
      e = new Date(e)
    }
    var st = s.getTime();
    var et = e.getTime();
    var sdt = 1000;
    return Math.abs(Math.floor((st - et) / sdt));
  } else {
    console.error('不是有效的日期')
    return
  }
}

/** 
* @desc    : 时间戳转换成日期时间
* @eg      : (1574150796) => 2019/11/19 下午4:06:36
* @author  : 
* @date    : 2019/11/19
* @param   {String/Number} nS 时间戳 必传
* @return  {String} 返回的日期时间
* @update   by   
*/
Date.unix_date = function (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString()
}

/** 
* @desc    : 日期时间转换成时间戳
* @eg      : ("2019-11-19 12:00:30") => 1574136030
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的时间戳
* @update   by   
*/
Date.date_unix = function (d) {
  if (Date.isValidDate(d)) {
    if (typeof d == 'string') {
      d = new Date(d)
    }
    return d.getTime() / 1000
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 获取季度
* @eg      : ("2019-11-19 12:00:30") => 4
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {Number} 返回的季度
* @update   by   
*/
Date.quarter = function (d) {
  var q = Date.month(d)
  if (q > 0 && q < 4) {
    return 1
  } else if (q > 3 && q < 7) {
    return 2
  } else if (q > 6 && q < 10) {
    return 3
  } else if (q > 9 && q < 13) {
    return 4
  }
}

/** 
* @desc    : 获取年季度（text）
* @eg      : ("2019-11-19 12:00:30") => 2019年4季度
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {String} 返回的年季度文本
* @update   by   
*/
Date.quarterText = function (d) {
  var y = Date.year(d)
  var q = Date.quarter(d)
  switch (q) {
    case 1:
      return y + '年1季度'
    case 2:
      return y + '年2季度'
    case 3:
      return y + '年3季度'
    case 4:
      return y + '年4季度'
  }
}

/** 
* @desc    : 获取年月日（text）
* @eg      : ("2019-11-19 12:00:30") => 2019年11月19日
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串 必传
* @return  {String} 
* @update   by   
*/
Date.dateText = function (d) {
  return Date.year(d) + '年' + Date.month(d) + '月' + Date.day(d) + '日'
}

/** 
* @desc    : 求指定日期是当年中的第几周
* @eg      : ("2019-11-19 12:00:30") => 47
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串
* @return  {Number} 返回第几周
* @update   by   
*/
Date.weekOfYear = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    var fd = new Date(_d.getFullYear(), 0, 1);
    var dayOfWeek = fd.getDay();
    var spendDay = 1;
    if (dayOfWeek != 0) {
      spendDay = 7 - dayOfWeek + 1;
    }
    fd = new Date(_d.getFullYear(), 0, 1 + spendDay);
    var dd = Math.ceil((_d.valueOf() - fd.valueOf()) / 86400000);
    var result = Math.ceil(dd / 7);
    return result + 1;
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

/** 
* @desc    : 求指定日期是当周中的周几
* @eg      : ("2019-11-19") => 2
* @author  : 
* @date    : 2019/11/19
* @param   {Date/String} d 日期对象或日期格式字符串
* @return  {Number} 返回周几
* @update   by   
*/
Date.dayOfWeek = function (d) {
  if (Date.isValidDate(d)) {
    var _d
    if (typeof d == 'string') {
      _d = new Date(d)
    } else {
      _d = d
    }
    return _d.getDay()
  } else {
    console.error('不是一个有效的日期')
    return
  }
}

Date.prototype.projectDateString = function (separator = "-") {
  const unit = ['yyyy', 'MM', 'dd'];
  return this.format(unit.join(separator));
};

Date.prototype.projectTimeString = function (separator = ":") {
  const unit = ['hh', 'mm', 'ss'];
  return this.format(unit.join(separator));
};

Date.prototype.projectDateTimeString = function () {
  return this.projectDateString() + ' ' + this.projectTimeString();
};
