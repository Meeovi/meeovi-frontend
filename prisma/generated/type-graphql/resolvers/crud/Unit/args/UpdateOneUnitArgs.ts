import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitUpdateInput } from "../../../inputs/UnitUpdateInput";
import { UnitWhereUniqueInput } from "../../../inputs/UnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUnitArgs {
  @TypeGraphQL.Field(_type => UnitUpdateInput, {
    nullable: false
  })
  data!: UnitUpdateInput;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;
}
