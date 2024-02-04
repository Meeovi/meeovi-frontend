import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeCreateInput } from "../../../inputs/Number_rangeCreateInput";
import { Number_rangeUpdateInput } from "../../../inputs/Number_rangeUpdateInput";
import { Number_rangeWhereUniqueInput } from "../../../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_rangeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_rangeCreateInput, {
    nullable: false
  })
  create!: Number_rangeCreateInput;

  @TypeGraphQL.Field(_type => Number_rangeUpdateInput, {
    nullable: false
  })
  update!: Number_rangeUpdateInput;
}
