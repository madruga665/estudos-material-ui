import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Coloca o nome ai vagabundo"),
  email: yup.string().email('Digita um email de verdade mano!').required("Só de raiva vou encher teu email de spam"),
  phone: yup.string().required("Eu juro que não vou te chamar no zap"),
  address: yup.string().required("Coloca o seu endereço ai vacilão"),
});