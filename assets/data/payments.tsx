type PaymentProps = {
  id: string;
  creditor: string;
  creditorCode: string;
  noticeCode: string;
  causal: string;
  amount: string;
  expiryDate: string;
};

export const payments: Array<PaymentProps> = [
  {
    id: '1',
    creditor: 'ENPACL',
    creditorCode: '8011911704444',
    noticeCode: '30100001498222',
    causal: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2021 EXPIRES ...',
    expiryDate: '28/02/2022',
    amount: '€ 3260.29',
  },
  {
    id: '2',
    creditor: 'SONATRACH',
    creditorCode: '8011911704444',
    noticeCode: '3013001498252',
    causal: 'SONATRACH PAYMENT ON DEPOSIT BAZZAF DRAHEM',
    expiryDate: '20/10/2022',
    amount: '€ 1,240,550.99',
  },
  {
    id: '3',
    creditor: 'ENPACL',
    creditorCode: '8011911704444',
    noticeCode: '301001498622',
    causal: 'PAYMENT ON DEPOSIT',
    expiryDate: '31/05/2021',
    amount: '€ 634.99',
  },
  {
    id: '4',
    creditor: 'ENPACL',
    creditorCode: '8011911704444',
    noticeCode: '30100014922',
    causal: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2020 EXPIRES ...',
    expiryDate: '17/08/2021',
    amount: '€ 1434.94',
  },
  {
    id: '5',
    creditor: 'ENPACL',
    creditorCode: '8011911704444',
    noticeCode: '301000149822',
    causal: 'PAYMENT ON DEPOSIT',
    expiryDate: '21/11/2021',
    amount: '€ 1104.94',
  },
  {
    id: '6',
    creditor: 'YASSIR',
    creditorCode: '8011911704444',
    noticeCode: '30100001498222',
    causal: 'PAYMENT ON DEPOSIT',
    expiryDate: '31/05/2021',
    amount: '€ 634.99',
  },
  {
    id: '7',
    creditor: 'ENALAIT',
    creditorCode: '801191704444',
    noticeCode: '301000149822',
    causal: 'SUBJECTIVE AND CONTRIBUTION ENALAIT YEAR 2019',
    expiryDate: '15/03/2019',
    amount: '€ 20130.94',
  },
  {
    id: '8',
    creditor: 'SONACOM',
    creditorCode: '8011911704444',
    noticeCode: '30100001498222',
    causal: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2021 EXPIRES ...',
    expiryDate: '28/05/2022',
    amount: '€ 1,234.99',
  },
  {
    id: '9',
    creditor: 'SNTA',
    creditorCode: '8011911704444',
    noticeCode: '30100001498222',
    causal: 'PAYMENT ON DEPOSIT SNTA',
    expiryDate: '31/01/2022',
    amount: '€ 234.99',
  },
  {
    id: '10',
    creditor: 'ERIAD',
    creditorCode: '8011911704444',
    noticeCode: '30100001498222',
    causal: 'PAYMENT ON DEPOSIT SONACOM',
    expiryDate: '31/05/2021',
    amount: '€ 818.99',
  },
];
