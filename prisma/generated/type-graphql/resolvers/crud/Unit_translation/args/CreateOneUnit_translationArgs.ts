import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationCreateInput } from "../../../inputs/Unit_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationCreateInput, {
    nullable: false
  })
  data!: Unit_translationCreateInput;
}
