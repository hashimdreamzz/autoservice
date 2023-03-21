// Copyright (c) 2022, Hashim and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Work_Order2", {
// 	refresh(frm) {

// 	},
// });
// frappe.ui.form.on('Work_Order2', {
// 	refresh(frm) {
// 		// your code here
// 	}
// })

// frappe.ui.form.on("Work_rder",{
//   setup: function(frm) {
//   frm.compute_total = function (frm, row){
//     let total_parts = 0
//     frm.doc.parts_amount.forEach (d => {
//       total_parts_grand = total_parts + gross;
//     })
//       let total =  total_parts_grand;
//       console.log()

//   frm.set_value('gross', total)
//   refresh_field("gross")

//      }}} )


// frappe.ui.form.on("parts_amount",{
// part_name: function (frm,cdt,cdn) {

//   let row = locals[cdt][cdn]
//   frm.compute_total(frm,row)
//   console.log(parts_amount)

// }
// })

frappe.ui.form.on("Work_Order2", 'validate', function(frm, cdt, cdn){

  var total_labor=0;
  for (var i=0 ; i < frm.doc.labor_charges.length;i++){
      total_labor = total_labor + frm.doc.labor_charges[i].gross
   } 
 cur_frm.set_value("total_labor_charge", total_labor);
 cur_frm.refresh_fields("total_labor_charge");
 console.log(total_labor)



  var total_parts=0;
   for (var i=0 ; i < frm.doc.parts_amount.length;i++){
       total_parts = total_parts + frm.doc.parts_amount[i].gross
    } 
  cur_frm.set_value("total_parts_charges", total_parts);
  cur_frm.refresh_fields("total_parts_charges");
  console.log(total_parts)
 

  var total_others=0;
   for (var i=0 ; i < frm.doc.others.length;i++){
       total_others = total_others + frm.doc.others[i].other_gross
    } 
  cur_frm.set_value("others_total", total_others);
  cur_frm.refresh_fields("others_total");
  console.log(total_others)

  let total = total_labor + total_parts + total_others

console.log(total)
frm.set_value("grand_total" , total )


}),


  

//   frappe.ui.form.on("Work_Order2", {
//     // setup: function(frm,cdt,cdn) {
//     //   frm.compute_total = function (frm, row){
//     //     let total_parts = 0
//     //     frm.doc.parts_amount.forEach (d => {
//     //       total_parts_grand = total_parts + d.gross;
//     //     })
//     //       let total =  total_parts_grand;
//     //       console.log(total)
    
//     //   frm.set_value("gross", total)
//     //   refresh_field("gross")
    
//     //      }},

//         "refresh": function(frm, cdt, cdn) {
//           if(frm.doc.__islocal && frm.doc.job_order_no){
  
//             frm.clear_table('operations');
//             frappe.model.with_doc('Job Sheet', frm.doc.job_order_no, function () {
//                 let source_doc = frappe.model.get_doc('Job Sheet', frm.doc.job_order_no);
//                 $.each(source_doc.operations, function (index, source_row) {
                    
//                 var addChild = frm.add_child("operations");
// 	             	addChild.employee_id = source_row.employee_id;
// 		            addChild.employee_name = source_row.employee_name;
//                 addChild.activity_name = source_row.activity_name;
//                 addChild.activity_fixed_time = source_row.activity_fixed_time;
//                 frm.refresh_field('operations');

//                 frm.clear_table('labor_charges');
//                 frappe.model.with_doc('Job Sheet', frm.doc.job_order_no, function () {
//                   let source_doc = frappe.model.get_doc('Job Sheet', frm.doc.job_order_no);
//                   $.each(source_doc.operations, function (index, source_row) {
//                 var addChild = frm.add_child("labor_charges");
// 	             	addChild.employee_id = source_row.employee_id;
// 		            addChild.employee_name = source_row.employee_name;
//                 addChild.activity = source_row.activity_name;
//                 addChild.fixed_time = source_row.activity_fixed_time;
// 		            addChild.hourly_rate = source_row.hourly_rate;
		            
//                 frm.refresh_field('labor_charges');
                
//                 });
//             });
//         })
//     })
// }}});
// frappe.ui.form.on("Work_Order2", {
//   "refresh": function(frm, cdt, cdn) {
  

//       frm.clear_table('labor_charges');
//       frappe.model.with_doc('Work_Order2', frm.doc.operations, function () {
//           let source_doc = frappe.model.get_doc('Work_Order2', frm.doc.operations);
//           $.each(source_doc, function (index, source_row) {
              
//           var addChild = frm.add_child("labor_charges");
//            addChild.employee_id = source_row.employee_id;
//           addChild.employee_name = source_row.employee_name;
//           addChild.activity_name = source_row.activity_name;
//           addChild.fixed_time = source_row.activity_fixed_time;
         
//           frm.refresh_field('labour_charges');
//           console.log(refresh)
//           });
//       });
//   }
// }
// );
frappe.ui.form.on("Work_Order2", {
  "refresh": function(frm) {
      frappe.call({
          "method": "frappe.client.set_value",
          "args": {
              "doctype": "Job Sheet",
              "name": frm.doc.job_order_no,
              "fieldname": "work_order",
              "value": frm.doc.name
          }
      });
  }
});

// frappe.ui.form.on("Work_Order2",{
//   "refresh": function(frm) {
//   frm.compute_total = function (frm, row){
//     let total = 0
//     frm.doc.parts_amount.forEach(d=>{
//       total = total + d.gross;
//       let new_total =  total;
  
//   frm.set_value('gross', new_total)
//   refresh_field("gross")

//   console.log("gross")
//      } )
//   }}
// })

// frappe.ui.form.on('Work_Order2' , {
//   labor_charges: function(frm,cdt,cdn){
//   let row = locals[cdt][cdn];
//   frm.compute_total(frm, row)
//   console.log(row)
//   }
//   }
//   )  
//   frappe.ui.form.on("Work_Order2", {
//     "refresh": function(frm, cdt, cdn) {
//       if(frm.doc.__islocal && frm.doc.job_order_no){
        
//         frappe.model.with_doc("Job Sheet", frm.doc.job_order_no, function() {
//           var mcd = frappe.model.get_doc("operations", frm.doc.job_order_no);
//           cur_frm.clear_table("operations");
//           $.each(mcd, function(i, d) {
//             i = frm.add_child("operations");
//             i.employee_id = d.employee_id;
//             i.employee_name = d.employee_name;
//             i.activity_name = d.activity_name;
//             i.activity_fixed_time = d.activity_fixed_time;
//             i.hourly_rate = d.hourly_rate;
//             console.log(frm)
//         // if(frm.doc.__islocal && frm.doc.job_sheet){
//         //     frappe.model.with_doc("Job Sheet", frm.doc.job_sheet, function() {
//         //         var mcd = frappe.model.get_doc("Job Sheet", frm.doc.job_sheet);
// // frm.add_fetch("job_order","mobile_no","mobile_no")
//         //         // cur_frm.clear_table("items");
//                     // $.each(mcd.items, function(i, d) {
//                     //     i = frm.add_child("items");
//                     //     i.item_code = d.item_code;
//                     //     i.item_name = d.item_name;
//                     //     i.product_make = d.product_make;
//                     //     i.cas_no = d.cas_no;
//                     //     i.uom = d.uom;
//                     //     i.stock_uom = d.uom;
//                     //     i.description = d.description;
//                     //     i.qty = d.qty;

//         cur_frm.refresh_field("Operations");
//           })})}}})
    
frappe.ui.form.on("Others", "other_amount" , function(frm,doctype,name){
var row = locals[doctype][name]
 row.other_netamount =  row.other_amount;
row.other_gross = row.other_netamount;
refresh_field("others");
})

frappe.ui.form.on("Others", "other_discount" , function(frm,doctype,name){
  var row = locals[doctype][name]
   row.other_netamount =  row.other_amount - (row.other_amount * row.other_discount/100);
   row.other_gross = row.other_netamount
  refresh_field("others");
  })
  frappe.ui.form.on("Others", "other_tax" , function(frm,doctype,name){
    var row = locals[doctype][name]
     row.other_gross = row.other_netamount + (row.other_netamount * row.other_tax/100);
    refresh_field("others");
    })



frappe.ui.form.on("Labor Charge", "fixed_time", function(frm, doctype, name) {
  
  var row = locals[doctype][name];
  row.amount = row.fixed_time * row.hourly_rate;
  row.gross = row.amount 
  refresh_field("labor_charges");
 
}); 
    
frappe.ui.form.on("Labor Charge", "discount", function(frm, doctype, name) {
  
  var row = locals[doctype][name];
  row.net_amount = row.amount - (row.amount * row.discount/100);
  row.gross =  row.net_amount  ;
  refresh_field("labor_charges");
 
});

frappe.ui.form.on("Labor Charge", "tax", function(frm, doctype, name) {

  var row = locals[doctype][name];
  row.gross = row.net_amount + (row.net_amount * row.tax/100)  ;
  refresh_field("labor_charges");
  
});





frappe.ui.form.on("Parts Amount", "quantity", function(frm, doctype, name) {
  
  var row = locals[doctype][name];
  row.amount = row.cost_per_unit * row.quantity;
  row.gross = row.amount 
  refresh_field("parts_amount");
  
});
frappe.ui.form.on("Parts Amount", "discount", function(frm, doctype, name) {
  
    var row = locals[doctype][name];
    row.net_amount = row.amount - (row.amount * row.discount/100);
    row.gross =  row.net_amount  ;
    refresh_field("parts_amount");
   
  });

  frappe.ui.form.on("Parts Amount", "tax_rate", function(frm, doctype, name) {
  
    var row = locals[doctype][name];
    row.gross = row.net_amount + (row.net_amount * row.tax_rate/100)  ;
    refresh_field("parts_amount");
    
  });



  
  
  frappe.ui.form.on("Work_Order2", {

    "refresh": function(frm, cdt, cdn) {
      if(frm.doc.__islocal && frm.doc.job_order_no){

        frm.clear_table('operations');
        frappe.model.with_doc('Job Sheet', frm.doc.job_order_no, function () {
            let source_doc = frappe.model.get_doc('Job Sheet', frm.doc.job_order_no);
            $.each(source_doc.operations, function (index, source_row) {
                
            var addChild = frm.add_child("operations");
                 addChild.employee_id = source_row.employee_id;
                addChild.employee_name = source_row.employee_name;
            addChild.items = source_row.items;
            addChild.item_name = source_row.item_name;
            addChild.item_code = source_row.item_code;
            addChild.qty = source_row.qty;
            addChild.rate = source_row.rate;
            addChild.uom = source_row.uom;
            addChild.description = source_row.description;
            frm.refresh_field('operations');
            frm.save()
});
        });
    }}})
frappe.ui.form.on("Work_Order2", {
    on_submit: function(frm, cdt, cdn) {
            var d = locals[cdt][cdn];
                frm.add_custom_button(__("Create Invoice"), function() {
                    frappe.new_doc('Sales Order', {
                        "customer": cur_frm.doc.customer_name,
                        "item_code" : cur_frm.doc.items,
                        "work_order_no": cur_frm.doc.name,
                        "company" : cur_frm.doc.company
                    });
                });
            }
        });
   
        