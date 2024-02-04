import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitWhereUniqueInput } from "../../../inputs/UnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUnitArgs {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;
}
