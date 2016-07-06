import createResultItem from 'create-result-item';

export default function (listElement, listData) {
  listElement.innerHTML = '';

  for (let i = 0; i < listData.length; i++) {
    // Create a new result for EVERY item in our listData
    const itemElement = createResultItem(listData[i]);
    // Add new result item to list Element
    listElement.appendChild(itemElement);
  }
}
