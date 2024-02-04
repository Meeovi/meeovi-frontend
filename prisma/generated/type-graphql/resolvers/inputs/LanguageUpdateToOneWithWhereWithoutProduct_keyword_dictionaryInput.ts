import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageUpdateWithoutProduct_keyword_dictionaryInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_keyword_dictionaryInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_keyword_dictionaryInput;
}
