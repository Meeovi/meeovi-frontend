import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationUpdateManyMutationInput } from "../../../inputs/IntegrationUpdateManyMutationInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;
}
