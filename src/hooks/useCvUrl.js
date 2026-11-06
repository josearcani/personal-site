import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/** Returns the CV PDF path for the current locale (EN by default, ES under /es/). */
export default function useCvUrl() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  return `/cv/Jose_Arcani_CV_${currentLocale === 'es' ? 'ES' : 'EN'}.pdf`;
}
