/** @typedef {{ name: string, slug: string, image?: string }} Client */

/** Images live in `public/clients/` as client-1.jpg … client-7.jpg */
function client(name, slug, image) {
  let imagePath
  if (typeof image === 'number') {
    imagePath = `/clients/client-${image}.jpg`
  } else if (image) {
    imagePath = image
  }
  return imagePath ? { name, slug, image: imagePath } : { name, slug }
}

export const EXPORT_CLIENTS = {
  'Middle East': [
    client('Al Bahr Al Arabi Engineering Marine Service Co. (Saudi Arabia)', 'al-bahr-saudi'),
    client('Quality International Co. Ltd. (UAE)', 'quality-intl-uae'),
    client('Ocean Oilfield (UAE)', 'ocean-oilfield-uae'),
    client('Hatco (UAE)', 'hatco-uae'),
    client('AZ Trading (Kuwait)', 'az-trading-kuwait'),
    client('Qatar Projects Supplies Co. (Doha, Qatar)', 'qatar-projects'),
    client('ACS Flow Control (Dubai)', 'acs-flow-dubai'),
    client('Ganama Trading & Contracting Co. (Syria)', 'ganama-syria'),
    client('Helios Focus (Israel)', 'helios-israel'),
  ],
  Africa: [
    client('Tomorrows World Limited (Ghana)', 'tomorrows-world-ghana'),
    client('Sahara Bulk Storage Facilities Ltd. (Nigeria)', 'sahara-nigeria'),
    client('Star Best Nigeria (Nigeria)', 'star-best-nigeria'),
    client('Nile Bakri Aviation (Sudan)', 'nile-bakri-sudan'),
    client('Gam Petroleum (Gambia)', 'gam-petroleum-gambia'),
    client('IFFCO Egypt SAE (Egypt)', 'iffco-egypt'),
  ],
  'Europe & Others': [
    client('Huber S.A. (Greece)', 'huber-greece'),
    client('Derol AG (Switzerland)', 'derol-switzerland'),
    client('CV. Mediterania (Indonesia)', 'cv-mediterania'),
    client('Pt. Global Mandira Shakti (Indonesia)', 'global-mandira'),
    client('Pt. Berkata Karunia (Indonesia)', 'berkata-karunia'),
    client('National Development Engineers (Bangladesh)', 'nde-bangladesh'),
    client('Khan Brothers (Bangladesh)', 'khan-brothers'),
    client('Sierra Construction (Srilanka)', 'sierra-srilanka'),
    client('Townson Enterprises Co. Ltd. (Thailand)', 'townson-thailand'),
    client('Pars SazoKar Engineering Co. (Iran)', 'pars-sazokar-iran'),
    client('Green Engineered Systems, INC (California)', 'green-engineered-us'),
  ],
}

export const DOMESTIC_CLIENTS = {
  'Oil, Gas & Refinery': [
    client('Hindustan Petroleum Corporation Limited (HPCL)', 'hpcl', 1),
    client('Indian Oil Corporation Ltd. (IOCL)', 'iocl', 2),
    client('Bharat Petroleum Corpn. Ltd. (BPCL)', 'bpcl', 3),
    client('Chennai Petroleum Corporation Ltd. (CPCL)', 'cpcl', 4),
    client('Reliance Industries Ltd.', 'reliance', 5),
  ],
  'OEM Partners': [
    client('John Crane', 'john-crane', 6),
    client('EagleBurgmann India Pvt. Ltd. (Pune)', 'eagleburgmann', 7),
    client('Flowserve Sanmar', 'flowserve-sanmar'),
    client('AESSEAL (MCK) Ltd.', 'aesseal'),
    client('Rolon Seals (Hyderabad)', 'rolon-seals'),
    client('Leak Proof Engg. Pvt Ltd. (Mumbai)', 'leak-proof'),
    client('Standard Seals Pvt. Ltd. (Hyderabad)', 'standard-seals'),
    client('Ikon Industries (Boisar, Thane)', 'ikon-industries'),
  ],
  'Chemical & Industrial': [
    client('Deepak Fertilizers & Petrochemicals Corpn Ltd.', 'deepak-fertilizers'),
    client('Rashtriya Chemicals & Fertilizers Ltd. (RCF)', 'rcf'),
    client('Hindustan Zinc Ltd.', 'hindustan-zinc'),
    client('GAIL India Ltd.', 'gail'),
    client('Lubrizol India Pvt Ltd', 'lubrizol'),
    client('Gujarat Fluorochemicals Ltd.', 'gujarat-fluoro'),
    client('Alkyl Amines Ltd.', 'alkyl-amines'),
    client('Praj Industries Ltd.', 'praj'),
    client('Zuari Industries Limited', 'zuari'),
    client('NALCO', 'nalco'),
    client('Thermax Limited', 'thermax'),
    client('BHEL', 'bhel'),
    client('Walchandnagar Industries Limited', 'walchandnagar'),
  ],
}

export function getClientInitials(name) {
  const clean = name.replace(/\(.*?\)/g, '').trim()
  const words = clean.split(/\s+/).filter((w) => w.length > 1 && !/^(ltd|limited|pvt|corpn|co)$/i.test(w))
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return clean.slice(0, 2).toUpperCase()
}
