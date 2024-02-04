import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleWhereUniqueInput } from "../../../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocaleOrThrowArgs {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;
}
