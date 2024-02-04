import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationWhereUniqueInput } from "../../../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNumber_range_type_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_type_translationWhereUniqueInput;
}
