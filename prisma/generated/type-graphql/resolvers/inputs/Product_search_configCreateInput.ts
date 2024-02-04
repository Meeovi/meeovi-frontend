import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_search_configInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_search_configInput";
import { Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput";

@TypeGraphQL.InputType("Product_search_configCreateInput", {})
export class Product_search_configCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  and_logic?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_search_length?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excluded_terms?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_search_configInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_search_configInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput, {
    nullable: true
  })
  product_search_config_field?: Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput | undefined;
}
