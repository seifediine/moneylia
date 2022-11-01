import { View, Text } from 'react-native';
import ScreenHeader from '../../../components/ScreenHeader';
import { PagoPA } from '../../../../assets/icons';
import { styles } from './ListHeader.module';

const ListHeader = () => {
  return (
    <>
      <ScreenHeader height={82} bgColor="#bf7ee6">
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Tax Payments</Text>
          <PagoPA />
        </View>
      </ScreenHeader>
      <View style={styles.screenContent}>
        <View style={styles.contentHeader}>
          <Text style={styles.heading}>Movements to pay</Text>
          <Text style={styles.text}>
            View pending transactions for the past two years and proceed to payment.
          </Text>
        </View>
      </View>
    </>
  );
};

export default ListHeader;
