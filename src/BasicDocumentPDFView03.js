import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: '90%',
    margin: '0 auto',
  },
  title: {
    padding: 10,
    border: 1,
    borderColor: 'silver',
    textAlign: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    display: 'block',
    margin: '0 auto',
    marginBottom: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 15,
    padding: '3px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: 'silver',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRight: 1,
    borderColor: 'silver',
    textAlign: 'right',
  },
  tableCellLeft: {
    textAlign: 'left',
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  },
  body: {
    marginBottom: 30,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerLeft: {
    flex: 2,
  },
  footerRight: {
    flex: 1,
  },
});

// Create Document Component
function BasicDocumentPDFView() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text>Invoice # 424773</Text>
            </View>
            <Image style={styles.logo} src="logo.png" />
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.companyName}>ABC Private Limited</Text>
                <Text style={styles.listItem}>Birmingham BS -435</Text>
                <Text style={styles.listItem}>United Kingdom</Text>
                <Text style={styles.listItem}>888-555-2311 | eadzhosting@gmail.com</Text>
                <Text style={styles.companyName}>ABC Private Limited</Text>
                <Text style={styles.listItem}>Birmingham BS -435</Text>
                <Text style={styles.listItem}>United Kingdom</Text>
                <Text style={styles.listItem}>888-555-2311 | eadzhosting@gmail.com</Text>
              </View>
              <View style={styles.headerRight}>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Issue Date</Text>
                    <Text style={styles.tableCell}>12-02-2018</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Due Date</Text>
                    <Text style={styles.tableCell}>12-02-2018</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Sub total</Text>
                    <Text style={styles.tableCell}>6500</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Total</Text>
                    <Text style={styles.tableCell}>7000</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellLeft]}>Product</Text>
                  <Text style={[styles.tableCell, styles.tableHeader]}>Quantity</Text>
                  <Text style={[styles.tableCell, styles.tableHeader]}>Price</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.tableCellLeft]}>
                    <Text>Hosting</Text>
                    <Text>Some kind of hosting</Text>
                  </Text>
                  <Text style={styles.tableCell}>1</Text>
                  <Text style={styles.tableCell}>2000</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.tableCellLeft]}>
                    <Text>Hosting</Text>
                    <Text>Some kind of hosting</Text>
                  </Text>
                  <Text style={styles.tableCell}>1</Text>
                  <Text style={styles.tableCell}>2000</Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerLeft} />
              <View style={styles.footerRight}>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Sub total</Text>
                    <Text style={styles.tableCell}>200</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Sales tax</Text>
                    <Text style={styles.tableCell}>200</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Grand total</Text>
                    <Text style={styles.tableCell}>1200</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default BasicDocumentPDFView;
