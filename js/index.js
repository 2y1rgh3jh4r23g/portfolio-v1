feather.replace();

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          name: "Kirill Anisimov",
        },
      },
      ru: {
        translation: {
          name: "Кирилл Анисимов",
        },
      },
    },
  },
  function (err, t) {
    // init set content
    updateContent();
  }
);

function updateContent() {
  for (const e of document.getElementsByClassName("name")) {
    e.innerHTML = i18next.t("name");
  }
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
