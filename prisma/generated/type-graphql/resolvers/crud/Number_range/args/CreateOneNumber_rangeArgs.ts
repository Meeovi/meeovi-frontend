import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeCreateInput } from "../../../inputs/Number_rangeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeCreateInput, {
    nullable: false
  })
  data!: Number_rangeCreateInput;
}
