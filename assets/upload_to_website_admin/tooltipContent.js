function addContent(query, content) {
    try {
        document.querySelector(query).setAttribute('data-tooltip', content)
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    // EventList.aspx
    addContent('.WhatsOnHeading', 'Not Editable in System')
    addContent('.MonthList', 'Auto generated based upon the dates of Events in the Spektrix System')
    addContent('.SearchDescription', 'Auto generated based upon the dates of Events in the Spektrix System')
    addContent('.Events', 'Auto generated based upon the dates of Events in the Spektrix System')
    addContent('span.Event_Description.Event_Detail', 'Pulls from description of specific Event set in Admin')

    // EventDetails.aspx

    addContent('.DatesAndTimesHeading', 'Auto generated based upon the dates of Events in the Spektrix System')
    addContent('div.EventDates', 'Auto generated based upon the dates of Events in the Spektrix System')
    addContent('div.PriorityBookingWikiText', 'Priority Booking Wiki Text. Editable under Settings > System Setup > Custom Website Messages')
    addContent('p.SoldOutText', 'Sold out text, displays REGARDLESS of sold out status. Editable in Website Admin > Domain Specific Config > Sold Out Message')
    addContent('#ctl00_ContentPlaceHolder_RelatedOffersControl1_LoginForDiscounts', 'Not Editable. For Spektrix Support Team: Jira ticket PI-853')

    // ChooseSeats.aspx

    addContent('.ChooseSeatsHeading', 'Editable under Settings > System Setup > Custom Website Messages.')
    addContent('#ctl00_ContentPlaceHolder_EventDetails', 'Pulls automatically from event setup.')
    addContent('.AreaAndVenueDetails', 'Pulls automatically from event setup.')
    addContent('.SeatingAreaInstructions', 'Pulls automatically from event setup.')
    addContent('.SeatingAreaOptionalInstructions', 'Editable under Settings > System Setup > Custom Website Messages.')
    addContent('.BestAvailableLink', 'Best available link - displays if best available is setup')
    addContent('.Buttons', 'Automatically from system - cannot edit text')
    addContent('.SeatingAreaInstructions', 'Automatically from system - cannot edit text. "10" comes from maximum set for specific Event.')
    addContent('#ctl00_ContentPlaceHolder_SeatingAreaControl_TicketTypeRepeater_ctl01_div>label', 'Ticket Type Name')
    addContent('ctl00_ContentPlaceHolder_SeatingAreaControl_TicketTypeRepeater_ctl01_priceLabel', 'Price - $5.00 service charge language hidable in Settings > System Setup > Price Lists > Do not itemize commission')
    addContent('AdditionalChargesContainer', 'Commission/Fee text - pulls from setup web-based order commissions. Text not editable in system.')
}