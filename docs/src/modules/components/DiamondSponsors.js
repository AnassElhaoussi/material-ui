import * as React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Link from 'docs/src/modules/components/Link';
import Button from '@mui/material/Button';
import { useTheme, styled, alpha } from '@mui/material/styles';
import { useTranslate } from 'docs/src/modules/utils/i18n';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1, 2),
  '& img': {
    display: 'inline-block',
  },
}));

export default function DiamondSponsors(props) {
  const { spot } = props;
  const theme = useTheme();
  const t = useTranslate();

  return (
    <Root>
      <Button
        component="a"
        href="/material-ui/discover-more/backers/#diamond"
        target="_blank"
        rel="noopener nofollow"
        size="small"
        endIcon={<InfoOutlinedIcon fontSize="small" />}
        sx={{
          mb: 1,
          fontSize: theme.typography.pxToRem(12.5),
          fontWeight: 500,
          color:
            theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
          '& svg': {
            width: 14,
            height: 14,
          },
        }}
      >
        {t('diamondSponsors')}
      </Button>
      <Stack
        spacing={1.5}
        sx={{
          '& a': {
            width: '100%',
            height: 52,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.grey[200]
            }`,
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 700,
            borderRadius: 1,
            transition: theme.transitions.create(['color', 'border-color']),
            '&:hover': {
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary[300]
                  : theme.palette.primary[500],
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.grey[300],
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primaryDark[700], 0.4)
                  : theme.palette.grey[50],
            },
          },
        }}
      >
        <a
          data-ga-event-category="sponsor"
          data-ga-event-action={spot}
          data-ga-event-label="octopus"
          href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
          rel="noopener noreferrer sponsored"
          target="_blank"
        >
          <img
            width="137"
            height="30"
            src={`/static/sponsors/octopus-${theme.palette.mode}.svg`}
            alt="octopus"
            title="Repeatable, reliable deployments"
            loading="lazy"
          />
        </a>
        <a
          data-ga-event-category="sponsor"
          data-ga-event-action={spot}
          data-ga-event-label="doit"
          href="https://www.doit-intl.com/flexsave/?utm_source=materialui&utm_medium=referral"
          rel="noopener noreferrer sponsored"
          target="_blank"
        >
          <img
            width="60"
            height="25"
            src={`/static/sponsors/doit.svg`}
            alt="doit-intl"
            title="Management Platform for Google Cloud and AWS"
            loading="lazy"
          />
        </a>
        <Link
          aria-label={t('diamondSponsors')}
          rel="noopener noreferrer"
          href="/material-ui/discover-more/backers/#diamond"
          // eslint-disable-next-line material-ui/no-hardcoded-labels
        >
          +1
        </Link>
      </Stack>
    </Root>
  );
}

DiamondSponsors.propTypes = {
  spot: PropTypes.string.isRequired,
};
