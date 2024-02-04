import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationUpdateInput } from "../../../inputs/IntegrationUpdateInput";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationUpdateInput, {
    nullable: false
  })
  data!: IntegrationUpdateInput;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;
}
