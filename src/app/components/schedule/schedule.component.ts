import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']

})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['fio_sk', 'name', 'Monday', 'Tuesday','wednesday', 'thursday','friday','saturday','sunday'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }



}



export interface PeriodicElement {
  fio_sk: string;
  name: string;
  Monday: string;
  Tuesday  : string;
  wednesday : string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fio_sk: 'Коротчук Игорь Михайлович ', name:  'онколог (маммолог)', Monday: "9:00-15:00", Tuesday: '9:00-15:00', wednesday: "9:00-15:00",thursday: "9:00-15:00",friday: "9:00-15:00",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Процук Александр Владиславович', name:  'Уролог', Monday: "15:00-18:00", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Лончакова Ирина Юрьевна ', name:  'Хирург, Врач УЗД', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "10:00-18:00",sunday: "Выходной"},
  {fio_sk: 'Корчагин Евгений Николаевич', name:  ' Врач функ-ной диагностики', Monday: "-", Tuesday: '10:00-13:00', wednesday: "10:00-13:00",thursday: "10:00-13:00",friday: "10:00-13:00",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Кудрявцева Елена Равильевна', name:  'Акушер-гинеколог кольпоскопия', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "9:00-13:00",sunday: "Выходной"},
  {fio_sk: 'Гвоздюкова Наталья Ивановна', name: 'Врач УЗ - диагностики', Monday: "08:00-15:00", Tuesday: '08:00-15:00', wednesday: "08:00-15:00",thursday: "08:00-15:00",friday: "08:00-15:00",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Муслихова Ольга Фатиховна', name:  'Эндокринолог диабетолог', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "09:00-15:00",sunday: "Выходной"},
  {fio_sk: 'Буторина Алена Александровна', name:  'Онколог', Monday: "-", Tuesday: '13:00-18:0O', wednesday: "-",thursday: "-",friday: "-",saturday: "ВЫходной",sunday: "Выходной"},
  {fio_sk: 'Корчагина Юлия Сергеевна ', name:  'Терапевт кардиолог', Monday: "-", Tuesday: '10:00-15:00', wednesday: "-",thursday: "-",friday: "10:00-15:00",saturday: "ВЫходной",sunday: "Выходной"},
  {fio_sk: 'Бурков Анатолий Николаевич', name:  'проктолог', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "09:00-13:00",sunday: "Выходной"},
  {fio_sk: 'Авдеев Виктор Иванович', name:  'Пульмонолог', Monday: "-", Tuesday: '-', wednesday: "13:00-18:00",thursday: "-",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Мухамедеева Анастасия Саматовна', name:  'Врач УЗ-диагностики ', Monday: "13:00-18:00", Tuesday: '13:00-18:00', wednesday: "13:00-18:00",thursday: "13:00-18:00",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Грищенко Елена Юрьевна', name:  'Врач УЗ-диагностики ', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "09:00-13:00",sunday: "Выходной"},
  {fio_sk: 'Грищенко Михаил Валерьевич', name:  'Врач -дерматолог ', Monday: "-", Tuesday: '-', wednesday: "-",thursday: "-",friday: "-",saturday: "09:00-13:00",sunday: "Выходной"},
  {fio_sk: 'Лазарева Светлана Владимировна',name:  'Врач невролог,вертеброневролог,иглорефлексотерапевт ', Monday: "15:30-18:00", Tuesday: '-', wednesday: "15:30-18:00",thursday: "15:30-18:00",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Орловский Сергей Игоревич', name:  'Врач гастроэтеролог ', Monday: "-", Tuesday: '16:00-18:00', wednesday: "16:00-18:00",thursday: "10:00-13:00",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Кузьмина Татьяна Михайловна', name:  'Врач эндоскопист', Monday: "09:00-17:00", Tuesday: '09:00-17:00', wednesday: "09:00-17:00",thursday: "09:00-17:00",friday: "09:00-17:00",saturday: "Выходной",sunday: "Выходной"},  
  {fio_sk: 'Лиханова Елена Владимировна', name:  'Акушер-гинеколог кольпоскопия', Monday: "-", Tuesday: '13:00-18:00', wednesday: "-",thursday: "13:00-13:00",friday: "-",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Бабош Юрий Львович', name:  'Сосудистый хирург Врач УЗД', Monday: "15:30-18:00", Tuesday: '-', wednesday: "15:30-18:00",thursday: "-",friday: "15:30-18:00",saturday: "Выходной",sunday: "Выходной"},
  {fio_sk: 'Процук Ольга Олеговна', name:  'Кардиолог', Monday: "-", Tuesday: '14:30-18:00', wednesday: "-",thursday: "-",friday: "-",saturday: "Выходной",sunday: "Выходной"},
];