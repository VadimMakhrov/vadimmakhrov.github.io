function createMenu() {
	const menuPlaceholder = document.getElementById('menu');
	menuPlaceholder.innerHTML = `
	<ul class="menu-list">
			<li class="menu-item dropdown" id="tech-menu">
				<span id="tech-title">Древо технологий</span>
				<ul class="submenu" id="tech"></ul>
			</li>
			<li class="menu-item" id="public-institutions">
				<a href="public-institutions.html">Общественные институты</a>
			</li>
			<li class="menu-item dropdown" id="ideology-menu">
				<span id="ideology-title">Идеологии</span>
				<ul class="submenu" id="ideology">
					<li class="submenu-item"><a href="ideologies.html?ideology=autocracy">Автократия</a></li>
					<li class="submenu-item"><a href="ideologies.html?ideology=freedom">Свобода</a></li>
					<li class="submenu-item"><a href="ideologies.html?ideology=order">Порядок</a></li>
				</ul>
			</li>			
			<li class="menu-item" id="pantheons">
				<a href="pantheons.html">Пантеоны</a>
			</li>
			<li class="menu-item dropdown" id="ideology-menu">
				<span id="ideology-title">Верования</span>
				<ul class="submenu" id="faiths">
					<li class="submenu-item"><a href="faiths.html?faiths=founder">Верования основателя</a></li>
					<li class="submenu-item"><a href="faiths.html?faiths=admirer">Верования почитателей</a></li>
					<li class="submenu-item"><a href="faiths.html?faiths=strengthening">Верования укрепления</a></li>
				</ul>
			</li>		
			<li class="menu-item" id="reformation">
				<a href="reformation.html">Реформация</a>
			</li>
  </ul>
	`;
};


function createList() {
	const submenu = techMenu.querySelector('.submenu, #tech');
	submenu.innerHTML = ''; // очищаем

	for (const civKey in civilizations) {
				const li = document.createElement('li');
				li.className = 'submenu-item';
				li.dataset.civ = civKey;
				li.dataset.link = 'tree.html';
				li.textContent = civilizations[civKey].name;
				submenu.appendChild(li);
	}
}
createMenu();

const techMenu = document.getElementById('tech-menu');
createList();


techMenu.querySelectorAll('.submenu-item').forEach(item => {	
  item.addEventListener('click', (e) => {
    e.stopPropagation();
		
		const civ = item.getAttribute('data-civ');
		window.location.href = `${item.getAttribute('data-link')}?civ=${civ}`;
  });
});

