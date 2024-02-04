import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationUpdateManyMutationInput } from "../../../inputs/Locale_translationUpdateManyMutationInput";
import { Locale_translationWhereInput } from "../../../inputs/Locale_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Locale_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  where?: Locale_translationWhereInput | undefined;
}
