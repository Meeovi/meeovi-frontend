import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryOrderByWithAggregationInput } from "../../../inputs/Customer_recoveryOrderByWithAggregationInput";
import { Customer_recoveryScalarWhereWithAggregatesInput } from "../../../inputs/Customer_recoveryScalarWhereWithAggregatesInput";
import { Customer_recoveryWhereInput } from "../../../inputs/Customer_recoveryWhereInput";
import { Customer_recoveryScalarFieldEnum } from "../../../../enums/Customer_recoveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_recoveryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer_id" | "hash" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Customer_recoveryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_recoveryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
