// HTML 요소들을 변수로 가져옵니다.
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResultDisplay = document.getElementById('searchResultDisplay'); // 검색 결과를 표시할 빈 공간
const itemTypeButtons = document.getElementById('itemTypeButtons');
const resultsContainer = document.getElementById('resultsContainer');

// 자바의 컬렉션(Map, List) 개념을 적용한 전체 아이템 데이터
const allItems = {
    'type1': [
        { id: 1, name: '하이브리드 기어포스', description: '아이템 타입 1-1에 대한 설명입니다.' },
        { id: 2, name: '파이널 용', description: '아이템 타입 1-2에 대한 설명입니다.' },
        { id: 3, name: '파이널 이글', description: '아이템 타입 1-3에 대한 설명입니다.' },
        { id: 4, name: '파이널 새새', description: '아이템 타입 1-4에 대한 설명입니다.' },
        { id: 5, name: '오쿠치(야마토)', description: '아이템 타입 1-5에 대한 설명입니다.' },
        { id: 6, name: '파이널 고무', description: '아이템 타입 1-6에 대한 설명입니다.' },
        { id: 7, name: '파이널 마그', description: '아이템 타입 1-7에 대한 설명입니다.' },
        { id: 8, name: '파이널 오페', description: '아이템 타입 1-8에 대한 설명입니다.' },
        { id: 9, name: '파이널 레오파드', description: '아이템 타입 1-9에 대한 설명입니다.' },
        { id: 10, name: '파이널 모래', description: '아이템 타입 1-10에 대한 설명입니다.' },
        { id: 11, name: '규키(새턴)', description: '아이템 타입 1-11에 대한 설명입니다.' },
        { id: 12, name: '파이널 얼음', description: '아이템 타입 1-12에 대한 설명입니다.' },
        { id: 13, name: '고급 토톰', description: '아이템 타입 1-13에 대한 설명입니다.' },
        { id: 14, name: '흔들v3', description: '아이템 타입 1-14에 대한 설명입니다.' },
        { id: 15, name: '노래 각성', description: '아이템 타입 1-15에 대한 설명입니다.' },
        { id: 16, name: '빛 v3', description: '아이템 타입 1-16에 대한 설명입니다.' },
        { id: 17, name: '파이널 떡', description: '아이템 타입 1-17에 대한 설명입니다.' },
        { id: 18, name: '고급 부처', description: '아이템 타입 1-18에 대한 설명입니다.' },
        { id: 19, name: '파이널 쿠릉', description: '아이템 타입 1-19에 대한 설명입니다.' },
        { id: 21, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 22, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 23, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 24, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 25, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 26, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 27, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 28, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 29, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 30, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 31, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 32, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 33, name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        { id: 34 name: '용v2', description: '아이템 타입 1-20에 대한 설명입니다.' },
        
    ],
    'type2': [
        { id: 21, name: '아이템 타입 2-1', description: '아이템 타입 2-1에 대한 설명입니다.' },
        { id: 22, name: '아이템 타입 2-2', description: '아이템 타입 2-2에 대한 설명입니다.' },
        { id: 23, name: '아이템 타입 2-3', description: '아이템 타입 2-3에 대한 설명입니다.' },
        { id: 24, name: '아이템 타입 2-4', description: '아이템 타입 2-4에 대한 설명입니다.' },
        { id: 25, name: '아이템 타입 2-5', description: '아이템 타입 2-5에 대한 설명입니다.' },
        { id: 26, name: '아이템 타입 2-6', description: '아이템 타입 2-6에 대한 설명입니다.' },
        { id: 27, name: '아이템 타입 2-7', description: '아이템 타입 2-7에 대한 설명입니다.' },
        { id: 28, name: '아이템 타입 2-8', description: '아이템 타입 2-8에 대한 설명입니다.' },
        { id: 29, name: '아이템 타입 2-9', description: '아이템 타입 2-9에 대한 설명입니다.' },
        { id: 30, name: '아이템 타입 2-10', description: '아이템 타입 2-10에 대한 설명입니다.' },
        { id: 31, name: '아이템 타입 2-11', description: '아이템 타입 2-11에 대한 설명입니다.' },
        { id: 32, name: '아이템 타입 2-12', description: '아이템 타입 2-12에 대한 설명입니다.' },
        { id: 33, name: '아이템 타입 2-13', description: '아이템 타입 2-13에 대한 설명입니다.' },
        { id: 34, name: '아이템 타입 2-14', description: '아이템 타입 2-14에 대한 설명입니다.' },
        { id: 35, name: '아이템 타입 2-15', description: '아이템 타입 2-15에 대한 설명입니다.' },
        { id: 36, name: '아이템 타입 2-16', description: '아이템 타입 2-16에 대한 설명입니다.' },
        { id: 37, name: '아이템 타입 2-17', description: '아이템 타입 2-17에 대한 설명입니다.' },
        { id: 38, name: '아이템 타입 2-18', description: '아이템 타입 2-18에 대한 설명입니다.' },
        { id: 39, name: '아이템 타입 2-19', description: '아이템 타입 2-19에 대한 설명입니다.' },
        { id: 40, name: '아이템 타입 2-20', description: '아이템 타입 2-20에 대한 설명입니다.' },
    ],
    'type3': [
        { id: 41, name: '아이템 타입 3-1', description: '아이템 타입 3-1에 대한 설명입니다.' },
        { id: 42, name: '아이템 타입 3-2', description: '아이템 타입 3-2에 대한 설명입니다.' },
        { id: 43, name: '아이템 타입 3-3', description: '아이템 타입 3-3에 대한 설명입니다.' },
        { id: 44, name: '아이템 타입 3-4', description: '아이템 타입 3-4에 대한 설명입니다.' },
        { id: 45, name: '아이템 타입 3-5', description: '아이템 타입 3-5에 대한 설명입니다.' },
        { id: 46, name: '아이템 타입 3-6', description: '아이템 타입 3-6에 대한 설명입니다.' },
        { id: 47, name: '아이템 타입 3-7', description: '아이템 타입 3-7에 대한 설명입니다.' },
        { id: 48, name: '아이템 타입 3-8', description: '아이템 타입 3-8에 대한 설명입니다.' },
        { id: 49, name: '아이템 타입 3-9', description: '아이템 타입 3-9에 대한 설명입니다.' },
        { id: 50, name: '아이템 타입 3-10', description: '아이템 타입 3-10에 대한 설명입니다.' },
        { id: 51, name: '아이템 타입 3-11', description: '아이템 타입 3-11에 대한 설명입니다.' },
        { id: 52, name: '아이템 타입 3-12', description: '아이템 타입 3-12에 대한 설명입니다.' },
        { id: 53, name: '아이템 타입 3-13', description: '아이템 타입 3-13에 대한 설명입니다.' },
        { id: 54, name: '아이템 타입 3-14', description: '아이템 타입 3-14에 대한 설명입니다.' },
        { id: 55, name: '아이템 타입 3-15', description: '아이템 타입 3-15에 대한 설명입니다.' },
        { id: 56, name: '아이템 타입 3-16', description: '아이템 타입 3-16에 대한 설명입니다.' },
        { id: 57, name: '아이템 타입 3-17', description: '아이템 타입 3-17에 대한 설명입니다.' },
        { id: 58, name: '아이템 타입 3-18', description: '아이템 타입 3-18에 대한 설명입니다.' },
        { id: 59, name: '아이템 타입 3-19', description: '아이템 타입 3-19에 대한 설명입니다.' },
        { id: 60, name: '아이템 타입 3-20', description: '아이템 타입 3-20에 대한 설명입니다.' },
    ],
    'type4': [
        { id: 61, name: '아이템 타입 4-1', description: '아이템 타입 4-1에 대한 설명입니다.' },
        { id: 62, name: '아이템 타입 4-2', description: '아이템 타입 4-2에 대한 설명입니다.' },
        { id: 63, name: '아이템 타입 4-3', description: '아이템 타입 4-3에 대한 설명입니다.' },
        { id: 64, name: '아이템 타입 4-4', description: '아이템 타입 4-4에 대한 설명입니다.' },
        { id: 65, name: '아이템 타입 4-5', description: '아이템 타입 4-5에 대한 설명입니다.' },
        { id: 66, name: '아이템 타입 4-6', description: '아이템 타입 4-6에 대한 설명입니다.' },
        { id: 67, name: '아이템 타입 4-7', description: '아이템 타입 4-7에 대한 설명입니다.' },
        { id: 68, name: '아이템 타입 4-8', description: '아이템 타입 4-8에 대한 설명입니다.' },
        { id: 69, name: '아이템 타입 4-9', description: '아이템 타입 4-9에 대한 설명입니다.' },
        { id: 70, name: '아이템 타입 4-10', description: '아이템 타입 4-10에 대한 설명입니다.' },
        { id: 71, name: '아이템 타입 4-11', description: '아이템 타입 4-11에 대한 설명입니다.' },
        { id: 72, name: '아이템 타입 4-12', description: '아이템 타입 4-12에 대한 설명입니다.' },
        { id: 73, name: '아이템 타입 4-13', description: '아이템 타입 4-13에 대한 설명입니다.' },
        { id: 74, name: '아이템 타입 4-14', description: '아이템 타입 4-14에 대한 설명입니다.' },
        { id: 75, name: '아이템 타입 4-15', description: '아이템 타입 4-15에 대한 설명입니다.' },
        { id: 76, name: '아이템 타입 4-16', description: '아이템 타입 4-16에 대한 설명입니다.' },
        { id: 77, name: '아이템 타입 4-17', description: '아이템 타입 4-17에 대한 설명입니다.' },
        { id: 78, name: '아이템 타입 4-18', description: '아이템 타입 4-18에 대한 설명입니다.' },
        { id: 79, name: '아이템 타입 4-19', description: '아이템 타입 4-19에 대한 설명입니다.' },
        { id: 80, name: '아이템 타입 4-20', description: '아이템 타입 4-20에 대한 설명입니다.' },
    ],
};

// 검색 버튼 클릭 시 발생하는 이벤트
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        // 검색 로직
        // 모든 아이템 목록을 하나의 배열로 합칩니다.
        const allItemsList = [].concat(...Object.values(allItems));
        // filter() 함수를 사용하여 검색어에 해당하는 아이템만 남깁니다.
        const filteredItems = allItemsList.filter(item => item.name.includes(searchTerm));

        // 결과창 비우기
        resultsContainer.innerHTML = '';
        
        // 검색된 아이템 목록 표시
        if (filteredItems.length > 0) {
            searchResultDisplay.textContent = ''; // 검색 시 빈칸 내용 지우기
            
            filteredItems.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.classList.add('item-card');
                itemCard.textContent = item.name;
                
                // 아이템 카드를 클릭하면 설명이 표시되도록 이벤트 추가
                itemCard.addEventListener('click', () => {
                    searchResultDisplay.textContent = item.description;
                });
                
                resultsContainer.appendChild(itemCard);
            });
        } else {
            // 검색 결과가 없을 경우
            searchResultDisplay.textContent = ''; // 빈칸 내용 지우기
            resultsContainer.innerHTML = '<p style="text-align:center; padding:20px;">검색 결과가 없습니다.</p>';
        }
    }
});

// 아이템 타입 버튼 클릭 시 발생하는 이벤트
itemTypeButtons.addEventListener('click', (event) => {
    const clickedButton = event.target;
    if (clickedButton.tagName === 'BUTTON') {
        const itemType = clickedButton.dataset.type;
        const items = allItems[itemType]; // Map의 key를 이용해 List를 가져옵니다.

        // 결과창 비우기
        resultsContainer.innerHTML = '';
        searchResultDisplay.textContent = ''; // 아이템 타입 버튼 클릭 시 빈칸 비우기

        // 새로운 아이템 목록 표시
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('item-card');
            itemCard.textContent = item.name;

            // 아이템 카드를 클릭하면 설명이 표시되도록 이벤트 추가
            itemCard.addEventListener('click', () => {
                searchResultDisplay.textContent = item.description;
            });
            
            resultsContainer.appendChild(itemCard);
        });
    }
});
