import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldWhereInput } from "../inputs/Product_search_config_fieldWhereInput";

@TypeGraphQL.InputType("Product_search_config_fieldListRelationFilter", {})
export class Product_search_config_fieldListRelationFilter {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  every?: Product_search_config_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  some?: Product_search_config_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  none?: Product_search_config_fieldWhereInput | undefined;
}
