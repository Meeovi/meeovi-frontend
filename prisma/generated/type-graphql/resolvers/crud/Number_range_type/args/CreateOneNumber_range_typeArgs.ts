import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeCreateInput } from "../../../inputs/Number_range_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeCreateInput, {
    nullable: false
  })
  data!: Number_range_typeCreateInput;
}
