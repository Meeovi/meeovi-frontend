import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeWhereUniqueInput } from "../../../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_rangeWhereUniqueInput;
}
