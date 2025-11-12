# Setup Guide for XPM-MINIMAL

A lightweight JS package for website that adds edit links to your components or pages, enabling quick access to [RWS](https://rws.com) [Tridion Sites Experience Space](https://www.rws.com/content-management/tridion/sites/) (XPM)

## ✨ Features

- Adds a visual edit icon/toolbar over React components

- Opens Tridion Experience Space (XPM) directly to the associated item (Page or Component)

- Works in staging environments only (as required by XPM)

- Lightweight and non-intrusive

## Deployment

- Download the xpm-minimal-dxa.zip ZIP file(xpm-minimal-dxa.zip) from the [releases page](https://github.com/RWS-Open/tridion-sites-xpmminimal-dxa/releases).

- Unzip the xpm-minimal-dxa.zip file.

- Copy the DLL to Tridion Sites websites bin directory:

    - Sdl.Web.Mvc.dll

-  Copy the xpm-minimal.js file to Tridion Sites Websites assets directory:

    - xpm-minimal.js

## 🛠 Requirements

- [Tridion Sites 10.1+](https://www.rws.com/content-management/tridion/sites/)


## 🔧 Configuration Steps 

- Update web.config in the Tridion Sites Website folder:

    ```xml
        <configuration>
            <appSettings>
                <add key="editorUrl" value="https://tridion-sites-cm-url/ui/editor" />
                <add key="staging" value="true" />
                <add key="showPageEditorLink" value="true" />
                <add key="showExpSpaceEditor" value="true" />
            </appSettings>
        </configuration>
    ```

- Add the following script to your layout file:

    ```js
        <script type="text/javascript">
            function getExpBaseUrl(){
                const config = {
                    editorUrl: '@System.Configuration.ConfigurationManager.AppSettings["editorUrl"]',
                    staging:'@System.Configuration.ConfigurationManager.AppSettings["staging"]',
                    showPageEditorLink:'@System.Configuration.ConfigurationManager.AppSettings["showPageEditorLink"]',
                    showExpSpaceEditor:'@System.Configuration.ConfigurationManager.AppSettings["showExpSpaceEditor"]',
                }
                return config
            }
        </script>
        <script type="text/javascript" src="/<assets directory path>/xpm-minimal.js"></script>
    ```
  
### Note: 
- Works only in staging environments where Experience Space is accessible 
- Hide the edit toolbar in production by setting staging={false}