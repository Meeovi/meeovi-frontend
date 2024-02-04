import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleOrderByWithAggregationInput } from "../../../inputs/Integration_roleOrderByWithAggregationInput";
import { Integration_roleScalarWhereWithAggregatesInput } from "../../../inputs/Integration_roleScalarWhereWithAggregatesInput";
import { Integration_roleWhereInput } from "../../../inputs/Integration_roleWhereInput";
import { Integration_roleScalarFieldEnum } from "../../../../enums/Integration_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  where?: Integration_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Integration_roleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"integration_id" | "acl_role_id">;

  @TypeGraphQL.Field(_type => Integration_roleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Integration_roleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
