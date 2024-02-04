import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupUpdateManyMutationInput } from "../../../inputs/Property_groupUpdateManyMutationInput";
import { Property_groupWhereInput } from "../../../inputs/Property_groupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupUpdateManyMutationInput, {
    nullable: false
  })
  data!: Property_groupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Property_groupWhereInput, {
    nullable: true
  })
  where?: Property_groupWhereInput | undefined;
}
