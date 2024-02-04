import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationWhereUniqueInput } from "../../../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_translationWhereUniqueInput;
}
