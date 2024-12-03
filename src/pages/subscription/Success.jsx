import React, { useEffect, useState } from 'react'
import { API } from '../../Host';
import { toast } from 'react-toastify';

const Success = () => {
    
  const [processing, setProcessing] = useState(false);
  const [jsonData, setJsonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDetails();
      }, []);

    async function getDetails() {
        if (localStorage.getItem("method") === "stripe") {
          const dataToSend = {
            subscriberId: localStorage.getItem("stripe"),
            uid: localStorage.getItem("user"),
            plan: localStorage.getItem("plan"),
          };
          const postURL = API + "/api/stripedetails";
          await axios.post(postURL, dataToSend).then((res) => {
            setJsonData(res.data);
            localStorage.setItem("type", localStorage.getItem("plan"));
            setIsLoading(false);
           // sendEmail(res.data);
          });
        } else {
          try {
             if (localStorage.getItem("method") === "razorpay") {
              const plan = localStorage.getItem("plan");
              
            }
          } catch (error) {
            getDetails();
          }
        }
      }

      async function download() {
         if (localStorage.getItem("method") === "stripe") {
          let amount = "";
          
    
          const html = `<!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8" />
                        <title>A simple, clean, and responsive HTML invoice template</title>
                
                        <style>
                            .invoice-box {
                                max-width: 800px;
                                margin: auto;
                                padding: 30px;
                                font-size: 16px;
                                line-height: 24px;
                                font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                                color: #555;
                            }
                
                            .invoice-box table {
                                width: 100%;
                                line-height: inherit;
                                text-align: left;
                            }
                
                            .invoice-box table td {
                                padding: 5px;
                                vertical-align: top;
                            }
                
                            .invoice-box table tr td:nth-child(2) {
                                text-align: right;
                            }
                
                            .invoice-box table tr.top table td {
                                padding-bottom: 20px;
                            }
                
                            .invoice-box table tr.top table td.title {
                                font-size: 45px;
                                line-height: 45px;
                                color: #333;
                            }
                
                            .invoice-box table tr.information table td {
                                padding-bottom: 40px;
                            }
                
                            .invoice-box table tr.heading td {
                                background: #eee;
                                border-bottom: 1px solid #ddd;
                                font-weight: bold;
                            }
                
                            .invoice-box table tr.details td {
                                padding-bottom: 20px;
                            }
                
                            .invoice-box table tr.item td {
                                border-bottom: 1px solid #eee;
                            }
                
                            .invoice-box table tr.item.last td {
                                border-bottom: none;
                            }
                
                            .invoice-box table tr.total td:nth-child(2) {
                                border-top: 2px solid #eee;
                                font-weight: bold;
                            }
                
                            @media only screen and (max-width: 600px) {
                                .invoice-box table tr.top table td {
                                    width: 100%;
                                    display: block;
                                    text-align: center;
                                }
                
                                .invoice-box table tr.information table td {
                                    width: 100%;
                                    display: block;
                                    text-align: center;
                                }
                            }
                
                            /** RTL **/
                            .invoice-box.rtl {
                                direction: rtl;
                                font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            }
                
                            .invoice-box.rtl table {
                                text-align: right;
                            }
                
                            .invoice-box.rtl table tr td:nth-child(2) {
                                text-align: left;
                            }
                        </style>
                    </head>
                
                    <body>
                        <div class="invoice-box">
                            <table cellpadding="0" cellspacing="0">
                                <tr class="top">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td class="title">
                                                    <img
                                                        src=${logo}
                                                        style="width: 100%; max-width: 50px"
                                                    />
                                                </td>
                
                                                <td>
                                                    Subscription Id: ${
                                                      jsonData.subscription
                                                    }<br />
                                                    Customer ID: ${
                                                      jsonData.customer
                                                    }<br />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                
                                <tr class="information">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td>
                                                <strong>${company}</strong>
                                                    <br />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                
                                <tr class="heading">
                                    <td>Payment Method</td>
                
                                    <td></td>
                                </tr>
                
                                <tr class="details">
                                    <td>${localStorage.getItem("method")}</td>
                
                                    <td></td>
                                </tr>
                
                                <tr class="heading">
                                    <td>Item</td>
                
                                    <td>Price</td>
                                </tr>
                
                                <tr class="item">
                                    <td>${localStorage.getItem("plan")}</td>
                
                                    <td>${amount} USD</td>
                                </tr>
                
                                <tr class="total">
                                    <td></td>
                
                                    <td>Total: ${amount} USD</td>
                                </tr>
                            </table>
                        </div>
                    </body>
                </html>`;
          setProcessing(true);
          const email = localStorage.getItem("email");
          const postURL = API + "/api/downloadreceipt";
          const response = await axios.post(postURL, { html, email });
          if (response.data.success) {
            toast.success(response.data.message);
          } else {
            download();
          }
        } 
      }

  return (
    <div className='font-poppins font-extralight my-12'>
        <p className='text-center text-xl '>Thank You 🎉</p>
        <p className="text-center font-normal text-black py-4 dark:text-white">
                <strong>{localStorage.getItem("fname")}</strong> for
                subscribing to our{" "}
                <strong>{localStorage.getItem("plan")}</strong> Plan.{" "}
              </p>
    </div>
  )
}

export default Success