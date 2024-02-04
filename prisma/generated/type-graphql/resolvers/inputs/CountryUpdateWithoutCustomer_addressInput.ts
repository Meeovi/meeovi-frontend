import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CartUpdateManyWithoutCountryNestedInput } from "../inputs/CartUpdateManyWithoutCountryNestedInput";
import { Country_stateUpdateManyWithoutCountryNestedInput } from "../inputs/Country_stateUpdateManyWithoutCountryNestedInput";
import { Country_translationUpdateManyWithoutCountryNestedInput } from "../inputs/Country_translationUpdateManyWithoutCountryNestedInput";
import { Currency_country_roundingUpdateManyWithoutCountryNestedInput } from "../inputs/Currency_country_roundingUpdateManyWithoutCountryNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_addressUpdateManyWithoutCountryNestedInput } from "../inputs/Order_addressUpdateManyWithoutCountryNestedInput";
import { Sales_channelUpdateManyWithoutCountryNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCountryNestedInput";
import { Sales_channel_countryUpdateManyWithoutCountryNestedInput } from "../inputs/Sales_channel_countryUpdateManyWithoutCountryNestedInput";
import { Tax_ruleUpdateManyWithoutCountryNestedInput } from "../inputs/Tax_ruleUpdateManyWithoutCountryNestedInput";

@TypeGraphQL.InputType("CountryUpdateWithoutCustomer_addressInput", {})
export class CountryUpdateWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  iso?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  tax_free?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  iso3?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  display_state_in_registration?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  force_state_in_registration?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  company_tax_free?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  check_vat_id_pattern?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  vat_id_pattern?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  vat_id_required?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_tax?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  company_tax?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  advanced_postal_code_pattern?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  check_postal_code_pattern?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  default_postal_code_pattern?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  postal_code_required?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_available?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CartUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  cart?: CartUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  country_state?: Country_stateUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  country_translation?: Country_translationUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  order_address?: Order_addressUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_countryUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  sales_channel_country?: Sales_channel_countryUpdateManyWithoutCountryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleUpdateManyWithoutCountryNestedInput, {
    nullable: true
  })
  tax_rule?: Tax_ruleUpdateManyWithoutCountryNestedInput | undefined;
}
