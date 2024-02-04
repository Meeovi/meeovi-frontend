import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";

@TypeGraphQL.ArgsType()
export class Mail_template_mediaLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
