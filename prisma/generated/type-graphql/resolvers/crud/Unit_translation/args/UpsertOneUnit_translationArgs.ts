import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationCreateInput } from "../../../inputs/Unit_translationCreateInput";
import { Unit_translationUpdateInput } from "../../../inputs/Unit_translationUpdateInput";
import { Unit_translationWhereUniqueInput } from "../../../inputs/Unit_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Unit_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Unit_translationCreateInput, {
    nullable: false
  })
  create!: Unit_translationCreateInput;

  @TypeGraphQL.Field(_type => Unit_translationUpdateInput, {
    nullable: false
  })
  update!: Unit_translationUpdateInput;
}
