import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput";
import { LanguageCreateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateWithoutProduct_keyword_dictionaryInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput", {})
export class LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_keyword_dictionaryInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
