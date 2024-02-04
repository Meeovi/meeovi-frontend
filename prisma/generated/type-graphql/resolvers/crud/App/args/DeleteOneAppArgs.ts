import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAppArgs {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;
}
