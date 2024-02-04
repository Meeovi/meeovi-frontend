import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cart } from "../models/Cart";
import { Country_state } from "../models/Country_state";
import { Country_translation } from "../models/Country_translation";
import { Currency_country_rounding } from "../models/Currency_country_rounding";
import { Customer_address } from "../models/Customer_address";
import { Order_address } from "../models/Order_address";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_country } from "../models/Sales_channel_country";
import { Tax_rule } from "../models/Tax_rule";
import { CountryCount } from "../resolvers/outputs/CountryCount";

@TypeGraphQL.ObjectType("Country", {})
export class Country {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  tax_free!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso3?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  display_state_in_registration!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  force_state_in_registration!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  company_tax_free!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  check_vat_id_pattern!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_id_pattern?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  vat_id_required!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_tax?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_tax?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  advanced_postal_code_pattern?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  check_advanced_postal_code_pattern!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  check_postal_code_pattern!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_postal_code_pattern?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  postal_code_required!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  shipping_available!: boolean;

  cart?: Cart[];

  country_state?: Country_state[];

  country_translation?: Country_translation[];

  currency_country_rounding?: Currency_country_rounding[];

  customer_address?: Customer_address[];

  order_address?: Order_address[];

  sales_channel?: Sales_channel[];

  sales_channel_country?: Sales_channel_country[];

  tax_rule?: Tax_rule[];

  @TypeGraphQL.Field(_type => CountryCount, {
    nullable: true
  })
  _count?: CountryCount | null;
}
