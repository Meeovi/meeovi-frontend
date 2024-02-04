import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitCreateInput } from "../../../inputs/UnitCreateInput";
import { UnitUpdateInput } from "../../../inputs/UnitUpdateInput";
import { UnitWhereUniqueInput } from "../../../inputs/UnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUnitArgs {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateInput, {
    nullable: false
  })
  create!: UnitCreateInput;

  @TypeGraphQL.Field(_type => UnitUpdateInput, {
    nullable: false
  })
  update!: UnitUpdateInput;
}
