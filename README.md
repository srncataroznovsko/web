# Web spolku: Zachraň zvíře před sekačkou

Oficiální webová prezentace spolku **Zachraň zvíře před sekačkou**, připravená pro bezplatný hosting na **GitHub Pages**.

Web je postaven na moderním **Bootstrapu 5** a **Bootstrap Icons** načítaných přes CDN. Nepotřebuje žádné instalační nástroje (Node.js, npm ani bundlery) a je navržen tak, aby byl snadno editovatelný i pro začátečníky.

---

## 📁 Struktura projektu

- [`index.html`](index.html) – Hlavní stránka obsahující veškeré sekce (Úvod, Účel, Činnost, Spolupráce, Úřední údaje, Kontakt, Formulář).
- [`css/style.css`](css/style.css) – Doplňkové minimální CSS styly (zelené přírodní barvy, stíny karet a hero sekce).
- [`README.md`](README.md) – Tento návod pro správu a nasazení.

---

## 💻 Jak web lokálně otevřít a upravit

1. **Zobrazení v prohlížeči:**
   - Stačí dvakrát kliknout na soubor `index.html` a otevře se ve vašem webovém prohlížeči (Chrome, Firefox, Edge, Safari...).
   - Případně můžete využít rozšíření *Live Server* ve VS Code či jiném editoru.

2. **Úprava textů a údajů:**
   - Otevřete `index.html` v libovolném textovém editoru (např. VS Code, Notepad++).
   - Vyhledejte zástupné texty označené hranatými závorkami a doplňte reálné údaje:
     - **Profily členů:** V sekci `#kontakt` doplňte skutečná jména, role, e-maily a telefony členů vedení (předseda, koordinátor dronů, dobrovolníci). Místo ikon lze snadno vložit i fotografie `<img>` s třídou `rounded-circle`.
     - **Spolkové údaje:** `[Doplňte IČO]`, `[Doplňte adresu sídla]`, `[Doplňte číslo účtu]`.
     - **Centrální kontakty:** `info@zachranzvire.cz`, `+420 123 456 789`.

---

## 🚀 Jak stránku publikovat na GitHub Pages

Až budete připraveni stránku zveřejnit:

### 1. Založte si nový repozitář na GitHubu
1. Přihlaste se na [GitHub](https://github.com).
2. Vytvořte nový prázdný repozitář (např. se jménem `zachran-zvire-pred-sekackou`).
3. Nezadávejte vytvoření README ani .gitignore (už je máte připravené zde).

### 2. Propojte tento lokální repozitář s GitHubem
V terminálu v této složce spusťte příkazy (nahraďte URL adresu vaší):

```bash
git remote add origin https://github.com/<vase-uzivatelske-jmeno>/zachran-zvire-pred-sekackou.git
git push -u origin main
```

### 3. Zapněte GitHub Pages
1. V repozitáři na GitHubu přejděte do **Settings** -> **Pages** (v levém sloupci).
2. V sekci **Build and deployment**:
   - **Source**: vyberte `Deploy from a branch`
   - **Branch**: vyberte větev `main` a složku `/ (root)`
3. Klikněte na **Save**.
4. Během 1–2 minut bude váš web dostupný na adrese:  
   `https://<vase-uzivatelske-jmeno>.github.io/zachran-zvire-pred-sekackou/`

---

## ℹ️ Informace o spolku (podle stanov)

- **Účel spolku:**  
  *Hlavním účelem spolku je ochrana přírody a krajiny, pomoc při ochraně volně žijící zvěře, zejména zvěře ohrožené zemědělskou činností.*  
  *(zapsáno 23. října 2026)*

- **Předmět činnosti:**
  - Pomoc ve vyhledávání a ochraně volně žijící zvěře při sečení luk a dalších zemědělských ploch.
  - Podpora spolupráce mezi zemědělci, myslivci, obcemi a dobrovolníky či dalšími spolky a organizacemi.
  - Osvětová a vzdělávací činnost v oblasti ochrany přírody a krajiny, zejména zvěře.
  - Pořizování a provozování technických prostředků, zejména dronů a souvisejícího vybavení.
  - Další činnosti pomocí technických prostředků, dronů apod.  
  *(zapsáno 23. října 2026)*
