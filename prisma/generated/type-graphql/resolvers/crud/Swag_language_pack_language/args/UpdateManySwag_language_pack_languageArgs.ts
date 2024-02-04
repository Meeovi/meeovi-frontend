import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageUpdateManyMutationInput } from "../../../inputs/Swag_language_pack_languageUpdateManyMutationInput";
import { Swag_language_pack_languageWhereInput } from "../../../inputs/Swag_language_pack_languageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Swag_language_pack_languageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereInput, {
    nullable: true
  })
  where?: Swag_language_pack_languageWhereInput | undefined;
}
