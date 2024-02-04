import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer_group } from "../models/Customer_group";
import { Language } from "../models/Language";

@TypeGraphQL.ObjectType("Customer_group_translation", {})
export class Customer_group_translation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_group_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_introduction?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  registration_only_company_registration?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_seo_meta_description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  customer_group?: Customer_group;

  language?: Language;
}
