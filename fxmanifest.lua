fx_version 'cerulean'
games { 'gta5' }

author 'YpsilonTM'
description 'Boilerplate'
version '1.0.0'

client_scripts {
    'config.lua',
    'client/cl_main.lua',
}
server_scripts {
    'config.lua',
    'server/sv_main.lua',
}

ui_page "html/dist/index.html"

files {
    "html/dist/*",
    "html/dist/css/*",
    "html/dist/img/*",
    "html/dist/js/*",
}