import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleCreateInput } from "../../../inputs/LocaleCreateInput";
import { LocaleUpdateInput } from "../../../inputs/LocaleUpdateInput";
import { LocaleWhereUniqueInput } from "../../../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocaleCreateInput, {
    nullable: false
  })
  create!: LocaleCreateInput;

  @TypeGraphQL.Field(_type => LocaleUpdateInput, {
    nullable: false
  })
  update!: LocaleUpdateInput;
}
