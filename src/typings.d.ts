/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface PDFAnnotationData {
    alternativeText: string;
    annotationFlags: number;
    annotationType: number;
    buttonValue: any;
    borderStyle: { width: number, style: number, dashArray: any[], horizontalCornerRadius: number, verticalCornerRadius: number };
    color: number[];
    comb: boolean;
    checkBox: boolean;
    defaultAppearance: string;
    fieldFlags: number;
    fieldName: string;
    fieldType: string;
    fieldValue: any;
    hasAppearance: boolean;
    id: string;
    maxLen: null | number;
    multiLine: boolean;
    readOnly: boolean;
    rect: number[];
    subtype: string;
    textAlignment: number;
}