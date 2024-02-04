import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateNestedOneWithoutCustomer_group_translationInput } from "../inputs/Customer_groupCreateNestedOneWithoutCustomer_group_translationInput";

@TypeGraphQL.InputType("Customer_group_translationCreateWithoutLanguageInput", {})
export class Customer_group_translationCreateWithoutLanguageInput {
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

  @TypeGraphQL.Field(_type => Customer_groupCreateNestedOneWithoutCustomer_group_translationInput, {
    nullable: false
  })
  customer_group!: Customer_groupCreateNestedOneWithoutCustomer_group_translationInput;
}
