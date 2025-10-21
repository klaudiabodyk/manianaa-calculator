import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ActionLinks: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      className="action-links"
      sx={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}
    >
      <Link
        className={'ebook-button'}
        dataTest-id={'goToApp'}
        to={'https://manianaa.com/produkt/dieta-maniany-w-aplikacji'}
      >
        {t('goToApp')}
      </Link>
    </Box>
  )
}

export default ActionLinks
