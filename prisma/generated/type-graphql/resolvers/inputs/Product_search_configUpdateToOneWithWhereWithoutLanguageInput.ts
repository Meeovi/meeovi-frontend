import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configUpdateWithoutLanguageInput } from "../inputs/Product_search_configUpdateWithoutLanguageInput";
import { Product_search_configWhereInput } from "../inputs/Product_search_configWhereInput";

@TypeGraphQL.InputType("Product_search_configUpdateToOneWithWhereWithoutLanguageInput", {})
export class Product_search_configUpdateToOneWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_search_configUpdateWithoutLanguageInput;
}
