/**
 * オーロラサムネイルの配色。
 *
 * 色は CSS カスタムプロパティとして流し込まれる。ライトは `--aurora-light-*`、
 * ダークは `--aurora-dark-*` という別々の入力として出力し、実際に SVG が参照する
 * `--aurora-*` へどちらを写すかは AuroraThumbnail.astro 側のルールが決める。
 * (インライン style は常にスタイルシートより強いので、テーマ切り替えを効かせるには
 *  インライン側を入力専用にしておく必要がある)
 */

export interface AuroraColors {
  /** 左上の帯 */
  blue: string;
  sky: string;
  ice: string;
  cloud: string;
  /** 中央を横切る帯 */
  cyan: string;
  mist: string;
  teal: string;
  /** 左下の帯 */
  pink: string;
  lilac: string;
  lavender: string;
  /** 右下の帯 */
  violet: string;
  /** 帯の上に重なる光のリボン */
  highlight: string;
  /** SVG の背面に敷くベースグラデーション */
  baseStart: string;
  baseMid: string;
  baseEnd: string;
}

/**
 * 既定パレット。
 * spaco 本体の Aurora preset は全面背景向けで淡いため、小さなサムネイルでも
 * 色が見えるよう色相はそのままに明度を中央へ寄せ、彩度を上げてある。
 */
export const AURORA_PALETTE: { light: AuroraColors; dark: AuroraColors } = {
  light: {
    blue: '#5470f6',
    sky: '#5f96f7',
    ice: '#76bef7',
    cloud: '#93d6e7',
    cyan: '#64d5f0',
    mist: '#7fd1f0',
    teal: '#6fd4ec',
    pink: '#dd88e1',
    lilac: '#c073ef',
    lavender: '#846cf7',
    violet: '#8961f7',
    highlight: '#ffffff',
    baseStart: '#7fa7f8',
    baseMid: '#a5d7d7',
    baseEnd: '#7f9df8',
  },
  dark: {
    blue: '#2942a2',
    sky: '#224d98',
    ice: '#1b396d',
    cloud: '#173050',
    cyan: '#1d6a8b',
    mist: '#1d4b6a',
    teal: '#1e6b8d',
    pink: '#5d3576',
    lilac: '#56358d',
    lavender: '#423689',
    violet: '#5238a9',
    highlight: '#a3b2e8',
    baseStart: '#14214a',
    baseMid: '#153243',
    baseEnd: '#221d4b',
  },
};

/**
 * 既定パレットからの差分。指定したキーだけ上書きされる。
 *
 * ```ts
 * thumbnail: {
 *   kind: 'aurora',
 *   palette: {
 *     light: { violet: '#7c3aed', pink: '#f472b6' },
 *     dark: { violet: '#4c1d95' },
 *   },
 * }
 * ```
 */
export interface AuroraPaletteOverride {
  light?: Partial<AuroraColors>;
  dark?: Partial<AuroraColors>;
}

/** baseStart → --aurora-base-start のように camelCase を CSS 変数名へ */
function toCssVar(key: string, prefix: string): string {
  return `--${prefix}-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
}

/** インライン style に渡す CSS 変数の宣言列を組み立てる */
export function auroraStyle(override: AuroraPaletteOverride = {}): string {
  const light = { ...AURORA_PALETTE.light, ...override.light };
  const dark = { ...AURORA_PALETTE.dark, ...override.dark };

  return [
    ...Object.entries(light).map(([key, color]) => `${toCssVar(key, 'aurora-light')}: ${color}`),
    ...Object.entries(dark).map(([key, color]) => `${toCssVar(key, 'aurora-dark')}: ${color}`),
  ].join('; ');
}
