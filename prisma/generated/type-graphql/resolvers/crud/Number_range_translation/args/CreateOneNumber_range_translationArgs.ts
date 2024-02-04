import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationCreateInput } from "../../../inputs/Number_range_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationCreateInput, {
    nullable: false
  })
  data!: Number_range_translationCreateInput;
}
