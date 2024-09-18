import * as React from "react"
import styled from "styled-components"

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: ${(props) => props.width || '100%'};
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  font-family: sans-serif;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #1a7c3e;
  }
`;

const SelectField = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #1a7c3e;
  }
`;

const Input = ({ label, placeholder, width, opcoes, ...props }) => (
    <InputWrapper width={width}>
        <Label>{label}</Label>
        {opcoes ? (
            <SelectField {...props}>
                <option value="">{placeholder}</option>
                {opcoes.map((opcao) => (
                    <option key={opcao} value={opcao}>
                        {opcao}
                    </option>
                ))}
            </SelectField>
        ) : (
            <InputField placeholder={placeholder} {...props} />
        )
        }

    </InputWrapper>
);

export default Input