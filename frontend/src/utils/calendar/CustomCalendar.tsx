import { useState, useEffect } from 'react';
import CustomCalendarItem from './item/CustomCalendarItem';
import { toStringByFormatting } from '@/utils/date/DateFormatter';

interface CalendarProps {
    initDate : string
}

const CustomCalendar = (props : CalendarProps) => {
    const initDateTemp = new Date(props.initDate);
    const initDateYear = initDateTemp.getFullYear();
    const initDateMonth = initDateTemp.getMonth();
    const firstDate = new Date(initDateYear, initDateMonth, 1);
    const lastDate = new Date(initDateYear, initDateMonth + 1, 0);
    const [dateList, setDateList] = useState<string[]>([]);
    function getDateList() {
        const result:string[] = [];
        const tempFirstDate = firstDate;
        const tempLastDate = lastDate;
        while(tempFirstDate.getTime() != tempLastDate.getTime()){
            result.push(toStringByFormatting(tempFirstDate));
            tempFirstDate.setDate(tempFirstDate.getDate() + 1);
        }
        result.push(toStringByFormatting(tempLastDate));
        setDateList(() => result);
    }
    useEffect(() => {
        getDateList();
    }, []);

    

    return (
        <div>
            캘린더 
            {dateList.map((item, index) => (
                <CustomCalendarItem selectDate={item} key={index} />
            ))}
        </div>
    )   
};

export default CustomCalendar;