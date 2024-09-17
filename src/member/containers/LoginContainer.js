'use client';
import React, { useLayoutEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import LoginForm from '../components/LoginForm';
import { StyledWrapper } from '@/commons/components/layouts/StyledWrapper';
const LoginContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('로그인'));
  }, []);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  return (
    <StyledWrapper>
      <LoginForm
        form={form}
        errors={errors}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </StyledWrapper>
  );
};

export default React.memo(LoginContainer);
