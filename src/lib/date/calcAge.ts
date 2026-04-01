/**
 * 誕生日と基準日から年齢を計算する関数。
 * @param birthday - 誕生日
 * @param today    - 基準日（デフォルト: 実行日）
 */
export function calcAge(birthday: Date, today: Date = new Date()): number {
  const years = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  return hasHadBirthdayThisYear ? years : years - 1;
}
