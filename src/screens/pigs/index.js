import React, {useCallback, useState, useMemo} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {
  IconCalendars,
  IconRadio_UnCheck,
  IconRadio_Check,
} from '@src/assets/icons';
import Modal from 'react-native-modal';
import {styles} from './styles';

LocaleConfig.locales.en = {
  monthNames: [
    'Tháng 1, ',
    'Tháng 2, ',
    'Tháng 3, ',
    'Tháng 4, ',
    'Tháng 5, ',
    'Tháng 6, ',
    'Tháng 7, ',
    'Tháng 8, ',
    'Tháng 9, ',
    'Tháng 10, ',
    'Tháng 11, ',
    'Tháng 12, ',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'en';

export const PigsScreen = () => {
  const currentDate = new Date();
  const [visible, setVisible] = useState(false);
  const [selectDate, setSelectDate] = useState({});
  const [info, setInfo] = useState({
    date: '',
    conSo: false,
    result: '',
    animals: 'code_lon',
  });

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const onDayPress = value => {
    setInfo({...info, date: value?.dateString});
    setSelectDate(value);
    closeModal();
  };

  const handleResult = useCallback(() => {
    switch (info.animals) {
      case 'code_lon':
        const pig = moment(info.date)
          .add(info.conSo ? 115 : 114, 'days')
          .format('DD/MM/YYYY');
        setInfo({...info, result: pig});
        break;
      case 'code_bo':
        const cows = moment(info.date).add(280, 'days').format('DD/MM/YYYY');
        setInfo({...info, result: cows});
        break;
    }
  }, [info]);

  const markedDates = useMemo(() => {
    let obj = {};
    obj[moment(currentDate).format('YYYY-MM-DD')] = {
      customStyles: {
        container: {
          backgroundColor: '#cdcd',
          elevation: 2,
          borderRadius: 7,
          borderWidth: 1,
          borderColor: '#A5DA67',
        },
        text: {
          color: 'red',
        },
      },
    };
    obj[selectDate?.dateString] = {
      customStyles: {
        container: {
          backgroundColor: '#A5DA67',
          elevation: 2,
          borderRadius: 7,
        },
        text: {
          color: '#fff',
        },
      },
    };
    return obj;
  }, [selectDate]);

  return (
    <SafeAreaView>
      <Text style={styles.label}>Chọn ngày tháng năm lấy đực</Text>
      <TouchableOpacity onPress={showModal} style={styles.boxInput}>
        <Text style={[styles.text, {color: info.date ? '#003' : '#CDCDCD'}]}>
          {moment(info.date ? info.date : currentDate).format('DD-MM-YYYY')}
        </Text>
        <IconCalendars />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        {animals.map(item => (
          <TouchableOpacity
            key={`animals${item.key}`}
            style={styles.check}
            onPress={() => setInfo({...info, animals: item.key})}>
            {info.animals === item.key ? (
              <IconRadio_Check />
            ) : (
              <IconRadio_UnCheck />
            )}
            <Text style={styles.select}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {info.animals === 'code_lon' ? (
        <TouchableOpacity
          style={styles.check}
          onPress={() => setInfo({...info, conSo: !info.conSo})}>
          {info.conSo ? <IconRadio_Check /> : <IconRadio_UnCheck />}
          <Text style={styles.select}>Chọn vào đây nếu là con so</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{color: 'red', marginHorizontal: 20, marginVertical: 10}}>
          Thời gian tính của bò chỉ tính trong khoảng 280 ngày, nên sẽ không
          chính xác tuyệt đối ngày!
        </Text>
      )}
      <Text style={[styles.text, styles.dateDuKien]}>
        Ngày dự kiến sinh:{' '}
        <Text style={styles.note}>
          {info.result ? info.result : '--/--/----'}
        </Text>
      </Text>
      <TouchableOpacity
        style={styles.btnTinhNgay(info.date)}
        onPress={handleResult}
        disabled={info.date ? false : true}>
        <Text style={[styles.text, {color: info.date ? '#3F32FB' : '#9FA8B7'}]}>
          Tính ngày
        </Text>
      </TouchableOpacity>

      <Modal
        backdropColor={'#000'}
        backdropOpacity={0.5}
        visible={visible}
        style={styles.modal}
        onBackdropPress={closeModal}>
        <Calendar
          current={
            selectDate?.dateString
              ? selectDate?.dateString
              : moment(currentDate).format('YYYY-MM-DD')
          }
          markingType={'custom'}
          onDayPress={onDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
        />
      </Modal>
    </SafeAreaView>
  );
};

const animals = [
  {
    name: 'Lợn',
    key: 'code_lon',
  },
  {
    name: 'Bò',
    key: 'code_bo',
  },
];
