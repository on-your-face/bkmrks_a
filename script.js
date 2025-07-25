async function loadFont(e, t, n) {
    const o = t["woff2" in document.createElement("link").relList ? "woff2" : "woff"],
        a = new FontFace(e, `url(${o})`, n);
    try {
        const e = await a.load();
        document.fonts.add(e);
    } catch (e) {}
}
async function preloadFonts() {
    await Promise.all([
        loadFont("OpenSans", { woff: "./fonts/OpenSans-Light.woff", woff2: "./fonts/OpenSans-Light.woff2" }, { style: "normal", weight: "400" }),
        loadFont("Lora-Regular", { woff: "./fonts/Lora-Regular.woff", woff2: "./fonts/Lora-Regular.woff2" }, { style: "normal", weight: "400" }),
    ]);
}
function initNewTabLinks() {
    document.querySelectorAll("a.new_tab").forEach((e) => {
        e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer");
    });
}
function initModal() {
    const e = () => {
        (document.body.style.overflow = ""), (document.body.style.paddingRight = "");
    };
    document.querySelectorAll(".element[data-modal-id]").forEach((e) => {
        e.addEventListener("click", function () {
            const e = this.getAttribute("data-modal-id"),
                t = document.getElementById(e);
            t &&
                (t.classList.add("open"),
                (() => {
                    const e = window.innerWidth - document.documentElement.clientWidth;
                    (document.body.style.overflow = "hidden"), (document.body.style.paddingRight = `${e}px`);
                })());
        });
    }),
        document.addEventListener("keydown", function (t) {
            if ("Escape" === t.key) {
                const t = document.querySelector(".modal.open");
                t && (t.classList.remove("open"), e()), o();
            }
        });
    const t = document.querySelectorAll('a.anchor[href^="#"]'),
        n = document.querySelectorAll(".hashtags.content__wrapper"),
        o = () => {
            n.forEach((e) => e.classList.remove("open__hashtags")), t.forEach((e) => (e.style.opacity = ""));
        };
    t.forEach((e) => {
        e.addEventListener("click", (t) => {
            t.preventDefault();
            const n = e.getAttribute("href").substring(1),
                a = document.getElementById(n);
            if (!a || !a.classList.contains("hashtags")) return;
            const i = a.classList.contains("open__hashtags");
            o(), i || (a.classList.add("open__hashtags"), (e.style.opacity = "1"));
        });
    });
    let a = 0,
        i = 0,
        r = !1;
    document.addEventListener("touchstart", (e) => {
        const t = e.target.closest(".modal.open");
        t && ((a = e.touches[0].clientX), (r = !0), (t.dataset.isSwiping = "true"));
    }),
        document.addEventListener("touchmove", (t) => {
            const n = document.querySelector('.modal.open[data-is-swiping="true"]');
            n && r && ((i = t.touches[0].clientX), a - i > 150 && (n.classList.remove("open"), e(), o(), (r = !1), delete n.dataset.isSwiping));
        }),
        document.addEventListener("touchend", () => {
            const e = document.querySelector('.modal.open[data-is-swiping="true"]');
            e && ((r = !1), delete e.dataset.isSwiping);
        });
}
function initCopy() {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("a.copy").forEach(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                const n = e.getAttribute("href");
                if (n) {
                    const e = document.createElement("input");
                    (e.value = n), document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e);
                }
            });
        });
    });
}
function initVkRedirect() {
    document.querySelectorAll(".vk_music").forEach((e) => {
        const t = e.getAttribute("href");
        e.addEventListener("click", function (e) {
            !(function (e, t) {
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                    const e = `vk://vk.com/${t.replace("https://vk.com/", "")}`;
                    window.location.href = e;
                } else window.open(t, "_blank");
                e.preventDefault();
            })(e, t);
        });
    });
}
function initCopyLong() {
    document.querySelectorAll(".copylong[data-href]").forEach((e) => {
        e.addEventListener("click", function (e) {
            e.preventDefault();
            const t = this.getAttribute("data-href");
            if (t) {
                const e = {
                    msword2007_templates: "%appdata%\\Microsoft\\Шаблоны",
                    php_myadmin: "127.0.0.1/openserver/phpmyadmin/",
                    stop_spooler: "net stop spooler",
                    start_spooler: "net start spooler",
                    clear_spooler: 'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',
                    "cmd-cd": 'cd /d "C:\\on-your-face\\"',
                    "cmd-start": 'start "" "c:\\OSPanel\\Open Server Panel.exe"',
                    "cmd-OSP-server-START": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',
                    "cmd-OSP-server-RESTART": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',
                    "cmd-OSP-server-STOP": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',
                    "cmd-OSP-domain": "http://test-wordpress/wp-admin/",
                    "git-clone": "git clone",
                    "git-delete (cmd)": "rmdir /s /q .git",
                    "git-push (3in1)": "git add . && git commit -m ok && git push",
                    "stop zapret": "sc stop WinDivert",
                    "regedit-autorun": "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
                    "close process (OSP promt)": 'taskkill /IM "Open Server Panel.exe" /F',
                    termux_iam_true: "git config --global --add safe.directory /storage/emulated/0/bookmarks",
                    "cd ~/storage/shared/bookmarks": "cd ~/storage/shared/bookmarks",
                    "termux_git-pull": "git pull origin main",
                    "block-ghost": '<div class="element ghost"></div>',
                    "directory-buttery-taskbar": "C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",
                    gpt_galuni:
                        "Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.\n\n1. Поведение при недостатке информации:\n\nЕсли в ответе отсутствуют данные, ты не дополняешь их предположениями.\n\nВместо этого используешь одну из формулировок:\n\n«У меня нет подтверждённой информации по этому вопросу.»\n\n«Не могу проверить это без доступа к источнику/данным.»\n\n«Данных недостаточно для достоверного вывода.»\n\n2. Явное разграничение утверждений:\n\nПри генерации любого ответа чётко отмечай:\n\nЧто известно на основе подтверждённых данных.\n\nЧто является обоснованным предположением.\n\nГде присутствует неопределённость или потенциальная ошибка.\n\nШаблон:\n\n[Факт]: …\n\n[Предположение]: …\n\n[Неуверенность/недостаток данных]: …\n\n3. Условия остановки:\n\nЕсли ты обнаруживаешь, что вероятность ложного вывода высока (энтропия распределения вариантов ≈ равная), приостанавливаешь ответ и пишешь:\n\n«Высокая неопределённость. Требуются уточняющие данные или проверка.»\n\n4. Самопроверка перед выводом:\n\nПеред завершением ответа:\n\nПроверь согласованность с обученной базой и известными источниками.\n\nЗафиксируй наличие внутренних противоречий.\n\nОтметь признаки неуверенности.\n\n5. Поведение при сомнительных утверждениях:\n\nЕсли запрос содержит потенциально спорную или недостоверную информацию:\n\n«Этот факт требует дополнительной проверки. У меня нет достоверного подтверждения.»\n\n6. Обработка нестабильных участков генерации:\n\nЕсли замечаешь:\n\nРезкие смысловые переходы,\n\nНеоднозначности,\n\nАномальные паттерны —\n\nОстановись и используй:\n\n«Существует семантический разрыв. Возможна ошибка в интерпретации.»\n\n7. Принцип: отказ лучше вымысла:\n\nОтказ от ответа допустим. Главное — не выдумывать.\n\n8. Источник и логическая верификация:\n\n> Основывайся на подтверждённых знаниях из обученной базы.\n\nP.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.",
                }[t];
                if (e) {
                    const t = document.createElement("textarea");
                    (t.style.position = "fixed"),
                        (t.style.opacity = "0"),
                        (t.value = e),
                        document.body.appendChild(t),
                        t.focus(),
                        t.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(t);
                }
            }
        });
    });
}
initNewTabLinks(), initModal(), initCopy(), initCopyLong(), initVkRedirect(), preloadFonts();
