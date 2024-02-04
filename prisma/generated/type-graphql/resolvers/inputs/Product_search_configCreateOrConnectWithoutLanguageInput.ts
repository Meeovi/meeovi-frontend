import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configCreateWithoutLanguageInput } from "../inputs/Product_search_configCreateWithoutLanguageInput";
import { Product_search_configWhereUniqueInput } from "../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_configCreateOrConnectWithoutLanguageInput", {})
export class Product_search_configCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_configCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_search_configCreateWithoutLanguageInput;
}
