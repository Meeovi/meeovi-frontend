import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageWhereUniqueInput } from "../../../inputs/Swag_language_pack_languageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_language_pack_languageWhereUniqueInput;
}
