import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reutilizacion_component';
  tableColumns = ['Name', 'Age', 'Email'];
  tableData = [
    { Name: 'John Doe', Age: 25, Email: 'john.doe@example.com' },
    { Name: 'Jane Smith', Age: 30, Email: 'jane.smith@example.com' },
    { Name: 'Jim Brown', Age: 27, Email: 'jim.brown@example.com' }
  ];

  handleDelete(row: any) {
    this.tableData = this.tableData.filter(item => item !== row);
  }

  handleUpdate(row: any) {
    // Aquí puedes implementar la lógica para actualizar el registro
    console.log('Update:', row);
  }



  formConfig = [
    { name: 'username', label: 'Username', type: 'text', value: '', placeholder: 'Enter username', validators: { required: true, minLength: 4 } },
    { name: 'username', label: 'Username', type: 'text', value: '', placeholder: 'Enter username', validators: { required: true, minLength: 4 } },
    { name: 'email', label: 'Email', type: 'email', value: '', placeholder: 'Enter email', validators: { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" } },
    { name: 'password', label: 'Password', type: 'password', value: '', placeholder: 'Enter password', validators: { required: true, minLength: 6 } }
  ];

  handleFormSubmit(formData: any) {
    console.log('Form submitted:', formData);
    // Implementa la lógica para manejar el envío del formulario
  }
}
