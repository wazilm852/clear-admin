import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../view/main'
import Login from '../view/login'
import ChangePassword from '../view/login/changePassword'
import BasicMessage from '../view/basicMessage'
import CallRecord from '../view/callRecord'
import DataBazaar from '../view/dataBazaar'
import MyAccount from '../view/myAccount'
import ContractSigning from '../view/dataBazaar/contractSigning'
import BankCardElements from '../view/dataBazaar/bankCardElements'
import CaCertificate from '../view/dataBazaar/caCertificate'
import IndustryVerification from '../view/dataBazaar/industryVerification'
import OcrDiscern from '../view/dataBazaar/ocrDiscern'
import PoliceVerification from '../view/dataBazaar/policeVerification'
import PhoneVerification from '../view/dataBazaar/phoneVerification'
import PersonalVerification from '../view/dataBazaar/personalVerification'
import IdOcr from '../view/dataBazaar/idOcr'
import DrivingLicenceOCR from '../view/dataBazaar/drivingLicenceOCR'
import DriveOCR from '../view/dataBazaar/driveOCR'
import Timeout from '../timeout'




Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePassword,
    },
    {
      path: '/timeout',
      name: 'timeout',
      component: Timeout,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/basicMessage',
          name: 'basicMessage',
          component: BasicMessage,
        },
        {
          path: '/callRecord',
          name: 'callRecord',
          component: CallRecord,
        },
        {
          path: '/dataBazaar',
          name: 'dataBazaar',
          component: DataBazaar
        },
        {
          path: '/myAccount',
          name: 'myAccount',
          component: MyAccount,
        },
        {
          path: '/contractSigning',
          name: 'contractSigning',
          component: ContractSigning,
        },
        {
          path: '/bankCardElements',
          name: 'bankCardElements',
          component: BankCardElements,
        },
        {
          path: '/caCertificate',
          name: 'caCertificate',
          component: CaCertificate,
        },
        {
          path: '/industryVerification',
          name: 'industryVerification',
          component: IndustryVerification,
        },
        {
          path: '/ocrDiscern',
          name: 'ocrDiscern',
          component: OcrDiscern,
        },
        {
          path: '/policeVerification',
          name: 'policeVerification',
          component: PoliceVerification,
        },
        {
          path: '/phoneVerification',
          name: 'phoneVerification',
          component: PhoneVerification,
        },
        {
          path: '/personalVerification',
          name: 'personalVerification',
          component: PersonalVerification,
        },
        {
          path: '/idOcr',
          name: 'idOcr',
          component: IdOcr,
        },
        {
          path: '/drivingLicenceOCR',
          name: 'drivingLicenceOCR',
          component: DrivingLicenceOCR,
        },
        {
          path: '/driveOCR',
          name: 'driveOCR',
          component: DriveOCR,
        },
      ]
    }
  ]
})
