import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    // backgroundColor: "#d11fb6",
    // color: "white",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textRight: {
    textAlign: "right",
  },
  table: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 2,
    nowrap: "nowrap",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableCellHeader: {
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
    backgroundColor: "#f2f2f2",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 5,
    textAlign: "center",
    fontSize: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

// Create Document Component
function BasicDocument() {
  return (
      <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.grid}>
            <Image
              style={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            />
            <View style={styles.textRight}>
              <Text>Tailwind Inc.</Text>
              <Text style={{ color: "#ccc", fontSize: 12 }}>
                sales@tailwindcss.com
              </Text>
              <Text style={{ color: "#ccc", fontSize: 12, marginTop: 4 }}>
                +41-442341232
              </Text>
              <Text style={{ color: "#ccc", fontSize: 12, marginTop: 4 }}>
                VAT: 8657671212
              </Text>
            </View>
          </View>
          <View style={styles.grid}>
            <View>
              <Text style={{ fontWeight: "bold", color: "#444" }}>
                Bill to :
              </Text>
              <Text style={{ color: "#ccc" }}>
                Laravel LLC.
                {"\n"}
                102, San-Fransico, CA, USA
              </Text>
              <Text style={{ color: "#ccc" }}>info@laravel.com</Text>
            </View>
            <View style={styles.textRight}>
              <Text>Invoice number:</Text>
              <Text style={{ color: "#ccc" }}>INV-2023786123</Text>
              <Text>
                Invoice date: <Text style={{ color: "#ccc" }}>03/07/2023</Text>
                {"\n"}
                Due date: <Text style={{ color: "#ccc" }}>31/07/2023</Text>
              </Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableCellHeader]}>
              <Text style={[styles.tableCell]}>Items</Text>
              <Text style={[styles.tableCell, styles.textRight]}>Quantity</Text>
              <Text style={[styles.tableCell, styles.textRight]}>Price</Text>
              <Text style={[styles.tableCell, styles.textRight]}>Amount</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>
                <Text style={{ fontWeight: "bold" }}>E-commerce Platform</Text>
                {/* {"\n"}
                <Text style={{ color: "#ccc" }}>
                  Laravel based e-commerce platform.
                </Text> */}
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>500.0</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$100.00</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$5,000.00</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>
                <Text style={{ fontWeight: "bold" }}>Frontend Design</Text>
                {/* {"\n"}
                <Text style={{ color: "#ccc" }}>
                  Frontend design using Vue.js and Tailwind CSS.
                </Text> */}
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>500.0</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$100.00</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$5,000.00</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>
                <Text style={{ fontWeight: "bold" }}>Shop SEO</Text>
                {/* {"\n"}
                <Text style={{ color: "#ccc" }}>
                  Website SEO and Social Media marketing.
                </Text> */}
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>50.0</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$100.00</Text>
              <Text style={[styles.tableCell, styles.textRight]}>$500.00</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.textRight]} colSpan={3}>
                Subtotal
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>
                $10,500.00
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.textRight]} colSpan={3}>
                Tax
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>$1,050.00</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.textRight]} colSpan={3}>
                Discount
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>- 10%</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.textRight]} colSpan={3}>
                Total
              </Text>
              <Text style={[styles.tableCell, styles.textRight]}>
                $11,550.00
              </Text>
            </View>
          </View>
          <Text style={styles.footer}>
            Please pay the invoice before the due date. You can pay the invoice
            by logging in to your account from our client portal.
          </Text>
        </Page>
      </Document>

  );
}

export default BasicDocument;
