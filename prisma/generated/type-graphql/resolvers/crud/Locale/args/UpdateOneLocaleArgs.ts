import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleUpdateInput } from "../../../inputs/LocaleUpdateInput";
import { LocaleWhereUniqueInput } from "../../../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleUpdateInput, {
    nullable: false
  })
  data!: LocaleUpdateInput;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;
}
