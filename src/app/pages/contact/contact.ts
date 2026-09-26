import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})


export class Contact {


  data = [
    {
      "firstName": "Carlos",
      "secondName": "Alberto",
      "surname": "Gómez",
      "secondLastName": "Pérez",
      "birthdate": "1985-05-14",
      "gender": {
        "itemId": "GEN_M",
        "value": "Masculino"
      },
      "identificationNumber": "2514 89632 0101",
      "taxIdentifier": "458963-2",
      "email": "carlos.gomez@example.com",
      "phoneNumber": "+502 5544-3322",
      "civilStatus": "Casado",
      "residentialAddress": "3ra Avenida 4-12 Zona 1, Ciudad de Guatemala",
      "employmentType": {
        "itemId": "EMP_01",
        "value": "Asalariado"
      },
      "monthlyIncome": 8500,
      "businessData": {
        "businessName": "Distribuidora El Sol",
        "address": "Calzada Roosevelt 12-45 Zona 11, Ciudad de Guatemala",
        "yearsInBusiness": 5
      },
      "creditId": "CRE-2026-001",
      "loanAmount": 25000,
      "interestRate": 12.5,
      "termMonths": 24,
      "startDate": "2026-01-10",
      "dueDate": "2026-10-10",
      "currentBalance": 16500,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": [
        {
          "pastCreditId": "CRE-2023-894",
          "amount": 10000,
          "status": "Cancelado",
          "behavior": "Excelente"
        }
      ]
    },
    {
      "firstName": "María",
      "secondName": "Elena",
      "surname": "López",
      "secondLastName": "Hernández",
      "birthdate": "1992-09-22",
      "gender": {
        "itemId": "GEN_F",
        "value": "Femenino"
      },
      "identificationNumber": "3021 45781 0101",
      "taxIdentifier": "895623-1",
      "email": "maria.lopez@example.com",
      "phoneNumber": "+502 4411-2233",
      "civilStatus": "Soltera",
      "residentialAddress": "Avenida Las Américas 15-20 Zona 13, Ciudad de Guatemala",
      "employmentType": {
        "itemId": "EMP_02",
        "value": "Profesional Independiente"
      },
      "monthlyIncome": 12000,
      "businessData": {
        "businessName": "Consultoría Financiera ML",
        "address": "Edificio Las Pilas, Oficina 402 Zona 10, Ciudad de Guatemala",
        "yearsInBusiness": 3
      },
      "creditId": "CRE-2026-002",
      "loanAmount": 50000,
      "interestRate": 11,
      "termMonths": 36,
      "startDate": "2026-03-15",
      "dueDate": "2026-10-15",
      "currentBalance": 42000,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": []
    },
    {
      "firstName": "Juan",
      "secondName": "José",
      "surname": "Martínez",
      "secondLastName": "Castillo",
      "birthdate": "1978-11-02",
      "gender": {
        "itemId": "GEN_M",
        "value": "Masculino"
      },
      "identificationNumber": "1985 36251 0301",
      "taxIdentifier": "124578-K",
      "email": "juan.martinez@example.com",
      "phoneNumber": "+502 5988-7744",
      "civilStatus": "Casado",
      "residentialAddress": "Barrio El Centro, Antigua Guatemala",
      "employmentType": {
        "itemId": "EMP_03",
        "value": "Empresario / Negocio Propio"
      },
      "monthlyIncome": 22000,
      "businessData": {
        "businessName": "Artesanías El Quetzal",
        "address": "Calle del Arco #45, Antigua Guatemala",
        "yearsInBusiness": 12
      },
      "creditId": "CRE-2025-115",
      "loanAmount": 100000,
      "interestRate": 14,
      "termMonths": 48,
      "startDate": "2025-06-20",
      "dueDate": "2026-10-20",
      "currentBalance": 72000,
      "creditStatus": "En Mora",
      "isActive": true,
      "creditHistory": [
        {
          "pastCreditId": "CRE-2020-045",
          "amount": 35000,
          "status": "Cancelado",
          "behavior": "Regular"
        },
        {
          "pastCreditId": "CRE-2022-312",
          "amount": 50000,
          "status": "Cancelado",
          "behavior": "Excelente"
        }
      ]
    },
    {
      "firstName": "Ana",
      "secondName": "Lucía",
      "surname": "Rodríguez",
      "secondLastName": "Solares",
      "birthdate": "1995-02-28",
      "gender": {
        "itemId": "GEN_F",
        "value": "Femenino"
      },
      "identificationNumber": "3145 96852 0101",
      "taxIdentifier": "965874-3",
      "email": "ana.rodriguez@example.com",
      "phoneNumber": "+502 3322-1100",
      "civilStatus": "Soltera",
      "residentialAddress": "Colonia El Frutal Zona 5, Villa Nueva",
      "employmentType": {
        "itemId": "EMP_01",
        "value": "Asalariado"
      },
      "monthlyIncome": 5500,
      "businessData": {
        "businessName": "Tienda Comercial La Bendición",
        "address": "Sector 3 Lote 14 Zona 5, Villa Nueva",
        "yearsInBusiness": 2
      },
      "creditId": "CRE-2026-044",
      "loanAmount": 15000,
      "interestRate": 13.5,
      "termMonths": 18,
      "startDate": "2026-05-02",
      "dueDate": "2026-10-02",
      "currentBalance": 11000,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": []
    },
    {
      "firstName": "Luis",
      "secondName": "Fernando",
      "surname": "Alvarez",
      "secondLastName": "García",
      "birthdate": "1988-07-19",
      "gender": {
        "itemId": "GEN_M",
        "value": "Masculino"
      },
      "identificationNumber": "2241 85963 0901",
      "taxIdentifier": "336521-4",
      "email": "luis.alvarez@example.com",
      "phoneNumber": "+502 4755-6622",
      "civilStatus": "Casado",
      "residentialAddress": "Calle Principal Zona 1, Quetzaltenango",
      "employmentType": {
        "itemId": "EMP_01",
        "value": "Asalariado"
      },
      "monthlyIncome": 9000,
      "businessData": {
        "businessName": "Farmacia Gálvez",
        "address": "4ta Calle 7-11 Zona 3, Quetzaltenango",
        "yearsInBusiness": 6
      },
      "creditId": "CRE-2024-501",
      "loanAmount": 40000,
      "interestRate": 12,
      "termMonths": 36,
      "startDate": "2024-08-12",
      "dueDate": "2026-09-12",
      "currentBalance": 0,
      "creditStatus": "Cancelado",
      "isActive": false,
      "creditHistory": [
        {
          "pastCreditId": "CRE-2021-102",
          "amount": 15000,
          "status": "Cancelado",
          "behavior": "Excelente"
        }
      ]
    },
    {
      "firstName": "Claudia",
      "secondName": "Patricia",
      "surname": "Mejía",
      "secondLastName": "Orellana",
      "birthdate": "1990-12-05",
      "gender": {
        "itemId": "GEN_F",
        "value": "Femenino"
      },
      "identificationNumber": "2634 74125 0101",
      "taxIdentifier": "741258-9",
      "email": "claudia.mejia@example.com",
      "phoneNumber": "+502 5111-9988",
      "civilStatus": "Divorciada",
      "residentialAddress": "Km 15 Carretera a El Salvador, Santa Catarina Pinula",
      "employmentType": {
        "itemId": "EMP_02",
        "value": "Profesional Independiente"
      },
      "monthlyIncome": 15000,
      "businessData": {
        "businessName": "Clínica Dental DentalCare",
        "address": "Centro Comercial Plaza Portal Zona 15, Ciudad de Guatemala",
        "yearsInBusiness": 4
      },
      "creditId": "CRE-2026-089",
      "loanAmount": 60000,
      "interestRate": 10.5,
      "termMonths": 24,
      "startDate": "2026-04-18",
      "dueDate": "2026-10-18",
      "currentBalance": 48500,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": [
        {
          "pastCreditId": "CRE-2024-002",
          "amount": 20000,
          "status": "Cancelado",
          "behavior": "Excelente"
        }
      ]
    },
    {
      "firstName": "Jorge",
      "secondName": "Mario",
      "surname": "Ramírez",
      "secondLastName": "Méndez",
      "birthdate": "1982-04-30",
      "gender": {
        "itemId": "GEN_M",
        "value": "Masculino"
      },
      "identificationNumber": "1845 96325 1701",
      "taxIdentifier": "523614-7",
      "email": "jorge.ramirez@example.com",
      "phoneNumber": "+502 5300-4411",
      "civilStatus": "Casado",
      "residentialAddress": "Barrio Las Flores, Flores, Petén",
      "employmentType": {
        "itemId": "EMP_03",
        "value": "Empresario / Negocio Propio"
      },
      "monthlyIncome": 18000,
      "businessData": {
        "businessName": "Hotel y Restaurante El Mirador",
        "address": "Avenida Central, Flores, Petén",
        "yearsInBusiness": 8
      },
      "creditId": "CRE-2025-204",
      "loanAmount": 120000,
      "interestRate": 15,
      "termMonths": 60,
      "startDate": "2025-01-05",
      "dueDate": "2026-10-05",
      "currentBalance": 91000,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": []
    },
    {
      "firstName": "Gabriela",
      "secondName": "Alejandra",
      "surname": "Morales",
      "secondLastName": "Sánchez",
      "birthdate": "1994-08-12",
      "gender": {
        "itemId": "GEN_F",
        "value": "Femenino"
      },
      "identificationNumber": "2963 85214 0101",
      "taxIdentifier": "102589-6",
      "email": "gabriela.morales@example.com",
      "phoneNumber": "+502 4122-3344",
      "civilStatus": "Soltera",
      "residentialAddress": "Residenciales El Frutal, San Miguel Petapa",
      "employmentType": {
        "itemId": "EMP_01",
        "value": "Asalariado"
      },
      "monthlyIncome": 7200,
      "businessData": {
        "businessName": "Boutique Fashion Gaby",
        "address": "Centro Comercial Pradera, San Miguel Petapa",
        "yearsInBusiness": 3
      },
      "creditId": "CRE-2026-112",
      "loanAmount": 30000,
      "interestRate": 13,
      "termMonths": 24,
      "startDate": "2026-06-01",
      "dueDate": "2026-10-01",
      "currentBalance": 26500,
      "creditStatus": "Al día",
      "isActive": true,
      "creditHistory": [
        {
          "pastCreditId": "CRE-2024-965",
          "amount": 10000,
          "status": "Cancelado",
          "behavior": "Excelente"
        }
      ]
    }
  ];

  calculateAge(birthdate: string): number {
  const birth = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

}