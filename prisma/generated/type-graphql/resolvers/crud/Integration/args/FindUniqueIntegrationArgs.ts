import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;
}
