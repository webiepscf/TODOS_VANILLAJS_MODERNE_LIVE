import template from './templates/todo';

export default class Todo {
  constructor (todo) {
    this.id = todo.id;
    this.content = todo.content;
    this.completed = todo.completed;
    this.template = this.replaceAllParams(template);
  }
  replaceAllParams (data) {
    return data.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, '{{$1}}');
  }
  render () {
    // Remplacement dans le template
    for (const prop in this) {
      this.template = this.template.replaceAll('{{' + prop + '}}', this[prop]);
    }

    this.template = this.template.replaceAll('{{completedClass}}', (this.completed)?'completed':'');

    this.template = this.template.replaceAll('{{completedChecked}}', (this.completed)?'checked="checked"':'');

    return this.template;
  }
}
