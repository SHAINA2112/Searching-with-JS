 let users = [
        {
            name: "MacBook Pro M4",
            pic: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
            bio: "Apple's flagship laptop built for developers, creators, and AI workloads."
        },
        {
            name: "iPhone 16 Pro",
            pic: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            bio: "A premium smartphone featuring powerful performance and pro-grade cameras."
        },
        {
            name: "Samsung Galaxy S25",
            pic: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
            bio: "Android flagship packed with AI features and a stunning display."
        },
        {
            name: "Dell XPS 15",
            pic: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
            bio: "A developer favorite known for its beautiful screen and portability."
        },
        {
            name: "iPad Pro",
            pic: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
            bio: "A powerful tablet used for design, coding, and productivity."
        },
        {
            name: "PlayStation 5",
            pic: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
            bio: "Sony's next-generation gaming console delivering immersive experiences."
        },
        {
            name: "Xbox Series X",
            pic: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
            bio: "A high-performance gaming machine built for speed and graphics."
        },
        {
            name: "Apple Watch Ultra",
            pic: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
            bio: "A rugged smartwatch designed for athletes and adventurers."
        },
        {
            name: "Sony WH-1000XM5",
            pic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            bio: "Industry-leading noise-canceling headphones loved by professionals."
        },
        {
            name: "Logitech MX Master 3S",
            pic: "https://images.unsplash.com/photo-1527814050087-3793815479db",
            bio: "A productivity mouse trusted by developers and designers."
        },
        {
            name: "Raspberry Pi 5",
            pic: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
            bio: "A tiny computer powering DIY projects and smart systems."
        },
        {
            name: "Meta Quest 3",
            pic: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
            bio: "A virtual reality headset bringing immersive digital worlds to life."
        },
        {
            name: "Steam Deck",
            pic: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
            bio: "A handheld gaming PC for gamers on the go."
        },
        {
            name: "Kindle Paperwhite",
            pic: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
            bio: "A distraction-free e-reader built for book lovers."
        },
        {
            name: "DJI Mini 4 Pro",
            pic: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
            bio: "A compact drone capable of capturing cinematic aerial footage."
        },
        {
            name: "GoPro Hero 13",
            pic: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
            bio: "An action camera designed for adventure and extreme sports."
        },
        {
            name: "LG UltraWide Monitor",
            pic: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
            bio: "A productivity-focused display ideal for multitasking."
        },
        {
            name: "Mechanical Keyboard",
            pic: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
            bio: "A satisfying keyboard loved by coders and gamers alike."
        },
        {
            name: "NVIDIA RTX 5090",
            pic: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
            bio: "A graphics powerhouse built for AI, gaming, and rendering."
        },
        {
            name: "Framework Laptop",
            pic: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            bio: "A modular laptop designed for repairability and upgrades."
        }
    ];
    function showUsers(arr) {
        arr.forEach(function (user) {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = user.pic;
            img.classList.add("bg-img");

            const blurredLayer = document.createElement("div");
            blurredLayer.style.backgroundImage = `url(${user.pic})`;
            blurredLayer.classList.add("blurred-layer");

            const content = document.createElement("div");
            content.classList.add("content");

            const heading = document.createElement("h3");
            heading.textContent = user.name;

            const para = document.createElement("p");
            para.textContent = user.bio;

            content.appendChild(heading);
            content.appendChild(para);

            card.appendChild(img);
            card.appendChild(blurredLayer);
            card.appendChild(content);

            document.querySelector(".cards").appendChild(card);

        });
    }

    showUsers(users);
    let inp = document.querySelector(".inp");
    inp.addEventListener("input", function () {
        let newUsers = users.filter((user) => {
            return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
        });
        const cardsContainer = document.querySelector(".cards");

        if (newUsers.length === 0) {
            cardsContainer.innerHTML = `
            <h2 style="color: white;">Device not found </h2>
        `;
        } else {
            document.querySelector(".cards").innerHTML = "";
            showUsers(newUsers);
        }
    });