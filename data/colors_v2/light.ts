import {alpha, darken, get, lighten, merge} from '../../src/utils'
import deprecatedVars from './utils/deprecated_vars'
import lightGithubVars from './utils/light_github_vars'
import marketingVars from './utils/marketing_vars'

const vars = {
  scale: {
    black: '#1b1f23',
    white: '#ffffff',
    gray: [
      '#fafbfc',
      '#f6f8fa',
      '#e1e4e8',
      '#d1d5da',
      '#959da5',
      '#6a737d',
      '#586069',
      '#444d56',
      '#2f363d',
      '#24292e'
    ],
    blue: [
      '#f1f8ff',
      '#dbedff',
      '#c8e1ff',
      '#79b8ff',
      '#2188ff',
      '#0366d6',
      '#005cc5',
      '#044289',
      '#032f62',
      '#05264c'
    ],
    green: [
      '#f0fff4',
      '#dcffe4',
      '#bef5cb',
      '#85e89d',
      '#34d058',
      '#28a745',
      '#22863a',
      '#176f2c',
      '#165c26',
      '#144620'
    ],
    yellow: [
      '#fffdef',
      '#fffbdd',
      '#fff5b1',
      '#ffea7f',
      '#ffdf5d',
      '#ffd33d',
      '#f9c513',
      '#dbab09',
      '#b08800',
      '#735c0f'
    ],
    orange: [
      '#fff8f2',
      '#ffebda',
      '#ffd1ac',
      '#ffab70',
      '#fb8532',
      '#f66a0a',
      '#e36209',
      '#d15704',
      '#c24e00',
      '#a04100'
    ],
    red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
    purple: [
      '#f5f0ff',
      '#e6dcfd',
      '#d1bcf9',
      '#b392f0',
      '#8a63d2',
      '#6f42c1',
      '#5a32a3',
      '#4c2889',
      '#3a1d6e',
      '#29134e'
    ],
    pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f']
  },

  // Foundations
  fg: {
    default: get('scale.gray.9'),
    muted: get('scale.gray.6'),
    inactive: get('scale.gray.5'),
    onEmphasis: get('scale.white')
  },
  canvas: {
    default: get('scale.white'),
    overlay: get('scale.white'),
    inset: get('scale.gray.1')
  },
  border: {
    default: get('scale.gray.2'),
    divider: lighten(get('scale.gray.2'), 0.03)
  },
  shadow: {
    small: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    medium: (theme: any) => `0 3px 6px ${alpha(get('scale.gray.4'), 0.15)(theme)}`,
    large: (theme: any) => `0 8px 24px ${alpha(get('scale.gray.4'), 0.2)(theme)}`,
    extraLarge: (theme: any) => `0 12px 28px ${alpha(get('scale.gray.4'), 0.3)(theme)}`
  },

  // Roles
  neutral: {
    fg: get('scale.gray.5'),
    emphasis: get('scale.gray.5'),
    highlighter: get('scale.gray.3'),
    muted: get('scale.gray.1')
  },
  accent: {
    fg: get('scale.blue.5'),
    emphasis: get('scale.blue.5'),
    highlighter: get('scale.blue.2'),
    muted: get('scale.blue.0')
  },
  success: {
    fg: get('scale.green.6'),
    emphasis: get('scale.green.5'),
    highlighter: get('scale.green.3'),
    muted: get('scale.green.1')
  },
  warning: {
    fg: get('scale.yellow.8'),
    emphasis: get('scale.yellow.5'),
    highlighter: get('scale.yellow.3'),
    muted: get('scale.yellow.2')
  },
  severe: {
    fg: get('scale.orange.5'),
    emphasis: get('scale.orange.5'),
    highlighter: get('scale.orange.3'),
    muted: get('scale.orange.1')
  },
  danger: {
    fg: get('scale.red.6'),
    emphasis: get('scale.red.5'),
    highlighter: get('scale.red.2'),
    muted: get('scale.red.0')
  },
  done: {
    fg: get('scale.purple.5'),
    emphasis: get('scale.purple.5'),
    highlighter: get('scale.purple.2'),
    muted: get('scale.purple.0')
  },
  sponsors: {
    fg: get('scale.pink.5'),
    emphasis: get('scale.pink.5'),
    highlighter: get('scale.pink.2'),
    muted: get('scale.pink.0')
  },

  // Only meant to be used by Primer components
  primer: {
    canvas: {
      backdrop: alpha(get('scale.black'), 0.5), // use for modal/dialogs
      sticky: alpha(get('scale.white'), 0.95) // use for sticky headers
    },
    border: {
      active: '#f9826c', // coral
      contrast: alpha(get('scale.black'), 0.1) // use to increase contrast
    },
    shadow: {
      highlight: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`, // top highlight
      inset: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.gray.2'), 0.2)(theme)}`, // top inner shadow
      focus: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}` // blue focus ring
    }
  },

  // Components
  avatar: {
    bg: get('scale.white'),
    border: 'transparent',
    stackFade: get('scale.gray.3'),
    stackFadeMore: get('scale.gray.2'),
    childShadow: (theme: any) => `-2px -2px 0 ${alpha(get('scale.white'), 0.8)(theme)}`
  },
  selectMenu: {
    backdropBorder: 'transparent',
    tapHighlight: alpha(get('scale.gray.3'), 0.5),
    tapFocusBg: get('scale.blue.1')
  },
  header: {
    text: alpha(get('scale.white'), 0.7),
    bg: get('scale.gray.9'),
    logo: get('scale.white')
  },
  sidenav: {
    selectedBg: get('scale.white')
  },
  menu: {
    bgActive: 'transparent'
  },
  // TODO: Move to VSCode theme?
  ansi: {
    black: get('scale.gray.9'),
    blackBright: get('scale.gray.6'),
    white: get('scale.gray.5'),
    whiteBright: get('scale.gray.4'),
    gray: get('scale.gray.5'),
    red: get('scale.red.5'),
    redBright: get('scale.red.6'),
    green: get('scale.green.6'),
    greenBright: get('scale.green.5'),
    yellow: get('scale.yellow.8'),
    yellowBright: get('scale.yellow.7'),
    blue: get('scale.blue.5'),
    blueBright: get('scale.blue.4'),
    magenta: get('scale.purple.5'),
    magentaBright: get('scale.purple.4'),
    cyan: '#1b7c83',
    cyanBright: '#3192aa'
  },
  // Do we need all these btn variables?
  btn: {
    text: get('scale.gray.9'),
    bg: get('scale.gray.0'),
    border: alpha(get('scale.black'), 0.15),
    shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`,
    hoverBg: '#f3f4f6',
    hoverBorder: alpha(get('scale.black'), 0.15),
    activeBg: darken(get('btn.hoverBg'), 0.03),
    activeBorder: alpha(get('scale.black'), 0.1),
    selectedBg: darken(get('btn.hoverBg'), 0.02),
    focusBg: get('scale.gray.0'),
    focusBorder: alpha(get('scale.black'), 0.15),
    focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}`,
    shadowActive: (theme: any) => `inset 0 0.15em 0.3em ${alpha(get('scale.black'), 0.15)(theme)}`, // TODO: Deprecate? Not used in Primer CSS
    shadowInputFocus: (theme: any) => `0 0 0 0.2em ${alpha(get('scale.blue.5'), 0.3)(theme)}`, // TODO: Deprecate?
    counterBg: alpha(get('scale.black'), 0.08),

    primary: {
      text: get('scale.white'),
      bg: '#2ea44f',
      border: alpha(get('scale.black'), 0.15),
      shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverBg: '#2c974b',
      hoverBorder: alpha(get('scale.black'), 0.15),
      selectedBg: darken(get('btn.primary.hoverBg'), 0.02),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.green.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.white'), 0.8),
      disabledBg: '#94d3a2',
      disabledBorder: alpha(get('scale.black'), 0.1),
      focusBg: '#2ea44f',
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('btn.primary.focusBg'), 0.4)(theme)}`,
      icon: alpha(get('scale.white'), 0.8),
      counterBg: alpha(get('scale.white'), 0.2)
    },

    outline: {
      text: get('scale.blue.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.blue.5'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.3)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.blue.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.blue.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.blue.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.blue.5'), 0.1)
    },

    danger: {
      text: get('scale.red.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.red.6'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.3)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.red.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.red.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.red.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.red.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.5'),
      hoverIcon: get('scale.white')
    }
  }
}

export default merge(deprecatedVars, lightGithubVars, marketingVars, vars)
