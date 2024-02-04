import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeUpdateInput } from "../../../inputs/Number_range_typeUpdateInput";
import { Number_range_typeWhereUniqueInput } from "../../../inputs/Number_range_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeUpdateInput, {
    nullable: false
  })
  data!: Number_range_typeUpdateInput;

  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_typeWhereUniqueInput;
}
