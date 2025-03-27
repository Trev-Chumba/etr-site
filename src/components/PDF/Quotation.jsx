import {
  Document,
  Page,
  StyleSheet,
  View,
  Text,
  Font,
} from '@react-pdf/renderer';
import { Header } from './Header';
import NormalTypewriter from '../../fonts/jmh-typewriter.regular.ttf';
import ThinTypeWRiter from '../../fonts/jmh-typewriter.thin.ttf';
import BoldTypeWriter from '../../fonts/jmh-typewriter.bold.ttf';
import { useEffect } from 'react';

Font.register({
  family: 'Typewriter',
  fonts: [
    {
      src: NormalTypewriter,
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: 'Thin',
  fonts: [
    {
      src: ThinTypeWRiter,
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: 'BoldTypeWriter',
  fonts: [
    {
      src: BoldTypeWriter,
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  tr: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    margin: 0,
  },

  trHeader: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    margin: 0,
    backgroundColor: 'black',
  },

  td: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    flex: 1,
  },
  td1: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    flex: 1.5,
  },
  tdTotal: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    flex: 3.7,
  },
  tdHeader: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'black',
    flex: 1,
  },
  textTableHeader: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Typewriter',
  },
  textSubheader: {
    fontSize: 15,
    fontWeight: 'Bold',
    fontFamily: 'BoldTypeWriter',
  },
  textBody: {
    fontSize: 12,
    fontFamily: 'Typewriter',
  },
  totalHeader: {
    fontSize: 14,
    fontWeight: 'Bold',
    fontFamily: 'BoldTypeWriter',
  },
  totalText: {
    fontSize: 12,
    fontWeight: 'Bold',
    fontFamily: 'BoldTypeWriter',
  },
  emptytd: {
    borderColor: 'white',
    borderWidth: 0,
    padding: 5,
    flex: 1,
  },
});

export function Quotation({ items }) {
  const today = new Date().toLocaleDateString('en-GB');
  const date = new Date();
  useEffect(() => {}, []);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.value * item.quantity,
    0
  );
  const showTime =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Header />
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={styles.textSubheader}>Bill to : </Text>
            <Text style={styles.textBody}>Name: John Doe</Text>
            <Text style={styles.textBody}>Phone Number: +254 700 00000</Text>
            <Text style={styles.textBody}>Adress: 000-0000 </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={styles.textBody}>
              Receipt NO: RCPT-{Math.floor(Math.random() * 1001)}
            </Text>
            <Text style={styles.textBody}>
              {today} @ {showTime}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <View style={styles.trHeader}>
              <Text style={{ ...styles.td1, ...styles.textTableHeader }}>
                Item description
              </Text>
              <Text style={{ ...styles.td, ...styles.textTableHeader }}>
                Qty
              </Text>
              <Text style={{ ...styles.td, ...styles.textTableHeader }}>
                Rate (Ksh.)
              </Text>
              <Text style={{ ...styles.td, ...styles.textTableHeader }}>
                Amount (Ksh.)
              </Text>
            </View>

            {items.map((items, index) => {
              return (
                <View style={styles.tr} key={index}>
                  <Text style={{ ...styles.td1, ...styles.textBody }}>
                    {items.heading}
                  </Text>
                  <Text style={{ ...styles.td, ...styles.textBody }}>
                    {items.quantity}
                  </Text>
                  <Text style={{ ...styles.td, ...styles.textBody }}>
                    {items.value}
                  </Text>
                  <Text style={{ ...styles.td, ...styles.textBody }}>
                    {items.value * items.quantity}
                  </Text>
                </View>
              );
            })}
            <View style={styles.tr}>
              <Text style={{ ...styles.tdTotal, ...styles.totalHeader }}>
                Total
              </Text>
              {/* <Text style={{ ...styles.emptytd }} />
              <Text style={{ ...styles.emptytd }} /> */}
              <Text style={{ ...styles.td, ...styles.totalText }}>
                {totalPrice.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                })}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
