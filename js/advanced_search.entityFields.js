(function ($, Drupal, drupalSettings) {

  function toDropdown(field) {
    let $inputElement = $('#edit-terms-0-value');
    $inputElement.replaceWith('<select aria-label="Enter a search term" data-drupal-selector="edit-terms-0-value" id="edit-terms-0-value" name="terms[0][value]" value="" class="form-text form-element form-element--type-text form-element--api-textfield"></select>');

  }

  Drupal.behaviors.advanceSearchEntityFields = {
    attach: function attach(context, settings) {
      let $searchSelectElement = $('#edit-terms-0-search');
      let originalSearchSelectOptions = $searchSelectElement.find('option').clone();
      $(document).on('change', '.advanced-search-form--entity', function() {
        let id = $(this).attr('id');
        let i = id.substring(11, 12);
        let $select = $('#' + id);
        let searchSelectId = 'edit-terms-' + i + '-search';
        let selector = "[id^='" + searchSelectId + "']";
        let $searchSelect = $(selector);
        if ($select.val() === 'b48556e79962e0a3c8d0041317c853b9') { // Archivalie
          $searchSelect.empty();
          $searchSelect.append('<option value="f3695695d3807a2f453e5f5490336649">Anmerkung zum Besitzwechsel (transkribiert)</option>');
          $searchSelect.append('<option value="f297270ea2387b358b44f9b7b228a406">Anmerkung zum Objekt (transkribiert)</option>');
          $searchSelect.append('<option value="f9ee0627498eacd6da7456ebc67cdab2">Art des Ausgangs</option>');
          $searchSelect.append('<option value="fcde5cd3cae88c211869faeee17a1606">Art des Eingangs</option>');
          $searchSelect.append('<option value="f112b71c83c942dbe763b6948de3e55a">Art des Geschäfts (Ausgang)</option>');
          $searchSelect.append('<option value="f72f76cc5137b99f47668a9d26bd7d4f">Art des Geschäfts (Eingang)</option>');
          $searchSelect.append('<option value="fb9f0a5cd38866c299be2b9ecf125c40">erfasstes Objekt</option>');
          $searchSelect.append('<option value="fd4b844b736f2215421ead5b2fc0f5ef">Fotonummer</option>');
          $searchSelect.append('<option value="f93155912aa38f75f6919abbf8a3f9f1">Gattung/Kategorie (transkribiert)</option>');
          $searchSelect.append('<option value="fb74d9451d622706b799d8cea716a52a">Gutachten (transkribiert)</option>');
          $searchSelect.append('<option value="fca6b5f7939d2b05f39d1d997ba28b5e">Gutachter:in</option>');
          $searchSelect.append('<option value="fed162212a314cc02b14803dc56895de">Hersteller:in</option>');
          $searchSelect.append('<option value="fdf84542066bffc367d6ae8b6bc83e75">Involvierte Akteure Ausgang (transkribiert)/option>');
          $searchSelect.append('<option value="fd75f6b99f06a97fb01b4e8a984a8cdc">Involvierte Akteure Eingang (transkribiert)</option>');
          $searchSelect.append('<option value="f9c7d9b5228ab2e5a5ce5f6958682083">Involvierte Institution Ausgang</option>');
          $searchSelect.append('<option value="f039e4a9e6b2670a041dd3a6242a806b">Involvierte Institution Eingang</option>');
          $searchSelect.append('<option value="f30c817c305092a4414f337917b6cb47">Involvierte Person Ausgang</option>');
          $searchSelect.append('<option value="f8fd31f1224a123e1dbaa0d05af566eb">Involvierte Person Eingang</option>');
          $searchSelect.append('<option value="f807d62b374606e52e8833118375ecb0">Karteikarten-ID</option>');
          $searchSelect.append('<option value="fb6251ed18c1ea9b54e941c2c63b58a2">Künstler:in</option>');
          $searchSelect.append('<option value="fa656cfd7205747d2b78d5e46770bdd4">Künstler:in/Werkstatt (transkribiert)</option>');
          $searchSelect.append('<option value="fd9daf21a5cc39a3334e7f6492760f2b">Nachbesitzende Institution</option>');
          $searchSelect.append('<option value="f2d9bdc36b3a9c27a83353421a9f9e0a">Nachbesitzende Person</option>');
          $searchSelect.append('<option value="f0b6956ee90d04ebc3f1cefc08110312">Nachbesitz (transkribiert)</option>');
          $searchSelect.append('<option value="f9d85aba88678fb3c8b3c04c9a69477a">Objektbeschreibung (transkribiert)</option>');
          $searchSelect.append('<option value="fe9c9a6d122f8605300a4f64882df6b4">Objektkategorie</option>');
          $searchSelect.append('<option value="f67e4ce706a7f479cddcea0c7557c672">Ort</option>');
          $searchSelect.append('<option value="f473aaaa0dd5fdf18d280b46017f053c">Ort/Region (transkribiert)</option>');
          $searchSelect.append('<option value="fd074a423d94e94f06a111694a525605">Provenienz Institution</option>');
          $searchSelect.append('<option value="f2d96875cf5bd4270b9698bae2ac4ba9">Provenienz Person</option>');
          $searchSelect.append('<option value="fc127a2279d8531d5d715b2a829e3d1b">Provenienzen (transkribiert)</option>');
          $searchSelect.append('<option value="f87f2841ad9877c5eec8e0a128a4b569">Redaktionelle Bemerkung</option>');
          $searchSelect.append('<option value="f5d354133b7711297c16ad773fcbce4c">Region</option>');
          $searchSelect.append('<option value="agg_archivalie__titel_auktion">Titel der Auktion</option>');
          $searchSelect.append('<option value="ffc142f4d103b2c29cb9c73b7115effd">Versteigerer</option>');
          $searchSelect.append('<option value="f506b1a78cbd77b2475f3dffdd7fd685">Vorbesitzende Institution</option>');
          $searchSelect.append('<option value="fadb6a386912fa78c3e8c7f05d576510">Vorbesitz (transkribiert)</option>');
        }
        else if ($select.val() === 'ba419826c9014f40126565bf413f7a59') { // Auktion
          $searchSelect.empty();
          $searchSelect.append('<option value="ff8fb361d19f1fb4030605f87cb995ff">Auktionshaus</option>');
          $searchSelect.append('<option value="f4394d15487b58f49c719cf850f57e3a">Auktionskatalog</option>');
          $searchSelect.append('<option value="fd76aa80d3352b4ad8733552c8a10e7a">involvierte Institutionen</option>');
          $searchSelect.append('<option value="fa809b28c4e8b22e6a8f77722b04fae1">involvierte Personen</option>');
          $searchSelect.append('<option value="f6230cbdc56e0f04a90424b248680c76">Titel der Auktion</option>');
        } else if ($select.val() === 'b1d559f7b6af224a3f6f3b9a12e6b161') { // Institution
          $searchSelect.empty();
          $searchSelect.append('<option value="f838846307ea61a3d408df5022d498ba">Name</option>');
          $searchSelect.append('<option value="f53c209f6575fb5a7a0e7e7f424f7abd">Alternative Namen</option>');
          $searchSelect.append('<option value="field_mit_institution_verbundene">verbundene Orte</option>');
        } else if ($select.val() === 'alles') {
          $searchSelect.empty();
          $.each(originalSearchSelectOptions, function(i, option) {
            $searchSelect.append(option);
          });
        }
      });

      $(document).on('change', '.advanced-search-form--select-field', function () {
        console.log('change select field');
        //let dropdown = toDropdown('#edit-terms-0-value');
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
