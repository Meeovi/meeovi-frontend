import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationCreateInput } from "../../../inputs/IntegrationCreateInput";
import { IntegrationUpdateInput } from "../../../inputs/IntegrationUpdateInput";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateInput, {
    nullable: false
  })
  create!: IntegrationCreateInput;

  @TypeGraphQL.Field(_type => IntegrationUpdateInput, {
    nullable: false
  })
  update!: IntegrationUpdateInput;
}
