import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationOrderByWithAggregationInput } from "../../../inputs/IntegrationOrderByWithAggregationInput";
import { IntegrationScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationScalarWhereWithAggregatesInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";
import { IntegrationScalarFieldEnum } from "../../../../enums/IntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "write_access" | "access_key" | "secret_access_key" | "label" | "admin" | "custom_fields" | "created_at" | "updated_at" | "last_usage_at" | "deleted_at">;

  @TypeGraphQL.Field(_type => IntegrationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
