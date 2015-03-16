  var _path_name = (function(){
    var reg = new RegExp("^/(page/[1-9])?$"),
        path_name = window.location.pathname.replace(/,+/, ''),
        match_result = path_name.match(reg),
        cur_page = "";

    if(match_result != null) {
      path_name = 'index' + path_name;
    }
    else {
      if(path_name.charAt(0) == '/'){
        path_name = path_name.replace('/', '');
      }
    }

    if(path_name.charAt(path_name.length - 1) != '/'){
      path_name += '/';
    }

    return path_name;
  })();

  function add_page_stats_to_params(obj_a, deal_id, add_params) {
	  debugger;
    var deal_div = $('#deal' + deal_id),
        deal_div_index = deal_div.index(),
        num_per_line = 3,
        path_name = (add_params != '' ) ? _path_name + add_params + '/' : _path_name,
        h_path = obj_a.href,
        match_result = h_path.match(/[&?](page_stats_w=[^& ]+)($|&)/),
        arr = $('#deal' + deal_id).find('a[onclick] img');

    path_name = _path_name + (Math.floor(deal_div_index / num_per_line) + 1) + '*' + (deal_div_index % num_per_line + 1);
    if(h_path.indexOf('?') > 0) {
      if(match_result != null) {
        h_path = h_path.replace(match_result[1], 'page_stats_w=' + path_name);
      }
      else{
        h_path += '&page_stats_w=' + path_name;
      }
    }
    else{
      h_path += '?page_stats_w=' + path_name;
    }

    obj_a.href = h_path;
    if(arr.length == 0){
      arr = $('#deal' + deal_id).find('a.J_tklink_tmall img');
    }
    if(arr.length > 0) {
      $(arr[0]).parent().attr('info', h_path);
    }
  }
