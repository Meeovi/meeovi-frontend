import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_search_keywordInput } from "../inputs/LanguageUpdateWithoutProduct_search_keywordInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_search_keywordInput;
}
