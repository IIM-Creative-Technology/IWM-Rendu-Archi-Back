import fileUpload from "express-fileupload";
import { Document } from "./document";
import { DocFile } from "./documentData";

export interface DocumentGateway {
  listAll(): Promise<Array<Document>>
  getById(id: string): Promise<Document | {}>
  upload(documentData: fileUpload.UploadedFile | undefined | null, clientId: string): Promise<Document>
  update(document: Document): Promise<Document>
  delete(id: string): Promise<Array<Document>>
}