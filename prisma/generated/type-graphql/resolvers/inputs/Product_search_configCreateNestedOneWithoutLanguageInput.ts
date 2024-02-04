import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configCreateOrConnectWithoutLanguageInput } from "../inputs/Product_search_configCreateOrConnectWithoutLanguageInput";
import { Product_search_configCreateWithoutLanguageInput } from "../inputs/Product_search_configCreateWithoutLanguageInput";
import { Product_search_configWhereUniqueInput } from "../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_configCreateNestedOneWithoutLanguageInput", {})
export class Product_search_configCreateNestedOneWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_configCreateWithoutLanguageInput, {
    nullable: true
  })
  create?: Product_search_configCreateWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCreateOrConnectWithoutLanguageInput, {
    nullable: true
  })
  connectOrCreate?: Product_search_configCreateOrConnectWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_search_configWhereUniqueInput | undefined;
}
