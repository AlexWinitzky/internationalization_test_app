import React from 'react';
import { translate, Trans } from 'react-i18next';

class Home extends React.Component {
  state = { toggle: false }
  
  changeLanguage = (lng) => {
    if (this.state.toggle === true) {
      lng = 'en'
    } else {
      lng = 'zh'
    }
    this.props.i18n.changeLanguage(lng);  
  }

  toggleLang = () => {
    this.setState({ toggle: !this.state.toggle})
    this.changeLanguage()
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t('Welcome to our Application')}</h1>
        <button onClick={() => this.toggleLang()}>{this.state.toggle ? 'en' : '中文'}</button>
        <hr />
        {/* you can translate using the 'Trans' tag */}
        <Trans>
          This is a test sentence
        </Trans>
        <hr />
        {/* or you can use javascript inside a normal JSX element*/}
        <p>{t('This application uses internationalization software')}</p>
      </div>
    )
  }
}

export default translate('translations')(Home)