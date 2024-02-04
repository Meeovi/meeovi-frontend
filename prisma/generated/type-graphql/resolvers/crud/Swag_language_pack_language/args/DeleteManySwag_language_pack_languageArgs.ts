import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageWhereInput } from "../../../inputs/Swag_language_pack_languageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereInput, {
    nullable: true
  })
  where?: Swag_language_pack_languageWhereInput | undefined;
}
