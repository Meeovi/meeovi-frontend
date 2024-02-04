import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateNestedManyWithoutCountryInput } from "../inputs/CartCreateNestedManyWithoutCountryInput";
import { Country_stateCreateNestedManyWithoutCountryInput } from "../inputs/Country_stateCreateNestedManyWithoutCountryInput";
import { Country_translationCreateNestedManyWithoutCountryInput } from "../inputs/Country_translationCreateNestedManyWithoutCountryInput";
import { Currency_country_roundingCreateNestedManyWithoutCountryInput } from "../inputs/Currency_country_roundingCreateNestedManyWithoutCountryInput";
import { Order_addressCreateNestedManyWithoutCountryInput } from "../inputs/Order_addressCreateNestedManyWithoutCountryInput";
import { Sales_channelCreateNestedManyWithoutCountryInput } from "../inputs/Sales_channelCreateNestedManyWithoutCountryInput";
import { Sales_channel_countryCreateNestedManyWithoutCountryInput } from "../inputs/Sales_channel_countryCreateNestedManyWithoutCountryInput";
import { Tax_ruleCreateNestedManyWithoutCountryInput } from "../inputs/Tax_ruleCreateNestedManyWithoutCountryInput";

@TypeGraphQL.InputType("CountryCreateWithoutCustomer_addressInput", {})
export class CountryCreateWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  tax_free?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso3?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_state_in_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  force_state_in_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  company_tax_free?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_vat_id_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_id_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  vat_id_required?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  advanced_postal_code_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_postal_code_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_postal_code_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  postal_code_required?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shipping_available?: boolean | undefined;

  @TypeGraphQL.Field(_type => CartCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  cart?: CartCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  country_state?: Country_stateCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  country_translation?: Country_translationCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  order_address?: Order_addressCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_countryCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  sales_channel_country?: Sales_channel_countryCreateNestedManyWithoutCountryInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  tax_rule?: Tax_ruleCreateNestedManyWithoutCountryInput | undefined;
}
