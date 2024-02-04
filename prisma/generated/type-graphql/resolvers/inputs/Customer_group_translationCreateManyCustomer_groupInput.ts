import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Customer_group_translationCreateManyCustomer_groupInput", {})
export class Customer_group_translationCreateManyCustomer_groupInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_introduction?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  registration_only_company_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registration_seo_meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
