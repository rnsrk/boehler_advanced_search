(function ($, Drupal, drupalSettings) {

  function toDropdown(field, i) {
    let searchValueSelectId = 'edit-terms-' + i + '-value';
    let SearchValueFieldselector = "[id^='" + searchValueSelectId + "']";
    let $searchValueInputField = $(SearchValueFieldselector);
    $searchValueInputField.hide();
    let $oldHelperField = $('#edit-terms-' + i + '-helper');
    $oldHelperField.remove();
    $searchValueInputField.after('<select aria-label="Enter a search term" data-drupal-selector="edit-terms-' + i + '-helper" id="edit-terms-' + i + '-helper" name="terms[' + i + '][helper]" value="" class="advanced-search--helper-dropdown form-text form-element form-element--type-text form-element--api-textfield"></select>');
    let $newHelperField = $('#edit-terms-' + i + '-helper');
    console.log($newHelperField);
    if (field === 'agg__arch__transaktion') { // Transaktion
      $newHelperField.empty();
      $newHelperField.append('<option value="">Bitte auswählen...</option>');
      $newHelperField.append('<option value="Abschreibung">Abschreibung</option>');
      $newHelperField.append('<option value="andere">Andere</option>');
      $newHelperField.append('<option value="Anteil übertragen/übernommen">Anteil übertragen</option>');
      $newHelperField.append('<option value="Auktion">Auktion</option>');
      $newHelperField.append('<option value="Geschenk">Geschenk</option>');
      $newHelperField.append('<option value="Inventar">Inventar</option>');
      $newHelperField.append('<option value="Kauf">Abschreibung</option>');
      $newHelperField.append('<option value="keine Angabe">keine Angabe</option>');
      $newHelperField.append('<option value="Kommission">Kommission</option>');
      $newHelperField.append('<option value="Lager">Lager</option>');
      $newHelperField.append('<option value="Nutzen/Gewinnbeteiligung">Nutzen/Gewinnbeteiligung</option>');
      $newHelperField.append('<option value="Rückgabe">Rückgabe</option>');
      $newHelperField.append('<option value="Share">Geschäftsbeteiligung</option>');
      $newHelperField.append('<option value="Tausch">Tausch</option>');
      $newHelperField.append('<option value="Übernahme">Übernahme</option>');
      $newHelperField.append('<option value="Verlust">Verlust</option>');
      $newHelperField.append('<option value="Verkauf">Verkauf</option>');
      $newHelperField.append('<option value="Verweis">Verweis auf weitere Karteikarte</option>');
      $newHelperField.append('<option value="Weiterverwendung">Weiterverwendung</option>');
    } else if (field === 'agg__arch__objektkategorie') { // Objektkategorie
      $newHelperField.empty();
      $newHelperField.append('<option value="">Bitte auswählen...</option>');
      $newHelperField.append('<option value="Malerei">Malerei</option>');
      $newHelperField.append('<option value="Skulptur, Plastik, Relief">Skulptur, Plastik</option>');
      $newHelperField.append('<option value="Arbeiten auf Papier">Graphik (Zeichnung / Aquarell / Arbeit auf</option>');
      $newHelperField.append('<option value="Handschriften (Autographen / Bücher)">Manuskripte/ Bücher</option>');
      $newHelperField.append('<option value="Waffen, Rüstungen, Militaria">Militaria / Rüstungen / Waffen</option>');
      $newHelperField.append('<option value="Wappen / Wappenscheibe">Wappen / Wappenscheiben</option>');
      $newHelperField.append('<option value="Musikinstrumente">Musikinstrumente</option>');
      $newHelperField.append('<option value="Möbel und Einrichtung">Möbel / Einrichtung</option>');
      $newHelperField.append('<option value="Textilien (auch Tapisserien)">Textilien</option>');
      $newHelperField.append('<option value="Schmuck">Schmuck</option>');
      $newHelperField.append('<option value="Leuchter">Leuchter</option>');
      $newHelperField.append('<option value="Uhren">Uhren</option>');
      $newHelperField.append('<option value="Silber- und Goldschmiedekunst">Silber- und Goldschmiedekunst</option>');
      $newHelperField.append('<option value="Rahmen">Rahmen</option>');
      $newHelperField.append('<option value="Kunsthandwerk / Keramik">Kunsthandwerk Keramik</option>');
      $newHelperField.append('<option value="Kunsthandwerk / Glas">Kunsthandwerk Glas</option>');
      $newHelperField.append('<option value="Kunsthandwerk / Holz">Kunsthandwerk Holz</option>');
      $newHelperField.append('<option value="Kunsthandwerk / Metall">Kunsthandwerk / Metall</option>');
      $newHelperField.append('<option value="Kunsthandwerk / Sonstiges"> Kunsthandwerk Sonstiges</option>');
      $newHelperField.append('<option value="Münzen und Medaillen">Münzen / Medaillen</option>');
      $newHelperField.append('<option value="Asiatika">Asiatika</option>');
      $newHelperField.append('<option value="Varia">Varia</option>');
    }
    $newHelperField.change(function () {
      let selectedOption = $newHelperField.find('option:selected');
      $searchValueInputField.val(selectedOption.val()).text(selectedOption.text());
    });
  }

  Drupal.behaviors.advanceSearchEntityFields = {
    attach: function attach(context, settings) {
      let $searchSelectElement = $('[id^="edit-terms-0-search"]');
      let originalSearchSelectOptions = $searchSelectElement.find('option').clone();
      $searchSelectElement.empty();
      $searchSelectElement.append('<option value="all" selected="selected">Keyword</option>');
      $searchSelectElement.append('<option value="agg__all__red_bem">Redaktionelle Bermerkung</option>');
      $searchSelectElement.append('<option value="agg__all__auktionshaus">Auktionshaus</option>');
      $(document).on('change', '.advanced-search-form--entity', function () {
        let id = $(this).attr('id');
        let i = id.substring(11, 12);
        let $select = $('#' + id);
        let searchSelectId = 'edit-terms-' + i + '-search';
        let selector = "[id^='" + searchSelectId + "']";
        let $searchSelect = $(selector);
        if ($select.val() === 'akteur') { // Akteur
          $searchSelect.empty();
          $searchSelect.append('<option value="agg__akt__anmerkung">Anmerkung</option>');
          $searchSelect.append('<option value="f20673c10d8d786816de3c4338d1c3ac">Art der Institution</option>');
          $searchSelect.append('<option value="fb7ca3fb25fe824b40d6923e212ee7c4">Beruf/ Tätigkeit</option>');
          $searchSelect.append('<option value="agg__akt__name">Name</option>');
        }
        else if ($select.val() === 'b48556e79962e0a3c8d0041317c853b9') { // Archivalie
          $searchSelect.empty();
          $searchSelect.append('<option value="agg__arch__akteur">Akteur</option>');
          $searchSelect.append('<option value="agg_arch__anmerkung">Anmerkung</option>');
          $searchSelect.append('<option value="agg__arch__auktionstitel">Auktionstitel</option>');
          $searchSelect.append('<option value="agg__arch__kue_herst">Künster:in/ Hersteller:in</option>');
          $searchSelect.append('<option value="agg__arch__objektkategorie">Objektkategorie</option>');
          $searchSelect.append('<option value="agg__arch__ort_reg">Ort/ Region</option>');
        }
        else if ($select.val() === 'ba419826c9014f40126565bf413f7a59') { // Auktion
          $searchSelect.empty();
          $searchSelect.append('<option value="agg__arch__akteur">Akteur</option>');
          $searchSelect.append('<option value="f11ead3fa212224b6e82ce5622c1d99c">Anmerkung</option>');
          $searchSelect.append('<option value="ff8fb361d19f1fb4030605f87cb995ff">Auktionshaus</option>');
          $searchSelect.append('<option value="f4394d15487b58f49c719cf850f57e3a">Auktionskatalog</option>');
          $searchSelect.append('<option value="f6230cbdc56e0f04a90424b248680c76">Titel der Auktion</option>');
        } else if ($select.val() === 'b65c3a85d16724d84a5eb0d2268629a6') { // Objekt
          $searchSelect.empty();
          $searchSelect.append('<option value="fe12ded9c22ca130eae59a41ea380f3d">Anmerkung</option>');
          $searchSelect.append('<option value="agg__obj__akt">Akteur</option>');
          $searchSelect.append('<option value="agg__obj__auktionshaus">Auktionshaus</option>');
          $searchSelect.append('<option value="agg__obj__auktionstitel">Auktionstitel</option>');
          $searchSelect.append('<option value="agg__obj__kue_herst">Künstler:in/ Hersteller:in</option>');
          $searchSelect.append('<option value="agg__obj__lotnummer">Lotnummer</option>');
          $searchSelect.append('<option value="fe03f1bcb9bf84f6fa8bf265090313c5">Objekt-ID</option>');
          $searchSelect.append('<option value="f104330976ecbed46b8d10f6dfd2394d">Objekttyp</option>');
          $searchSelect.append('<option value="agg__obj__titel">Titel des Objektes</option>');
        } else if ($select.val() === 'ueberall') {
          $searchSelect.empty();
          $searchSelect.append('<option value="all" selected="selected">Keyword</option>');
          $searchSelect.append('<option value="agg__all__akt">Akteur</option>');
          $searchSelect.append('<option value="agg__all__auktionshaus">Auktionshaus</option>');
          $searchSelect.append('<option value="agg__all__red_bem">Redaktionelle Bermerkung</option>');
        }
      });

      $(document).on('change', '.advanced-search-form--select-field', function () {
        let id = $(this).attr('id');
        let i = id.substring(11, 12);
        let field = $(this).val();
        if (['agg__arch__transaktion', 'agg__arch__objektkategorie'].includes(field)) {
          let dropdown = toDropdown(field, i);
        }
      });

    }
  };

})(jQuery, Drupal, drupalSettings);
