import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupUpdateInput } from "../../../inputs/Property_groupUpdateInput";
import { Property_groupWhereUniqueInput } from "../../../inputs/Property_groupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupUpdateInput, {
    nullable: false
  })
  data!: Property_groupUpdateInput;

  @TypeGraphQL.Field(_type => Property_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Property_groupWhereUniqueInput;
}
