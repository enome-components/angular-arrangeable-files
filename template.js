module.exports = '<div class=\'arrangeable-files\'>\n\n  <div class=\'default\' ng-show=\'!full_screen\'>\n    <header>\n      <button ng-click=\'full_screen = !full_screen\'>Select files</button>\n    </header>\n\n    <arrangeable-array array=\'selected\'></arrangeable-array>\n  </div>\n\n  <div class=\'overlay\' ng-show=\'full_screen\'>\n    <file-manager selected=\'selected\' url=\'fileserver\'></file-manager>\n    <button ng-click=\'full_screen = !full_screen\'>Close</button>\n  </div>\n\n</div>\n';