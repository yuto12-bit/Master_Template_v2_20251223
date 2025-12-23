/* ===== variants.js (generated) ===== */

/* --- sim-income.js --- */
// sim-income.js（scoped）
// - ID衝突を避けるため、root内で data-role を参照する
(() => {
  const fmt = (n) => {
    const num = Number(n);
    if (!Number.isFinite(num)) return "0";
    return num.toLocaleString("ja-JP");
  };

  const calc = (root) => {
    const dailyWageEl = root.querySelector('[data-role="daily-wage"]');
    const workDaysEl  = root.querySelector('[data-role="work-days"]');
    const workHoursEl = root.querySelector('[data-role="work-hours"]');

    const monthlyWageEl = root.querySelector('[data-role="monthly-wage"]');
    const yearlyWageEl  = root.querySelector('[data-role="yearly-wage"]');

    const dailyOut   = root.querySelector('[data-role="display-daily"]');
    const monthlyOut = root.querySelector('[data-role="display-monthly"]');
    const yearlyOut  = root.querySelector('[data-role="display-yearly"]');

    if (!dailyWageEl || !workDaysEl || !workHoursEl || !monthlyWageEl || !yearlyWageEl || !dailyOut || !monthlyOut || !yearlyOut) return;

    const daily = Number(dailyWageEl.value || 0);
    const days  = Number(workDaysEl.value || 0);
    const hours = Number(workHoursEl.value || 0);

    // ここは「目安」：日給×日数 → 月収、月収×12 → 年収
    const monthly = Math.max(0, daily * days);
    const yearly  = Math.max(0, monthly * 12);

    dailyOut.textContent   = fmt(daily);
    monthlyOut.textContent = fmt(monthly);
    yearlyOut.textContent  = fmt(yearly);

    // 入力欄にも反映（任意）
    monthlyWageEl.value = String(monthly);
    yearlyWageEl.value  = String(yearly);
  };

  const bind = (root) => {
    const inputs = root.querySelectorAll("input");
    inputs.forEach((el) => {
      el.addEventListener("input", () => calc(root));
    });
    calc(root);
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-component="sim-income"]').forEach(bind);
  });
})();

