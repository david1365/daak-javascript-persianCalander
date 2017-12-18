//coding{ utf-8
/*
  تبدیل تاریخ میلادی به خورشید -
  برنامه نویس { داود اکبری -
  1390-1385
 
  .تاریخ هجری خورشیدی در حالت کلی به دوره های بزرگ 2820 ساله تقسیم شده است 
  .که خود این دروره بزرگ به 21 دوره 128 ساله و یک دوره 132 ساله تقسیم شده است
  .دوره 128 ساله شامل یک دوره 29 ساله و 3 دوره 33 ساله 
  .و دروه 132 ساله شامل یک دوره 29 ساله و دو دوره  33 ساله و در آخر یک دوره 37 ساله است
  .دوره 29 ساله دارای یک دوره 5 ساله و 6 دوره 4 ساله است
  .دوره 33 ساله دارای یک دوره 5 ساله و 7 دوره 4 ساله است
  .دوره 37 ساله دارای یک دوره 5 ساله و 8 دوره 4 ساله است
  .سال های آخر دوره های 5  یا 4 ساله کبیسه است
  .ساله های کبیسه 366 روز و سال های عادی 365 روز دارند
  .منظور از عدد تنها 128 یا 132 یا 29 و... دوره های مربوطه است
*/
from DAClassLibrary import DaParsiDateTime, DAexception
from math import *
from datetime import *
from macpath import split

    
//روز اول سال خورشیدی
const firstDay = datetime(622, 03, 22);

//سال های در نظر گرفته نشده - آغاز سال هجری خورشیدی
const yearsCountblink = 2346;
//تعداد سال دوره بزرگ
const yearsCountBigAGE = 2820;
//تعداد سال دوره 128ساله
const yearsCount128 = 128;
//تعداد سال دوره 132 ساله
const yearsCount132 = 132;
//تعداد سال دروه 29 ساله
const yearsCount29 = 29;
//تعداد سال دروه 33 ساله
const yearsCount33 = 33;
//تعداد سال دروه 37 ساله
const yearsCount37 = 37;
//تعداد سال دروه 5 ساله
const yearsCount5 = 5;
//تعداد سال دروه 4 ساله
const yearsCount4 = 4;

//تعداد دروه 128 ساله
const Count128Circuit = 21;
//تعداد دروه 132 ساله
const Count132Circuit = 1;

//تعداد سال دوره های 128 ساله
const yearsCount128AGES = Count128Circuit * yearsCount128;
//تعداد سال دوره های 132 ساله
const yearsCount132AGES = Count132Circuit * yearsCount132;

//تعداد سال گذشته شده تا قبل از زیر دوره 37 ساله
const yearsCountBefore37 = yearsCount29 + (2 * yearsCount33);


//تعداد سال کبیسه دوره 128 ساله
const anomalyYearsCount128 = 31;
//تعداد سال کبیسه دوره 132 ساله
const anomalyYearsCount132 = 32;
//تعداد سال کبیسه دوره 29 ساله
const anomalyYearsCount29 = 7;
//تعداد سال کبیسه دوره 33 ساله
const anomalyYearsCount33 = 8;
//تعداد سال کبیسه دوره 37 ساله
const anomalyYearsCount37 = 9;
//تعداد سال کبیسه دوره کوچک 4 یا 5 ساله
const anomalyYearsCount4OR5 = 1;
//تعداد سال کبیسه کل دوره های 128 ساله
const anomalyYearsCount128AGES = Count128Circuit * anomalyYearsCount128;
//تعداد سال کبیسه کل دوره های 132 ساله
const anomalyYearsCount132AGES = Count132Circuit * anomalyYearsCount132;
//تعداد سال کبیسه دوره بزرگ
const anomalyYearsCountBigAGE = anomalyYearsCount128AGES + anomalyYearsCount132AGES;
//تعداد سال کبیسه سال هایی که در نظر گرفته نشده است
const anomalyYearsCountBlink = ((yearsCountblink / yearsCount128) * anomalyYearsCount128) + anomalyYearsCount29 + 3;//به این دلیل با 3 و 7 جمع شده که 42 سال دارای یک دوره 29 ساله است که دارای 7 سال کبیسه و 13 سال باقی در دوره 33 ساله است که 13 سال داری 3 سال کبیسه است
//تعداد روز سال عادی
const daysCountNormalYear = 365;
//تعداد روز سال کبیسه
const daysCountAnomalyYear = 366;
//تعداد روز سال هایی که در نظر گرفته نشده
const daysCountBlinkYear = (yearsCountblink * daysCountNormalYear) + anomalyYearsCountBlink;
//تعداد روز دوره بزرگ 2820 ساله
const daysCountBigAGE = (yearsCountBigAGE * daysCountNormalYear) + anomalyYearsCountBigAGE;
//تعداد روز دوره 128 ساله
const daysCount128 = (yearsCount128 * daysCountNormalYear) + anomalyYearsCount128;
//تعداد روز دوره 132 ساله
const daysCount132 = (yearsCount132 * daysCountNormalYear) + anomalyYearsCount132;
//تعداد روز دوره 29 ساله
const daysCount29 = (yearsCount29 * daysCountNormalYear) + anomalyYearsCount29;
//تعداد روز دوره 33 ساله
const daysCount33 = (yearsCount33 * daysCountNormalYear) + anomalyYearsCount33;
//تعداد روز دوره 37 ساله
const daysCount37 = (yearsCount37 * daysCountNormalYear) + anomalyYearsCount37;
//تعداد روز دوره کوچک 5 ساله
const daysCount5 = (yearsCount5 * daysCountNormalYear) + anomalyYearsCount4OR5;
//تعداد روز دوره کوچک 4 ساله
const daysCount4 = (yearsCount4 * daysCountNormalYear) + anomalyYearsCount4OR5;


//شماره سال های کبیسه
const arrYearNumber = [0, 5, 9, 13, 17, 21, 25, 29, 33, 37];
//نام برج های سال
const parsiMonthName = { 1:'فروردین',
                        2:'ارديبهشت',
                        3:'خرداد',
                        4:'تير',
                        5:'امرداد',
                        6:'شهريور',
                        7:'مهر',
                        8:'آبان',
                        9:'آذر',
                        10:'دى',
                        11:'بهمن',
                        12:'اسفند'};
//روزهای هفته
const parsiDayOfWeek = [ "شنبه", "يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه" ];


//تعداد روز ماه های نیمه اول سال
const daysCountYearFirstMid = 31;
//تعداد روز ماه های نیمه دوم سال
const daysCountYearSecMid = 30;
//تعداد ماه در هر نیمه سال
const monthCountEachYearMid = 6;
//تعداد ماه هر سال
const monthCountEachYear = monthCountEachYearMid * 2;

//تعداد روز هفته
const weekDaysCount = 7;

//--------
function which2820(ParsiYear) {
    /*
      بدست آوردن اینکه سال مورد نظر در کدام دوره بزرگ است
     "ParsiYear"=>سال خورشیدی
     خروجی نشان می دهد که سال مورد نظر در کدام دوره بزرگ است
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    if (ParsiYear <= 0) {
        throw (".سال مورد قبول از یک شروع می شود")
    }

    ParsiYear += yearsCountblink;
    return ceil(ParsiYear / float(yearsCountBigAGE));//ما سقف عدد بدست آمده را می خواهیم زیرا رقم سمت راست به این معنی است که وارد دوره شده است
}

//---------
function which2820AtDay(LastDays) {
    /*
     بدست آوردن اینکه تعداد روز ورودی در  کدام دوره بزرگ است
     "LastDays"=>تعداد روز گذشته شده از ابتدای تاریخ خورشیدی
     خروجی نشان دهنده کدام دوره بزرگ است
    */
    return ceil((LastDays + daysCountBlinkYear) / float(daysCountBigAGE));

}
//----------
function eraBigAGE(ParsiYear) {
    /*
     بدست آوردن مبدا دروه ی بزرگ سالی که از ورودی گرفته می شود
     "ParsiYear"=>سال خورشیدی
     مبدا دوره بزرگ سال مورد نظر
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    return ((which2820(ParsiYear) - 1) * yearsCountBigAGE) - yearsCountblink;
}
//-----------


function passedFromEraBigAGE(ParsiYear) {
    /*
     سال طی شده از مبدا دوره مورد نظر بزرگ
     "ParsiYear"=>سال خورشیدی
     سال طی شده از مبدا دوره مورد نظر بزرگ
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    return ParsiYear - eraBigAGE(ParsiYear);
}
//-----------


function which128Or132(ParsiYear) {
    /*
     سال مورد نظر در کدام دوره ی 128 یا 132 است
     "ParsiYear"=>سال خورشیدی
     سال مورد نظر در کدام دوره ی 128 یا 132 است
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    //چون دور بزرگ به 21 دوره 128 و یک دوره 132 تقسیم شده
    return ceil(passedFromEraBigAGE(ParsiYear) / float(yearsCount128));
}
//------------------


function which128Or132AtDay(LastDays) {
    /*
     سال مورد نظر در کدام دوره ی128 یا 132 قرار دارد
     "LastDays"=>ورودی برحسب تعداد روز گذشته شده از ابتدای تاریخ خورشیدی
     سال مورد نظر در کدام دوره ی 128 یا 132  قرار دارد
    */
    var RestDays = (LastDays + daysCountBlinkYear) - ((which2820AtDay(LastDays) - 1) * daysCountBigAGE);
    RestDays /= float(daysCount128);
    return ceil(RestDays);
}
//--------------


function era128Or132(ParsiYear) {
    /*
     بدست آوردن مبدا دوره 128 یا 132 ای که سال مورد نظر در آن قرار دارد
     "ParsiYear"=>سال خورشیدی
     بدست آوردن مبدا دوره 128 یا 132 ای که سال مورد نظر در آن قرار دارد
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود

    */
    var What = which128Or132(ParsiYear);
    var LateYear = 0;

    if (What > Count128Circuit) {
        LateYear = yearsCount128AGES;
    }
    else {
        LateYear = ((What - 1) * yearsCount128);
    }

    if (What > Count128Circuit) {
        return (((which2820(ParsiYear) * LateYear) + ((which2820(ParsiYear) - 1) * yearsCount132)) - yearsCountblink);
    }
    else {
        return (eraBigAGE(ParsiYear) + LateYear);
    }
}

//---------------


function passedFromEra128Or132(ParsiYear) {
    /*
     چند سال از مبدا دوره 128 یا 132 که سال مورد نظر در آن قرار دارد گذشته است
     "ParsiYear"=>سال خورشیدی
     چند سال از مبدا دوره 128 یا 132 که سال مورد نظر در آن قرار دارد گذشته است
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود

    */
    return (ParsiYear - era128Or132(ParsiYear));
}
//--------------------


function whichAge33(LastParsiYear) {
    /*
     چندمین دوره 33 ساله
     "LastParsiYear"=>تعداد سال گدشته شده از مبدا دوره 128 یا 132 ساله
    */
    return ceil((LastParsiYear - yearsCount29) / float(yearsCount33));
}
//----------------


function whichAge33FromRestDays(RestDays) {
    /*
     "RestDays"=>تعداد روز گدشته شده از مبدا دوره 128 یا 132 ساله
    */
    return ceil((RestDays - daysCount29) / float(daysCount33));
}
//------------------------------


function passedAge33(LastParsiYear) {
    /*
     چند سال از ابتدای دوره 33 ساله می گذرد
     "LastParsiYear"=>تعداد سال گدشته شده از مبدا دوره 128 یا 132 ساله
    */
    return (yearsCount29 + ((whichAge33(LastParsiYear) - 1) * yearsCount33));
}
//-----------------------


function whatYearOFSubAge(ParsiYear){
    /*
     سال چندم در هر زیر دوره 29 یا 33 یا 37 است
     "ParsiYear"=>سال خورشیدی

     سال چندم در هر زیر دوره 29 یا 33 یا 37 است
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    var What = which128Or132(ParsiYear);
    var Last = passedFromEra128Or132(ParsiYear);
    if (What > Count128Circuit) {
        if ((Last <= yearsCountBefore37) && (Last > yearsCount29)) {
            return (Last - passedAge33(Last));
        }
        else {
            if (Last > yearsCountBefore37) {
                return (Last - yearsCountBefore37);
            }
            else {
                return Last;
            }
        }
    }
    else {
        if (Last > yearsCount29) {
            return Last - passedAge33(Last);
        }
        else {
            return Last;
        }
    }
}



 //-----------------------

function whichSubAge29Or33Or37(ParsiYear) {
    /*
     در کدام زیر دوره 29 یا 33 یا 37 است
     "ParsiYear"=>سال خورشیدی
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    var What = which128Or132(ParsiYear);
    var Last = passedFromEra128Or132(ParsiYear);

    if (What > Count128Circuit) {
        if ((Last <= yearsCountBefore37) && (Last > yearsCount29)) {
            return whichAge33(Last);
        }
        else {
            if (Last > yearsCountBefore37) {
                return yearsCount37;
            }
            else {
                return yearsCount29;
            }
        }
    }
    else {
        if (Last > yearsCount29) {
            return whichAge33(Last);
        }
        else {
            return yearsCount29;
        }
    }
}
//-------------------------


function whichSubAge29Or33Or37AtDay(LastDays) {
    /*
     در کدام زیر دوره 29 یا 33 یا 37 است
     "LastDays"=>روز گذشته شده از ابتدای دوره 128 یا 132
    */

    var What128Or132 = which128Or132AtDay(LastDays);
    var RestDays = (LastDays + daysCountBlinkYear) - ((which2820AtDay(LastDays) - 1) * daysCountBigAGE);
    if (What128Or132 > Count128Circuit) {
        RestDays -= (Count128Circuit * daysCount128);
    }
    else {
        RestDays -= ((What128Or132 - 1) * daysCount128);
    }


    if (What128Or132 > Count128Circuit) {
        if ((RestDays > daysCount29) && (RestDays <= (daysCount29 + (2 * daysCount33)))) {
            return whichAge33FromRestDays(RestDays);
        }
        else {
            if (RestDays > (daysCount29 + (2 * daysCount33))) {
                return yearsCount37;
            }
            else {
                return yearsCount29;
            }
        }
    }
    else {
        if (RestDays > daysCount29) {
            return whichAge33FromRestDays(RestDays);
        }
        else {
            return yearsCount29;
        }
    }
}
//------------------------------------


function leapYear(ParsiYear) {
    /*
       شناسایی اینکه سال کبیسه است یا نه
       "ParsiYear"=>سال خورشیدی
       اینکه سال کبیسه است یا نه
       توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    var Year = whatYearOFSubAge(ParsiYear);
    return ((Year % yearsCount4 == 1) && (Year != 1));
}
//---------------


function parsiMonthDaysCount(ParsiYear, Month) {
    /*
     تعداد روز های برج های ایرانی
     "ParsiYear"=>سال خورشیدی
     "Month"=>برج خورشیدی
     اینکه سال کبیسه است یا نه
     توضیح=>اگر شماره ماه از 1 کوچکتر و از 12 بزرگتر باشد خطا صادر می شود -یا- اگر سال از 1 کمتر باشد
    */

    if ((Month > 12) || (Month < 1)) {
        throw(".شماره برح های فارسی از 1 شروع شده و به 12 ختم می شود");
    }

    if ((Month >= 1) && (Month <= 6)) {
        return 31;
    }
    else {
        if (((Month >= 7) && (Month <= 11))) {
            return 30;
        }
        else {
            if ((Month == 12) && (leapYear(ParsiYear))) {
                return 30;
            }
            else {
                return 29;
            }
        }
    }
}
//---------------------------


function multipleLeapYear(ParsiYear) {
    /*
     تعداد سال کبسه تا قبل از سال مورد نظر
     "ParsiYear"=>سال خورشیدی

     تعداد سال کبسه تا قبل از سال مورد نظر
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */
    //دوره 128 ساله ,31 سال و در دوره ی 132 ساله, 32 سال کبيسه وجود دارد و در هر دوره بزرگ 21 دوره 128 ساله و 1 دوره 132 ساله داريم.
    var Befor2820Now = (which2820(ParsiYear) - 1) * anomalyYearsCountBigAGE; //تعداد سال های کبيسه دوره های 2820 بزرگ قبل از دوره بزرگ سال مورد نظر
    var What = which128Or132(ParsiYear);

    var Befor128Or132Now;
    if (What > Count128Circuit) {
        Befor128Or132Now = anomalyYearsCount128AGES;
    }
    else {
        Befor128Or132Now = (What - 1) * anomalyYearsCount128;
    }

    //تعداد سال کبیسه تا قبل از دور 132 سال مورد نظر موجود- بعد از ؟
    //تعداد سال کبیسه تا قبل از دور 128 سال مورد نظر موجود - بعد از دونقطه

    //تعداد سال کبیسه طی شده تا قبل از سال مورد نظر در داخل دوره 128 یا 132
    //تعداد سال دقیق طی شده

    var LastFrom128Or132;
    if (leapYear(ParsiYear)) {//سال طی شده از ابتدای دوره 128 یا 132 تا سال مورد نظر
        LastFrom128Or132 = (passedFromEra128Or132(ParsiYear) - 1);
    }
    else {
        LastFrom128Or132 = passedFromEra128Or132(ParsiYear);
    }

    var SubAge = whichSubAge29Or33Or37(ParsiYear);
    if (SubAge == yearsCount29) {
        LastFrom128Or132 -= 1;
    }
    else {
        if ((SubAge >= 1) && (SubAge <= 3)) {
            LastFrom128Or132 -= (1 + SubAge);
        }
        else {
            LastFrom128Or132 -= 4;
        }
    }

    LastFrom128Or132 /= 4;///تعداد سال کبیسه طی شده از ابتدای 128 یا 132 تا سال مورد نظر

    return long(Befor2820Now) + long(Befor128Or132Now) + long(LastFrom128Or132);//تعداد سال کبیسه کل
}
//--------------------------


function dayToDate(ParsiYear, RestDay) {
    /*
     تبدیل روز به تاریخ خورشیدی با گرفتن سال و تعداد روز باقی مانده
     "ParsiYear"=>سال فارسی
     "RestDay"=>روز باقی مانده

     تاریخ روز مورد نظر
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطا صادر می شود
    */

    var daysCountFirstMid = monthCountEachYearMid * daysCountYearFirstMid;//تعداد روز نیمه اول سال

    RestDay += 1;

    var IsAYearEndDay = ((RestDay / daysCountAnomalyYear) == 1) && (!leapYear(ParsiYear));//فهمیدن اینکه روز آخر هست و سال کبیسه نیست
    //به منظور ننوشتن دستورات شرطی تو در تو 30 یا 31 را به این صورت می شناسیم
    var MonthDaysCount = (daysCountYearSecMid + (2 - ceil(RestDay / daysCountFirstMid)));
    var WhatIsAMid = int(RestDay / daysCountFirstMid);//صفر مشخص کننده نیمه اول و یک مشخص کننده نیمه دوم است
    //به این دلیل مقدار را از 2 کم می کنیم جون دو نیم سال دارم و سال دوم باید صفر باشد
    RestDay -= (daysCountFirstMid * WhatIsAMid);
    var Month = RestDay / MonthDaysCount;
    var IsAEndDay = int((RestDay - ((ceil(Month) - 1) * MonthDaysCount)) / MonthDaysCount);//اگز روز آخر ماه باشد 1 وگرنه صفر است
    Month = ceil(Month) + (monthCountEachYearMid * WhatIsAMid);//اگر در ماه دوم باشیم با 6 چمع می شود
    RestDay = int((RestDay % MonthDaysCount) + (IsAEndDay * MonthDaysCount));

    if (IsAYearEndDay){
        RestDay -= (daysCountYearSecMid - 1);
    }

    if (IsAYearEndDay){
        Month -= (monthCountEachYear - 1);
    }

    if (IsAYearEndDay){
        ParsiYear += 1;
    }

    return DaParsiDateTime(ParsiYear, Month, RestDay);
}

//--------------------------


function firstDayYear(ParsiYear) {
    /*
     محاسبه روز اول سال مورد نظر
     "ParsiYear"=>سال خورشیدی

     محاسبه روز اول سال مورد نظر
     توضیح=>اگر سال ورودی از 1 کمتر باشد خطاParsiMonthDaysCount صادر می شود
    */
    var Days = multipleLeapYear(ParsiYear);
    Days %= weekDaysCount;
    Days += (((ParsiYear - 1) % weekDaysCount) + 5);//روز اول سال یک  پنج شنبه بوده و به همین دلیل با 5 جمع می کنیم
    Days %= weekDaysCount;
    return Days;
}
//--------------------



function firstDayMonth(ParsiYear, MonthNumber) {
    /*
     شماره روز اول برج مورد نظر
     "ParsiYear"=>سال خورشیدی
     "MonthNumber"=>شماه برج
     شماره روز اول برج مورد نظر
     توضیح=>اگر شماره ماه از 1 کوچکتر و از 12 بزرگتر باشد خطا صادر می شود
    */
    if ((MonthNumber > 12) || (MonthNumber < 1)) {
        throw(".شماره برح های فارسی از 1 شروع شده و به 12 ختم می شود");
    }
    var First = firstDayYear(ParsiYear);//روز اول سال مورد نظر

    if (MonthNumber <= weekDaysCount) {
        First += ((MonthNumber - 1) * 3);
    }
    else {
        First += ((MonthNumber + 2) * 2);
    }

    First %= weekDaysCount;
    return First;
}
//----------------------


function dayOfWeekNumber(parsiDate) {
    /*
     شماره روز هفته تاریخ مورد نظر
     "parsiDate"=>تاریخ خورشیدی

     شماره روز هفته تاریخ مورد نظر
    */
    //روز تاریخ را به این خاطر از یک کم می کنیم تا تعداد روز گذشته شده تا قبل از آن روز را بدست آوریم
    return ((firstDayMonth(parsiDate.Year, parsiDate.Month) + (parsiDate.Day - 1)) % weekDaysCount);
}
//-------------------------


function dayOfWeekName(parsiDate) {
    /*
     نام خورشیدی روز تاریخ مورد نظر
     "parsiDate"=>تاریخ خورشیدی

     نام خورشیدی روز تاریخ مورد نظر
    */
    return parsiDayOfWeek[dayOfWeekNumber(parsiDate)];
}
//------------------


function what5Or4(LastDays) {
    /*
     محاسبه چندمین زیر دوره کوچک چهار ساله یا پنج ساله
     "LastDays"=>تعداد روز گذشته شده

     چندمین زیر دوره کوچک چهار ساله یا پنج ساله
    */
    var What = 0;
    if (LastDays > daysCount5) { //1826تعداد روز دوره کوچک 5 است
        LastDays -= daysCount5;
        What = ceil(LastDays / daysCount4);
    }

    return int(What);
}

//----------------------------

function daysToYear(LastDays, RestDays) {
    /*
     تبدیل روز ها ی گذشته شده به سال پارسی
     "LastDays"=>تعداد روز گذشته شده
     "RestDays"=>روز باقی مانده

     تبدیل روز ها ی گذشته شده به سال پارسی
    */
    var What2820 = which2820AtDay(LastDays);//کدام 2820 بزرگ
    var Years2820 = (What2820 - 1) * yearsCountBigAGE;//سال های 2820
    RestDays = (LastDays + daysCountBlinkYear) - ((What2820 - 1) * daysCountBigAGE);

    var What128Or132 = which128Or132AtDay(LastDays);

    var Years128Or132;
    if (What128Or132 > Count128Circuit) {
        Years128Or132 = yearsCount128AGES;
    }
    else {
        Years128Or132 = (What128Or132 - 1) * yearsCount128;
    }

    if (What128Or132 > Count128Circuit) {
        RestDays -= (Count128Circuit * daysCount128);
    }
    else {
        RestDays -= ((What128Or132 - 1) * daysCount128);
    }

    var Year = Years2820 + Years128Or132;

    var SubAge29Or33Or37 = whichSubAge29Or33Or37AtDay(LastDays);

    if ((SubAge29Or33Or37 >= 1) && (SubAge29Or33Or37 <= 3)) {
        RestDays -= (daysCount29 + ((SubAge29Or33Or37 - 1) * daysCount33));
    }
    else {
        if (SubAge29Or33Or37 == yearsCount37) {
            RestDays -= (daysCount29 + (2 * daysCount33));
        }

        if ((SubAge29Or33Or37 >= 1) && (SubAge29Or33Or37 <= 3)) {
            Year += (yearsCount29 + ((SubAge29Or33Or37 - 1) * yearsCount33));
        }
        else {
            if (SubAge29Or33Or37 == yearsCount37) {
                Year += (yearsCount29 + (2 * yearsCount33));
            }
        }
    }

    var SubAge5Or4 = what5Or4(RestDays);//تعداد زیر دوره گذشته شده 5 یا 4 //تعداد سال کبیسه
    RestDays -= ((arrYearNumber[SubAge5Or4] * daysCountNormalYear) + SubAge5Or4);
    var IN5O4 = (RestDays - 1) / float(daysCountNormalYear);
    var Inside5Or4 = floor(IN5O4);//سال چندم زیر دوره 5 یا 4
    RestDays -= (daysCountNormalYear * Inside5Or4);//داخل زیر دوره کوچک 5 یا 4

    if (((Inside5Or4 == yearsCount4) && (arrYearNumber[SubAge5Or4] > 0)) || (Inside5Or4 == yearsCount5)) { //چون یک سال کبیسه است و در ضزب محاسبه نمی شود
        RestDays -= 1;
    }

    Year = (Year + arrYearNumber[SubAge5Or4] + Inside5Or4 + 1) - yearsCountblink;//با یک به خاطر اینکه از سال جدید آغاز شود چمع شد و از 2346 به این دلیل کم شد که سال های نادیده است
    return (Year, RestDays);
}

//------------------------------

function convertToParsiDate(Date) {
    /*
     تبدیل تاریخ میلادی به خورشیدی
     "Date"=>تاریخ میلادی

     تاریخ خورشیدی
     توضیح=>اگر تاریخ ورودی از تاریخ - 0622/03/22 - میلادی کمتر باشد خطا صادر می شود
    */
    if (Date < datetime(622, 3, 22)) {
        throw(".تاریخ 0622/03/22 میلادی برار با روز اول تاریخ خورشیدی است" + "\n .باید تاریخ ورودی برابر یا بزرگتر از این تاریخ باشد")
    }

    var RestDays = 0;
    var LastDays = (Date - firstDay).days; //تعداد روز گذشته شده از سال یک تا تاریخ ورودی //1/01/01=622/03/22
    var FirstYearsAndLastDays = daysToYear(LastDays, RestDays);//بدست  آوردن سال ابتدای سال تاریخ مورد نظر

    //parsiDate = DayToDate(FirstYears, RestDays)
    parsiDate = dayToDate(FirstYearsAndLastDays[0], FirstYearsAndLastDays[1]);

    return DaParsiDateTime(parsiDate.Year, parsiDate.Month, parsiDate.Day, Date.hour, Date.minute, Date.second, Date.microsecond);
}
//---------------------------------------


function parsiDate() {
    /*
     تاریخ خورشیدی
    */

    return convertToParsiDate(datetime.now());
}



function convertToGregorian(parsiDate) {
    /*
      تبدیل تاریخ خورشیدی به میلادی
      "parsiDate"=>تاریخ فارسی
      تبدیل تاریخ خورشیدی به میلادی
    */
    var MultiplesAnomaly = multipleLeapYear(parsiDate.Year) - anomalyYearsCountBlink;//تعداد سال کبیسه کل منهای تعداد سال کبیسه نادیده
    var Days = ((parsiDate.Year - 1) * daysCountNormalYear) + MultiplesAnomaly;//تعداد کل روز های طی شده تا ابتدای سال مورد نظر

    var ExtraDays;
    if (parsiDate.Month > monthCountEachYearMid) {
        ExtraDays = monthCountEachYearMid;
    }
    else {
        ExtraDays = (parsiDate.Month - 1);
    }

    var OtherDays = ((parsiDate.Month - 1) * daysCountYearSecMid) + ExtraDays;//ماه ها تا قبل از ماه مورد نظر ضرب در 30  و با روز اضافی مر بوط به فصل بهار و تابستان جمع شده
    Days += ((OtherDays + parsiDate.Day) - 1);//بدین دلیل از یک  کم می شود چون 1/1/1 یک روز کامل است و در نظر گرفته شده است و می خواهیم از 0/0/0 حساب شود

    var date = firstDay + timedelta(days = Days);

    return datetime(date.year, date.month, date.day, parsiDate.Hour, parsiDate.Minute, parsiDate.Second, parsiDate.Microsecond);
}


function strToParsiDate(str) {
    /*
    تبدیل رشته به تاریخ خورشیدی
    */
    try {

        var dt = str.split(' ');

        var splitDate = dt[0].split('/');

        splitDate[0] = int(splitDate[0]);
        splitDate[1] = int(splitDate[1]);
        splitDate[2] = int(splitDate[2]);


        if (len(dt) > 1) {
            var splitTime = dt[1].split('{');

            splitTime[0] = int(splitTime[0]);
            splitTime[1] = int(splitTime[1]);

            if (len(splitTime) > 2) {
                var splitSM = splitTime[2].split('.');

                splitTime[2] = int(splitSM[0]);
                var splitTime3 = 0;
                if (len(splitSM) > 1) {
                    splitTime3 = int(splitSM[1]);

                    splitTime = (splitTime[0], splitTime[1], splitTime[2], splitTime3);
                }
                else {
                    splitTime = (splitTime[0], splitTime[1], 0, 0);
                }
            }
        }
        else {
            splitTime = (0, 0);
        }


        return DaParsiDateTime(splitDate[0], splitDate[1], splitDate[2], splitTime[0], splitTime[1], splitTime[2], splitTime[3]);
    }
    catch (e) {
        throw("Please enter correct date and time!?");
    }
}
