import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerOrderByWithAggregationInput } from "../../../inputs/Order_customerOrderByWithAggregationInput";
import { Order_customerScalarWhereWithAggregatesInput } from "../../../inputs/Order_customerScalarWhereWithAggregatesInput";
import { Order_customerWhereInput } from "../../../inputs/Order_customerWhereInput";
import { Order_customerScalarFieldEnum } from "../../../../enums/Order_customerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  where?: Order_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_customerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_customerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "customer_id" | "order_id" | "order_version_id" | "email" | "salutation_id" | "first_name" | "last_name" | "title" | "vat_ids" | "company" | "customer_number" | "custom_fields" | "created_at" | "updated_at" | "remote_address">;

  @TypeGraphQL.Field(_type => Order_customerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_customerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
