import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagOrderByWithAggregationInput } from "../../../inputs/Order_tagOrderByWithAggregationInput";
import { Order_tagScalarWhereWithAggregatesInput } from "../../../inputs/Order_tagScalarWhereWithAggregatesInput";
import { Order_tagWhereInput } from "../../../inputs/Order_tagWhereInput";
import { Order_tagScalarFieldEnum } from "../../../../enums/Order_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  where?: Order_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"order_id" | "order_version_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Order_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
