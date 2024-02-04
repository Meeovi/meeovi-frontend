import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamOrderByWithAggregationInput } from "../../../inputs/Product_streamOrderByWithAggregationInput";
import { Product_streamScalarWhereWithAggregatesInput } from "../../../inputs/Product_streamScalarWhereWithAggregatesInput";
import { Product_streamWhereInput } from "../../../inputs/Product_streamWhereInput";
import { Product_streamScalarFieldEnum } from "../../../../enums/Product_streamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_streamOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_streamOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_streamScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "api_filter" | "invalid" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_streamScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_streamScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
