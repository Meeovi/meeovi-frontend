import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageUpdateManyMutationInput } from "../../../inputs/LanguageUpdateManyMutationInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageUpdateManyMutationInput, {
    nullable: false
  })
  data!: LanguageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
