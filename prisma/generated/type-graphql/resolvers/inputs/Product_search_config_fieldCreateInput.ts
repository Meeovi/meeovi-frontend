import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput";
import { Product_search_configCreateNestedOneWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configCreateNestedOneWithoutProduct_search_config_fieldInput";

@TypeGraphQL.InputType("Product_search_config_fieldCreateInput", {})
export class Product_search_config_fieldCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  field!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  tokenize?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  searchable?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ranking?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  custom_field?: Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCreateNestedOneWithoutProduct_search_config_fieldInput, {
    nullable: false
  })
  product_search_config!: Product_search_configCreateNestedOneWithoutProduct_search_config_fieldInput;
}
