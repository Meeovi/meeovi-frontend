import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupCreateInput } from "../../../inputs/Property_groupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupCreateInput, {
    nullable: false
  })
  data!: Property_groupCreateInput;
}
