import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateWithoutLanguageInput } from "../inputs/Product_search_keywordCreateWithoutLanguageInput";
import { Product_search_keywordUpdateWithoutLanguageInput } from "../inputs/Product_search_keywordUpdateWithoutLanguageInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_search_keywordUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_search_keywordCreateWithoutLanguageInput;
}
