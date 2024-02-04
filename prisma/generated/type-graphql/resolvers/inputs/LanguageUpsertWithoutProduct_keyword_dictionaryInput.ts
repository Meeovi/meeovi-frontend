import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateWithoutProduct_keyword_dictionaryInput";
import { LanguageUpdateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageUpdateWithoutProduct_keyword_dictionaryInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_keyword_dictionaryInput", {})
export class LanguageUpsertWithoutProduct_keyword_dictionaryInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_keyword_dictionaryInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_keyword_dictionaryInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_keyword_dictionaryInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_keyword_dictionaryInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
