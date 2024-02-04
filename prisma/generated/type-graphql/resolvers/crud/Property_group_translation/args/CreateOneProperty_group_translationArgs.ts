import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationCreateInput } from "../../../inputs/Property_group_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationCreateInput, {
    nullable: false
  })
  data!: Property_group_translationCreateInput;
}
