frappe.ui.form.on("labor_charge", "item_group", function (frm, cdt, cdn) {
    if(frm.doc.__islocal) {
        frappe.call({
            method: "frappe.client.get_list",
            args: {
                doctype: "Item",
                filters: {
                    "item_group": frm.doc.item_group,
                    "is_sales_item": 1
                },
                fields:["item_code", "item_name", "description", "stock_uom"]
            },
            callback: function(r) {
                    var items = [];
                    frm.clear_table("labor_charge");
                    for(var i=0; i< r.message.length; i++) {
                        var d = frm.add_child("labor_charge");
                        $.extend(d, r.message[i]);
                        if(!d.qty) d.qty = 1;
                        if(!d.uom) d.uom = d.stock_uom;
                    }
                    frm.refresh_field("labor_charge");
                }
        })
    }
});;

var x = parseInt(fixed_time)
frm.set_value("doc.activity_time" , x ) 