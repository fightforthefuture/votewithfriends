require 'rack/rewrite'

use Rack::Static , :urls => { 
    "/" => "index.html", 
    } , :root => "public"

use Rack::Rewrite do
r301 %r{/register(.*)}, 'http://widget.internetinternetvotes.org/register$1'
r301 %r{/internetfreedom(.*)}, 'http://widget.internetvotes.org$1'
end

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
