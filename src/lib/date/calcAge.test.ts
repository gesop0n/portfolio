import { describe, expect, it } from 'vitest';
import { calcAge } from './calcAge';

describe('calcAge', () => {
  const birthday = new Date('2004-06-02');

  it('誕生日当日は年齢が加算される', () => {
    expect(calcAge(birthday, new Date('2024-06-02'))).toBe(20);
  });

  it('誕生日の前日はまだ加算されない', () => {
    expect(calcAge(birthday, new Date('2024-06-01'))).toBe(19);
  });

  it('誕生日翌日は加算済みの年齢を返す', () => {
    expect(calcAge(birthday, new Date('2024-06-03'))).toBe(20);
  });

  it('同年内で誕生月より前の月はまだ加算されない', () => {
    expect(calcAge(birthday, new Date('2024-05-31'))).toBe(19);
  });

  it('同年内で誕生月より後の月は加算済みを返す', () => {
    expect(calcAge(birthday, new Date('2024-07-01'))).toBe(20);
  });

  it('年末時点で正しい年齢を返す', () => {
    expect(calcAge(birthday, new Date('2024-12-31'))).toBe(20);
  });

  it('年始時点ではまだ加算されていない', () => {
    expect(calcAge(birthday, new Date('2025-01-01'))).toBe(20);
  });
});
