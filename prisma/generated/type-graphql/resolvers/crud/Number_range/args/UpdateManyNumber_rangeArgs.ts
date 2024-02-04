import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeUpdateManyMutationInput } from "../../../inputs/Number_rangeUpdateManyMutationInput";
import { Number_rangeWhereInput } from "../../../inputs/Number_rangeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_rangeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;
}
