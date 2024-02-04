import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeUpdateInput } from "../../../inputs/Number_rangeUpdateInput";
import { Number_rangeWhereUniqueInput } from "../../../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeUpdateInput, {
    nullable: false
  })
  data!: Number_rangeUpdateInput;

  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_rangeWhereUniqueInput;
}
