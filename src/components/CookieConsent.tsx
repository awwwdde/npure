import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'npure_cookie_consent_v1';
const PREFS_KEY = 'npure_cookie_prefs_v1';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY) === 'accepted';
    const savedPrefs = window.localStorage.getItem(PREFS_KEY);
    if (savedPrefs) {
      try {
        const parsed = JSON.parse(savedPrefs) as { analytics?: boolean };
        setAnalyticsEnabled(parsed.analytics ?? true);
      } catch {
        setAnalyticsEnabled(true);
      }
    }
    setVisible(!accepted);
  }, []);

  const savePrefs = (accepted: boolean, analytics: boolean) => {
    window.localStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        required: true,
        analytics,
        updatedAt: new Date().toISOString(),
      }),
    );
    if (accepted) {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    }
  };

  const accept = () => {
    savePrefs(true, true);
    setVisible(false);
  };

  const applySettings = () => {
    savePrefs(true, analyticsEnabled);
    setVisible(false);
    setSettingsOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-4 z-[70] px-4 md:bottom-6"
          role="dialog"
          aria-live="polite"
          aria-label="Уведомление о cookie"
        >
          <div className="mx-auto flex w-full max-w-[980px] flex-col gap-4 rounded-2xl border border-bone-100/15 bg-ink-900/95 p-5 shadow-2xl backdrop-blur-xl md:gap-6 md:px-7 md:py-5">
            <p className="text-sm leading-relaxed text-bone-100/80">
              Мы используем cookie и технические данные для работы сайта, аналитики и улучшения сервиса.
              Продолжая пользоваться сайтом, вы принимаете условия{' '}
              <Link to="/privacy" className="link-underline text-bone-50">
                политики конфиденциальности
              </Link>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={accept} className="btn-primary shrink-0 !px-6 !py-2.5 !text-[10px]">
                Принять
              </button>
              <button
                onClick={() => setSettingsOpen((v) => !v)}
                className="btn-outline shrink-0 !px-6 !py-2.5 !text-[10px]"
              >
                Настроить cookie
              </button>
            </div>
            <AnimatePresence initial={false}>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 6, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden border-t border-bone-100/10 pt-4"
                >
                  <div className="grid gap-3 text-sm text-bone-100/80">
                    <label className="flex items-center justify-between gap-5 rounded-xl border border-bone-100/10 px-4 py-3">
                      <span>Обязательные cookie (всегда включены)</span>
                      <input type="checkbox" checked readOnly className="h-4 w-4 accent-bone-100" />
                    </label>
                    <label className="flex items-center justify-between gap-5 rounded-xl border border-bone-100/10 px-4 py-3">
                      <span>Аналитика и улучшение сервиса</span>
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="h-4 w-4 accent-bone-100"
                      />
                    </label>
                    <div className="pt-1">
                      <button onClick={applySettings} className="btn-primary !px-6 !py-2.5 !text-[10px]">
                        Сохранить настройки
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
