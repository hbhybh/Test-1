// HTML 요소들을 변수로 가져옵니다.
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResultDisplay = document.getElementById('searchResultDisplay'); // 검색 결과를 표시할 빈 공간
const itemTypeButtons = document.getElementById('itemTypeButtons');
const resultsContainer = document.getElementById('resultsContainer');

// ... (나머지 코드는 동일)
const allItems = {
    type1: Array.from({ length: 20 }, (_, i) => `아이템 타입 1-${i + 1}`),
    type2: Array.from({ length: 20 }, (_, i) => `아이템 타입 2-${i + 1}`),
    type3: Array.from({ length: 20 }, (_, i) => `아이템 타입 3-${i + 1}`),
    type4: Array.from({ length: 20 }, (_, i) => `아이템 타입 4-${i + 1}`),
};

// 검색 버튼 클릭 시 발생하는 이벤트
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        searchResultDisplay.textContent = searchTerm; // 빈 공간에 검색어를 표시
        // 여기에 실제 검색 로직을 추가할 수 있습니다.
    }
});

// 아이템 타입 버튼 클릭 시 발생하는 이벤트
itemTypeButtons.addEventListener('click', (event) => {
    const clickedButton = event.target;
    if (clickedButton.tagName === 'BUTTON') {
        const itemType = clickedButton.dataset.type;
        const items = allItems[itemType];

        // 결과창 비우기
        resultsContainer.innerHTML = '';

        // 새로운 아이템 목록 표시
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('item-card');
            itemCard.textContent = item;
            resultsContainer.appendChild(itemCard);
        });
    }
});
