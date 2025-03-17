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
    backgroundColor: '#f7fafc',
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  header: {
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#2d3748',
  },
  subtitle: {
    fontSize: 12,
    color: '#718096',
    marginLeft: 8,
  },
  companyInfo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  address: {
    fontSize: 12,
    color: '#718096',
  },
  rightAligned: {
    textAlign: 'right',
  },
  tableHeader: {
    backgroundColor: '#edf2f7',
    padding: 10,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottom: '1px solid #e2e8f0',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTop: '1px solid #e2e8f0',
    backgroundColor: '#edf2f7',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  note: {
    fontSize: 12,
    color: '#718096',
  },
  thankYou: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

// Create Document Component
function BasicDocumentPDFView() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View>
                <Text style={styles.title}>Invoice</Text>
                <Text style={styles.subtitle}>ID: #111-222</Text>
              </View>
              <Text style={styles.companyInfo}>Hotel Rajshahi Inn</Text>
            </View>
            <View style={styles.section}>
              <View>
                <Text style={styles.address}>To:</Text>
                <Text style={styles.address}>Alex Doe</Text>
                <Text style={styles.address}>Street, City</Text>
                <Text style={styles.address}>State, Country</Text>
                <Text style={styles.address}>Phone: 111-111-111</Text>
              </View>
              <View style={styles.rightAligned}>
                <Text style={styles.address}>Invoice</Text>
                <Text style={styles.address}>ID: #111-222</Text>
                <Text style={styles.address}>Issue Date: Oct 12, 2019</Text>
                <Text style={styles.address}>Status: Unpaid</Text>
              </View>
            </View>
            <View style={styles.tableHeader}>
              <Text>#</Text>
              <Text>Description</Text>
              <Text>Qty</Text>
              <Text>Unit Price</Text>
              <Text>Amount</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>1</Text>
              <Text>Domain registration</Text>
              <Text>2</Text>
              <Text>$10</Text>
              <Text>$20</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>2</Text>
              <Text>Web hosting</Text>
              <Text>1</Text>
              <Text>$15</Text>
              <Text>$15</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>3</Text>
              <Text>Software development</Text>
              <Text>--</Text>
              <Text>$1,000</Text>
              <Text>$1,000</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>4</Text>
              <Text>Consulting</Text>
              <Text>1 Year</Text>
              <Text>$500</Text>
              <Text>$500</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.note}>
                Extra note such as company or payment information...
              </Text>
              <View style={styles.rightAligned}>
                <View style={styles.totalRow}>
                  <Text>SubTotal</Text>
                  <Text>$2,250</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text>Tax (10%)</Text>
                  <Text>$225</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalText}>Total Amount</Text>
                  <Text style={styles.totalText}>$2,475</Text>
                </View>
              </View>
            </View>
            <Text style={styles.thankYou}>Thank you for your business</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default BasicDocumentPDFView;
