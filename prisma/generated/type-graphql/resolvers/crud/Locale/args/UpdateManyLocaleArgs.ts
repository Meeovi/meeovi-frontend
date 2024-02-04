import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleUpdateManyMutationInput } from "../../../inputs/LocaleUpdateManyMutationInput";
import { LocaleWhereInput } from "../../../inputs/LocaleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocaleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
