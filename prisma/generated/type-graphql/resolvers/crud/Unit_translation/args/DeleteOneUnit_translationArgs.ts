import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationWhereUniqueInput } from "../../../inputs/Unit_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Unit_translationWhereUniqueInput;
}
