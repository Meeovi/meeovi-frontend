import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";

@TypeGraphQL.ArgsType()
export class LocaleLanguage_language_translation_code_idTolocaleArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
