def invoice(company_name, hash={})
    puts "company_name: #{company_name}"
    puts "hush: #{hush}"
    puts "invoice_num: #{:invoice_num}"
    puts "total: #{:total}"
end 

invoice("Google", invoice_num: 12, :total => 13)