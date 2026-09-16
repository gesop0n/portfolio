/**
 * プロジェクトサムネイルのデザイン定義。
 *
 * デザインを増やすときは
 *   1. ここに kind 付きのバリアントを足して Thumbnail に union する
 *   2. thumbnails/ に対応するコンポーネントを追加する
 *   3. ProjectThumbnail.astro に 1 行足して分岐させる
 * の 3 ステップで済むようにしてある。
 */

import type { AuroraPaletteOverride } from './aurora-palette';

export interface MeshBlob {
  color: string;
  /** 中心位置 (%) */
  x: number;
  y: number;
}

/** メッシュグラデーション: base 色の上に放射グラデーションを重ねる */
export interface Mesh {
  kind: 'mesh';
  base: string;
  blobs: MeshBlob[];
}

/** オーロラ: spaco のページ背景と同じ意匠 */
export interface Aurora {
  kind: 'aurora';
  /** 既定パレットからの差分。省略すると AURORA_PALETTE がそのまま使われる */
  palette?: AuroraPaletteOverride;
}

export type Thumbnail = Mesh | Aurora;
