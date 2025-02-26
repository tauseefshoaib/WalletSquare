export type Colors = {
  background: string;
  text: string;
  icon: string;
  focusedIcon: string;
  accentColor: string;
};

export type ThemeColor = {
  light: Colors;
  dark: Colors;
};

export const THEME_COLORS: ThemeColor = {
  light: {
    background: '#FFFFFF',
    text: 'black',
    icon: 'grey',
    focusedIcon: 'black',
    accentColor: '#FFFFFF',
  },
  dark: {
    background: '#121212',
    text: 'white',
    icon: 'grey',
    focusedIcon: 'white',
    accentColor: '#1E1E1E',
  },
};

// const lightTheme = {
//   dark: false,
//   colors: {
//     primary: "#007AFF", // iOS blue (buttons, highlights)
//     secondary: "#5856D6", // iOS purple (alternative action)
//     accent: "#FF9500", // iOS orange (warnings, CTA)

//     background: "#F2F2F7", // iOS system background
//     surface: "#FFFFFF", // Cards, modals, surfaces
//     card: "#F8F9FA", // Navigation bars, headers
//     border: "#D1D1D6", // Dividers, outlines
//     shadow: "rgba(0, 0, 0, 0.1)", // Soft shadow

//     text: "#1C1C1E", // Primary text
//     textSecondary: "#3A3A3C", // Secondary text (subtitles)
//     textTertiary: "#8E8E93", // Muted text (hints, placeholders)

//     success: "#34C759", // iOS green (success)
//     warning: "#FFCC00", // iOS yellow (warnings)
//     error: "#FF3B30", // iOS red (errors)
//     info: "#5AC8FA", // iOS cyan (info, links)

//     inputBackground: "#FFFFFF", // Input field background
//     inputBorder: "#D1D1D6", // Input field border
//     disabled: "#C7C7CC", // Disabled buttons, inputs

//     overlay: "rgba(0, 0, 0, 0.4)", // Overlays for modals
//     gradientStart: "#007AFF", // Gradient start (CTA)
//     gradientEnd: "#34C759", // Gradient end (vibrancy)
//   },
// };

// const darkTheme = {
//   dark: true,
//   colors: {
//     primary: "#0A84FF", // iOS blue (buttons, highlights)
//     secondary: "#5E5CE6", // iOS purple (alternative action)
//     accent: "#FF9F0A", // iOS orange (warnings, CTA)

//     background: "#1C1C1E", // Dark system background
//     surface: "#2C2C2E", // Cards, modals, surfaces
//     card: "#3A3A3C", // Navigation bars, headers
//     border: "#48484A", // Dividers, outlines
//     shadow: "rgba(255, 255, 255, 0.1)", // Soft shadow

//     text: "#FFFFFF", // Primary text
//     textSecondary: "#D1D1D6", // Secondary text (subtitles)
//     textTertiary: "#8E8E93", // Muted text (hints, placeholders)

//     success: "#30D158", // iOS green (success)
//     warning: "#FFD60A", // iOS yellow (warnings)
//     error: "#FF453A", // iOS red (errors)
//     info: "#64D2FF", // iOS cyan (info, links)

//     inputBackground: "#3A3A3C", // Input field background
//     inputBorder: "#636366", // Input field border
//     disabled: "#636366", // Disabled buttons, inputs

//     overlay: "rgba(0, 0, 0, 0.7)", // Overlays for modals
//     gradientStart: "#0A84FF", // Gradient start (CTA)
//     gradientEnd: "#30D158", // Gradient end (vibrancy)
//   },
// };
