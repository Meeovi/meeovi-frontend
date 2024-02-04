import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateNestedManyWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldCreateNestedManyWithoutCustom_fieldInput";

@TypeGraphQL.InputType("Custom_fieldCreateWithoutCustom_field_setInput", {})
export class Custom_fieldCreateWithoutCustom_field_setInput {
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

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateNestedManyWithoutCustom_fieldInput, {
    nullable: true
  })
  product_search_config_field?: Product_search_config_fieldCreateNestedManyWithoutCustom_fieldInput | undefined;
}
