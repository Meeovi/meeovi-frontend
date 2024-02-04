import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageCreateInput } from "../../../inputs/Swag_language_pack_languageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageCreateInput, {
    nullable: false
  })
  data!: Swag_language_pack_languageCreateInput;
}
