"use strict";

addEventListener("DOMContentLoaded", () => {
  // Поддерживаемые языки
  const supportedLanguages = ["de", "en", "es", "fr", "ja", "pt"];

  // Функция для получения параметра 'lang' из URL
  function getLangFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("lang");
  }

  // Определение системного языка (или можно установить по умолчанию)
  const systemLang = navigator.language.slice(0, 2).toLowerCase();
  let selectedLang = getLangFromUrl() || systemLang;

  // Если выбранный язык не поддерживается, ставим английский по умолчанию
  if (!supportedLanguages.includes(selectedLang)) {
    selectedLang = "en";
  }

  // Функция для загрузки перевода
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`${lang}.json`);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error in loading of translations:", error);
      return {};
    }
  }

  // Применяем переводы на страницу
  async function applyTranslations() {
    const translations = await loadTranslations(selectedLang);

    // Заполнение текста на странице
    // Находим все элементы с классом "text"
    const elements = document.querySelectorAll('.text');

     // Проходим по каждому элементу и выполняем замену
     elements.forEach(element => {
         let innerText = element.innerHTML;

         // Проверяем каждую пару ключ-значение в translations
         for (const [oldText, newText] of Object.entries(translations)) {
             // Если старый текст найден, заменяем его на новый текст
             if (innerText.includes(oldText)) {
                innerText = innerText.replace(oldText, newText);
             }
         }

         // Обновляем содержимое элемента
         element.innerHTML = innerText;
     });
  }

  // Выполнение
  applyTranslations();
});
