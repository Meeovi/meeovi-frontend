import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryCreateWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateWithoutLanguageInput";
import { Product_keyword_dictionaryUpdateWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryUpdateWithoutLanguageInput";
import { Product_keyword_dictionaryWhereUniqueInput } from "../inputs/Product_keyword_dictionaryWhereUniqueInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_keyword_dictionaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_keyword_dictionaryUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_keyword_dictionaryCreateWithoutLanguageInput;
}
