import { ReactHTMLElement } from "react";

export interface Titles {
  text:String;
  content:String;
}

export interface Highlight {
  text:String;
  icon:any;
}

export interface EndHighlight {
  shorText:String;
  icon:any;
}

export interface Services {
  text:String;
  content:String;
  icon: any;
}

export interface EndSectionData {
  items:EndHighlight[]
}


export interface Item {
  isFirst: Boolean;
  titleFirst: string[];
  WSProvide: String;
  EOservices: Titles[];
  TOSProvided: Services[];
  highlight: Highlight[];
  titleSecond: string;
  backgroundURL:string;
  left: Boolean;
}
