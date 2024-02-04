import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateWithoutProduct_search_keywordInput";
import { LanguageUpdateWithoutProduct_search_keywordInput } from "../inputs/LanguageUpdateWithoutProduct_search_keywordInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_search_keywordInput", {})
export class LanguageUpsertWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_search_keywordInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_search_keywordInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
