const planets = document.querySelector(".planets").children;
const planetInfo = document.querySelector(".planet-info");
const planetName = document.querySelector(".planet-info--name");
const planetDesc = document.querySelector(".planet-info--desc");
const descriptions = {
  Слънце: `Слънцето е звездата в центъра на Слънчевата система. То представлява
    почти идеална сфера, съставена от гореща плазма и магнитни полета.`,
  Меркурий: `Меркурий е най-малката планета в Слънчевата система и най-близката до
    Слънцето, около което прави по една обиколка на всеки 87,969 земни
    денонощия.`,
  Венера: `Венера е втората по ред планета от Слънчевата система и носи името на
    богинята Венера от римската митология. Тя е земеподобна планета, много
    близка по големина и общи качества до Земята.`,
  Земя: `Земята е третата планета в Слънчевата система. Тя е най-голямата от
    земеподобните планети и единствената, на която според съвременните
    научни схващания има живот.`,
  Марс: `Марс е четвъртата планета от слънчевата система. Както Земята, Юпитер,
    Слънцето и другите обекти в слънчевата система, Марс е на около 4,6
    милиарда години.`,
  Юпитер: `Юпитер е петата по отдалеченост от Слънцето планета и най-голямата (с
        голяма преднина) в Слънчевата система. Юпитер е известна като планета-гигант.`,
  Сатурн: `Сатурн е шестата планета от Слънчевата система. Тя е газов гигант и е
    втора по големина в Слънчевата система след Юпитер. Сатурн е известен
    най-вече с пръстените си, съставени от лед и космически прах.`,
  Уран: ` Уран е седмата планета от Слънчевата система. Тя има третия по размер
    планетарен радиус и четвърта по големина планетарна маса в Слънчевата
    система.`,
  Нептун: ` Нептун е осмата планета от Слънчевата система и най-външният газов
    гигант в нея. Тя е четвъртата по размери и третата по маса. Нептун е
    най-отдалечената от Слънцето планета.`,
};
for (const planet of planets) {
  planet.addEventListener("mouseenter", (e) => {
    planetName.textContent = planet.dataset.planet;
    planetDesc.textContent = descriptions[`${planetName.textContent}`];
    planetInfo.classList.toggle("show");
  });
  planet.addEventListener("mouseleave", (e) => {
    planetInfo.classList.toggle("show");
  });
}
