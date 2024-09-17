'use client';
import React, { useLayoutEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import JoinForm from '../components/JoinForm';
import { StyledWrapper } from '@/commons/components/layouts/StyledWrapper';

const JoinContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const [form, setForm] = useState({
    userType: 'STUDENT',
    status: 'ONCLASS',
  });
  const [errors, setErrors] = useState({});
  useLayoutEffect(() => {
    setMainTitle(t('회원가입'));
  }, [t, setMainTitle]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onToggle = useCallback((name, value) => {
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return (
    <StyledWrapper>
      <JoinForm
        form={form}
        onSubmit={onSubmit}
        onChange={onChange}
        onToggle={onToggle}
        errors={errors}
      />
    </StyledWrapper>
  );
};

export default React.memo(JoinContainer);
