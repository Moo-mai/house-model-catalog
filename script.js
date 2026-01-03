// ข้อมูลแบบบ้าน
const houses = [
    {
        id: 1,
        name: "บ้านโมเดิร์นมินิมอล",
        type: "บ้านเดี่ยว",
        description: "ดีไซน์สไตล์โมเดิร์น เรียบง่าย ใช้งานง่าย เหมาะกับครอบครัวเล็ก",
        area: "120 ตร.ม.",
        rooms: "3 ห้องนอน",
        bathrooms: "2 ห้องน้ำ",
        price: 2500000,
        pricePerSqm: 20000,
        imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        name: "ทาวน์โฮมทันสมัย",
        type: "ทาวน์โฮม",
        description: "ออกแบบใช้พื้นที่คุ้มค่า เหมาะกับครอบครัวในเมือง",
        area: "85 ตร.ม.",
        rooms: "3 ห้องนอน",
        bathrooms: "2 ห้องน้ำ",
        price: 1800000,
        pricePerSqm: 21000,
        imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        name: "บ้านสไตล์ร่วมสมัย",
        type: "บ้านเดี่ยว",
        description: "ผสมผสานความทันสมัยและอบอุ่น มีสวนหน้าบ้าน",
        area: "150 ตร.ม.",
        rooms: "4 ห้องนอน",
        bathrooms: "3 ห้องน้ำ",
        price: 3200000,
        pricePerSqm: 21500,
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        name: "ทาวน์โฮมคอมแพค",
        type: "ทาวน์โฮม",
        description: "ขนาดกะทัดรัด ราคาประหยัด เหมาะกับคนทำงาน",
        area: "70 ตร.ม.",
        rooms: "2 ห้องนอน",
        bathrooms: "2 ห้องน้ำ",
        price: 1500000,
        pricePerSqm: 21500,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        name: "บ้านหรู 2 ชั้น",
        type: "บ้านเดี่ยว",
        description: "บ้านหรูหรา พื้นที่กว้างขวาง มีสระว่ายน้ำ",
        area: "200 ตร.ม.",
        rooms: "5 ห้องนอน",
        bathrooms: "4 ห้องน้ำ",
        price: 4500000,
        pricePerSqm: 22500,
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        name: "ทาวน์โฮมพรีเมี่ยม",
        type: "ทาวน์โฮม",
        description: "ทาวน์โฮมระดับพรีเมี่ยม ดีไซน์โดดเด่น",
        area: "100 ตร.ม.",
        rooms: "3 ห้องนอน",
        bathrooms: "3 ห้องน้ำ",
        price: 2200000,
        pricePerSqm: 22000,
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=250&fit=crop"
    }
];

let currentFilter = 'all';

function displayHouses(filter = 'all') {
    const grid = document.getElementById('housesGrid');
    const houseSelect = document.getElementById('houseSelect');
    
    grid.innerHTML = '';
    houseSelect.innerHTML = '<option value="">-- กรุณาเลือกแบบบ้าน --</option>';
    
    const filteredHouses = filter === 'all' 
        ? houses 
        : houses.filter(house => house.type === filter);
    
    filteredHouses.forEach(house => {
        const card = document.createElement('div');
        card.className = 'house-card';
        card.innerHTML = `
            <img src="${house.imageUrl}" alt="${house.name}" class="house-image" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.innerHTML='${house.name}'; this.style.fontSize='18px'; this.style.fontWeight='600'; this.style.color='white'; this.style.textAlign='center'; this.style.padding='20px';">
            <div class="house-content">
                <div class="house-header">
                    <span class="house-type">${house.type}</span>
                </div>
                <div class="house-name">${house.name}</div>
                <div class="house-details">
                    <div class="detail-row">
                        <span>พื้นที่:</span>
                        <span>${house.area}</span>
                    </div>
                    <div class="detail-row">
                        <span>ห้องนอน:</span>
                        <span>${house.rooms}</span>
                    </div>
                    <div class="detail-row">
                        <span>ห้องน้ำ:</span>
                        <span>${house.bathrooms}</span>
                    </div>
                </div>
                <div class="house-description">${house.description}</div>
                <div class="house-footer">
                    <div class="house-price">
                        <div class="price-label">ราคาเริ่มต้น</div>
                        ฿${house.price.toLocaleString()}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
        
        const option = document.createElement('option');
        option.value = house.id;
        option.textContent = `${house.name} (${house.type})`;
        houseSelect.appendChild(option);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            currentFilter = filter;
            displayHouses(filter);
        });
    });
}

function calculatePrice() {
    const houseId = parseInt(document.getElementById('houseSelect').value);
    const area = parseFloat(document.getElementById('areaInput').value);
    const floors = parseInt(document.getElementById('floorsSelect').value);
    
    if (!houseId || !area) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }
    
    const selectedHouse = houses.find(h => h.id === houseId);
    
    if (!selectedHouse) {
        alert('ไม่พบข้อมูลบ้านที่เลือก');
        return;
    }
    
    const basePrice = selectedHouse.pricePerSqm * area;
    const floorMultiplier = 1 + ((floors - 1) * 0.15);
    const totalPrice = basePrice * floorMultiplier;
    
    const resultDiv = document.getElementById('result');
    const totalPriceDiv = document.getElementById('totalPrice');
    const breakdownDiv = document.getElementById('breakdown');
    
    totalPriceDiv.textContent = `฿${totalPrice.toLocaleString('th-TH', { maximumFractionDigits: 0 })}`;
    breakdownDiv.innerHTML = `
        <div><strong>รายละเอียดการคำนวณ:</strong></div>
        <div>แบบบ้าน: ${selectedHouse.name}</div>
        <div>พื้นที่ใช้สอย: ${area} ตารางเมตร</div>
        <div>จำนวนชั้น: ${floors} ชั้น</div>
        <div>ราคาต่อตารางเมตร: ฿${selectedHouse.pricePerSqm.toLocaleString()}</div>
        <div>ราคาฐาน: ฿${basePrice.toLocaleString('th-TH', { maximumFractionDigits: 0 })}</div>
        ${floors > 1 ? `<div>ค่าก่อสร้างเพิ่ม (${floors} ชั้น): +${((floorMultiplier - 1) * 100).toFixed(0)}%</div>` : ''}
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.3);"><em>*ราคานี้เป็นราคาประมาณการเบื้องต้น อาจมีการเปลี่ยนแปลงตามสภาพพื้นที่และวัสดุที่เลือกใช้</em></div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', () => {
    displayHouses();
    setupFilters();
});