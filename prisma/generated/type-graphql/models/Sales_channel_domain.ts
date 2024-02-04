import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Currency } from "../models/Currency";
import { Language } from "../models/Language";
import { Product_export } from "../models/Product_export";
import { Sales_channel } from "../models/Sales_channel";
import { Snippet_set } from "../models/Snippet_set";
import { Sales_channel_domainCount } from "../resolvers/outputs/Sales_channel_domainCount";

@TypeGraphQL.ObjectType("Sales_channel_domain", {})
export class Sales_channel_domain {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  snippet_set_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hreflang_use_only_locale?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product_export?: Product_export[];

  sales_channel_sales_channel_hreflang_default_domain_idTosales_channel_domain?: Sales_channel[];

  currency?: Currency;

  language?: Language;

  sales_channel_sales_channel_domain_sales_channel_idTosales_channel?: Sales_channel;

  snippet_set?: Snippet_set;

  @TypeGraphQL.Field(_type => Sales_channel_domainCount, {
    nullable: true
  })
  _count?: Sales_channel_domainCount | null;
}
