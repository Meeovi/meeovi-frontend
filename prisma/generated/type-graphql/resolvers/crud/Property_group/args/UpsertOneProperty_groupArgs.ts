import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupCreateInput } from "../../../inputs/Property_groupCreateInput";
import { Property_groupUpdateInput } from "../../../inputs/Property_groupUpdateInput";
import { Property_groupWhereUniqueInput } from "../../../inputs/Property_groupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Property_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Property_groupCreateInput, {
    nullable: false
  })
  create!: Property_groupCreateInput;

  @TypeGraphQL.Field(_type => Property_groupUpdateInput, {
    nullable: false
  })
  update!: Property_groupUpdateInput;
}
