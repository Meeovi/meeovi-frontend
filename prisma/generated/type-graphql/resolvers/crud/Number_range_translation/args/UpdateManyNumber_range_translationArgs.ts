import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationUpdateManyMutationInput } from "../../../inputs/Number_range_translationUpdateManyMutationInput";
import { Number_range_translationWhereInput } from "../../../inputs/Number_range_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_translationWhereInput | undefined;
}
