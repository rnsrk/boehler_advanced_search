(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.advanceSearchEntityFields = {
    attach: function attach(context, settings) {
      let $searchSelectElement = $('#edit-terms-0-search');
      let originalSearchSelectOptions = $searchSelectElement.find('option').clone();
      $(document).on('change', '.advanced-search-form-entity', function() {
        console.log('change');
        let id = $(this).attr('id');
        let i = id.substring(11, 12);
        let $select = $('#' + id);
        let searchSelectId = 'edit-terms-' + i + '-search';
        console.log(searchSelectId);
        let selector = "[id^='" + searchSelectId + "']";
        console.log(selector);
        let $searchSelect = $(selector);
        console.log($searchSelect);
        if ($select.val() === 'ba419826c9014f40126565bf413f7a59') { // Auktion
          $searchSelect.empty();
          $searchSelect.append('<option value="label">Titel</option>');
          $searchSelect.append('<option value="ff8fb361d19f1fb4030605f87cb995ff">Auktionshaus</option>');
          $searchSelect.append('<option value="f4394d15487b58f49c719cf850f57e3a">Auktionskatalog</option>');
          $searchSelect.append('<option value="fd76aa80d3352b4ad8733552c8a10e7a">involvierte Institutionen</option>');
          $searchSelect.append('<option value="fa809b28c4e8b22e6a8f77722b04fae1">involvierte Personen</option>');
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
    }
  };

})(jQuery, Drupal, drupalSettings);
