import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateNestedOneWithoutCustom_fieldInput } from "../inputs/Custom_field_setCreateNestedOneWithoutCustom_fieldInput";

@TypeGraphQL.InputType("Custom_fieldCreateWithoutProduct_search_config_fieldInput", {})
export class Custom_fieldCreateWithoutProduct_search_config_fieldInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allow_customer_write?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allow_cart_expose?: number | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateNestedOneWithoutCustom_fieldInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setCreateNestedOneWithoutCustom_fieldInput | undefined;
}
