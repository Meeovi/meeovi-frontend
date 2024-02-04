import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleWhereInput } from "../../../inputs/LocaleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
