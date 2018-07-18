module.exports = {

  loginPage: {
    username: 'body > div > div.left > div.welcome > h1',
    welcomeMessage: 'body > div > div.left > div.welcome > h3',
    descriptionText: 'body > div > div.left > div.content > div',
    login: {
      container: 'body > div > div.right > div',
      title: 'body > div > div.right > div > div:nth-child(1) > h1',
      email: {
        label: 'body > div > div.right > div > div:nth-child(2) > form > fieldset > div > div:nth-child(2) > span > label',
        input: '#Email'
      },
      password: {
        label: 'body > div > div.right > div > div:nth-child(2) > form > fieldset > div > div:nth-child(3) > span > label',
        input: '#Password'
      },
      button: 'body > div > div.right > div > div:nth-child(2) > form > fieldset > div > div:nth-child(4) > input',
      forgotPw: {
        message: 'body > div > div.right > div > div:nth-child(2) > form > fieldset > div > div:nth-child(5) > span',
        link: '#lost-password'
      }
    }
  },

  header: {
    home: '#header_root > div > div > div.axs_axh > a',
    searchClients: {
      input: '#header_root > div > div > div.axs_axz > div.axs_axu > form > input',
      searchButton: '#header_root > div > div > div.axs_axz > div.axs_axu > form > button'
    },
    alerts: '#header_root > div > div > div.axs_axz > div.axs_axt > a:nth-child(1) > div > i',
    unconfirmedAppts: '#header_root > div > div > div.axs_axz > div.axs_axt > a:nth-child(2) > div > i',
    whatsNew: '#HW_badge_cont',
    supportCenter: '#header_root > div > div > div.axs_axz > div.axs_axt > div:nth-child(4) > div > i',
    profileDropdown: '#header_root > div > div > div.axs_axz > div.axs_axt > div:nth-child(5) > div > span',
    logout: '#header_root > div > div > div.axs_axz > a',
    viewNav : {
      "Agenda": '#top_nav_root > div > a:nth-child(1)',
      "Calendar": '#top_nav_root > div > a:nth-child(2)',
      "Clients": '#top_nav_root > div > a:nth-child(3)',
      "Staff": '#top_nav_root > div > a:nth-child(4)',
      "Billing": '#top_nav_root > div > a:nth-child(5)',
      "Custom Forms": '#top_nav_root > div > a:nth-child(6)',
      "Reports": '#top_nav_root > div > a:nth-child(7)',
      "Organizations": '#top_nav_root > div > a:nth-child(8)'
    }
  },

  agendaView: {
    date: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_awu > div > h3',
    prevDateButton: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > button.ui.small.button.a1f_a04.a1f_a1m.a0k_a00',
    dayPickerInput: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.a26_a03 > div > div.DayPickerInput.a26_a27',
    nextDateButton: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > button.ui.small.button.a1f_a04.a1f_a1m.a0k_a0z',
    showNonClientEvents: {
      checkbox: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > label > span.a21_axn',
      label: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > label > span.a21_axq'
    },
    subViewButtons: {
      agenda: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.ui.small.buttons.a4e_a1m.a0k_a0t > span.a20_a1q.react-link.ui.button.a4e_a04.active > a',
      day: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.ui.small.buttons.a4e_a1m.a0k_a0t > span:nth-child(2) > a',
      week: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.ui.small.buttons.a4e_a1m.a0k_a0t > span:nth-child(3) > a',
      month: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.ui.small.buttons.a4e_a1m.a0k_a0t > span:nth-child(4) > a',
      staff: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0n > div.ui.small.buttons.a4e_a1m.a0k_a0t > span:nth-child(5) > a'
    },
    filterButtons: {
      location: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0o > div > div:nth-child(1) > button',
      staff: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0o > div > div:nth-child(2) > button > svg',
      serviceTypes: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0o > div > div:nth-child(3) > button',
      apply: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0o > div > div:nth-child(3) > button',
      applySave: '#content_react_data > div:nth-child(2) > div.a0k_a0u > div > div.a0k_a0o > div > button.ui.small.button.a1f_a04.a1f_aw3.a18_a2a'
    },
    table: {
      headers: {
        appointment: '#content_react_data > div:nth-child(2) > div:nth-child(3) > div.a6i_a47 > div.a2b_awu > div > div.a6y_a6z.a2b_a2c',
        client: '#content_react_data > div:nth-child(2) > div:nth-child(3) > div.a6i_a47 > div.a2b_awu > div > div:nth-child(2)',
        staff: '#content_react_data > div:nth-child(2) > div:nth-child(3) > div.a6i_a47 > div.a2b_awu > div > div:nth-child(3)',
        status: '#content_react_data > div:nth-child(2) > div:nth-child(3) > div.a6i_a47 > div.a2b_awu > div > div.a6y_a6z.a2b_a2f',
        actions: '#content_react_data > div:nth-child(2) > div:nth-child(3) > div.a6i_a47 > div.a2b_awu > div > div.a6y_a6z.a2b_a2h'
      }
    }
  },

  clientsView: {
    aside: {
      allClients: '#side_nav_bar > div > div > div > a.active > div > span',
      myClients: '#side_nav_bar > div > div > div > a:nth-child(2) > div > span',
      groups: '#side_nav_bar > div > div > div > a:nth-child(3) > div > span',
      addClient: '#side_nav_bar > div > div > div > a:nth-child(4) > div > span',
      importClients: '#side_nav_bar > div > div > div > a:nth-child(5) > div > span'
    },
    search: {
      label: '#client_filter_form > h5',
      searchInput: '#client_filter_form > div > input',
      serviceTypeFilter: '#client_filter_form > div > select:nth-child(2)',
      staffFilter: '#client_filter_form > div > select:nth-child(3)',
      isActiveFilter: '#client_filter_form > div > select:nth-child(4)',
      submitButton: '#search'
    },
    title: '#content_ph > div:nth-child(2) > div > h1',
    addNewButton: '#content_ph > div:nth-child(2) > div > div.control-group.new-client-button-container > a',
    table: {
      headers: {
        fullName: '#clients_grid > thead > tr > th:nth-child(1)',
        activatedOn: '#clients_grid > thead > tr > th:nth-child(2)',
        balanceDue: '#clients_grid > thead > tr > th:nth-child(3)',
        actions: '#clients_grid > thead > tr > th:nth-child(4)'
      },
      fullName: '#clients_grid > tbody > tr > td:nth-child(1)',
      activatedOn: '#clients_grid > tbody > tr > td:nth-child(2)',
      balanceDue: '#clients_grid > tbody > tr > td:nth-child(3)',
      actoins: {
        container: '#clients_grid > tbody > tr > td:nth-child(4)',
        details: '#clients_grid > tbody > tr > td:nth-child(4) > a:nth-child(1)',
        notes: '#clients_grid > tbody > tr > td:nth-child(4) > div:nth-child(2) > a',
        ledger: '#clients_grid > tbody > tr > td:nth-child(4) > div:nth-child(3) > a',
        scheduleAppointment: '#clients_grid > tbody > tr > td:nth-child(4) > div:nth-child(4) > a',
        archive: '#clients_grid > tbody > tr > td:nth-child(4) > button',
        delete: '#clients_grid > tbody > tr > td:nth-child(4) > a:nth-child(6)'
      }
    }
  },

  newClientModal: {
    title: '#newClient > div.modal-header > h3',
    backdrop: 'body > div.modal-backdrop',
    firstName: {
      label: '#registerForm > div > fieldset > div:nth-child(1) > label',
      input: '#registerForm > div > fieldset > div:nth-child(1) > div > input'
    },
    middleName: {
      label: '#registerForm > div > fieldset > div:nth-child(2) > label',
      input: '#registerForm > div > fieldset > div:nth-child(2) > div > input'
    },
    lastName: {
      label: '#registerForm > div > fieldset > div:nth-child(3) > label',
      input: '#registerForm > div > fieldset > div:nth-child(3) > div > input'
    },
    location: {
      label: '#registerForm > div > fieldset > div:nth-child(4) > label',
      selector: '#registerForm > div > fieldset > div:nth-child(4) > div > select'
    },
    cancelButton: '#regularButtons > a',
    saveClient: '#register'
  },

  deleteClientConfirmationModal: {
    title: '#modal_confirm > div.modal-header > h3',
    helpText: '#modal_confirm > div.modal-body > p',
    xButton: '#modal_confirm > div.modal-header > button',
    closeButton: '#modal_confirm > div.modal-footer > #cancelBtn',
    confirmButton: '#modal_confirm > div.modal-footer > #okBtn',
    backdrop: 'body > div.modal-backdrop'
  }

}