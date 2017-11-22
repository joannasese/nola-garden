OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '578833402992-96tah4qmsfd37lg8q2fbuenj7vb60a5a.apps.googleusercontent.com', '4KCGHFHY2ujpydQKV6UFB9CY', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
