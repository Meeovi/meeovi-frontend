import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagOrderByWithAggregationInput } from "../../../inputs/Customer_tagOrderByWithAggregationInput";
import { Customer_tagScalarWhereWithAggregatesInput } from "../../../inputs/Customer_tagScalarWhereWithAggregatesInput";
import { Customer_tagWhereInput } from "../../../inputs/Customer_tagWhereInput";
import { Customer_tagScalarFieldEnum } from "../../../../enums/Customer_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  where?: Customer_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"customer_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Customer_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
