import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Product_exportCreateManyProduct_streamInput", {})
export class Product_exportCreateManyProduct_streamInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  storefront_sales_channel_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_domain_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  access_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  encoding!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_format!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  include_variants?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  generate_by_cronjob?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  generated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  interval!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_template?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body_template?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_template?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  paused_schedule?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_running?: boolean | undefined;
}
