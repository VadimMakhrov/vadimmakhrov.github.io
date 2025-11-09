document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);
	const civ = params.get('civ');
	
	
  // Функция для обновления
  function update(civName) {
		// Обновление меню
		document.getElementById('tech-title').textContent = `Древо технологий – ${civilizations[civName].name}`
		
		// Обновление item
		for (const col in civilizations[civ]) {
			if (col === 'name') continue;
			for (const row in civilizations[civ][col]) {
				for (const itemId in civilizations[civ][col][row]) {
					const path = civilizations[civ][col][row][itemId];
					document
						.querySelector(`#${col} #${row} #${itemId} .tooltip-item img`)
						.setAttribute('src', path);
				}
			}
		}
		
		// Обновление bonuses
		document.querySelector(`#col-01 #row-02 .node-img`).setAttribute('src', `assets/bonuses/${civName}/bonus-1.jpg`)
		document.querySelector(`#col-01 #row-03 .node-img`).setAttribute('src', `assets/bonuses/${civName}/bonus-2.jpg`)
		document.querySelector(`#col-01 #row-04 .node-img`).setAttribute('src', `assets/bonuses/${civName}/bonus-3.jpg`)
		
		document.querySelector(`#col-01 #row-02 .tooltip img`).setAttribute('src', `assets/bonuses/${civName}/bonus-1-desc.jpg`)
		document.querySelector(`#col-01 #row-03 .tooltip img`).setAttribute('src', `assets/bonuses/${civName}/bonus-2-desc.jpg`)
		document.querySelector(`#col-01 #row-04 .tooltip img`).setAttribute('src', `assets/bonuses/${civName}/bonus-3-desc.jpg`)
		
  }


  update(civ);

  // Обработка кликов по пунктам меню
  document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', () => {
      const newCiv = item.getAttribute('data-civ');
			window.location.href = `tree.html?civ=${newCiv}`;
      update(newCiv);
    });
  });
});
