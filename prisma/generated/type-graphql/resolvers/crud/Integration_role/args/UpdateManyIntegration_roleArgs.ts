import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleUpdateManyMutationInput } from "../../../inputs/Integration_roleUpdateManyMutationInput";
import { Integration_roleWhereInput } from "../../../inputs/Integration_roleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Integration_roleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  where?: Integration_roleWhereInput | undefined;
}
