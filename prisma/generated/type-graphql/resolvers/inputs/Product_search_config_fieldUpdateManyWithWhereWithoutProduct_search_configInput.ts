import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldScalarWhereInput } from "../inputs/Product_search_config_fieldScalarWhereInput";
import { Product_search_config_fieldUpdateManyMutationInput } from "../inputs/Product_search_config_fieldUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput", {})
export class Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput {
  @TypeGraphQL.Field(_type => Product_search_config_fieldScalarWhereInput, {
    nullable: false
  })
  where!: Product_search_config_fieldScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_search_config_fieldUpdateManyMutationInput;
}
