const structure = [{
		'folder': true,
		'title': 'Films',
		'children': [{
				'title': 'Iron Man.avi'
			},
			{
				'folder': true,
				'title': 'Fantasy',
				'children': [{
						'title': 'The Lord of the Rings.avi'
					},
					{
						'folder': true,
						'title': 'New folder 1',
						'children': false
					}
				]
			}
		]
	},
	{
		'folder': true,
		'title': 'Documents',
		'children': [{
			'folder': true,
			'title': 'EPAM Homework answers',
			'children': null
		}]
	}
];

const rootNode = document.getElementById('root');
function createStructure(structure, node) {
	let tree = document.createElement('ul');
	node.appendChild(tree);
	for (let item of structure) {
		const listItem = document.createElement('li');
		tree.appendChild(listItem);
		const listElement = document.createElement('div');
		listElement.classList.add('hover');
		listItem.appendChild(listElement);
		if (tree.parentNode !== rootNode) {
			tree.classList.add('hidden');
		}
		if (item.folder) {
			listItem.classList.add('folder');
			const icon = document.createElement('i');
			icon.classList.add('material-icons', 'folder');
			icon.appendChild(document.createTextNode('folder'));
			listElement.appendChild(icon);
			listElement.appendChild(document.createTextNode(item.title));
			listElement.addEventListener('click', function () {
				listElement.nextSibling.classList.toggle('visible');
				let iconText = listElement.firstChild.textContent;
				if (iconText === 'folder') {
					listElement.firstChild.textContent = 'folder_open';
				} else {
					listElement.firstChild.textContent = 'folder';
				}
			});
			if (item.children) {
				createStructure(item.children, listItem);
			} else {
				const emptyFolder = document.createElement('div');
				emptyFolder.classList.add('empty-folder', 'hidden');
				emptyFolder.textContent = 'Folder is empty';
				listItem.appendChild(emptyFolder);
			}
		} else {
			listItem.classList.add('file');
			let icon = document.createElement('i');
			icon.classList.add('material-icons', 'file');
			icon.appendChild(document.createTextNode('insert_drive_file'));
			listElement.appendChild(icon);
			listElement.appendChild(document.createTextNode(item.title));
		}
	}
}
createStructure(structure, rootNode);