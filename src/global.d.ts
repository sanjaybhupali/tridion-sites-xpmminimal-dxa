export interface ExpBaseConfig {
  editorUrl: string;
  staging: "true" | "false";
  showPageEditorLink: "true" | "false";
  showExpSpaceEditor: "true" | "false";
}

declare global {
  interface Window {
    getExpBaseUrl?: () => ExpBaseConfig;
  }
}
export {};