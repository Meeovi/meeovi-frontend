import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_search_keywordInput";
import { LanguageCreateWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateWithoutProduct_search_keywordInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_search_keywordInput", {})
export class LanguageCreateNestedOneWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_keywordInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_search_keywordInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
