public class Main {
    public static void main(String[] args) {
        DocumentFactory word=new WordDocumentFactory();
        Document Doc1 = word.createDocument();
        Doc1.open();

        DocumentFactory pdf = new PdfDocumentFactory();
        Document Doc2 = pdf.createDocument();
        Doc2.open();

        DocumentFactory excel = new ExcelDocumentFactory();
        Document Doc3 = excel.createDocument();
        Doc3.open();
    }
}
