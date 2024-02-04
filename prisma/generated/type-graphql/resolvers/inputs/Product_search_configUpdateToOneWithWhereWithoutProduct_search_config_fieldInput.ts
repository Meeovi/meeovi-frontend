import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configUpdateWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configUpdateWithoutProduct_search_config_fieldInput";
import { Product_search_configWhereInput } from "../inputs/Product_search_configWhereInput";

@TypeGraphQL.InputType("Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput", {})
export class Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput {
  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpdateWithoutProduct_search_config_fieldInput, {
    nullable: false
  })
  data!: Product_search_configUpdateWithoutProduct_search_config_fieldInput;
}
