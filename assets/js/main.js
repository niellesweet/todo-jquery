var $input = $('input'),
    $btn = $('#addBtn'),
    $ul = $('#myList'),
    $rmvBtn = $('.rmvBtn');

  $btn.on('click', function(e) {
    e.preventDefault();
    if ($input.val() == '') {
      alert('Add new task please..');
    } else {
      $ul.prepend('<li><input type="checkbox" class="check"> ' + $input.val() + ' <button class="rmvBtn">x</button></li>');
      $input.val('');
    }
  });

  function removeItem() {
    $(this).closest('li').remove();
  }

  function markThis() {
    if (this.checked) {
      $(this).closest('li').addClass('done');
    } else {
      $(this).closest('li').removeClass('done');
    }
  }

  $(document).on('click', '.check', markThis);

  $(document).on('click', '.rmvBtn', removeItem);