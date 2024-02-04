import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitCreateInput } from "../../../inputs/UnitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUnitArgs {
  @TypeGraphQL.Field(_type => UnitCreateInput, {
    nullable: false
  })
  data!: UnitCreateInput;
}
