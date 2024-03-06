var lang, x, mdt, ssy, mmy, mmm, mmd, yyz, astro, dgh, hod, hod2;
lang = 1;
x = new ceMmTranslate();
mdt = new ceMmDateTime();
ssy = "သာသနာနှစ်" + " " + x.T(mdt.ToMString("&YYYY"), lang);
mmy = "မြန်မာသက္ကရာဇ်" + " " + x.T(mdt.ToMString("&yyyy"), lang);
mmm = x.T(mdt.ToMString("&M"), lang);
mmd = x.T(mdt.ToMString("&P &f"), lang) + " " + "ရက်";
if (ceMmDateTime.cal_yatyaza(mdt.mm, mdt.w) == 1) {
  yyz = "ရက်ရာဇာ";
} else if (ceMmDateTime.cal_pyathada(mdt.mm, mdt.w) == 1) {
  yyz = "ပြသဒါး";
} else if (ceMmDateTime.cal_pyathada(mdt.mm, mdt.w) == 2) {
  yyz = "မွန်းလွဲပြသဒါး";
} else {
  yyz = "";
}
astro = x.T(`${mdt.astro}`, lang);
dgh = "နဂါးခေါင်း " + " " + x.T(mdt.nagahle, lang) + " " + "လှည့်";
hod = x.T(`${mdt.holidays}`, lang);
hod2 = x.T(`${mdt.holidays2}`, lang);
document.getElementById("ssy").innerHTML =
  `${ssy}` +
  " --> " +
  `${mmy}` +
  " --> " +
  `${mmm}` +
  "  -->  " +
  `${mmd}` +
  "  -->  " +
  `${yyz}` +
  "  -->  " +
  `${dgh}`;
