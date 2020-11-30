export default `
  <li data-id="{{ id }}" class="{{ completedClass }} listItem">
    <input class="toggle" type="checkbox" {{ completedChecked }}/>
    <label>{{ content }}</label>
    <button class="destroy"></button>
  </li>
`;
