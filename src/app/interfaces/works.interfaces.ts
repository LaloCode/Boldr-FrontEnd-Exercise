export interface SwaggerWorkResponse {
  status:            string;
  "message-type":    string;
  "message-version": string;
  message:           Message;
}

export interface Message {
  facets:           Facets;
  "total-results":  number;
  items:            Item[];
  "items-per-page": number;
  query:            Query;
}

export interface Facets {
}

export interface Item {
  indexed:                  Created;
  "reference-count":        number;
  publisher:                string;
  issue?:                   string;
  license?:                 License[];
  "content-domain":         ContentDomain;
  "short-container-title"?: string[];
  "published-print"?:       Published;
  DOI:                      string;
  type:                     string;
  created:                  Created;
  page?:                    string;
  source:                   Source;
  "is-referenced-by-count": number;
  title?:                   string[];
  prefix:                   string;
  volume?:                  string;
  author?:                  Author[];
  member:                   string;
  reference?:               { [key: string]: string }[];
  "container-title"?:       string[];
  link?:                    Link[];
  deposited:                Created;
  score:                    number;
  resource:                 Resource;
  issued:                   Issued;
  "references-count":       number;
  "journal-issue"?:         JournalIssue;
  URL:                      string;
  ISSN?:                    string[];
  "issn-type"?:             IssnType[];
  subject?:                 string[];
  published?:               Published;
  abstract?:                string;
  language?:                string;
  "alternative-id"?:        string[];
  "original-title"?:        string[];
  "published-online"?:      Published;
  "edition-number"?:        string;
  relation?:                Relation;
  event?:                   Event;
  institution?:             Institution[];
  "update-policy"?:         string;
  assertion?:               Assertion[];
  "publisher-location"?:    string;
  subtitle?:                string[];
}

export interface Assertion {
  value: string;
  name:  string;
  label: string;
}

export interface Author {
  given?:      string;
  family:      string;
  sequence:    Sequence;
  affiliation: Affiliation[];
}

export interface Affiliation {
  name: string;
}

export enum Sequence {
  Additional = "additional",
  First = "first",
}

export interface ContentDomain {
  domain:                  string[];
  "crossmark-restriction": boolean;
}

export interface Created {
  "date-parts": Array<number[]>;
  "date-time":  string;
  timestamp:    number;
}

export interface Event {
  name:      string;
  location?: string;
  acronym:   string;
}

export interface Institution {
  name:    string;
  acronym: string[];
}

export interface IssnType {
  value: string;
  type:  Type;
}

export enum Type {
  Electronic = "electronic",
  Print = "print",
}

export interface Issued {
  "date-parts": Array<Array<number | null>>;
}

export interface JournalIssue {
  issue:               string;
  "published-print"?:  Published;
  "published-online"?: Published;
}

export interface Published {
  "date-parts": Array<number[]>;
}

export interface License {
  start:             Created;
  "content-version": string;
  "delay-in-days":   number;
  URL:               string;
}

export interface Link {
  URL:                    string;
  "content-type":         ContentType;
  "content-version":      ContentVersion;
  "intended-application": IntendedApplication;
}

export enum ContentType {
  TextPlain = "text/plain",
  TextXML = "text/xml",
  Unspecified = "unspecified",
}

export enum ContentVersion {
  Vor = "vor",
}

export enum IntendedApplication {
  SimilarityChecking = "similarity-checking",
  TextMining = "text-mining",
}

export interface Relation {
  "is-identical-to": IsIdenticalTo[];
}

export interface IsIdenticalTo {
  "id-type":     string;
  id:            string;
  "asserted-by": string;
}

export interface Resource {
  primary: Primary;
}

export interface Primary {
  URL: string;
}

export enum Source {
  Crossref = "Crossref",
}

export interface Query {
  "start-index":  number;
  "search-terms": null;
}
