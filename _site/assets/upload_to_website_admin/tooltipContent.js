function addContent(query, content, textType) {
    // textType options are from the following five:
    // 'uneditable', 'argument', 'admin', 'editable', 'conditional'
        document.querySelectorAll(query).forEach((c) => c.setAttribute(`data-tooltip-${textType}`, content))
    }

    window.onload = () => {

    // Url string manipulation
    const parentUrl =  window.document.URL
    const parentQuery = parentUrl.toLowerCase().split('/')
    let expressCheckoutString;
    let iframeString;

    // Check for secure

    if (parentQuery[5] === 'secure') {

        // Check for express checkout
        if (parentQuery[7] === 'v2') {
            const expressCheck = parentQuery.findIndex((c) => c === 'checkout')

            if (expressCheck >= 0) {
                const secureArray = parentQuery.slice(expressCheck)
                expressCheckoutString = secureArray.join('/')
            }
        }

    } else {

        // All other iframe strings
        iframeString = parentQuery[parentQuery.length - 1].split('.')[0]
    }
    
    // Add url title at top
    const body = document.querySelector('body')
    body.insertAdjacentHTML('afterbegin', `<h1 class="urlTitle">You are are on the iframe ${expressCheckoutString ? expressCheckoutString:iframeString}</h1>`)

    if(expressCheckoutString) {
        addContent('.spx-header-container', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--personal-details', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--ticket-delivery', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--additional-details', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--donations', 'Editable under Settings > System Setup > Donations on Web > Custom header for the donations step in the  new checkout flow. (Plain Text)', 'editable')
        addContent('.spx-heading-headline__checkout--contact-preferences', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--order-summary', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--billing-details', 'Default messaging', 'uneditable')
        addContent('.spx-heading-headline__checkout--payment', 'Default messaging', 'uneditable')

        if (expressCheckoutString === 'checkout/v2') {
            addContent('.spx-text-copy', 'Default messaging', 'uneditable')
            addContent('.spx-field-container', 'Default messaging', 'uneditable')
            addContent('button', 'Default messaging', 'uneditable')

        } else if (expressCheckoutString === 'checkout/v2/personaldetails') {
            // New account
            
        } else if (expressCheckoutString === 'checkout/v2/ticketdelivery') {
            addContent('.spx-legend-guide__checkout--ticket-delivery', 'Default messaging', 'uneditable')
            addContent('.spx-field-container__checkout--ticket-delivery', 'Pulls from delivery options setup per ticket type', 'admin')
            addContent('.spx-label-field__checkout--ticket-delivery', 'Default messaging', 'uneditable')
            addContent('.spx-heading-sub-headline__checkout--ticket-delivery-address', 'Default messaging', 'uneditable')
            addContent('.spx-data-group-address-select', 'Default messaging', 'uneditable')
            addContent('.spx-button-primary__checkout--ticket-delivery', 'Default messaging', 'uneditable')
            
        } else if (expressCheckoutString === 'checkout/v2/merchandisedelivery') {
            addContent('.spx-heading-headline__checkout--merchandise-delivery', 'Default messaging', 'uneditable')
            addContent('.spx-legend-guide__checkout--merchandise-delivery', 'Default messaging', 'uneditable')
            addContent('.spx-fieldset-container__checkout--merchandise-delivery', 'Will appear if Allow Postal Delivery is checked off on specific merchandise item', 'admin')
            addContent('.spx-field-container__checkout--merchandise-delivery', 'Default messaging', 'uneditable')
            addContent('.spx-data-delivery-type', 'Pulls from commission delivery setup', 'admin')
            addContent('.spx-heading-sub-headline__checkout--merchandise-delivery-address', 'Default messaging', 'uneditable')
            
        } else if (expressCheckoutString === 'checkout/v2/additionaldetails') {
            addContent('.spx-wikitext-container__checkout--additional-details','Editable under Settings > System Setup > Custom message for the Additional Details tab on checkout.aspx (i.e. for Order Attribute by Event)', 'editable')
            addContent('.spx-label-field__checkout--additional-details', 'Pulls from name of specific Order Attribute, editable in Settings > Attribute Templates', 'editable')
            
        } else if (expressCheckoutString === 'checkout/v2/donations') {
            addContent('.spx-wikitext-container__checkout--donations', 'Editable under Settings > System Setup > Custom body wikitext for the donations step in the new checkout flow', 'editable')
            addContent('.spx-heading-sub-headline__checkout--donation', 'Pulls from Name of specific Fund', 'admin')
            addContent('.spx-text-copy__checkout--donation', 'Pulls from Description of specific Fund', 'editable')
            addContent('.spx-label-field__checkout--donation', 'Default messaging', 'uneditable')
            addContent('.spx-field-container__checkout--donation', 'Pulls from Settings > System Setup > Donations', 'editable')
            addContent()

        } else if (expressCheckoutString === 'checkout/v2/giftaid') {
            
        } else if (expressCheckoutString === 'checkout/v2/contactpreferences') {
            addContent('.spx-heading-sub-headline__checkout--contact-preferences', 'Pulls from name of Contact Preference Group, editable under Settings > Customers > Contact Preferences', 'editable')
            addContent('.spx-field-container__checkout--contact-preferences', 'Pulls from Text of specific Contact Preference, editable under Settings > Customers > Contact Preferences', 'editable')
            
        } else if (expressCheckoutString === 'checkout/v2/ordersummary') {
            addContent('.spx-wikitext-container__checkout--order-summary', 'Editable under Settings > System Setup > Display Terms and Conditions AND Enter your Terms and Conditions below', 'editable')
            addContent('.spx-heading-sub-headline__checkout', 'Default messaging', 'uneditable')
            addContent('.spx-field-container__checkout--credit', 'Default messaging', 'uneditable')
            addContent('.spx-subsection-container__checkout--final-summary', 'Default messaging', 'uneditable')

        } else if (expressCheckoutString === 'checkout/v2/billingdetails') {
            addContent('.spx-heading-sub-headline__checkout', 'Default messaging', 'uneditable')
            addContent('#StoreNewCardCheckBoxFieldContainer', 'Appears if card holder wallets have been turned on, default messaging', 'uneditable')
            
        } else if (expressCheckoutString === 'checkout/v2/payment') {
            addContent('.spx-iframe__checkout', 'Default messaging', 'uneditable')
            
        } else if (expressCheckoutString === 'checkout/v2/orderconfirmation') {
            
        }

    } else if (iframeString === 'eventlist'){
        // EventList.aspx
        addContent('.WhatsOnHeading', 'Not Editable in System', 'uneditable')
        addContent('.MonthList', 'List of months generated by the system automatically based off of event instances marked as visible with dates in the given range', 'admin')
        addContent('.SearchDescription', 'Dates automatically generated based upon the selected month of the page', 'argument')
        addContent('div.Events', 'Auto generated based upon the dates of Events in the Spektrix System and selected month of the page', 'argument')
        addContent('.Event_Name', 'Titles of events that fall within selected date range. Links automatically to EventDetails.aspx with the ID of the event as an argument', 'admin')
        addContent('.Event_Image', 'Pulled from the event setup in the system. Is heavily compressed by our system - for best quality results, use of a CMS/external image source is best', 'admin')
        addContent('span.Event_Description.Event_Detail', 'Pulls directly from the Event description in the admin interface.', 'admin')
        addContent('.More_Info.Event_Detail', 'Same link as the event title. Auto generated and unalterable within system.', 'uneditable')
        addContent('p.NoEvents', 'Default messaging', 'uneditable')
    } else if (iframeString === 'eventdetails') {

        // EventDetails.aspx
        addContent('.DetailsContainer', 'Pulled from the Website Content of the specific event.', 'admin')
        addContent('.DatesAndTimesHeading', 'Default messaging', 'uneditable')
        addContent('#ctl00_ContentPlaceHolder_DateInstructions', 'Default messaging', 'uneditable')
        addContent('div.EventDates', 'Auto generated based upon the dates of Events in the Spektrix System', 'admin')
        addContent('div.PriorityBookingWikiText', 'Priority Booking Wiki Text. Appears when event is only bookable via Priority Booking. Editable under Settings > System Setup > Custom Website Messages', 'editable')
        addContent('p.SoldOutText', 'Sold out text, displays REGARDLESS of sold out status. Editable in Website Admin > Domain Specific Config > Sold Out Message', 'editable')
        addContent('#ctl00_ContentPlaceHolder_RelatedOffersControl1_LoginForDiscounts', 'Not Editable. For Spektrix Support Team: Jira ticket PI-853', 'uneditable')
    } else if (iframeString === 'chooseseats') {
        // ChooseSeats.aspx

        addContent('.ChooseSeatsHeading', 'Editable under Settings > System Setup > Custom Website Messages.', 'editable')
        addContent('#ctl00_ContentPlaceHolder_EventDetails', 'Name of event, date of instance, time of instance. Automatically draws from event and intsnace set up.', 'admin')
        addContent('.AreaAndVenueDetails', 'Pulls automatically from event setup.', 'admin')
        addContent('.InstanceCalendar', 'Default messaging', 'uneditable')
        addContent('.SeatingAreaInstructions', 'Automatically from system - cannot edit text. "10" comes from maximum set for specific Event.', 'uneditable')
        addContent('.SeatingAreaOptionalInstructions', 'Optional message edited in settings > system config > custom website messages. This is universal and will appear on all chooseseats.aspx iframes', 'editable')
        addContent('.BestAvailableLink', 'Best available link - displays if best available is setup','conditional')
        addContent('.Buttons', 'Automatically from system - cannot edit text', 'uneditable')
        addContent('#ctl00_ContentPlaceHolder_SeatingAreaControl_TicketTypeRepeater_ctl01_div>label', 'Ticket Type Name', 'admin')
        addContent('#ctl00_ContentPlaceHolder_SeatingAreaControl_TicketTypeRepeater_ctl01_priceLabel', 'Price - $5.00 service charge language hidable in Settings > System Setup > Price Lists > Do not itemize commission', 'editable')
        addContent('.AdditionalChargesContainer', 'Commission/Fee text - pulls from setup web-based order commissions. Text not editable in system.', 'conditional')

        // ChooseSeat.aspx (Reserved)
        addContent('table.PriceListTable', 'Pulls from price list for specific event', 'admin')
        addContent('.PriceBand.Info', 'Price Band', 'admin')
        addContent('th.TicketType', 'Ticket Type', 'admin')
        addContent('td.TicketType', 'Price', 'admin')
    } else if (iframeString === 'edittickets') {
            
        // EditTickets.aspx
        addContent('h1.EditTicketsHeading', 'Name, date, and time of event', 'admin')
        addContent('h2.EditTicketsHeading', 'Venue name and address', 'admin')
        addContent('p.Message', 'Default messaging', 'uneditable')
        addContent('#ctl00_ContentPlaceHolder_EditTicketsWikiTextViewer', 'Optional message edited in Settings > System Config > Custom Website Messages > Custom message for EventDetails.aspx', 'editable')
        addContent('#ctl00_ContentPlaceHolder_ChangeMySeatsLink', 'Default messaging - this is a link that takes you to chooseseats.aspx', 'uneditable')
        addContent('.Area.Column', 'Area name of selected ticket. Editable in Admin > Seating Plan', 'admin')
        addContent('.SeatName.Column', 'Seat row and number', 'uneditable')
        addContent('.Type.Column', 'Ticket Types available, editable in Admin > Pricing > Ticket Types', 'admin')
    } else if (iframeString === 'basket2') {
            
        // Basket2.aspx
        addContent('h1.BaketHeading', 'Default messaging, will change according to culture segment', 'argument')
        addContent('#ctl00_ContentPlaceHolder_BasketOwnerWikiText', 'Optional message edited in Settings > System Config > Custom Website Messages > This will appear on Basket2.aspx to indicate who the order is for. Use {0} to indicate the order owner\'s name.', 'editable')
        addContent('div#ctl00_ContentPlaceHolder_DiscountsPanel', 'Savings panel, entire panel will appear only if there is at least one offer set up on the system', 'conditional')
        addContent('#ctl00_ContentPlaceHolder_RelatedOffersControl_LoginForDiscounts', 'Default messaging', 'uneditable')
        addContent('.Container.PromoCode', 'Default messaging, will appear only if at least one promo code is set up on the system', 'conditional')
        addContent('#ctl00_ContentPlaceHolder_PromoCodeBox_PromoCodeTextBox', 'Default messaging', 'uneditable')
        addContent('#ctl00_ContentPlaceHolder_ItemsPanel', 'Default messaging', 'uneditable')
        addContent('#ctl00_ContentPlaceHolder_OptionalMessagePanel', 'Optional message, edited in Settings > Configuration > System Setup > Custom Website Messages > Custom message for basket.aspx', 'editable')
        addContent('#ctl00_ContentPlaceHolder_WhatsOnLink', 'Only appears if a link has be setup in Web Admin > Domain Specific Config > [select domain] > Basket "Book more tickets" Link', 'conditional')
    } else if (iframeString === 'memberships') {
        //Memberships

        addContent('#ctl00_ContentPlaceHolder_HeaderWikiText', 'Optional message, edited in Settings > Configuration > System Setup > Memberships on Web > Custom message for memberships.aspx', 'editable')
        addContent('.LoginForRenewalMessage', 'Default messaging', 'uneditable')
        addContent('.Membership > .WikiText > div', 'Pulls from Website Content for specific membership', 'admin')
        addContent('input[type="submit"]', 'Default buttons', 'uneditable')
    } else if (iframeString === 'merchandise') {
        // Merchandise

        addContent('#ctl00_ContentPlaceHolder_HeaderWikiTextViewer', 'Optional message, edited in Settings > Configuration > System Setup > Custom message about merchandise', 'editable')
        addContent('.WikiText', 'Pulls from Website Content for specific merchandise item', 'admin')

    }

    //Fixed Series

    //Donations

    // Gift Vouchers

    // Classic Checkout
    // secure/checkout/v2
    // secure/checkout/v2/startcheckoutlogin
    // secure/checkout/v2/personaldetails
    // secure/checkout/v2/ticketdelivery
    // secure/checkout/v2/merchandisedelivery
    // secure/checkout/v2/additionaldetails
    // secure/checkout/v2/donations
    // secure/checkout/v2/giftaid
    // secure/checkout/v2/contactpreferences
    // secure/checkout/v2/ordersummary
    // secure/checkout/v2/billingdetails
    // secure/checkout/v2/payment
    // secure/checkout/v2/orderconfirmation
    }