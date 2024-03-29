import 'styled-components';

declare module  'styled-components'{
    export interface DefaultTheme{
        title: string;
        colors:{
            primary: string;
            secondary: string;
            accent: string;
            highlight: string;
            accent_light: string;
        }
    }
}