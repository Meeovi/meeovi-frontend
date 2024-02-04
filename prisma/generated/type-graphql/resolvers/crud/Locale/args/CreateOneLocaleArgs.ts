import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleCreateInput } from "../../../inputs/LocaleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleCreateInput, {
    nullable: false
  })
  data!: LocaleCreateInput;
}
