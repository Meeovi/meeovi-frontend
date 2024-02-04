import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationUpdateInput } from "../../../inputs/Unit_translationUpdateInput";
import { Unit_translationWhereUniqueInput } from "../../../inputs/Unit_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationUpdateInput, {
    nullable: false
  })
  data!: Unit_translationUpdateInput;

  @TypeGraphQL.Field(_type => Unit_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Unit_translationWhereUniqueInput;
}
