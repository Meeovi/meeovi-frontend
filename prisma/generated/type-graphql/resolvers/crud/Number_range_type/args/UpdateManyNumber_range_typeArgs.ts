import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeUpdateManyMutationInput } from "../../../inputs/Number_range_typeUpdateManyMutationInput";
import { Number_range_typeWhereInput } from "../../../inputs/Number_range_typeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_typeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  where?: Number_range_typeWhereInput | undefined;
}
