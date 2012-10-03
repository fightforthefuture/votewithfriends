require 'rack/rewrite'

use Rack::Static , :urls => { 
    "/" => "index.html", 
    } , :root => "public"

use Rack::Rewrite do
r301 %r{/register(.*)}, 'http://widget.internetvotes.org/register$1'
r301 %r{/internetfreedom(.*)}, 'http://widget.internetvotes.org$1'
r301 %r{/app(.*)}, 'https://apps.facebook.com/votewithfriends/?source=invitation'
end

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
