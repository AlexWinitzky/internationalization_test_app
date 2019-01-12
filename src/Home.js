import React from 'react';
import { translate, Trans } from 'react-i18next';

class Home extends React.Component {
  
  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);  
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t('Welcome to our Application')}</h1>
        <button onClick={() => this.changeLanguage('zh')}>zh</button>
        <button onClick={() => this.changeLanguage('en')}>en</button>
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