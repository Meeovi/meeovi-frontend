import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configCreateWithoutLanguageInput } from "../inputs/Product_search_configCreateWithoutLanguageInput";
import { Product_search_configUpdateWithoutLanguageInput } from "../inputs/Product_search_configUpdateWithoutLanguageInput";
import { Product_search_configWhereInput } from "../inputs/Product_search_configWhereInput";

@TypeGraphQL.InputType("Product_search_configUpsertWithoutLanguageInput", {})
export class Product_search_configUpsertWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_configUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_search_configUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_search_configCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_search_configCreateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;
}
