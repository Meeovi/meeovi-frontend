import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeWhereUniqueInput } from "../../../inputs/Number_range_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNumber_range_typeOrThrowArgs {
  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_typeWhereUniqueInput;
}
