import { Platform } from 'react-native';

let DatePicker;
if (Platform.OS === 'web') {
  DatePicker = require("react-datepicker").default;
  require("react-datepicker/dist/react-datepicker.css");
} else {
  DatePicker = require("@react-native-community/datetimepicker").default;
}

export default DatePicker;