export interface GeneralInfo {
    id: number,
    attributes: {
      address: string,
      EMail: string,
      coordinates: string,
      insuranceCompanies: [{
        id: number,
        name: string,
      }],
      companyPhones: [{
        id: number,
        phone: string,
      }]
    }
}
