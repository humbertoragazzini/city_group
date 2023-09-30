import { ReactHTMLElement } from "react";

export interface Titles {
  text:String;
  content:String;
}

export interface Services {
  text:String;
  content:String;
  icon: any;
}


export interface Item {
  isFirst: Boolean;
  titleFirst: string[];
  WSProvide: String;
  EOservices: Titles[];
  TOSProvided: Services[]
  titleSecond: string;
  backgroundURL:string;
  left: Boolean;
}