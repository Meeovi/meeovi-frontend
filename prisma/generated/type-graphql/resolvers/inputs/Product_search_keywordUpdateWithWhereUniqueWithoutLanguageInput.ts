import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordUpdateWithoutLanguageInput } from "../inputs/Product_search_keywordUpdateWithoutLanguageInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_search_keywordUpdateWithoutLanguageInput;
}
